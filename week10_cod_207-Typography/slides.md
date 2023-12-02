---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 10 - Typography
exportFilename: "week10-Typography-"
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
layout: two-cols-header
---


# Display Text on Canvas
text() function with default parameters

::left::

```js {13|all} {lines:true, startLine:1} 
function setup() {
	createCanvas(600, 600);
	background(255);
}

function draw() {
	background(255);
	
	// Call text function
	// three parameters: 
	// 1) text to display
	// 2-3) x,y to position text on the canvas 
	text("Hello World!", width / 2, height / 2);
}

```

::right::

<img v-click src='/w10-text01.png' />


---
layout: two-cols-header
---

# Custom style
textSize(), textAlign(), fill()

::left::

```js {9,12|10,12|11,12|9-12|14-17|all} {lines:true, startLine:1} 
function setup() {
	createCanvas(600, 600);
	background(255);
}

function draw() {
	background(255);
	
	textSize(42); // Set text font-size
	textAlign(CENTER); // Align center
	fill(240,200,10); // Set color yellow
	text("Hello World!", width / 2, height / 2);
	
	textSize(14); // Sub-header font-size
	textAlign(LEFT); // align to left
	fill(100); // fill with gray color
	text("This is sub title", 190, height / 2 + 15);
}
```

::right::

<img v-click src='/w10-text02.png' />


---
layout: two-cols-header
---

# Loading Custom Fonts
loadFont(), textFont()

::left::

```js {1|3-4|7-9|14|15|16|18,25|19-20|21|23|24|all} {maxHeight:'400px'} 
let fontAkira; // font variable

function preload() {
	fontAkira = loadFont("Akira Expanded Demo.otf"); // store font into variable
}

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(248, 249, 231);

	textFont(fontAkira); // set text font defined and loaded on top
	textSize(122); // set font size
	textAlign(CENTER); // set font alignment
	
	for (let i = 0; i < 7; i++) {	// draw 7 lines of text underneath each other
		let x = width * 0.5; // set x position of each text
		let y = 180 + 88 * i;// set y position of each text
		let op = map(i, 0, 7, 40, 255); // set the opacity of each font
		
		fill(23, 9, 6, op); // set color same but change opacity
		text("AKIRA", x, y); // write text and set position
	}
}
```

::right::

<img v-click pl-2 src='/w10-text03.png' />

---
src: ./pages/break.md
hide: false
---


---
layout: center
---

# Deconstruct / Reconstruct

- Hansen's method 
- Computational Graphic Design Repository → [link](https://www.pinterest.com/stixan/computational-graphic-design-inspiration/)

<img h-100 src='/hansen01.png' />


---
layout: center
---

# Computational Poster Repository

<img h-100 src='/hansen02.png' />

[source 🔗](https://www.pinterest.com/stixan/computational-graphic-design-inspiration/)


---
src: ./pages/assignment.md
hide: false
---