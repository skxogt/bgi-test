HOME PAGE BACKGROUND VIDEO (optional)  -  slot id: hero_video
=============================================================

Put the video in THIS folder:  assets/video/

File name (the spec calls "hero_video" the base name):
    hero_video.mp4     <- main file. Export as MP4 with the H.264 codec
                          (not HEVC/H.265, which many browsers cannot play).
    hero_video.webm    <- optional extra copy (VP9). Used only if the MP4
                          is missing or cannot play.

Where it shows:  Home page only (index.html), in the large visual area on
the right of the top section, over the img_01 picture.

How it behaves (as required by the spec's hero_video controls):
  - Plays silently (muted), loops, and plays inline on phones.
  - A "Pause background video" button appears while it runs.
  - Still image: img_01 (assets/img/photos/img_01.jpg) is the poster. It
    shows while the video loads, if the video is missing or cannot play,
    and for visitors who have "reduce motion" turned on.
  - The headline and buttons are never covered by the video.

Recommended:
  - 21:9 or 16:9 landscape, about 1920 px wide, 10 to 20 seconds, no sound.
  - Keep the file small (under about 8 MB) so the page loads quickly.
  - Keep the left part of the frame calm: the headline sits over it.
  - On phones the video is shown in a tall 4:5 frame, cropped from the centre.

Delete the file and the page falls back to the still image automatically.
Like the photos, the video must be approved (rights and owner sign-off)
before the site is published.
