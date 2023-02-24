# requires imagemagick and librsvg to be installed
# $ brew install imagemagick librsvg
# $ apt-get install imagemagick librsvg2-bin
# public/icon.svg must be present

cd public

# svg -> png
rsvg-convert -w 512 -o icon-512.png icon.svg

# favicon.ico for browsers
convert icon-512.png  -bordercolor white -border 0 \
          \( -clone 0 -resize 16x16 \) \
          \( -clone 0 -resize 32x32 \) \
          \( -clone 0 -resize 48x48 \) \
          \( -clone 0 -resize 64x64 \) \
          -delete 0 -alpha off -colors 256 favicon.ico

# icon-192.png for android
convert icon-512.png -resize 192x192 icon-192.png

# apple-touch-icon.png for ios
convert icon-512.png -resize 180x180 apple-touch-icon.png
