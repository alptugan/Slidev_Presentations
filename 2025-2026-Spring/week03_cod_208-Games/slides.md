---
css: unocss
# background: /cover.jpeg
image: /VR-headset.jpeg
# some information about your slides (markdown enabled)
title: COD 208 Creative Coding II
info: |
  ## COD 208 Creative Coding II
  Author: Alp Tuğan, PhD

  Learn more at [alptugan.com](https://alptugan.com)
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
colorSchema: dark
glowSeed: 4
lineNumbers: true
selectable: true
codeCopy: true
routerMode: hash
download: false
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
src: /pages/header.md
---

---
layout: default
---
# Table of Contents

<Toc :columns="2" />



---
layout: image-left
image: /akbank yarisma.jpg
class: text-left mt-32
backgroundSize: 100%
---
# Open Calls
Akbank Sanat "42. Günümüz Sanatçıları" Contest. Check the [open call](https://www.akbanksanat.com/en/akbank_gso)

If you are selected as emerging artist with your project, you will earn extra credits for your final grade. Depending on your artwork you can propose it as final project also.


---
layout: default
hide: true
---

# A History of Generative Art

<Youtube id='MLeMilyghLs' width='100%' height='90%' />


---
layout: default
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
layout: image-left
image: /gameTypes.png
class: text-left mt-5
backgroundSize: 100%
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
class: text-left mt-32
backgroundSize: 100% 
---
# Bertie The Brain (1950)

- Ad-hoc Tic-Tac-Toe
- Artificial Smarts
- Developed by Dr. Josef Kates
- Canadian National Exhibition

---
layout: image-left
image: /spacewar.jpeg
class: text-left mt-30
backgroundSize: 100% 
---

# Spacewar! (1962)

- Enables distribution
- Very first concept of mass-production
- Developed by  Steve Russell in collaboration with Martin Graetz, Wayne Wiitanen, Bob Saunders, Steve Piner, and others.
- Massachusetts Institute of Technology (MIT)


---
layout: image-left
image: /atari.jpeg
class: text-left mt-10
backgroundSize: 100% 
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
layout: center
class: text-center
---

# Prince of Persia

<img src='/pp.gif' />


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

<Youtube id='wSLrhubWefM' width='100%' height='90%' />

---
layout: center
---
# Mobile Phone Games (2000s)

<img ml-auto mr-auto src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazg0bWp1ZDJpNjRodDdnajEwOHliNGN2dnRwbW9zYXZvN2hsa2RudSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zPdwt79PXjMEo/giphy.gif' />


---
layout: image-left
image: /a849db61df42b3c111d3fd773522c0e6.jpg
backgroundSize: 80%
---
# VR Games (2010s)

Early prototypes (1960s) are the precursors of Oculus Rift, Google Glass, Apple Vision Pro, etc...

<img h-80 src='/THE_VIEW_(Virtual_Reality).jpg' />

---
layout: image
image: /360_F_657800939_7IKF8V1tSDBKyMnY1QgroVWFogUy60Ng.jpg
---

# Cloud Gaming (2010s-...)

---
layout: default
class: mt-20
---

# Resources

Some books related to game development and its delicate practices.

<div class='flex gap-4 h-3/7'>
<img class='flex-1 object-cover' src='/book1.jpg' />
<img v-click class='flex-1 object-cover' src='/book2.jpg' />
<img v-click class='flex-1 object-cover' src='/book3.jpeg' />
<img v-click class='flex-1 object-cover' src='/book4.jpg' />
<img v-click class='flex-1 object-cover' src='/book5.jpg' />
</div>


---
src: /pages/break.md
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
layout: image-right
image: https://teaching.alptugan.com/assets/p5js02.jpg
backgroundSize: 100%
class: mt-40
---

# Tutorial - 2D Basic Game 
Refer to the [article](https://teaching.alptugan.com/Tutorials/P5JS---Casual-Game) to learn how to prepare your assets and implement your game.


---
layout: image-right
image: '/game_proto.jpg'
backgroundSize: 100%
class: mt-0
---

# Modules and Game Examples

- [Intro Scene by alptugan](https://editor.p5js.org/alptugan/sketches/wPV0-31Qv)
- [Timer Module by alptugan](https://editor.p5js.org/alptugan/sketches/VxY7d-7PRt)
- [Sound interactive game](https://editor.p5js.org/alptugan/sketches/GwedNwyRC)
- [DINO DINNER TIME](https://editor.p5js.org/alptugan/sketches/-1KLl37m2)
- [Another Game Prototype](https://editor.p5js.org/alptugan/sketches/5TXn7gahA)
- [Implement Game Scenes by alptugan](https://editor.p5js.org/alptugan/sketches/GP3bv4yy8)
- [Game Prototype - 🍌 Banana Empire 🐒](https://openprocessing.org/sketch/2191906)


---
src: /pages/assignment.md
hide: false
---
