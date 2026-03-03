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
routerMode: hash
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
image: /image-1.jpeg
layout: image
---

# Live Coding?

<v-clicks>

- Programming practice rather than a language
- Music
- On the fly programming
- Text-based
- Node-based


</v-clicks>



---
layout: two-cols
class: m-auto
---

# Brief History of Live Coding

- 2000, SLUB played in London

- 2004, TOPLAP Organization

- 2011, Algorave (N. Collins, A. McLean)

::right::

![Image 2](/image-2.jpeg)


---
layout: two-cols
class: m-auto
---

# Algorave
An algorave is an event where people dance to music generated from algorithms, often using live coding techniques. 

📺 [Watch ResidentAdvisor](https://www.youtube.com/watch?v=S2EZqikCIfY&t=28s&ab_channel=ResidentAdvisor)

::right::

![](/image-3.jpeg)


---
layout: two-cols
class: center m-auto
---

# Algorave Generation

Watch the 📺 [documentary](http://www.youtube.com/watch?v=S2EZqikCIfY){style="color:#ffcc00"}

::right::

<a href='http://www.youtube.com/watch?v=S2EZqikCIfY' target='_blank'><img w-120 src='/image-5.jpeg' /></a>



---
layout: two-cols
class: center m-auto
---

# Coding the Party

Watch the 📺 [documentary](http://www.youtube.com/watch?v=BcbsDcZ9k-A){style="color:#ffcc00"}

::right::

<a href='http://www.youtube.com/watch?v=BcbsDcZ9k-A' target='_blank'><img w-120 src='/image-6.jpeg' /></a>


---
layout: two-cols
class: center m-auto
---

# The Creative Power of Live Coding

Watch the 📺 [documentary](http://www.youtube.com/watch?v=uA4SDytz8Aw){style="color:#ffcc00"}

::right::

<a href='http://www.youtube.com/watch?v=uA4SDytz8Aw' target='_blank'><img w-120 src='/image-7.jpeg' /></a>

---
layout: two-cols
class: center m-auto
---

# The Creative Power of Live Coding

Watch the 📺 [documentary](http://www.youtube.com/watch?v=Ix2b_qFYfAA){style="color:#ffcc00"}

::right::

<a href='http://www.youtube.com/watch?v=Ix2b_qFYfAA' target='_blank'><img w-120 src='/image-8.jpeg' /></a>


---
layout: two-cols
class: center m-auto
---

# DJ Kindohm 
[Mike Hodnick]{style="color:grey"}

📺  Watch the [performance](http://www.youtube.com/watch?v=Ix2b_qFYfAA){style="color:#ffcc00"}

⚙️ _Live coding tool → Tidalcycles_

::right::

<a href='http://www.youtube.com/watch?v=smQOiFt8e4Q' target='_blank'><img w-120 src='/image-9.jpeg' /></a>


---
layout: two-cols
class: center m-auto
---

# Joint Breakcore Live Coding Duo

📺  Watch the [performance](http://www.youtube.com/watch?v=XYe8AKYPUYc){style="color:#ffcc00"}

⚙️ _Live coding tool → Tidalcycles + [Troop](https://github.com/Qirky/Troop)_ 

::right::

<a href='http://www.youtube.com/watch?v=XYe8AKYPUYc' target='_blank'><img w-120 src='/image-10.jpeg' /></a>



---
layout: section
---

# Live Coding Tools


---
layout: center
---

# Sonic Pi
Developed by Sam Aaron, [sonic-pi.net](https://sonic-pi.net)

<div class='grid grid-cols-2 gap-4'>
<div>

![Image 11](/image-11.jpeg)

</div>

<div>

![Image 4](/image-4.jpeg)

</div>
</div>

---
layout: image
image: /image-12.jpeg
class: m-auto
title: How it works?
---

# <span class="bg-black bg-op-70 text-white p-2">How it works?</span>


<br>

<v-clicks>

<span class="bg-black bg-op-70 text-white p-2">Based on SuperCollider</span>

<span class="bg-black bg-op-70 text-white p-2">Sonic Pi GUI sends/receives OSC messages to server</span>

<span class="bg-black bg-op-70 text-white p-2">Server sends messages to OSC</span>

<span class="bg-black bg-op-70 text-white p-2">Tools → [TouchOSC](https://hexler.net/touchosc)</span>

</v-clicks>



---
image: /image-13.jpeg
layout: image
class: center pt-30
title: OSC (Open Sound Control)
---

# <span class='bg-black bg-op-70 text-white p-2'>OSC (Open Sound Control)</span>

<br>

<span class='bg-black bg-op-70 text-white p-2'>Ongoing research project by Berkeley Center for New Music and Audio Technology (CNMAT)</span>

<span class='bg-black bg-op-70 text-white p-2'>Open Sound Control (OSC) is an open.</span>

<span class='bg-black bg-op-70 text-white p-2'>Transport-independent.</span>

<span class='bg-black bg-op-70 text-white p-2'>Message-based protocol based on UDP.</span>

<span class='bg-black bg-op-70 text-white p-2'>Developed for communication among computers, sound synthesizers, and other multimedia devices.</span>



---
image: /image-14.jpeg
layout: image-left
backgroundSize: 100%
class: m-auto
---

# SuperCollider
Review the [web page](https://supercollider.github.io/) for more information. 

- 1996, developed by James McCartney

- 2002, released as Open-source

- Audio Synthesis and algorithmic composition

- Three main components

- scsynth: analysis, synthesis, and processing

- sclang: interpreted programming language. Not DSL

- scide: IDE

---
layout: center
---

# Sonic Pi Basics


<div class='grid grid-cols-4 gap-4'>
<div v-click>

![Image 15](/image-15.jpeg)

[Try this!]{style="color:grey"}

</div>

<div v-click>

![Image 16](/image-16.jpeg)

[Add more lines and notice the difference.]{style="color:grey"}

</div>

<div v-click>

![Image 17](/image-17.jpeg)

[Add more control to add periods and timing.]{style="color:grey"}

</div>

<div v-click>

![Image 18](/image-18.jpeg)

[Use actual note terminology to create tones.]{style="color:grey"}

</div>
</div>



---
layout: two-cols
class: m-auto
---
# Further Information About MIDI

Test using the same `Note name` and `MIDI number` on Sonic Pi.

🔗 [Reference](https://newt.phys.unsw.edu.au/jw/notes.html)

::right::

<img h-130 src='/image-19.jpeg' />



---

# Related Links

- Sonic Pi Essentials Book
- https://www.raspberrypi.org/magpi/issues/essentials-sonic-pi-v1
- TOPLAP - http://toplap.org
- Live Code Slack - http://live-code-slack.herokuapp.com
- Algorave - http://algorave.com
- Sonic Pi on Github - https://github.com/samaaron/sonic-pi
- Sonic Pi Google Group - https://groups.google.com/forum/#!forum/sonic-pi
- Sonic Pi on Gitter.im - https://gitter.im/samaaron/sonic-pi
- Tidalcycles - https://tidalcycles.org
- Strudel - https://strudel.cc


---

# Assignment

Record a live coding performance.
Use example codes as a starting point. Edit the original code to get different sound patterns.