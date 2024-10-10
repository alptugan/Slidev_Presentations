---
background: ./week4-cover.png
exportFilename: "week04-Conditionals-Loops"
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
title: Table of Contents
---
# Table of Contents

<Toc :columns="2"/>



---
layout: image-left
image: /pro1.png
class: text-left
---

# Structure

Inline functions

```js {1,3|5,10|2,6,8,9|all} {lines:true, startLine: 1}
function setup() {
    createCanvas(400, 600);
}

function draw() {
    background(100, 100, 100);

    fill(200, 0, 0);
    circle(300, 300, 100);
}
```



---
layout: center
image: /grad-bg2.jpg
class: text-left
---

# Rendering, Built-in & Inline Functions
```js {0|1,4|6,10|3|6|6,10|7|8|9|10|6|7|8|9|10|6|7|8|9|10|6|7|8|9|10} {startLine:1} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
}

function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(100,20,20);
}
```



---
layout: center
class: p-3
---

# Variables

> 
> Declare a variable, if you type the same number more than twice. 
>


<v-click>

### 💩 BAD
```javascript
    // position the elements in the middle
    circle(200, 220, 300);
    circle(200, 220, 250);
    circle(200, 220, 200);
    circle(200, 220, 150);
    circle(200, 220, 100);
    circle(200, 220, 50);
```
</v-click>

<br>

<v-click>

### 🥰 GOOD
```javascript
    // define position values for x and y axis
    var xpos = 200;
    var ypos = 220;
    // position the elements in the middle
    circle(xpos, ypos, 300);
    circle(xpos, ypos, 250);
    circle(xpos, ypos, 200);
    circle(xpos, ypos, 150);
    circle(xpos, ypos, 100);
    circle(xpos, ypos, 50);
```
</v-click>

---
layout: iframe-left
title: Video of the week
url: https://player.vimeo.com/video/23281150?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
class: p-4
---

# Quayola
Realtime sound visualisation made with custom software "Partitura"
Sound by Telefon Tel Aviv

🔗 [vimeo link](https://vimeo.com/23281150)




---
layout: center
title: Computational Thinking Framework image
---

<img w-180 m-auto src='/comp.jpg'/>






---
layout: image-left
image: /ct.png
hide: false
backgroundSize: 130%
---

# Computational Thinking Framework


<div v-click>
1️⃣ Decomposition 
</div>

<div pt-2 v-click>
2️⃣ Pattern Recognition 
</div>

<div pt-2 v-click>
3️⃣ Abstraction 
</div>

<div pt-2 v-click>
4️⃣ Algorithm
</div>

---
layout:default
---
# Computer Science Basics
1️⃣ Sequences, 2️⃣ Selection, and 3️⃣ Loops

<Youtube id='eSYeHlwDCNA' width='100%' height='100%' />

---
layout: center
background: /grad-bg2.jpg
class: text-left
---

# What are loops in coding?
 <Youtube id='wxds6MAtUQ0' width='100%' height='320' />

---
layout: center
background: /grad-bg2.jpg
class: text-left px-40
---
# <i text-white>for</i> loops
Repeats a section of code or code-block a limited number of times. Three steps of creating for loops;

<div text-left>
  <div v-click>

  1️⃣ Create a counter variable.
  </div>


  <div v-click>

  2️⃣ Set the repetition count.
  </div>


  <div v-click>

  3️⃣ Set the counter behaviour. Is it gonna increase one by one, two by two, etc...
  </div>
</div>

---
layout: image
image: /grad-bg2.jpg
class: text-center
title: for loops
---

# <i text-white>for</i> loops in p5JS


<img h-100 m-auto src='/loops1.png' />

---
layout: statement
---
# Replace the <span text-white>`print("...")`</span> function with a shape
Do you see a single shape? Where are the other shapes?

---
layout: image
image: /grad-bg2.jpg
class: text-center
---
# Open the black box

<img h-100 m-auto src='/loops2.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---
# Open the black box

<img h-100 m-auto src='/loops3.png' />


---
layout: image
image: /grad-bg2.jpg
class: text-center
---
# Access the counter variable to modify the repeating code
Use the counter variable `i` as a dynamic value. 

<img h-100 m-auto src='/loops4.png' />

---
layout: center
title: In-class Study
---

# Rewrite the following code using a `for` loop

```javascript
    function setup() {
        createCanvas(600, 600);
    }

    function draw() {
        background('#e1e1e1');
        // define position values for x and y axis
        var xpos = 200;
        var ypos = 220;
        // position the elements in the middle
        circle(xpos, ypos, 350);
        circle(xpos, ypos, 300);
        circle(xpos, ypos, 250);
        circle(xpos, ypos, 200);
        circle(xpos, ypos, 150);
        circle(xpos, ypos, 100);
        circle(xpos, ypos, 50);
    }
```

---
layout: image
image: /moire.png
backgroundSize: 100%
title: Moire Pattern
---

<div mt-120 text-right text-yellow text-4>
    🔗 <a href='https://www.wolframscience.com/nks/notes-10-7--moire-patterns/'>link to source</a>
</div>


---
src: ./pages/break.md
hide: false
---


---
layout: image-left
image: /moire2.jpg
backgroundSize: 70%
title: Moire Pattern Examples
class: text-center mt-50
---

### → Review the examples on [Pinterest](https://www.pinterest.com/search/pins/?q=moire&rs=typed)


---
layout: section
---

# Conditionals
## if/else statements


---
layout: image
image: /grad-bg2.jpg
class: text-left
title: Conditionals - if statement
---

<img h-100 m-auto src='/statements_1.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# Set a Condition in p5JS


<img h-100 m-auto src='/statements_2.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# If condition == false


<img h-100 m-auto src='/statements_3.png' />

---
layout: image
image: /grad-bg2.jpg
class: text-center
---

# Practice
Write the appropriate if conditions in place of `...` line in your code.

<img h-100 m-auto src='/assignment_2_statements.png' />

---
layout: center
class: text-center
---

# Cyclic motion with If Statement
Move the second group of circles using if statements


---
src: ./pages/assignment.md
hide: false
---

---
layout: image
image: /grad-bg2.jpg
class: text-center
hide: true
---

# Assignment Reference Image
You can choose your own colors, and other shape properties.

<img m-auto h-100 src='/5x5 Grid For Loops.jpg' />


---
layout: image
image: /grad-bg2.jpg
class: text-center
hide: true
---
# Tutorial

<iframe src="https://openprocessing.org/sketch/1707047/embed/" width="100%" height="400"></iframe>

[link to openProcessing 🔗 ](https://openprocessing.org/sketch/1707047)