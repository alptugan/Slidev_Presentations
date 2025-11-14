---
background: ./week4-cover.png
exportFilename: "week04-Loops-Moire_Patterns"
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
layout: iframe-left
title: Video of the week - Telefon Tel Aviv
url: https://player.vimeo.com/video/23281150?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
class: p-4
---

# Quayola
Realtime sound visualisation made with custom software "Partitura"
Sound by Telefon Tel Aviv


🔗 [vimeo link](https://vimeo.com/23281150)


---
title: Table of Contents
---

# Table of Contents

<Toc :columns="2"/>

---
layout: center
class: p-3 text-3
---

# Variables

> Declare a variable, if you type the same number more than twice. 

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
layout: default
---

# Computer Science Basics
1️⃣ Sequences, 2️⃣ Selection, and 3️⃣ Loops

<Youtube id='eSYeHlwDCNA' width='100%' height='100%' />

---
layout: image-left
image: ct.png
hide: false
backgroundSize: 100%
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
image: grad-bg2.jpg
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
image: grad-bg2.jpg
class: text-center
---

# Open the black box

<img h-100 m-auto src='/loops2.png' />

---
layout: image
image: grad-bg2.jpg
class: text-center
---

# Open the black box

<img h-100 m-auto src='/loops3.png' />


---
layout: fact
---

# Why do we need to learn coding?

---
title: Ne işime yarayacak bu?
layout: two-cols
class: text-3.8
---

<SlidevVideo m-auto h-120 autoplay controls>
  <source src="https://media-host.alptugan.workers.dev/knowledge/Ali-Nesin.mp4" type="video/mp4" />
</SlidevVideo>

::right::

<v-clicks>

- When you ask yourself, “What is the point of learning this?”, you're done. You can't be an expert in anything.
- But you can become an copycat. Then what?
- You repeat what others have discovered.
- Did they invent the refrigerator? You can make one too.
- Did they make an electric car? You can make one too.
- Did they make a computer? You'll make one too.
- Let them make it first. Then you'll make one too.
- But you can't invent the computer, the refrigerator, the internet.
- You can't go to space. You'll go after they go.
- You'll do things after someone else has done them. But you can't discover anything new.
- To discover something new, you have to deal with subjects you don't know what they're good for.
- Because you don't know what will be useful and when.


</v-clicks>

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
image: moire.png
backgroundSize: 40em
title: Moire Pattern
---

<div mt-110 text-center text-yellow text-2>
    🔗 <a href='https://www.wolframscience.com/nks/notes-10-7--moire-patterns/'>link to source</a>
</div>

---
src: ./pages/break.md
hide: false
---

---
layout: image-left
image: moire2.jpg
backgroundSize: 70%
title: Moire Pattern Examples
class: text-center mt-50
---

### → Review the examples on [Pinterest](https://www.pinterest.com/search/pins/?q=moire&rs=typed)

---
title: Moire Rotating Lines
layout: two-cols
class: text-center
---

<iframe src="https://openprocessing.org/sketch/2395082/embed/" width="400" height="450"></iframe>

::right::

<div mt-50>
    
</div>

🔗 [openprocessing link](https://openprocessing.org/sketch/2395082)


---
title: Moire Rotating Squares
layout: two-cols
class: text-center
---

<iframe src="https://openprocessing.org/sketch/2395088/embed/" width="400" height="450" ></iframe>

::right::

<div mt-50>
    
</div>

🔗 [openprocessing link](https://openprocessing.org/sketch/2395088)

---
layout: section
hide: true
---

# Conditionals
## if/else statements

---
layout: image
image: grad-bg2.jpg
class: text-left
title: Conditionals - if statement
hide: true
---

<img h-100 m-auto src='/statements_1.png' />

---
layout: image
image: grad-bg2.jpg
class: text-center
hide: true
---

# Set a Condition in p5JS


<img h-100 m-auto src='/statements_2.png' />

---
layout: image
image: grad-bg2.jpg
class: text-center
hide: true
---

# If condition == false


<img h-100 m-auto src='/statements_3.png' />

---
layout: image
image: grad-bg2.jpg
class: text-center
hide: true
---

# Practice
Write the appropriate if conditions in place of `...` line in your code.

<img h-100 m-auto src='/assignment_2_statements.png' />

---
layout: center
class: text-center
hide: true
---

# Cyclic motion with If Statement
Move the second group of circles using if statements

---
src: ./pages/assignment.md
hide: false
---

---
layout: image
image: grad-bg2.jpg
class: text-center
hide: true
---

# Assignment Reference Image
You can choose your own colors, and other shape properties.

<img m-auto h-100 src='/5x5 Grid For Loops.jpg' />

---
layout: image
image: grad-bg2.jpg
class: text-center
hide: true
---

# Tutorial

<iframe src="https://openprocessing.org/sketch/1707047/embed/" width="100%" height="400"></iframe>

[link to openProcessing 🔗 ](https://openprocessing.org/sketch/1707047)
