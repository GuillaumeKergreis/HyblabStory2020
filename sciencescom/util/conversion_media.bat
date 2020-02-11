.\cwebp .\decor.png -o .\decor_now.webp -resize 3840 0
.\cwebp .\decor2.png -o .\decor_70s.webp -resize 3840 0

REM Redimensionnement personnages

.\cwebp .\Alain.png -o .\Alain.webp -resize 1500 0
.\cwebp .\Emma.png -o .\Emma.webp -resize 1500 0
.\cwebp .\Emma_periode_1.png -o .\Emma_periode_1.webp -resize 1500 0
.\cwebp .\Emma_periode_2.png -o .\Emma_periode_2.webp -resize 1500 0
.\cwebp .\Martine.png -o .\Martine.webp -resize 1500 0
.\cwebp .\Pablo.png -o .\Pablo.webp -resize 1500 0
.\cwebp .\Pablo_periode_1.png -o .\Pablo_periode_1.webp -resize 1500 0


ffmpeg -i gifporteactuel.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door_now.webm
ffmpeg -i gifporte70s.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door_70s.webm
ffmpeg -i gifporte1900.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door_1900.webm
ffmpeg -i "gifporte décor 4.mov" -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1 door_latest.webm

ffmpeg -i gifporteactuel.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door_now_rev.webm
ffmpeg -i gifporte70s.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door_70s_rev.webm
ffmpeg -i gifporte1900.mov -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door_1900_rev.webm
ffmpeg -i "gifporte décor 4.mov" -c:v libvpx-vp9 -b:v 2M -an -vf scale=1920:-1,reverse door_latest_rev.webm
