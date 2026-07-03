"""One-off script: regenerate favicon assets from the source profile image.
Run again only if assets/img/cropped_image.png changes.
"""
from PIL import Image

SRC = "assets/img/cropped_image.png"
OUT_DIR = "assets/img"

img = Image.open(SRC).convert("RGBA")

# Standard favicon sizes bundled into one .ico
ico_sizes = [(16, 16), (32, 32), (48, 48)]
img.save(f"{OUT_DIR}/favicon.ico", format="ICO", sizes=ico_sizes)

# Individual PNGs referenced directly by <link> tags
img.resize((16, 16), Image.LANCZOS).save(f"{OUT_DIR}/favicon-16x16.png")
img.resize((32, 32), Image.LANCZOS).save(f"{OUT_DIR}/favicon-32x32.png")
img.resize((180, 180), Image.LANCZOS).save(f"{OUT_DIR}/apple-touch-icon.png")

print("Favicons written to", OUT_DIR)
