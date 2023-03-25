---
theme: seriph
background: https://source.unsplash.com/collection/3280209/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Week 06 Presentation
    Generative Masks
    Learn more at [Github](https://www.github.com/alptugan)
drawings:
    persist: true
transition: slide-up
aspect-ratio: 16/9
css: unocss
title: Week 06 - Generative Masks
download: true
exportFilename: "week06-Generative_Masks"
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
favicon: 'https://www.alptugan.com/v5/favicon-192.png'
themeConfig:
  primary: '#ffcc00'
---

# Generative Masks

Symmetry, Randomness, Interactivty?


<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 208 - Week 06 Class <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---

<Toc/>

--- 
image: https://source.unsplash.com/kiO8Vk-DgpQ
layout: image-left
---

# What is Mask?

<div v-click>

<h3>Form of a Disguise / Concealment</h3>
</div>
<br/>
<div v-click>
<h3>Hides the identity</h3>
</div>
<br/>
<div v-click>
<h3>Cultural Meanings</h3>
</div>
<br/>
<div v-click>
<h3>Dates Back to Stone Age</h3>
</div>
<!--
"mask, a form of disguise or concealment usually worn over or in front of the face to hide the identity of a person and by its own features to establish another being. This essential characteristic of hiding and revealing personalities or moods is common to all masks. As cultural objects they have been used throughout the world in all periods since the Stone Age and have been as varied in appearance as in their use and symbolism."
-->

---
layout: image
image: /Mask-Nahal-Hemar-IMJ-e1394016811214.jpg
class: text-xs pr-150 pt-100
---

Mask decorated with paint, Nahal Hemar Cave, Judean Desert, Pre-Pottery Neolithic B, 9000 years old. 

(photo credit: Elie Posner/Israel Museum, Jerusalem)

---
layout: image-left
image: /tumblr_phuh66yFB81wnjtmio1_640.jpg
class: text-xl 
---
North West Coast native American mask from.

(Date unknown)


---
layout: image-right
image: /sothebys-com.brightspotcdn.webp
---
Wood (Alnus rubra or Cupressus nootkatensis), mineral pigments

Height: 10 in (25.4 cm)


Wolfgang Paalen, San Ángel and Tepoztlán, acquired in situ in 1939


---
layout: image-left
image: /Mask-costume-dancer-spirit-initiation-rites-region.webp
---
# Characteristics of a Mask
<div v-click>
<h3>Variety of Materials</h3>
(wood, stone, clay, fibre, metals, ivory...)
</div>
<br/>

<div v-click>
<h3>Costumes</h3>
(Costumes as complimentary items)
</div>

<br/>
<div v-click>
<h3>Style</h3>
(Stylistic features depends on culture and the context)
</div>

<br/>
<div v-click>
<h3>Purpose</h3>
Religious, social, funerary, therapeutic, festive, theatrical, etc...
</div>

<div text-size-2 py-2 op-20>
Mask worn with costume: makishi dancer, a masked ancestral spirit who assists at initiation rites of the tribes of the northwestern region of Zambia. → <a href='https://www.britannica.com/art/mask-face-covering' target='_blank'>source</a>
</div>

<!--
The mask, therefore, most often functions as a means of contact with various spirit powers, thereby protecting against the unknown forces of the universe by prevailing upon their potential beneficence in all matters relative to life.
-->

---
layout: image-right
image: /stock-photo-kendo-fighter-helmet-holding-bamboo.jpg
---
# Today
<div v-click>
<h3>Art</h3>
Music industry, Traditional art scene, theaters
</div>

<br/>
<div v-click>
<h3>Entertainment</h3>
Film industry, advertisement agencies, kid plays
</div>

<br/>
<div v-click>
<h3>Festive</h3>
Traditional festivals, fairs, amusement parks
</div>

<br/>
<div v-click>
<h3>Illegal Purposes</h3>
Assasination, Bank robbery
</div>

<br/>
<div v-click>
<h3>Sports</h3>
Fencing (Eskrim), Kendo, Hockey
</div>


---
layout: image-right
image: /history05.jpg
---
# Case Study

<div v-click>
<h3><i>Generative Masks</i> by Shunsuke Takawo</h3>
</div>
<br/>
<div>
<h4 v-click>Development Process</h4>
<li v-click>Daily Coding Practice</li>
<li v-click>Pixel Art & Symmetry</li>
<li v-click>2D Primities & Symmetry</li>
<li v-click>Character Form & Symmetry</li>
<li v-click>3D Primitives & Symmetry</li>
<li v-click>2D PRIMITIVES & SYMMETRY & BORDERING</li>
<li v-click>GENERATIVEMASKS</li>
</div>

---
src: /break.md
---

---
class: p-0 m-0
---
<div class="grid grid-cols-2 gap-4">
<div>

```js {1|2|3|4|5|7|8-11|13-17|19-23|25-29|all}
// Head variables
let headW=150;
let headH=200;
let xh = 0;
let yh = 0;

// Eyes variables
let ye;
let xe;
let we;
let he;

// Ears variables
let xEar;
let yEar;
let wEar;
let hEar;

// Nose variables
let xn;
let yn;
let wn;
let hn;

// Mouth variables
let xm;
let ym;
let wm;
let hm;
```

</div>
<div py-10 px-10>

<h1>Declare Variables</h1>
All of the varibales are declared globally outside of the <kbd>setup()</kbd> and <kbd>draw()</kbd> functions.

</div>
</div>

---
class: p-10 m-0
---

<div class='grid grid-cols-2 gap-4'>
<div>

```js{1-2|4|5|6|7-8|10|22|11|13-14|15|16-21|all}
// Array to hold colors
let colors = ["#5AAA95", "#087F8C", "#095256", "#86A873", "#BB9F06"];

function setup() {
	createCanvas(600, 600);
	background(255);
	noLoop();
}

function draw() {
  noStroke();
	
	// Draw head
	// fill the rect with the first color by setting index 0
	fill(colors[0]);
	// With additional 4 parameters
	// 40:set roundness of the top-left corner of the rect
	// 40:set roundness of the top-right corner of the rect
	// 70:set roundness of the bottom-right corner of the rect
	// 70:set roundness of the bottom-left corner of the rect
	rect(xh, yh, headW, headH, 40, 40, 70, 70);
}
```

</div>
<div p-2 v-click>
<img src='/f1.jpg'/>
</div>
</div>

---
class: p-0 m-0 
---

<div class='grid grid-cols-2 gap-4'>
<div>

```js{5-12|15|16|17|18|19|20|21|22|24-26|27|all}
function draw() {
	noStroke();
	
	// Draw head
	// fill the rect with the first color by setting index 0
	fill(colors[0]);
	// With additional 4 parameters
	// 40:set roundness of the top-left corner of the rect
	// 40:set roundness of the top-right corner of the rect
	// 70:set roundness of the bottom-right corner of the rect
	// 70:set roundness of the bottom-left corner of the rect
	rect(xh, yh, headW, headH, 40, 40, 70, 70);
	
	
	// Draw left eye
	fill(colors[2]);
	// define x and y of the eyes
	ye = yh + 90;
	xe = xh + 35;
	we = 35;
	he = 15;
	ellipse(xe, ye, we, he);
	
	// Symmetry
	// Draw the right eye
	xe = xh + headW - 35;
	ellipse(xe, ye, we, he);
}
```
</div>
<div p-2 v-click>
<img src='/f2.jpg'/>
</div>
</div>

<style>
span{
  font-size: 9px !important;
  line-height: 0rem !important;
}
</style>

---
class: p-0 m-0 
---

<div class='grid grid-cols-2 gap-4'>
<div>

```js {1-3|4|5|6-7|11|8|9|10|8-10|all}
	// Draw Nose
	// set color
	fill(colors[4]);
	wn = 20;
	hn = 35;
	// lets make the nose from a customshape
	beginShape();
	vertex(0,0);
	vertex(-wn/2,hn);
	vertex(wn/2,hn);
	endShape();

```
<img v-click src='/f3.jpg'/>
</div>
<div py-10 px-10>
<h1>Drawing The Nose</h1>
We write the code on the left in <kbd>draw()</kbd> function.
To make it on top of the head, we insert the codes under section where we draw the right eye.
</div>
</div>


---
class: p-0 m-0
---
<div class='grid grid-cols-2 gap-4'>
<div py-10 px-0>

```js {10|13|16|23|17|18-22|16-23}
// Draw Nose
// set color
fill(colors[4]);
wn = 20;
hn = 35;
// lets make the nose from a customshape

// move the object between push() and pop() on the canvas
// x position of the nose = halft of the width of the head.
xn = headW / 2;

// set the y position of the nose graphics
yn = 100;

//add push to use translate 
push();
  translate(xn, yn);
  beginShape();
    vertex(0,0);
    vertex(-wn/2,hn);
    vertex(wn/2,hn);
  endShape();
pop();
```
</div>
<div py-10 px-10>
<h1>Positioning The Nose</h1>
To display the nose at the center of the mask, we can use <kbd><span text-purple>translate</span>(<span op-30>x_position, y_position</span>)</kbd>
<img v-click py-4 src='/f4.jpg'/>
</div>
</div>

---
class: p-0 m-0
clicks: 5
---
<div class='grid grid-cols-2 gap-4'>
<div py-10 px-0>

```js {5|6|7|8|9|10|5-10}
// Draw mouth points
// These points will be removed after we are done with the 
// positions.
// We create these points for debugging purposes.
fill(0);
circle(55, 170, 5); // 1st point coords: x: 55, y: 170
circle(65, 165, 5);	// 2nd point coords: x: 65, y: 165
circle(75, 170, 5);	// 3rd point coords: x: 75, y: 170
circle(85, 165, 5);	// 4th point coords: x: 85, y: 165
circle(95, 170, 5);	// 5th point coords: x: 95, y: 170
```

<div class='grid grid-cols-2 gap-0 py-10'>
<div py-0 px-5>
  <img w-50 v-click="1" src='/f5.jpg'/>
  <img w-50 v-click="3" src='/f7.jpg'/>
  <img w-50 v-click="5" src='/f9.jpg'/>
</div>
  <div>
    <img w-50 v-click="2" src='/f6.jpg'/>
    <img w-50 v-click="4" src='/f8.jpg'/>
  </div>
</div>

<style>
.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
</style>

</div>
<div py-10 px-5>
<h1>Drawing the Mouth</h1>
<li>To craw mouth we can use variety of techniques.</li>
<li>Let's use beginShape() and endShape() to create the mouth.</li>
<li>First create the points to form the mouth.</li>
<li>You can use small circle in order to determine the specific curve positions via trial-error practice...</li>
<li>Attention to the x and y position of each points.</li>
<li>I want to create a curve that looks like a wave.</li>
<li>Next we will disable these circles because we know the parameters to draw curve for the mouth.</li>
</div>
</div>

---
class: p-0 m-0
---

<iframe src="https://openprocessing.org/sketch/1879055/embed/" width="100%" height="100%"></iframe>

---
src: /assignment.md
---