---
background: /create_a_1920x1080_cover_image_for_my_presentation_background_image_the_context_is_typography_in_p5_tfbb1edxpmrh8tf91hug_1.png
title: Week 08 - Typography
exportFilename: "week08-Typography"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan, PhD

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
themeConfig:
    primary: "#ffcc00"
transition: fade-out
theme: seriph
src: /pages/header.md
---

---
layout: default
---
# Table of Contents

<Toc :columns="2" />




---
layout: two-cols
---


# Display Text on Canvas
text() function with default parameters


```js {13|all} {lines:true, startLine:1} 
function setup() {
	createCanvas(600, 600);
	background(255);
}

function draw() {
	background(255);
	
	// set x and y position of the text
	var xt = width / 2;
	var yt = height / 2;
	// Call text function
	text("Hello World!", xt, yt);
}

```

::right::

<img mt-22.5 ml-10 v-click src='/w10-text01.png' />


---
layout: two-cols
---

# Custom style
textSize(), textAlign(), fill()

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

<img mt-22.5 ml-10 v-click src='/w10-text02.png' />


---
layout: two-cols
---

# Loading Custom Fonts
loadFont(), textFont()


```js {1|3-4|7-9|14|15|16|18,25|19-20|21|23|24|all}{maxHeight:'400px'} 
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

<img v-click mt-22.5 ml-10 w-95 src='/w10-text03.png' />

---
src: /pages/break.md
hide: false
---


---
layout: image-left
image: /text.png
---

# Examples
Visit the following links and try to run by yourself. Edit the code. Tinker around.
1. Animation text lines, [link](https://openprocessing.org/sketch/1739294)
2. Letter control point animation, [link](https://openprocessing.org/sketch/1739305)
3. Tracing text animation, [link](https://openprocessing.org/sketch/1739298)

---
layout: default
---
# Computational Book Cover
Link to source [code](https://openprocessing.org/sketch/2115540) 🔗

<div class='grid grid-cols-3 gap-4'>
<div>
<img src='/week8-computational_poster.jpg' />
</div>

<div v-click>
<img src='/week8-computational_poster (1).jpg' />
</div>

<div v-click>
<img src='/week8-computational_poster (2).jpg' />
</div>
</div>


---
layout: default
---

# Computational Book Cover & Poster Design
Link to Computational Design [Inspirations](https://www.pinterest.com/stixan/computational-graphic-design-inspiration) 🔗

<div class='grid grid-cols-2 gap-4 mt-10'>
<div>
<img src='/hansen02.png' />
</div>

<div v-click>
<img src='/hansen01.png' />
</div>

</div>

---
layout: default
---

# Previous Student Works
Navigate to the Instagram page, [link](https://www.instagram.com/cod207_randomseed/)

<img h-90 ml-20 src='/PreviousWorks.jpg' />

---
src: /pages/assignment.md
hide: false
---
