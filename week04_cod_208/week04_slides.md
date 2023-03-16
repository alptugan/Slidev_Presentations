---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Week 04 Presentation.
    Learn more at [Github](https://www.github.com/alptugan)
drawings:
    persist: true
transition: slide-up
aspect-ratio: 16/9
css: unocss
title: What Exactly Is Interactivity
download: true
exportFilename: "slidev-exported-week04"
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
    format: pdf
    timeout: 30000
    dark: true
    withClicks: false
    withToc: false
# controls whether texts in slides are selectable
selectable: true
---

# What Exactly Is Interactivity?

The overused and misunderstood term _Interactivity_

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 208 - Week 04 Class <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

--- 
image: /33417713_8043625.jpg
layout: image-left
---

# What is Interaction?
A cyclic process that involves at least two actors;

- Actors build a dialogue between each other. 
- Recall Campbell's *interactive systems*?
- A successful interaction depends on the quality of each subtask.
  - 👂Listening, 
  - 💬 Thinking,
  - 🗣️ Speaking.

<br>


<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: two-cols
---

# What Crawford says?

Interaction is a process in which two actors alternately listen, ask questions, and speak to each other in a cyclic manner. Interactivity must involve an iterative process. The conversation goes back and forth between actors. The quality of the interaction is technically;

::right::

<v-click >
  <div pl30 pt5 center flex text-center text-3xl animate-bounce-alt animate-count-infinite animate-duration-1s>
    <img border="rounded" width="100" src="/input.png"/>
    <span p5>input</span>
   </div>
</v-click>

<v-click>
  <div pl30 pt15 center flex text-center text-3xl animate-bounce-alt animate-count-infinite animate-duration-2.5s >
  <img border="rounded" width="100" src="/5656068.png">
  <span p5>process</span>
</div>
</v-click>

<v-click>
  <div pl30 pt15 center flex text-center text-3xl animate-bounce-alt animate-count-infinite animate-duration-4s >
  <img border="rounded" width="100" src="/1524855.png">
  <span>output</span>
  </div>
</v-click>


---
layout: image-right 
image: /full-shot-woman-checking-fridge_23-2149894801.webp
---

# Refregirator Case

Extending the branch argument, some claim that when you open a refrigerator and the little light inside turns on, and then you close the door and the light turns off, you are interacting with the refrigerator because it responds to your actions

<!-- https://sli.dev/guide/syntax.html#line-highlighting -->

```js {1|2|4-6|8-10}
function setRefregiratorLigh(value) {
    let lightState = value;
    
    if(lightState == "ON") {
      // Turn on the lights
    }
    
    else if(lightState == "OFF") {
      // Turn of the lights
    }
}
```

<arrow v-click="2" x1="400" y1="420" x2="590" y2="330" color="red" width="3" arrowSize="1" />


---
class: px-30 pt-20
---

# Key points of interaction;


<div grid="~ cols-3 gap-10" m="t-10">
  <div grid="~ cols-1 gap-2" m="t-2">
    <h2 v-click>Multiple Actors</h2>
    <img v-click  m="t-7" border="rounded" src="/3d-cartoon-men-illustration_1150-66065.webp">
  </div>

  <div grid="~ cols-1 gap-2" m="-t-2">
    <h2 v-click>Interaction vs Reaction</h2>
    <img v-click border="rounded" src="/gradient-light-bulbs-with-electricity_23-2149130380.webp">
  </div>

  <div grid="~ cols-1 gap-2" m="-t-2">
    <h2 v-click>Intellectual Dignity</h2>
    <img v-click border="rounded" src="/problem-solving-concept-with-statue_23-2149908691.webp">
  </div>
</div>

<!-- 
 There are two actors not one. But it doesn't mean that technologies we are using in our daily life are a matter of actor. They are just tools. You open the refregirator's door and the light turns on, you close the door and it turns off. This isn't an interaction. This is just a reaction.
- There must be an intellectual dignity. Refrigerator listens to your action, thinks by switching on/off the switch, and speaks to do on or off the light. But this kind of interaction is simple.
-->



---
preload: false
layout: center
---


<div class="w-100 relative mt-6">
  <div class="center relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-square.png"
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Interaction
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1.4,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>


---
layout: quote
class: px-60
---

# Is Everthing Subjective?
>Plenty of people claim that everything is subjective, so I won’t try to convince you if you belong to that tribe. But if you’re willing to grant the existence of occasional objective truths, here’s an explanation that offers some practical value for a designer.

---
image: /photo-1598024055266-e772a5f8c128.webp
layout: image 
class: text-center pt-20% text-shadow-lg 
---

# Reading a Book?
Is reading a book interactive act?

<v-click>

A book can't listen or think.
</v-click>

<v-click>

A book can only speak; it speaks its words as we read them. 
</v-click>

<v-click>

Eventually, a book cannot interpret your feelings, thoughts...
</v-click>

---
layout: image
image: /photo-1520483691742-bada60a1edd6.webp 
class: text-center px-50 text-shadow-lg
---

# Dancing?

<v-click>

>While dancing with another does provide an avenue of interaction, the interaction is between the dancers, not between the *dancers* and the *music*.
</v-click>

<v-click>

Dancing alone to the music is not interaction
</v-click>

<v-click>

it is participation
</v-click>

---
layout: image
image: /photo-1581291518633-83b4ebd1d83e.webp
class: text-left pr-130 text-shadow-lg
---

# User Interface (UI)
<p color-white style="opacity:100">The study of user interface is a contemporary derivative of the field of human factors. Its scope is relatively narrow, with the aim of enhancing the interaction between individuals and electronic devices. Consequently, some individuals may favor the term "human-computer interface" to describe this field. This discipline prioritizes communication over interactivity.</p>

<v-click>

Interactivity design focuses on optimizing the user-computer thought process and differs from user interface design, which only optimizes communication. User interface design doesn't address software's thinking content or core behaviors.
</v-click>

---
layout: image-left
image: /premium_photo-1663047504447-d54e624ef2d5.webp
class: text-left text-shadow-lg
---
# Graphic Design and Multimedia
Some confuse graphic design with interactivity design, but visually effective page design is only part of the overall interactivity design task. 

<v-click>

The idea of separating design into graphic and "interactivizing" steps is erroneous since good interactivity design integrates form with function. 
</v-click>

<v-click>

Holding onto expertise in graphic design without embracing interactivity design makes one a graphic designer, not an interactivity designer.
</v-click>

---
layout: image
image: /photo-1593073862407-a3ce22748763.webp
class: text-center py-50
---

# Conslusion
That is, it generates guidelines for good design that make sense
<style>
h1, p {
  color: #fff !important;
  text-shadow: 2px 2px 10px black;
  opacity: 1 !important;
}
</style>

---
layout: image-left
image: /photo-1599825919241-ace91951e68c.webp
class: text-center pt-50%
---

# BREAK
10 mins.

Then lab study...

---
transition: slide-up
class:  m-0 text-left text-shadow-lg p-0
---

<div class="container">
  <div class="box">
    <p>14th of March - PI Day</p>
  </div>
</div>

<style>
.box {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

.container {
    background-image: url("/2023_pi_day.jpg"), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}

</style>

---
layout: iframe
transition: slide-up
class:  m-0 text-left text-shadow-lg p-0
url: https://editor.p5js.org/alptugan/full/AqreT53wu
---

