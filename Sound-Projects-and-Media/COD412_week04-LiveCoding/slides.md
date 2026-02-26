---
theme: apple-basic
css: unocss
image: /cover2.jpg
# some information about your slides (markdown enabled)
title: COD 412 Sound Projects & Media
info: |
  ## COD 412 Sound Projects & Media
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
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
---

# COD 412 Sound Projects & Media

week 04 - Live Coding

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/alptugan" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
This is a [red text]{style="color:red"}
-->

---
transition: fade-out
layout: quotes
author: Edgard Varèse
source: French composer (1883-1965)
---

<v-click hide> 

# Music is organized sound

</v-click hide> 

<img v-click="'+0'"  src="/edgard2.jpg" rounded-full w-100 abs-tr mr-10 mt-0/>


---

# Page 1

Live Coding?

Sonic Pi: Textual

Programming Language

Music


---

# Page 2

What is Live Coding?

![Image 1](./image-1.png)


---

# Brief History of Live Coding

- 2000, SLUB played in London

- 2004, TOPLAP Organization

- 2011, Algorave (N. Collins, A. McLean)

![Image 2](./image-2.png)


---

# Page 4

Algorave

![Image 3](./image-3.png)

**Links:**

- [https://www.youtube.com/watch?v=S2EZqikCIfY&t=28s&ab_channel=ResidentAdvisor](https://www.youtube.com/watch?v=S2EZqikCIfY&t=28s&ab_channel=ResidentAdvisor)


---

# Page 5

![Image 4](./image-4.png)


---

# Page 6

Documentary * Algorave Generation

![Image 5](./image-5.png)

**Links:**

- [http://www.youtube.com/watch?v=S2EZqikCIfY](http://www.youtube.com/watch?v=S2EZqikCIfY)


---

# Page 7

Coding the Party * Documentary

![Image 6](./image-6.png)

**Links:**

- [http://www.youtube.com/watch?v=BcbsDcZ9k-A](http://www.youtube.com/watch?v=BcbsDcZ9k-A)


---

# Page 8

Documentary * The Creative Power of Live Coding

![Image 7](./image-7.png)

**Links:**

- [http://www.youtube.com/watch?v=uA4SDytz8Aw](http://www.youtube.com/watch?v=uA4SDytz8Aw)


---

# Page 9

![Image 8](./image-8.png)

**Links:**

- [http://www.youtube.com/watch?v=Ix2b_qFYfAA](http://www.youtube.com/watch?v=Ix2b_qFYfAA)


---

# Page 10

Kingdom - Mike Hodnick

![Image 9](./image-9.png)

**Links:**

- [http://www.youtube.com/watch?v=smQOiFt8e4Q](http://www.youtube.com/watch?v=smQOiFt8e4Q)


---

# Page 11

Joint Breakcore Live Coding Duo

![Image 10](./image-10.png)

**Links:**

- [http://www.youtube.com/watch?v=XYe8AKYPUYc](http://www.youtube.com/watch?v=XYe8AKYPUYc)


---

# Page 12

![Image 11](./image-11.png)


---

# How it works?

- Based on SuperCollider

- Sonic Pi GUI sends/receives OSC messages to server

- Server sends messages to SC

![Image 12](./image-12.png)


---

# OSC (Open Sound Control)

● Ongoing research project by Berkeley Center for New Music and Audio

Technology (CNMAT)

● Open Sound Control (OSC) is an open,

● Transport-independent,

● Message-based protocol based on UDP

● Developed for communication among computers, sound synthesizers, and

other multimedia devices.

![Image 13](./image-13.png)


---

# SuperCollider

- 1996, developed by James McCartney

- 2002, released as Open-source

- Audio Synthesis and algorithmic composition

- Three main components

- scsynth: analysis, synthesis, and processing

- sclang: interpreted programming language. Not DSL

- scide: IDE

![Image 14](./image-14.png)


---

# Page 16

https://sonic-pi.net


---

# Page 17

![Image 15](./image-15.png)


---

# Page 18

![Image 16](./image-16.png)


---

# Page 19

![Image 17](./image-17.png)


---

# Page 20

![Image 18](./image-18.png)


---

# Further information about MIDI

https://newt.phys.unsw.edu.au/jw/notes.html

![Image 19](./image-19.png)

**Links:**

- [https://newt.phys.unsw.edu.au/jw/notes.html](https://newt.phys.unsw.edu.au/jw/notes.html)


---

# Page 22

![Image 20](./image-20.png)


---

# Page 23

![Image 21](./image-21.png)


---

# Page 24

![Image 22](./image-22.png)


---

# Page 25

![Image 23](./image-23.png)


---

# Page 26

![Image 24](./image-24.png)


---

# Page 27

![Image 25](./image-25.png)


---

# Page 28

![Image 26](./image-26.png)


---

# Page 29

![Image 27](./image-27.png)


---

# Related Links

1. Sonic Pi Essentials Book -

2. https://www.raspberrypi.org/magpi/issues/essentials-sonic-pi-v1/

3. TOPLAP - http://toplap.org

4. Live Code Slack - http://live-code-slack.herokuapp.com/

5. Algorave - http://algorave.com

6. Sonic Pi on Github - https://github.com/samaaron/sonic-pi

7. Sonic Pi Google Group - https://groups.google.com/forum/#!forum/sonic-pi

8. Sonic Pi on Gitter.im - https://gitter.im/samaaron/sonic-pi


---

# Final Project Proposal

Reference Page

Project proposal template

**Links:**

- [https://teaching.alptugan.com/en/category/cod-412-sound-in-new-media/](https://teaching.alptugan.com/en/category/cod-412-sound-in-new-media/)
- [https://teaching.alptugan.com/en/wp-content/uploads/2020/04/MertolOkcu-Cod412-FinalProposal.pdf](https://teaching.alptugan.com/en/wp-content/uploads/2020/04/MertolOkcu-Cod412-FinalProposal.pdf)
