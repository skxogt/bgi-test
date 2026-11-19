# BGI Solutions website

A static website built with plain HTML and CSS: 35 pages, no build step and no JavaScript.

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

## Folder layout

- `index.html`: Home page
- `services/`, `work/`, `how-we-work/`, `insights/`, `about/`, `contact/`: the main pages (each folder has an `index.html`)
- `services/<service-name>/`: the five service areas and the 20 service pages
- `privacy-policy/`, `terms/`, `accessibility/`: draft policy pages (not yet in effect)
- `assets/css/styles.css`: all styling
- `assets/img/`: logo, icons and the `photos/` folder
- `instructions/`: the source content specification
