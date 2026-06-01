This folder should contain optimized/converted images for faster delivery (WebP or properly compressed JPEGs).

Recommended steps to generate WebP versions using `cwebp` (from libwebp) or ImageMagick:

1) Using cwebp (fast, good quality):
   cwebp -q 80 input.jpg -o output.webp

2) Using ImageMagick to generate multiple sizes:
   magick input.jpg -quality 80 -resize 1200x output-1200.jpg
   magick input.jpg -quality 80 -resize 800x output-800.jpg
   magick input.jpg -quality 80 -resize 400x output-400.jpg

3) Generate WebP using ImageMagick (if supported):
   magick input.jpg -quality 80 output.webp

Place generated files in this folder and update image `srcset` attributes in HTML to point to these optimized files.

Note: If you want I can prepare `srcset` placeholders in the HTML referencing files in `assets/optimized/` once you add the optimized images here.
