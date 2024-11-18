---
background: /cover_audiovisual.png
title: Week 09 Sound Interactivity
exportFilename: "week09-COD207-Sound"
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
image: /giphy-3097233655.gif
layout: image-left
backgroundSize: 100%
class: pt-50
---

# Loading Sound
Loading sound is same as loading image or a font file. 

Check following example code → [link](https://editor.p5js.org/alptugan/sketches/K2CtshVh5)

[P5JS Sound Reference](https://p5js.org/reference/p5.sound/)

---
layout: two-cols
class: pt-50
---
# In-class Exercise
Replace the audio file and add buttons to play, stop, and pause the song.

::right::

```javascript {1|3-5|7-11|13-15|17|18-20|22-24|26-29|all}{maxHeight:'400px'} 
var song; // Define variable

function preload() {
  song = loadSound("RAW-all.mp3");  // load sound into the variable
}

function setup() {
  createCanvas(400, 400); // Canvas size
  
  song.loop(); // enable loop for the sound. 
}

function draw() {
  background(220); // set background color
}

function keyPressed() {
  if(key == 'p') {
    song.play();  // play the song
  }
  
  else if(key == 's') {
    song.stop(); // stop the song
  }
  
  else if(key == 'a') {
    song.pause(); // pause the song
    
  }  
}
```

---
layout: image-left
image: /audi.png
backgroundSize: 80%
---
# Audiovisual Composition
Enable microphone access on your browser when prompted.

[link](https://editor.p5js.org/alptugan/sketches/-dUH7xoUX)

---
layout: image-left
image: /tinker.png
backgroundSize: 100%
---
# Audioreactive Game
Enable microphone access on your browser when prompted.

[link](https://editor.p5js.org/alptugan/sketches/GwedNwyRC)

---
src: ./pages/break.md
hide: false
---


---
layout: center
class: pl-50 pr-50
---
# Tutorials 
.

 🔗 [Audiovisual 01](https://openprocessing.org/sketch/1741359) The tutorial showcases how to use microphone input to modify the parameters of visuals on canvas.


 🔗 [Audiovisual 02](https://openprocessing.org/sketch/1743284) Similar to the preivous tutoria with different cyclic motion.

---
layout: image-left
image: /example.png
backgroundSize: 100%
class: mt-50
---

# Example Implementation

🔗 [link](https://openprocessing.org/sketch/1744738)

🔗 [Kick Drum](https://openprocessing.org/sketch/2420493)

---
layout: image-left
image: /inclass.png
backgroundSize: 100%
class: pt-50
---
# In-class Practice
Save As Fork, and complete the code to make every image and sound interactice as the Floppy Disk image.

🔗 [Museums of Sound](https://openprocessing.org/sketch/2420517)



---
layout: default
class: text-left
---

# Tutorial: Coding Train
🔗 [link](https://deploy-preview-1767--codingtrain.netlify.app/tracks/sound/sound/1-loading-and-playing) Coding Train website for sound related tutorials.
 
<img src='/codingtrain.png' />

---
layout: image-left
image: /p5jsrepo.png
backgroundSize: 90%
---
# Examples on p5JS site
Click on files to run the codes.

[link](https://editor.p5js.org/alptugan/collections/DHRvDH1Oe)

---
src: ./pages/assignment.md
hide: false
---