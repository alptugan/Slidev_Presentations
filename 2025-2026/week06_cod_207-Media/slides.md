---
background: /cover_collage.png
title: Week 06 - Media - Images
exportFilename: "week06-Media-Images"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan

    Access all week contents @[Github/alptugan](https://github.com/alptugan/Slidev_Presentations)
drawings:
    persist: true
aspect-ratio: 16/9
css: unocss
download: true
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
    format: pdf
    timeout: 30000
    dark: true
    withClicks: false
    withToc: true
# controls whether texts in slides are selectable
selectable: true
codeCopy: true
# favicon, can be a local file path or URL
favicon: "https://www.alptugan.com/v5/favicon-192.png"
themeConfig:
    primary: "#ffcc00"
transition: fade-out
theme: seriph
src: ./pages/header.md
---

---
layout: default
---
# Table of Contents

<Toc :columns="2" />




---
layout: center
---

# Loading External Media Sources

<div pb-2 v-click>
🖼️ Images → jpg, gif, png
</div>

<div pb-2 v-click>
🔉 Audio → mp3, ogg, wav files
</div>


<div v-click>
📹 Video → mp4, webp, ogv
</div>


---
class: text-left
---

# preload() function
Images can be loaded and displayed to the screen at their actual size or any other size.

```js {1|2,4|3|2-4|6-9|11,14|11-14|all} {lines:true, startLine:1} 
let myImage;
function preload() {
  myImage = loadImage("image_name.jpg"); // Load the image from openprocessing into myImage variable
}

function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
}

function draw() {
  // Place loaded myImage variable into the image() function to display it on the canvas
  image(myImage, 0, 0);  
}
```


---
layout: two-cols
class: text-left
---

# Practice in class!
## Openprocessing
Before uploading your image, check its resolution and filesize. Large files are loaded slowly. Resize your image in photoeditor app of your choice before uploading. To upload your files;

1. Goto openprocessing
2. Open settings and goto "FILES" tab
3. Drag & Drop your image.
4. [Example 🔗](https://openprocessing.org/sketch/2104190)

::right:: 

<img src='/upload_image.png' />

---
layout: two-cols
class: text-left
---

# Practice in class!
## P5Js Editor
Before uploading your image, check its resolution and filesize. Large files are loaded slowly. Resize your image in photoeditor app of your choice before uploading. To upload your files;

1. Goto openprocessing
2. Open settings and goto "FILES" tab
3. Drag & Drop your image.
4. [Example 🔗](https://editor.p5js.org/alptugan/sketches/wSJFvWbNu)

::right:: 

<img w-95 ml-10 src='/p5js-file-upload.jpg' />


---

# Computational Characters

<img src='/computational_collage01.jpg' />

<a href='https://openprocessing.org/sketch/2419680' target='_blank'>🔗 Source code</a>

---
src: ./pages/break.md
hide: false
---


---
image: /computational_collage02.jpg
layout: image-left
backgroundSize: 91%
---

# Computational Collage

<v-clicks>


- Create 600 x 800 photoshop document
- Collect images (min. 10)
  - Background paper Texture
  - For ground focus object
  - Typographic element
- Trim each image as a seperate layer
- Export each image in png format
- Load images using P5JS
- Adjust positions 
- Apply randomness to create different variations of your collage
</v-clicks>



---
layout: center
class: text-left 
---
# Case Studies on openProcessing

1. [Loading and displaying an image](https://openprocessing.org/sketch/2104190)
2. [Generative Character](https://openprocessing.org/sketch/2419680)
3. [Multiple images at random positions](https://openprocessing.org/sketch/2104437)
4. [Multiple images at random pos and opacity](https://openprocessing.org/sketch/2104447)
5. [Mirror Images, play with blendModes](https://openprocessing.org/sketch/2104453)
6. [Some trigonometry and animation](https://openprocessing.org/sketch/2104472)


---
class: text-left
layout: center
---

# Some other case studies
Following examples are developed using p5JS editor. 

[Load Image from URL (grabs ai generated images from a website)](https://editor.p5js.org/alptugan/sketches/KLEnKODLq)

[Pixelate the image](https://editor.p5js.org/alptugan/sketches/11dqVHTpg)

[Mosaic Like Image](https://editor.p5js.org/alptugan/sketches/WWBofOF2B)

[Diagonally mirrored image](https://editor.p5js.org/alptugan/sketches/5N5Vpk2ZM)

[Image Processing 1](https://editor.p5js.org/alptugan/sketches/pCfnd8yy3)

[Image Processing 2](https://editor.p5js.org/alptugan/sketches/l4kNx2BWm)

[Use Image as Texture](https://editor.p5js.org/alptugan/sketches/F3U2pc01Q)


---
class: text-left
layout: center
---

# Media cheatsheet

[Download the pdf](https://github.com/alptugan/Slidev_Presentations/blob/b571175f83e7dc97470b074f43348b41cd7d82fc/2024-2025/week06_cod_207-Media/public/media_cheatsheet.pdf)

---
src: ./pages/assignment.md
hide: false
---
