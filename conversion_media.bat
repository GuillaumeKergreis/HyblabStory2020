.\cwebp .\decor.png -o .\decor.webp -resize 3840 2464
.\cwebp .\decor2.png -o .\decor2.webp -resize 3840 2464


ffmpeg -i gifporteactuel.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 doornow.webm
ffmpeg -i gifporte70s.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door70s.webm
ffmpeg -i gifporte1900.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door1900.webm

ffmpeg -i gifporteactuel.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse doornow_rev.webm
ffmpeg -i gifporte70s.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door70s_rev.webm
ffmpeg -i gifporte1900.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door1900_rev.webm
