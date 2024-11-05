---
background: /cover-image_processing-mona_lisa.png
title: Week 07 - Image Processing
exportFilename: "week07-COD207-Image-Processing"
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
layout: image
image: "/alap-image_processing.png"
backgroundSize: 60%
---

# Algorithmic Art: Image Processing

[link to ALAP Database](https://alptugan.notion.site/0025088dd8be4eafad7826c90260dc59?v=e8195072f5ec42f4b9f39a70b64b429d&pvs=4)


---

# Example: Basics
Load the image, replace the pixel data with shapes

<div class='grid grid-cols-4 gap-4'>
<div>
  <div v-click>
    <img width="100%" src='/gundam.jpg' />
    <div text-color-gray mt-5>1. Load image</div>
  </div>
</div>

<div>
  <div v-click>
    <img width="100%" src='/gundam_circle.png' />
    <div text-color-gray mt-5>2. Swap pixels with circle()</div>
  </div>
</div>

<div>
  <div v-click>
    <img width="100%" src='/gundam_circle_large.jpeg' />
    <div text-color-gray mt-5>3. Increase the circle() using random(min, max)</div>
  </div>
</div>


<div>
  <div v-click>
    <img width="100%" src='/gundam_rect.png' />
    <div text-color-gray mt-5>4. Swap pixels with rect() using random(min, max)</div>
  </div>
</div>
</div>


[link to source code](https://openprocessing.org/sketch/2419824) 🔗


---

# Example: Paint with custom brush 
Load the image, replace the pixel data with another image. 

<div class='grid grid-cols-3 gap-4'>
<div>
  <div v-click>
    <img width="90%" src='/gundam.jpg' />
    <div>Load image</div>
  </div>
</div>

<div>
  <div v-click m-auto pt-30>
    <img m-auto width="50%" src='/brush.png' />
    <div mt-25>Create a brush in Photoshop in pure white color</div>
  </div>
</div>

<div>
    <div v-click>
    <img m-auto width="90%" src='/gundam_rect_custom-brush.jpeg' />
    <div>Replace pixels with the brush image. Use `tint()` to set color</div>
  </div>
</div>
</div>

[link to source code](https://openprocessing.org/sketch/2419824) 🔗




---
src: ./pages/break.md
hide: false
---

---
layout: section
---
# Add Interactivity

---
layout: default
class: text-left
---

# Built-in Functions: Keyboard
```js {all} {lines:true, startLine:1} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
  
}

function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(100,20,20);
}

// key is built-in variable. You don't need to declare on top of your code.
function keyPressed() {
  if(key == 'r') {
    // set the background to a random color
  }
}
```

---
layout: default
class: text-left
---

# Built-in Functions: Mouse
```js twoslash {all} {lines:true, startLine:1} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
//     ^?
  
}

function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(100,20,20);
  circle(width/2,height/2,300);
}

// this function will be triggered whenever the user clicks on mouse or touchpad
function mousePressed() {
  // Increase the size of the circle whenever the user clicks on mouse or touchpad
}
```

---
layout: image-left
image: /dom.png
backgroundSize: 100%
class: text-left mt-20
---
# GUI via DOM Manupulation

You can create HTML elements to make your application interactive. Play around with other elements to create and change your application parameters such as slider, toggle, div elements, etc...

🔗 [createButton() reference](https://p5js.org/reference/p5/createButton/) 

🔗 [Available DOM Element in p5Js](https://p5js.org/reference/#DOM)

---
layout: image-left
backgroundSize: 80%
image: /dom2.png
---

# Exemplified Case Study
In this version you can see html `<button>` elements created and utilized using p5JS to interactively switch between autonomous and interactive modes.

🔗 [Source Code](https://openprocessing.org/sketch/2430753)



---
layout: two-cols
---
# Case Studies for Inspiration

Following examples are developed using p5JS editor. 

[Pixelate the image](https://editor.p5js.org/alptugan/sketches/11dqVHTpg)

[Mosaic Like Image](https://editor.p5js.org/alptugan/sketches/WWBofOF2B)

[Diagonally mirrored image](https://editor.p5js.org/alptugan/sketches/5N5Vpk2ZM)

[Image Processing 1](https://editor.p5js.org/alptugan/sketches/pCfnd8yy3)

[Image Processing 2](https://editor.p5js.org/alptugan/sketches/l4kNx2BWm)

[Use Image as Texture](https://editor.p5js.org/alptugan/sketches/F3U2pc01Q)

::right::

![](/cases.png)


---
layout: center
class: text-center py-50
---

# Download The CheatSheet

<img h-100 m-auto src='/cheatsheet.png' />

[Download The CheatSheet 🔗](https://www.codecademy.com/learn/learn-p5js/modules/p5js-interaction/cheatsheet)


---
src: ./pages/assignment.md
hide: false
---