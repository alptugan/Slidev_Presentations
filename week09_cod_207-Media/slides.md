---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 09 -
exportFilename: "week09-Media-"
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

# Loading External Media

<div pb-2 v-click>
🖼️ Images → jpg, gif, png
</div>

<div pb-2 v-click>
🔉 Audio → mp3, ogg, wav
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
# Image Processing

```js {all} {lines:true, startLine:1} 
let myImage;

function preload() {
	myImage = loadImage("gundam.png"); // Load the image from openprocessing into myImage variable
}

function setup() {
	// Creates the application window params: width=600, height=600
	createCanvas(600, 600);
}

function draw() {
	// Place loaded myImage variable into the image() function to display it on the canvas
	//image(myImage, 0, 0, width, height);  
	noStroke();
	let x = floor(random(0, myImage.width));
	let y = floor(random(0, myImage.height));
	let pix = myImage.get(x, y); // returns the pixel color of the specific x and y coordinate
	
	fill(red(pix), green(pix), blue(pix), 100); // set the fill color from loaded image
	circle(x, y, random(3, 50));
}
```
::right::

<img v-click p-4 mt-10 src='/gundam.png' />

---
class: text-center m-auto
---

# Result

<img h-100 m-auto src='/result.png' />



---
src: ./pages/break.md
hide: false
---



---
layout: two-cols
class: text-left
---
# Generative Collage

1. Choose a concept → "analog devices, black & white, space..."
2. Collect at least 10 images
3. Resize and crop them according to your canvas size.
4. Save all of the images as transparent png files.
5. Upload to the openprocessing
6. Use randomness (A weighted decision-approach controls the flow of elements.)

[image source: 🔗 Patrick Hüebner](https://www.patrik-huebner.com/creative-coding/generative-collage-synthesizer/)


::right::

<img src='/GenerativeCollageSynthesizer.gif' />

---
layout: center
class: text-left 
---
# Case Studies on openProcessing

1. [Load multiple images using Arrays](https://openprocessing.org/sketch/2104415)
2. [Display all of the images in random positions](https://openprocessing.org/sketch/2104437)
3. [Rotate, set opacity, scale up and down images algorithmically](https://openprocessing.org/sketch/2104447)
4. [Mirro Images, play with blendModes](https://openprocessing.org/sketch/2104453)
5. [Some trigonometry](https://openprocessing.org/sketch/2104472)


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
src: ./pages/assignment.md
hide: false
---