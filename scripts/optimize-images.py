"""One-off script: resize oversized images and convert to WebP.
Run again if new large images are added to assets/img/.
Skips the favicon-pipeline files and anything already .webp.
"""
from pathlib import Path
from PIL import Image

IMG_DIR = Path("assets/img")
MAX_DIM = 1600
QUALITY = 80
EXCLUDE = {
    "cropped_image.png",
    "favicon.png",
    "favicon-16x16.png",
    "favicon-32x32.png",
    "apple-touch-icon.png",
}


def process(path):
    if path.name in EXCLUDE:
        return None
    if path.suffix.lower() not in (".jpg", ".jpeg", ".png"):
        return None

    old_size = path.stat().st_size
    img = Image.open(path).convert("RGBA")

    w, h = img.size
    if max(w, h) > MAX_DIM:
        scale = MAX_DIM / max(w, h)
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)

    out_path = path.with_suffix(".webp")
    img.save(out_path, "WEBP", quality=QUALITY)
    new_size = out_path.stat().st_size
    return (str(path), old_size, new_size)


results = []
for path in sorted(IMG_DIR.rglob("*")):
    if path.is_file():
        r = process(path)
        if r:
            results.append(r)

total_old = sum(r[1] for r in results)
total_new = sum(r[2] for r in results)

print(f"{'File':<55}{'Old (KB)':>12}{'New (KB)':>12}{'Reduction':>12}")
for name, old, new in results:
    pct = 100 * (1 - new / old) if old else 0
    print(f"{name:<55}{old / 1024:>12.1f}{new / 1024:>12.1f}{pct:>11.1f}%")

print(
    f"\nTotal: {total_old / 1024 / 1024:.2f}MB -> "
    f"{total_new / 1024 / 1024:.2f}MB "
    f"({100 * (1 - total_new / total_old):.1f}% reduction, {len(results)} files)"
)
