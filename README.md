# BGI Solutions website

A static website built with plain HTML and CSS: 35 pages and no build step. The only JavaScript is a small script on the Home page that runs the optional video's pause button.

## Open it on your computer

1. On GitHub, click **Code → Download ZIP** and unzip it.
2. Open the unzipped folder and double-click **`index.html`**.

Every page and link works straight from your disk, with or without an internet connection.

## Add your photos

Put the images in **`assets/img/photos/`**, named after their slot:

| File | Where it appears |
| --- | --- |
| `img_01.jpg` | Home page, large picture in the top section |
| `img_02.jpg` | Home page, beside "Find the help you need" |
| `img_04.jpg` | SVC-01 Business Growth Assessment page |
| `img_14.jpg` | SVC-18 Website & Growth Asset Factory page |

`.png`, `.jpeg` and `.webp` also work. A matching file replaces its placeholder automatically.
See `assets/img/photos/README.txt` for sizes, phone crops and suggested alt text.

## Add the Home page video (optional)

Put it in **`assets/video/`** as **`hero_video.mp4`** (H.264). A `hero_video.webm` copy is optional.
It plays silently in the Home page's top section, with a pause button. `img_01` is its still image:
that image shows while the video loads, if the video is missing, and for visitors who turn off motion.
See `assets/video/README.txt`.

## Folder layout

- `index.html`: Home page
- `services/`, `work/`, `how-we-work/`, `insights/`, `about/`, `contact/`: the main pages (each folder has an `index.html`)
- `services/<service-name>/`: the five service areas and the 20 service pages
- `privacy-policy/`, `terms/`, `accessibility/`: draft policy pages (not yet in effect)
- `assets/css/styles.css`: all styling
- `assets/img/`: logo, icons and the `photos/` folder
- `assets/video/`: the optional Home page video
- `assets/js/hero-video.js`: the only script; it runs the video's pause button
- `instructions/`: the source content specification
