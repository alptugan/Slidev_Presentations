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
  secondary: "#e2d292"
hideInToc: true
---

# AI + Machine Learning

Training Machine Models with Teachable Machine

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 208 - Week 06 Class <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---

<Toc columns="2" listClass="before:content-['★'] before:text-yellow-500" />

---
layout: full
title: What is AI?
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

# A. Humanoids

<Youtube id='E8Ox6H64yu8' height='400' width="100%"/>

---

# B. Boston Dynamics (2025)
<Youtube id='-e1_QhJ1EhQ' width='100%' height='400'/>

---

# B. Boston Dynamics (2026)
<Youtube id='UNorxwlZlFk' width='100%' height='400'/>

---

# C. AI that can read its owner's emotions
<Youtube id='mKHkCAdS0gY' width='100%' height='400'/>

---

# D. AI that develops emotions over time
<Youtube id='ie218UPTHiE' width='100%' height='400'/>

---
image: /ai.avif
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
image: /aihub.avif
layout: image-left
backgroundSize: 100%
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

# Apply mask in place of the user's head

<Youtube id='ZXX9mDuqL48' width='100%' height='400'/>

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

**Search on YouTube using the keywords; #ml5 #p5js #teachablemachine

<style>
  ul li {
     list-style-type: none;
  }

  li a {
    margin-left: -20px;
  }

</style>