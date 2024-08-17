# HighPixelZone

Step 1: Open Terminal    "Ctrl + `(backtick (below esc key)) "

Step 2: Run the app  `npm run dev`

Step 3: Open the link `localhost:3000`

Step 4 : Add Changes:

- To change textual data - goto `/app/config` folder

- To change images - goto `/public`

- To change animation - open "animate.css" and change them in the `animation-config.ts` file

- For seo configurations - change the `seo-config.ts` file

Step 5 : After making all the changes goto the git source control and:

- write the todays date in the input box
- Commit the changes by clicking the `Commit` Button
- Push the changes to the git repository by pressing the `Push Changes` Button.
- The website will be updated in 10 - 15mins after making the changes

---
**Add all the files in the public folder and write there corresponding paths in the config files to change the images in the website**

---
Note - Remove all the unecessary images from the public folder

## To convert images to webp

- Goto `F:/imagetowebp`
- Paste all the images in the `/images` folder
- open `git bash`
- run `npm run convert`
- All the images will be converted to their webp counterparts.

## To change the color scheme

- Goto `globals.css` file.
- change the colors and them commit.