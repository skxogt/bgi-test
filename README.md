# BGI Solutions website

A static website built with plain HTML and CSS: 35 pages and no build step. The only JavaScript is a small script on the Home page that runs the optional video's pause button.

## This branch: v3 (based on v2)

`v3` keeps the v2 design and adds:

- A **Get to know us** team section on the About page: Our Team, Leadership (Dmitriy and Masud), Meet the Team and Let's Connect.
- More image slots: wide images on About, Services, How We Work and the five service-area pages, image cards for the sample projects and guides, and a portrait on Contact.
- "Sample project" labels in place of the earlier demonstration/fictional notices.

v2 itself (the first design is on `main`):

- **Header:** a solid floating bar with neutral hover states, so it looks the same over light, blue and navy sections.
- **Type and layout:** an editorial system with Inter Tight headlines, Instrument Serif italic accents, a 12-column grid, an 8px spacing scale and numbered sections.
- **Palette:** warm paper and ink neutrals, BGI navy for depth, and BGI blue as the single accent.
- **Motion:** CSS-only scroll reveals, a service-area marquee and stacking process cards. All of it switches off for visitors who choose "reduce motion".

## Open it on your computer

1. On GitHub, **switch to the branch you want first** (the branch menu at the top left of the file list). The ZIP contains only the branch that is selected, and the default is `main`, the first version of the site. Your images are on `v3`.
2. Click **Code → Download ZIP** and unzip it. In Windows, right-click the ZIP and choose **Extract All**; opening it without extracting won't work.
3. Open the unzipped folder and double-click **`index.html`**.

Every page and link works straight from your disk, with or without an internet connection.

## Add your images and video

All images and the Home page video go in **`images/img/`**, named after their slot id from
`instructions/BGI_Solutions_Image_Prompts_v1.0.json` (for example `img_05.jpg`, `hero_video.mp4`).
Team photos go in **`images/team/`**: `team.jpg`, `dmitriy.jpg` and `masud.jpg`.

- `.jpg`, `.jpeg`, `.png`, `.webp` and `.svg` all work, upper or lower case. If a slot has both a photo and an `.svg`, the photo is shown.
- A file with the right name replaces its placeholder automatically. Each placeholder shows the exact path it expects.
- `images/img/README.txt` lists every slot with its page and recommended size.

## Folder layout

- `index.html`: Home page
- `services/`, `work/`, `how-we-work/`, `insights/`, `about/`, `contact/`: the main pages (each folder has an `index.html`)
- `services/<service-name>/`: the five service areas and the 20 service pages
- `privacy-policy/`, `terms/`, `accessibility/`: policy pages
- `assets/css/styles.css`: all styling
- `images/img/`: your images and the Home page video
- `images/team/`: team photos
- `assets/img/`: logo and icons
- `assets/js/hero-video.js`: the only script; it runs the video's pause button
- `instructions/`: the source content specification
