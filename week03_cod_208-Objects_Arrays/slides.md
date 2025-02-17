---
title: Week 03 - Array of Objects
exportFilename: "week03--"
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
layout: image-left
image: /akbank yarisma.png
class: text-left
---
# Open Calls
Akbank Sanat "42. Günümüz Sanatçıları" Contest. Check the [open call](https://www.akbanksanat.com/akbank_gso)

If you are selected as emerging artist with your project, you will earn extra credits for your final grade. Depending on your artwork you can propose it as final project also.


---
layout: default
---

# A History of Generative Art

<Youtube id='MLeMilyghLs' width='100%' height='90%' />


---
layout: deafult
class: text-left py-10
---

# Q & A about Classes?
Any one needs help?

<img h-100 m-auto src='/blog-images-3.png' />

---
layout: center
class: text-left
---
# Syntax Matters
Some of you confused about the order. 

<img h-60 src='/syntax.png' />


```js {1|11|2|5|3|4|7|8|all}
class Name-of-the-class {
    constructor() {
        // Properties of the class
        this.name = "MyClass";
    }

    // You can add your custom functions
    someFunctionName() {

    }
}
```

---
layout: two-cols
image: /oop1.png
preload: false
---

# The Code Organization
Move your mouse next to "mySketch" tab. A plus (+) will appear.
"mySketch" is your main document. 

🛑 DO NOT move its content into a class.

<img h-100 src='/oop1.png' />
<Arrow v-motion-fade
  :initial="{ x: 0, y: 20, opacity: 0 }"
  :enter="{ x: 0, y: 0, opacity: 1, transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, }" x2="110" y2="205" x1="110" y1="450" color="rgba(200,0,0,1)" />

::right::
<img h-100 ml-0 mt-38 src='/class.png' />
<Arrow v-motion-fade
  :initial="{ x: 0, y: 20, opacity: 0 }"
  :enter="{ x: 0, y: 0, delay: 2, opacity: 1, transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, }" x2="100" y2="205" x1="100" y1="450" color="rgba(0,200,0,1)" />

---
layout: image-left
image: /gameTypes.png
class: text-left
---

# Game Types
Three main types of digital games.

Casual Games: for anybody and everybody. [Farmville](https://www.youtube.com/watch?v=Uyits1Q7Zk8&ab_channel=Game_track), Cityville, pretty much any Zynga game.

Mid-Core Games: typically more investment required to succeed. Players can be punished by failing to play well. Usually a competitive atmosphere as well. Games like [Guild War 2](https://www.youtube.com/watch?v=EmnPuYsJNyU&ab_channel=TheLazyPeon).

Hardcore Games:  toughest learning curves, but typically have the most invested users and highest average spenders. Kabam games come to mind, [WoW](https://www.youtube.com/watch?v=DJaANEbcjuQ&ab_channel=Throneful).


---
layout: section
---
# Brief History of Computer Games


---
layout: image-left
image: /landscape-1478022720-gettyimages-592833155.jpg
class: text-left
---
# Bertie The Brain (1950)

- Ad-hoc Tic-Tac-Toe
- Artificial Smarts
- Developed by Dr. Josef Kates
- Canadian National Exhibition

---
layout: image-left
image: /Screenshot 2024-02-26 at 18.30.56.png
class: text-left
---

# Spacewar! (1962)

- Enables distribution
- Very first concept of mass-production
- Developed by  Steve Russell in collaboration with Martin Graetz, Wayne Wiitanen, Bob Saunders, Steve Piner, and others.
- Massachusetts Institute of Technology (MIT)


---
layout: image-left
image: /9BN1H-1654810812-3024-quiz_question_image_-atari.png
class: text-left
---
# Video Game Console (1970s) 

- Customized Home Computers.
- Magnavox
- Atari (Pong, Pac-Man)
- Sega
- Taito (Space Invaders)
- Microvision
- Game Boy
- Tetris

---
layout: default
---
# Timeline of Gaming Industry

<img src='/history.png' />


---
layout: default
---
# Arcade Video Games (1970s-1990s)

<img h-120 src='/retro+video+arcade+games.jpg' />


---
layout: image-left
image: /Screenshot 2024-02-26 at 18.43.00.png
---
# PC Games (1990s)

- Game industry.
- Personal Computers.
- Mass Production.
- Gaming magazines become widespread.
- User friendly computer operating systems.
- Could not beat the Arcade industry.

---

# 90s in Turkey

<Youtube id='wSLrhubWefM' width='100%' height='100%' />

---
layout: default
---
# Mobile Phone Games (2000s)

<img src='/mobil.png' />


---
layout: image-left
image: /a849db61df42b3c111d3fd773522c0e6.jpg
---
# VR Games (2010s)

Early prototypes (1960s) are the precursors of Oculus Rift, Google Glass, Apple Vision Pro, etc...

<img src='/THE_VIEW_(Virtual_Reality).jpg' />

---
layout: image
image: /360_F_657800939_7IKF8V1tSDBKyMnY1QgroVWFogUy60Ng.jpg
---

# Cloud Gaming (2010s-...)

---
layout: deafult
---
# Resources

<img src='/Screenshot 2024-02-26 at 18.55.05.png' />


---
src: ./pages/break.md
hide: false
---

---
layout: section
---
# Examples from Former Fellows


---
title: Top-scrolling Game
---

<Youtube id='6S3pfdNX6Ic' width='100%' height='100%' />


---
title: Top-scrolling Game
---
<Youtube id='uoxfz_VDW8k' width='100%' height='100%' />

---
title: Side-scrolling Game
---
<Youtube id='KXWV60toNls' width='100%' height='100%' />


---
src: ./pages/assignment.md
hide: false
---
