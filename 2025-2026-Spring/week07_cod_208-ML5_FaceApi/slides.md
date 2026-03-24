---
theme: apple-basic
css: unocss
image: /cover.avif
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
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
hideInToc: true
---

# Teachable MAchine + ml5 + p5js

Using Custom Trained Models in p5js

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 208 - Week 07 Class <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---

<Toc columns="2" listClass="before:content-['★'] before:text-yellow-500" />

---
image: /ml.avif
layout: image-left
class: effect_Shadow
backgroundSize: 60%
---

# Machine Learning
<div
v-motion
:initial='{ opacity: 0, x: -20 }'
:enter='{ opacity: 1, x: 0 }'
:duration='1000'
:delay='400'>
Artificial Intelligence (AI) has revolutionized the way we approach creative coding practices. With the help of Machine Learning (ML), developers can now create projects that were previously impossible to achieve.
</div>

<div
v-motion
:initial='{ opacity: 0, x: 20 }'
:enter='{ opacity: 1, x: 0 }'
:duration='1000'
:delay='400'>

[ml5](https://ml5js.org/) and p5js are two popular frameworks that allow developers to incorporate AI into their projects, such as face tracking and faceapi. 

</div>

<div class='grid grid-cols-3 gap-4' top-5>
<div>
<img v-click w-40 src='/icons8-tensorflow-480.svg'/>
</div>
<div drop-shadow py-1>
<img v-click w-45 src='/ml5.png'/>
</div>
<div drop-shadow py-6>
<img v-click w-45 src='https://p5js.org/assets/img/p5js.svg'/>
</div>
</div>

<div drop-shadow v-click py-5>
TensorFlow is a powerful library for building deep learning models, which can be used to create various AI-powered applications.
</div>

---
image: /1_GCqsG3c2Xt-d9JQGUpytpQ.gif
layout: image-left
class: effect_Shadow
---
# Face Detection & Tracking

ml5.js has created an API to face-api.js that allows you to access face and face landmark detection.

>The ml5.js implementation of face-api does not support expressions, age or gender estimation.

<v-clicks>

- Recognise faces.
- Multiple faces recognition on-the-fly.
- Realtime tracking data.
- Boundary detection.
- Landmark Detection.
- Face Alignment.
</v-clicks>

---
layout: image-left
image: /reference__header-faceapi.png
class: text-left py-50 px-19
---

<div text-10>
p5js 🤝 ml5 Project
</div> 


<div py-5 v-click>Create a new project on openprocessing.</div>

<div v-click><span @click="$slidev.nav.next" class="p-0 rounded cursor-pointer" hover="bg-white bg-opacity-10">Include the ml5 library to your project<carbon:arrow-right class="inline"/>
  </span><img src=""/></div>

---
class: text-left 
---

# Import ml5.js on a openProcessing project

<div class='grid grid-cols-4 gap-4'>
  <div v-click text-4 color-gray w-45 py-5>
  Step 1.👷 Create Project
    <img py-2 src='/s1.jpg'/>
  </div>
  
  <div v-click text-4 w-45 py-5 color-gray>
  👁️Step 2. "SHOW ALL"
    <img py-2 src='/s2.jpg'/>
  </div>

  <div v-click text-4 w-45 py-5 color-gray>
  ⏬Step 3. Scroll down
    <img py-2 src='/s3.jpg'/>
  </div>

  <div v-click text-4 w-45 py-5 color-gray>
  ✅Step 4. Enable "ML5js"
    <img py-2 src='/s4.jpg'/>
  </div>
</div>

---
layout: center
---

# Import ml5.js Lib to p5js project

<div class='flex gap-4 h-60'>
<img class='flex-1 object-cover' src='/gettingstarted-sketch-folder-alpha.png' />
<img v-click class='flex-1 object-cover' src='/gettingstarted-import-lib-alpha.png' />
</div>

---
layout: center
---

# Your First Birds Classifier (Tutorial)

Follow the instructions on the following [**page**](https://docs.ml5js.org/#/)! 


---
layout: image-left
image: /s5.jpg
backgroundSize: 100%
---

# Use Example Codes on Github

<div text-6> 1. Goto → <a class="opacity-50 !border-none !hover:text-white -mt-2" href='https://learn.ml5js.org/#/reference/face-api' target='_blank'>ml5js web page</a></div>

<div text-6 pt-5> 2. Navigate to → <a class="opacity-50 !border-none !hover:text-white -mt-2" href='https://learn.ml5js.org/#/reference/face-api?id=examples' target='_blank'>FaceApi → Examples</a></div>

<div text-6 pt-5> 3. Goto Github Repository → <a class="opacity-50 !border-none !hover:text-white -mt-2" href='https://github.com/ml5js/ml5-library/tree/main/examples/p5js/FaceApi/FaceApi_Image_Landmarks' target='_blank'>FaceApi_Image_Landmarks</a></div>

<div text-6 pt-5> 4. Copy the source code from → <a class="opacity-50 !border-none !hover:text-white -mt-2" href='https://github.com/ml5js/ml5-library/tree/main/examples/p5js/FaceApi/FaceApi_Image_Landmarks' target='_blank'>sketch.js file</a></div>


---
src: /pages/break.md
---

---
layout: image
image: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjNubThvOXphMTBmc2Y1M3lsandrc2liMzA3ZWU1cjNuMmZ1M2trbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/a5viI92PAF89q/giphy.gif
class: text-center py-50 effect_Shadow
---

# Where to go from there?

<div v-click text-shadow-xl px-57>
???
</div>

<!---<div v-click text-shadow-xl text-center text-16 color-gray>
<b>20 minutes</b>
</div>-->

---

# Emotion Estimation 

<Youtube id='3yqANLRWGLo' width='100%' height='400'/>


---
layout: section
---

# Example Code 

<div class='flex gap-4 h-70'>
<div class='flex-1 object-cover'> Review the code and run it. Discover its limitations and possibilities. <a href="https://editor.p5js.org/alptugan/sketches/X7acB1rZE" target="_blank">Click</a> to view source code.<br><br>Refer to the following <a href="https://teaching.alptugan.com/Tutorials/P5JS---ml5-Face-mesh-Mask-Switch#1-designing-masks" target="_blank">article</a> to prepare your own mask.</div>
<img class='flex-1 object-cover' src='/example-code.jpg' />
</div>




---

# You can use Pose.Net from ml5

<Youtube id='EA3-k9mnLHs' width='100%' height='400'/>

---
src: /pages/assignment.md
---




---
layout: center
---

# References

- [Google's Teachable Machine](https://teachablemachine.withgoogle.com/)
- [ml5 Library](https://ml5js.org/)
- [Audio-based Model Training](https://teaching.alptugan.com/Tutorials/P5JS---ml5-Sound-Training)
- [Face API](https://teaching.alptugan.com/Tutorials/P5JS---ml5-Face-mesh-Mask-Switch)
- [tutorial/article](https://teaching.alptugan.com/Tutorials/P5JS---ml5-and-Teachable-Machine-Integration)

Search on YouTube using the keywords; <kbd text-yellow text-3>#ml5</kbd>, <kbd text-blue text-3>#p5js</kbd>, <kbd text-red text-3>#teachablemachine</kbd>

<style>
  ul li {
     list-style-type: none;
  }

  li a {
    margin-left: -20px;
  }

</style>