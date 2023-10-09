---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 01 - Creative Coding
exportFilename: "week01-Creative_Coding-"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan
    
    Access all week contents @[Github/alptugan](https://github.com/alptugan/Slidev_Presentations)
drawings:
    persist: true
transition: slide-up
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
favicon: 'https://www.alptugan.com/v5/favicon-192.png'
themeConfig:
  primary: '#ffcc00'
---

# Creative Coding

Introduction

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 207 - Week 01 Class <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---

<Toc :columns="2"/>


---
class: text-center
layout: none
---
# Hello World

<Youtube p-0 m-0 width="100%" height="100%" id="Z9NLxrkMWM4" />


--- 
image: /imageV.jpg
layout: image-left
---



# Technology & Hardware
  - 💻 Computer, Web Browser
  - 👁️ Reading
  - 👂 Listening
  - 🗣️ Asking
  - ⌨️ Typing
  - P5JS (Programming Language)


---
layout: image
image: /imageH.jpg
class: text-left py-40 px-50
---

<div text-14 fw400>Required Books</div>
<span text-8.1>Make: Getting Started with p5.js</span><br>
<span text-4.55 fw400>Making Interactive Graphics in JavaScript and Processing </span><br>
<span text-4 fw400>by Lauren McCarthy, Ben Fry, and Casey Rea</span>

[P5JS Books](https://p5js.org/books/) <carbon-link /> 
<!--https://carbondesignsystem.com/guidelines/icons/library/-->


<style>
h1 {
  color: #fff !important;
  text-shadow: 2px 2px 10px black;
  opacity: 1!important;
  font-size: 100px!important;
}

p {
  color: #fff !important;
  text-shadow: 2px 2px 10px black;
  opacity: 1 !important;
}
</style>

---
layout: image
image: /imageT.jpg
class: text-left py-25 px-50
---

# Books on Creative Coding, Algorithmic Art, and Philosophy
- Generative Design, Benedikt Gross, Hartmut Bohnacker, Julia Laub and Claudius Lazzeroni.
- Learn JavaScript with p5.js, Engin Arslan
- Aesthetic Programming: A Handbook of Software Studies, Winnie Soon, Geoff Cox.
- A Philosophy of Software Design, John Ousterhout Clean Code, Robert C. Martin
- Generative Art A Practical Guide Using Processing, Matt Pearson

---
layout: image
image: /imageT.jpg
class: text-left py-35 px-50
---

# Learning Tools
- [OpenProcessing Community Page](https://openprocessing.org/discover/#/trending) - Sign Up
- [p5js Editor](https://editor.p5js.org) - Sign Up
- [p5.js Tutorials by Daniel Shiffman/Coding Rainbow - YouTube](https://www.youtube.com/playlist?list=PLglp04UYZK_PrN6xWo_nJ-8kzyXDyFUwi)
- [Homepage | p5.js (p5js.org)](https://p5js.org/)
- [Latest p5.js topics - Processing Foundation](https://discourse.processing.org/c/p5js/10)
- [Reference | p5.js (p5js.org)](https://p5js.org/reference/)
- [Examples | p5.js (p5js.org)](https://p5js.org/examples/)


---
layout: image
image: /imageT.jpg
class: text-center 
---

# Social Media → Hashtags & Accounts

<br>
<kbd><span text-6>#p5js</span></kbd><br><br>
<kbd><span text-6>#generativeart</span></kbd><br><br>
<kbd><span text-6>#algorithmicart</span></kbd><br><br>
<kbd><span text-6>#creativecoding</span></kbd><br><br>
<kbd><span text-6>#codeart</span></kbd><br><br>
<kbd><span text-6>#generativedesign</span></kbd>

---
layout: image
image: /imageT.jpg
class: text-center
---

# Course Materials
Course instructor distribute the necessary pdf documents, videos and sound recordings

<div style="padding-top:2%;padding-left:25%;width:auto;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/d9CX7F5Um8vzZIZOp4" width="50%" height="50%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

---
layout: image
image: /imageT.jpg
class: text-center 
---

# Syllabus

Go to LMS and view the syllabus → 🔗 [download](https://lms.ozyegin.edu.tr/pluginfile.php/95493/mod_resource/content/0/COD207AB_Syllabus_2023_Fall_ENG.pdf)

<div style="padding-top:2%;padding-left:25%;width:auto;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/JlxFcvNuzlPYA" width="55%" height="47%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

---
layout: image-left
image: https://media.giphy.com/media/l2JdUVzvEKUZtckAE/giphy.gif?cid=ecf05e4796r92yfs3pp7kquni9uvz29pjw7uxdzmuc252xec&ep=v1_gifs_search&rid=giphy.gif&ct=g
class: text-left text-xl
---

# Grading

<v-clicks>

- Assignments 30%
- Final Project 30%
- Presentation 10%
- Attendance 30%
</v-clicks>



<style>
h1 {
  font-size: 3em !important;
}
</style>



---
layout: image
image: https://media.giphy.com/media/li0dswKqIZNpm/giphy.gif?cid=ecf05e47cg2kwt12kxc3h8ghb1n9zjm6d6uznu01zs2dub4z&ep=v1_gifs_search&rid=giphy.gif&ct=g
class: text-center 
---


---
layout: center
class: text-left pl-25% pr-50% mt--15
---

# Variables

<Transform :scale="2.0" >

```js {1|3|4|5|all}
// Declaration of variables

var missed_assignment_Count;
var missed_class_Count;
var missed_final_project;
```
</Transform>

<style>
h1 {
  font-size: 3em;
}
</style>


---
layout: two-cols
class: text-left m-auto px-2
---

# Condition 1

```js {1|3|4|5|all}
// Number of missed assignments

if(missed_assignment_Count > 3) {
	failed();
}

```

::right::
<v-click>

<div style="width:100%"><div style="height:0;padding-bottom:56.25%;position:relative;width:100%"><iframe allowfullscreen="" frameBorder="0" height="100%" src="https://giphy.com/embed/k8FRIfjD1lSobtDch1/video" style="left:0;position:absolute;top:0" width="100%"></iframe></div></div>
</v-click>

---
layout: two-cols
class: text-left m-auto px-2
---

# Condition 2

```js {1|3|4|5|all}
// Number of missed classes

if(missed_class_Count > 3) {
	failed();
}
```
::right::
<v-click>

<div style="width:100%"><div style="height:0;padding-bottom:56.25%;position:relative;width:100%"><iframe allowfullscreen="" frameBorder="0" height="100%" src="https://giphy.com/embed/atDGJSYufyOjc57ajF/video" style="left:0;position:absolute;top:0" width="100%"></iframe></div></div>
</v-click>

---
layout: two-cols
class: text-left m-auto px-2
---

# Condition 3

```js {1|3|4|5|all}
// Missed Final Project Submission & Presentation

if(missed_final_project >= 1) {
	failed();
}
```

::right::
<v-click>

<div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/d2W7eZX5z62ziqdi" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
</v-click>

---
src: /break.md
---

---
background: /randomseed.png
layout: cover
class: text-center effect_Shadow
---

# Randomseed Instagram Account
<carbon-link /> 

[COD 207 Randomseed Instagram Account](https://www.instagram.com/cod207_randomseed)

---
background: /randomseed-w.png
layout: cover
class: text-center effect_Shadow
---

# Randomseed Web Page
<carbon-link /> 

[COD 207 Randomseed Web Page](ranger.github.io)

---
background: https://source.unsplash.com/4QmSdCP4bhM
layout: cover
class: text-center effect_Shadow
---

# Youtbe Playlist
Includes documentation and how to videos
<carbon-link /> 
[Creative Coding Selected Student Works](https://www.youtube.com/playlist?list=PLvcJjvBzWDXan8ZkLsE5gYtNX9AhjQNW-)



---


# Creative Coding?

<div class='grid grid-rows-3 grid-cols-3'>

<div>
  <Youtube id="Lck5AbqW9MQ" />
</div>

<div>
<Youtube id="Fc1UozFJd-E?t=61" />
</div>

<div>
<Youtube id="ULg5Bp24HE8" />
</div>

<div>
<Youtube id="ADnIG14y7JJY7SIR&t=170" />
</div>

<div>
<Youtube id="ULg5Bp24HE8" />
</div>

<div>
<iframe src="https://player.vimeo.com/video/68161863?h=b6c82cd937&color=ffffff" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

<div>
<iframe src="https://player.vimeo.com/video/286155835?h=d129e3568e&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

<div>
<Youtube id="W7VCuW8qBzo" />
</div>

<div>
<iframe src="https://player.vimeo.com/video/266263245?h=e8dd728135&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>
</div>



---
class: text-center
layout: none
---

<Youtube p-0 m-0 width="100%" height="100%" id="P9pdH0l0-_E" />



---
class: text-center
layout: none
---

<Youtube p-0 m-0 width="100%" height="100%" id="NtP1cxxqGos" />

<!--In Designer vs. Developer 'Becoming a Creative Coder' Mustafa speaks to Mariko Kosaka, a Developer Advocate on the Google Developers Relations Team, about the art she creates with code and how developers can embrace the notion of making something that isn’t necessarily useful but still has value.-->


---
class: text-center
layout: none
---

<Youtube p-0 m-0 width="100%" height="100%" id="UtXFRWAcZqM" />


---
class: text-center
layout: none
---

<Youtube p-0 m-0 width="100%" height="100%" id="OFJcxB3fXLc" />



---
layout: center
class: text-center text-middle effect_Shadow text-6 
---

<h1  px-30 >RandomSeed Community Statement</h1>

<div px-50>
This class is intended for students interested in exploring the creation of art and design with technology. We are a community of, and in solidarity with, people from every;
<kbd text-green>gender identity</kbd> and <kbd text-blue>expression</kbd>, <kbd text-red>sexual orientation</kbd>, <kbd text-pink>race</kbd>, <kbd text-yellow>ethnicity</kbd>, <kbd text-green>language</kbd>, <kbd text-orange>neuro-type</kbd>, <kbd text-neutral>size</kbd>, <kbd text-white>disability</kbd>, <kbd text-purple>class</kbd>, <kbd text-cyan>religion</kbd>, <kbd text-purple>culture</kbd>, <kbd text-yellow>subculture</kbd>, <kbd text-cyan>political opinion</kbd>, <kbd text-red>age</kbd>, <kbd text-green>skill level</kbd>, <kbd text-purple>occupation</kbd>, and <kbd text-yellow>background</kbd>. 
</div>

<img class="bgCover" src='https://source.unsplash.com/wJK9eTiEZHY'/>

---
layout: two-cols
class: m-auto
---

# In practice 
No need to be 🙊 🙈 🙉

<v-click>

✋ We insist on actively engaging with requests for feedback regardless of the frame.
</v-click>

<v-click>

💯 We beleive in the power of community and all types of communication.
</v-click>

<v-click>

⛑️ We are always willing to offer help or guidance.
</v-click>

<v-click>

😉 You are here to ask questions, not to be questioned. We are always willing to listen.
</v-click>
::right::

<iframe src="https://giphy.com/embed/evB90wPnh5LxG3XU5o" width="480" height="275" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

---
layout: two-cols
class: m-auto
---

# Code of Conduct
🛑

**Be mindful of your language.** Any form of impolite conduct is deemed unacceptable.

**Be respectful.** Disagreement is not an opportunity to attack someone else's thoughts or opinions. Although views may differ, remember to approach every situation with patience and care.

**Be open minded.** Embrace new people and new ideas. Our community is continually evolving and we welcome positive change.

::right::
<div style="width:100%;height:0;padding-bottom:66%;position:relative;"><iframe src="https://giphy.com/embed/H7kfFDvD9HSYGRbvid" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

---
layout: full
style: p-0 m-0 
---

<Youtube p-0 m-0 id="DsUCRcK7QYc" width="100%" height="100%"/>





---
src: /assignment.md
---

<!--https://carbon-elements.netlify.app/icons/examples/preview/#LinuxAlt32-->