---
theme: seriph
background: https://source.unsplash.com/0E_vhMVqL9g/1920x1080
title: Week 07 - ML5 FaceApi
exportFilename: "week07-ML5_FaceApi-"
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

# Machine Learning

Extending p5JS via machine learning libraries

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 208 - Week 07 Class <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---

<Toc />

<foot />

---
layout: full
---
<Youtube id='ad79nYk2keg' width='100%' height='100%'/>


---
layout: statement
---
# Which of the below AI projects don't exist yet?

<div text-6 py-10 class="h-center">
<div v-click py-2>
A) An AI robot with citizenship
</div>


<div v-click py-2>
B) A robot with a muscular skeletal system
</div>


<div v-click py-2>
C) AI that can read its owner's emotions
</div>


<div v-click py-2>
D) AI that develops emotions over time
</div>
</div>


---

# A
<Youtube id='E8Ox6H64yu8' width='100%' height='100%'/>

---

# B
<Youtube id='-e1_QhJ1EhQ' width='100%' height='100%'/>

---

# C
<Youtube id='mKHkCAdS0gY' width='100%' height='100%'/>

---

# D
<Youtube id='ie218UPTHiE' width='100%' height='100%'/>

---
image: https://source.unsplash.com/zwd435-ewb4
layout: image-left
---
# Artificial Intelligence and How Does it Work?

<div
v-motion
:initial='{ opacity: 0, y: -20 }'
:enter='{ opacity: 1, y: 0 }'
:duration='1000'
:delay='400'>
Artificial Intelligence (AI) is a form of technology that has the capability to learn and adapt to its environment, allowing it to make decisions and solve problems. Some of the application fields;
</div>

<h3 pt-5 v-click>Healthcare</h3>
<div v-click text-xs text-gray>AI-driven algorithms can be used to detect diseases from medical images like X-rays and CT scans.</div>
<br/>

<h3 v-click>Finance</h3>
<div v-click text-xs text-gray>Image analysis can help prevent and detect fraud in the financial sector, such as identity theft, money laundering, credit card fraud, and more.
</div>
<br/>

<h3 v-click>Security</h3>
<div v-click text-xs text-gray>Image analysis applications allows to detect criminal issues.</div>


<!--Health: Automated medical image analysis for early detection of diseases: AI-driven algorithms can be used to detect diseases from medical images like X-rays and CT scans. This can help doctors identify the condition of a patient faster, allowing for earlier intervention and improved outcomes.-->

---
image: https://source.unsplash.com/x5JU6lc82EA
layout: image
class: effect_Shadow
---
# Artifical Intelligence Hub
<div v-click text-6>
Artificial Narrow Intelligence (ANI)
</div>
<div v-click text-xs>
<b>Machine Learning:</b> Specialises in one area and solves a problem → Siri, Alexa, Cortana
</div>
<br/>
<div v-click text-6>
Artificial General Intelligence (AGI)
</div>
<div v-click text-xs>
<b>Machine Intelligence</b>: Systems refer to as smart as a human across the board.
</div>
<br/>
<div v-click text-6>
Artificial Super Intelligence (ASI)
</div>
<div v-click text-xs>
<b>Machine Consciousness</b>: An intellect that is much smarter than the best human brains in practically every field.
</div>

<!--https://www.mygreatlearning.com/blog/what-is-artificial-intelligence/-->


---
image: /imageH3.jpg
layout: image
class: effect_Shadow pr-100
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
<div drop-shadow py-6>
<img v-click w-45 src='https://ml5js.org/static/ml5_logo_purple-88e082b8dc81d8729f95bcc092db90c5.png'/>
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

<div text-8> 3. Goto → <a class="slidev-icon-btn opacity-50 !border-none !hover:text-white -mt-2" href='https://learn.ml5js.org/#/reference/face-api' target='_blank'>ml5js web page</a></div>

<div text-8 pt-5> 4. Navigate to → <a class="slidev-icon-btn opacity-50 !border-none !hover:text-white -mt-2" href='https://learn.ml5js.org/#/reference/face-api?id=examples' target='_blank'>FaceApi → Examples</a></div>

<div text-8 pt-5> 5. Goto Github Repository → <a class="slidev-icon-btn opacity-50 !border-none !hover:text-white -mt-2" href='https://github.com/ml5js/ml5-library/tree/main/examples/p5js/FaceApi/FaceApi_Image_Landmarks' target='_blank'>FaceApi_Image_Landmarks</a></div>

<div text-8 pt-5> 6. Copy the source code from → <a class="slidev-icon-btn opacity-50 !border-none !hover:text-white -mt-2" href='https://github.com/ml5js/ml5-library/tree/main/examples/p5js/FaceApi/FaceApi_Image_Landmarks' target='_blank'>sketch.js file</a></div>

<img v-click h-55 src='/s5.jpg'/>

---
src: /break.md
---

---
layout: image
image: /imageH.jpg
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

<Youtube id='3yqANLRWGLo' width='100%' height='100%'/>

---

# Apply mask in place of the user's head

<Youtube id='ZXX9mDuqL48' width='100%' height='100%'/>

---

# You can use Pose.Net from ml5

<Youtube id='EA3-k9mnLHs' width='100%' height='100%'/>

---
src: /assignment.md
---