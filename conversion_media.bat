.\cwebp .\decor.png -o .\decor_now.webp -resize 3840 2464
.\cwebp .\decor2.png -o .\decor_70s.webp -resize 3840 2464


ffmpeg -i gifporteactuel.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door_now.webm
ffmpeg -i gifporte70s.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door_70s.webm
ffmpeg -i gifporte1900.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door_1900.webm

ffmpeg -i gifporteactuel.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door_now_rev.webm
ffmpeg -i gifporte70s.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door_70s_rev.webm
ffmpeg -i gifporte1900.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door_1900_rev.webm
