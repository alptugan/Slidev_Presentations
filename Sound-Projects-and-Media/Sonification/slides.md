---
theme: apple-basic
css: unocss
image: https://cover.sli.dev
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
routerMode: hash
selectable: true
codeCopy: true
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
---

# COD 412 Sound Projects & Media

week 06 - Sonification

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
author: Hans Zimmer
source: German composer (1957-...)
---

<v-click hide> 

# Anything can become a musical sound. The wind on telegraph wires is a great sound; get it into your machine and play it and it becomes interesting.

</v-click hide> 

<img v-click="'+0'"  src="/hans.jpg" rounded-full w-80 abs-tr mr-65 mt-10/>


---
layout: section
---

# SONIFICATION

---
layout: center
class: text-9 
---

Sonification is the process of converting data into non-speech sound to convey information or patterns perceptibly through hearing. 

<style>
p {
  line-height: 45px;
}
  </style>

---
layout: center
class: text-9 
---

It transforms **numerical** or relational data into **acoustic** signals, like mapping data values to pitch or volume, as an alternative or complement to visual charts.

<style>
p {
  line-height: 45px;
}
  </style>



---
layout: image-left 
image: /image-1.png
---
# Geiger Counter

For example, the rate of clicking of a Geiger counter conveys the level of radiation in the immediate vicinity of the device.



---

# Community for Auditory Display (ICAD)

Data sonification have been explored in forums. Auditory display researchers have various backgrounds in science, arts, and humanities, like computer science, cognitive science, human factors, systematic musicology and soundscape design. Most of the proceedings are freely available through the Georgia Tech SMARTech repository.


![Image 2](/image-2.png)

[https://www.icad.org/](https://www.icad.org/)


---
layout: image-left
image: /test.width-800.jpg
backgroundSize: 100%
class: text-4  
---

# The Sonic Kayak

Environmental monitoring and experimental music instruments

- A research instrument to investigate underwater via various sensors and hydrophones

- Collects data in various types; time, date, GPS location

- Allow paddlers to hear real-time water temperature sonifications and underwater sounds

- Generates live music from marine world.

- Monitors underwater noise pollution.

- Uses for climate research

- [🔗 source 1](https://fo.am/activities/kayaks/) - [🔗 source 2](https://thentrythis.org/projects/sonic-kayaks/)


---
title: The Sonic Kayak Video
image: /image-3.png
layout: image
---

<span class='bg-black bg-op-70 text-white p-2'>[**Click to Watch**](https://vimeo.com/184935959)</span>




---
image: /image-4.png
layout: image
class: effect_Shadow
---

# faceOSC

by Kyle McDonald

- Detects & tracks face gestures

- Transmits gesture & pose over OSC (Open Sound Control)


**Links:**

- [http://www.farhadbahram.com/mii.html](http://www.farhadbahram.com/mii.html)
- [https://github.com/kylemcdonald/ofxFaceTracker](https://github.com/kylemcdonald/ofxFaceTracker)


---
image: /image-5.png
layout: image
class: effect_Shadow
---

# OSC (Open Sound Control)

● Ongoing research project by Berkeley Center for New Music and Audio Technology (CNMAT)

● Open Sound Control (OSC) is an open,  

● Transport-independent,

● Message-based protocol based on UDP (User Datagram Protocol)

● Developed for communication among computers, sound synthesizers, and other multimedia devices.



---
title: FaceOSC sonification
---

<Youtube id='2e5RHQMnC2Q' width='100%' height='450' />

---
image: /image-9.png
layout: image
---

# MAX

Visual Programming Language


---
layout: two-cols-header
class: pt-20
---

# Workflow

::right::
**MAX**
- Receive & parse the OSC messages.
- Sonificate the data.

::left::

**faceOSC** 
- Capture user face using camera.
- Convert digital data.
- Broadcast the data via OSC protocol.

---
layout: default
---

# NASA 

NASA has pioneered sonification projects in astronomy to make cosmic data audible, translating telescope observations into soundscapes. 

These efforts often combine data from multiple wavelengths, mapping brightness, position, and energy to pitch, volume, and timbre. 

[reference](https://www.friendsofnasa.org/2023/06/cosmic-harmonies-sonifications-from.html)


---
layout: image
image: /nasa01.jpg
---

# Cosmic Harmonies

This NASA series sonifies data from Chandra X-ray, Hubble, James Webb, and Spitzer telescopes. Examples include R Aquarii (jets as high notes, arcs like singing bowls), Stephan’s Quintet (galaxies as marimbas, shock waves as strings), and Messier 104 (X-rays as synth, infrared as strings). 

📺 [Watch the video](https://www.youtube.com/watch?v=QV8sYb5xqLE)

---
layout: image
image: /nasa02.jpeg
class: effect_Shadow pt-50
---

# Cassiopeia A

A supernova remnant sonified using Chandra X-rays (piano notes for hot gas), Webb infrared (strings/brass for dust), and Hubble data, revealing layered explosion dynamics. 

[reference](https://nasaspacenews.com/2024/09/space-data-now-in-sound-nasas-sonifications/)

---
layout: image
image: /nasa03.jpg
class: pt-35 effect_Shadow
---

# Other Examples
- **30 Doradus (Tarantula Nebula)**: Chandra X-rays as airy synths for shock waves, Webb infrared as low winds for cool gas. [nasaspacenews](https://nasaspacenews.com/2024/09/space-data-now-in-sound-nasas-sonifications/)
- **Pismis 24**: Hubble star cluster with stars as guitar notes (brightness to pitch/volume) and nebula as frequency drone. [science.nasa](https://science.nasa.gov/mission/hubble/multimedia/sonifications/)
- **NGC 6872**: Chandra X-rays as wind sounds for hot gas, Hubble optical as drones for galactic arms. [nasaspacenews](https://nasaspacenews.com/2024/09/space-data-now-in-sound-nasas-sonifications/)



---
layout: image
image: /twotone.jpg
title: TwoTone.io
class: text-12 effect_Shadow pt-20
---

<div
  v-motion
  :initial="{
    scale: 1,
  }"
  :enter="{
    scale: 1.03,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 500
    },
  }"
>

<span class='bg-black bg-op-70 text-white p-2'>[🔗 Try the app](https://twotone.io/)</span>


</div>



---
layout: section
---

# Inspiration
[📼 Tapeloops]{style="color:grey"}


---
layout: default
title: Tapeloop
---

<Youtube id='OgmvJOZ-zk8' width='100%' height='450' />

---
layout: default
title: Tapeloop Tutorial 01
---

<Youtube id='hER3s1NPr_U' width='100%' height='450' />


---
layout: default
title: Tapeloop Tutorial 02
---

<Youtube id='Ewf3QSbDFD4' width='100%' height='450' />

---
layout: default
title: Tapeloop Tutorial 03 - Apply Effects
---

<Youtube id='-QIN_4VybDQ' width='100%' height='450' />


