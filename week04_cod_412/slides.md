---
theme: seriph
background: https://source.unsplash.com/collection/262224/1920x1080
class: text-center px-40
highlighter: shiki
lineNumbers: true
info: |
    ## Week 04 Presentation.
    Learn more at [Github](https://github.com/alptugan/Slidev_Presentations)
drawings:
    persist: true
transition: slide-up
aspect-ratio: 16/9
css: unocss
title: Three Listening Modes
download: true
exportFilename: "slidev-exported-week04-COD412"
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

# Hearing Through Listening

>We gestate in Sound, and are born into Sight, Cinema gestated in Sight, and was born into Sound.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    COD 412 - Week 04 Class <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

--- 
class: py-10
---

# Michel Chion

<div grid="~ cols-2 gap-20" m="-t-2">
  <div v-click>
    Born in Creil, France, Chion teaches at several institutions in France and currently holds the post of Associate Professor at the University of Paris III: Sorbonne Nouvelle where he is a theoretician and teacher of audio-visual relationships.
    <br/>
    <br/>
    Worked with Pierre Schaeffer at the French Radio and Television Organisation (ORTF)
  </div>

  <img v-click h-md pb-10 border="rounded" src="/proxy.jpg">
</div>

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
class: px-20
---

# Audiovison

<div grid="~ cols-2 gap-20" m="-t-2">
  <div v-click>
    <i>"The emotional, physical and aesthetic value of a sound is linked not only to the causal explanation we attribute to it but also to its own qualities of timbre and texture, to its own personal vibration. So just as directors and cinematographers (even those who will never make abstract films) have everything to gain by refining their knowledge of visual materials and textures, we can similarly benefit from disciplined attention to the inherent qualities of sounds."</i>
    <br/>
    <br/>
    <div><a href="https://monoskop.org/images/6/6d/Chion_Michel_Audio-Vision.pdf">Access The Book on Monoskop</a></div>
  </div>

  <img v-click h-md pb-10 border="rounded" src="/7194QfaHvsL.jpg">
</div>

---
layout: image
image: https://source.unsplash.com/collection/2213137/1920x1080
class: text-left py-40 px-40
---

# Listening
When we ask someone to talk about what they have heard, their responses vary greatly depending on the type of listening they employed. 

According to Chion there are three distinct types of listening: 
1. Causal Listening
2. Semantic Listening
3. Reduced Listening
  
<style>
h1, p {
  color: #fff !important;
  text-shadow: 2px 2px 10px black;
  opacity: 1 !important;
}
</style>

---
layout: image-left
image: https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDg5MzM0YzhjZjRlNjE4ZWRkZmJkZTY1NTQ5OWNhNzNlZGUzN2YyMiZjdD1n/1VTFy4EcV9GfVqa3A6/giphy.gif
class: text-left px-10
transition: slide-left
---

# Causal Listening
<v-clicks>

- Causal Listening is one of the most common. 
- Focuses on understanding the source of the sound.
- Listeners focus on the narrative, or the story behind the audio.

  *E.g: Shaking a gift-box.*
- We must be careful not to overestimate the accuracy and potential of causal listening. It may not be able to provide sure and precise data solely by analyzing sound. In reality, causal listening is not only the most common but also the most easily influenced and deceptive mode of listening.
</v-clicks>

---
layout: image-left
image: /photo-1530281700549-e82e7bf110d6.webp
class: text-left
transition: slide-left
---
# Identifying Causes: From the Unique to the General
There are various types of Causal Listening.

<v-click>

Sometimes we can identify a specific individual form his voice. 
</v-click>


<v-click>

Or we can identify a particular object by hearing the sound of it.
</v-click>

<v-click>

<p color-red><carbon:arrow-right color-yellow class="inline"/> A dog can identify its owner among hundreds of people but can the master do it?</p>
</v-click>


---
layout: image
image: /photo-1593697909683-bccb1b9e68a4.webp
class: text-left text-shadow-lg pr-100
transition: slide-left
---
# Example Case: Radio Annoucer
We can listen to a radio speaker everyday without having any idea about his or her imagery. Nevertheless this does not stop us to link him or her in our memory. The physical traits of the announcer may remain blank in our mind but we can recall the individual without seeing its visual qualities like hair color, body type, or his/her name.

<iframe mt-20 v-click allow="fullscreen" frameBorder="0" height="200" src="https://giphy.com/embed/gQwPvC7gfIl6TMlCpm/video" mute autoplay width="290"></iframe>

---
layout: image-left
image: https://source.unsplash.com/collection/8776009/
class: text-left
transition: slide-up
---
# Semantic Listening
Semantic listening is when listeners pay attention to the meaning and context of the audio content, such as lyrics in a song or dialogues in a movie.

Learning a spoken language.

Morse code, for instance, is a great example of semantic listening because every beep, tone, and click contributes to convey a message.

<Youtube v-click width="100%" height="auto" id="xsDk5_bktFo" />


---
layout: image-right
image: https://source.unsplash.com/collection/1446435/
class: text-left
transition: slide-up
---
# Reduced Listening
Reduced listening is when the listener pays attention to the sound itself, independent of any contextual information.

<v-click>

Reduced listening is the term coined by <i text-yellow>Pierre Schaeffer</i> to describe a mode of listening that concentrates on the <i text-yellow>characteristics</i> of the sound itself, rather than its origin or significance. 
</v-click>

<v-click>

Reduced listening is when the listener pays attention to the sound itself, independent of any contextual information.
</v-click>

---
layout: image-left
image: https://source.unsplash.com/collection/3110980/
class: text-left
transition: slide-up
---
# BREAK
10 mins.


---
layout: image-left
image: https://source.unsplash.com/collection/8495782/
class: text-left
transition: slide-up
---
# Requirements of Reduced Listening
<v-clicks>
<li>Sonic treats of sound.</li>
<!--  unaffected by its source or the interpretation of its significance. The physical qualities of the sound is independent from its subjective meaning. It is like arithmetics 2+2=4 which is a scientific fact.-->
<li>Pitch, timbre, frequency, amplitude, wave-length</li>
<li>Not like a solfeggio practice.</li>
<!--Sound cannot be defined solely by its physical properties. There are many other ingredients that affects the individual’s perception of sound. Otherwise we call reduced listening as a traditional solfeggio paradigm.-->

<li>Creating a descriptive system for sounds</li>
<!--Schaeffer demonstrated the feasibility of creating a descriptive system for sounds that is not influenced by their cause. However, his efforts in proposing a classification system in his Traite des objets musicaux were only the beginning, and the system is not without flaws and limitations. Nevertheless, the fact that a system exists is a significant achievement.-->
<li>Disciplined attentiion on the inherent attributes of audible things.</li>
</v-clicks>

---
layout: image-right
image: https://source.unsplash.com/collection/5046259/
class: text-left
transition: slide-up
---

# What Is Reduced Listening Good For?
In film and television, sounds are typically used for their ability to evoke images, convey meaning, or suggest particular associations with real or imaginary causes or texts, rather than as purely formal elements in their own right.
<v-clicks>

<li>In films, sounds evoke contrete and abstract emotions</li>
<li>Film, video, art and design students can benefit from Reduced Listening</li>
<li>Not like a solfeggio practice.</li>
</v-clicks>

---
transition: slide-up
class: p-0 m-0
---

<Youtube width="100%" height="100%" static id="HdNBdKwgudk" />


---
transition: slide-up
class:  m-0 text-left text-shadow-lg p-0
---
<div id="imge">
  <img absolute src="https://source.unsplash.com/collection/9468077"/>
</div>

<div absolute  p-40>
<h1>Assignment</h1>
- Choose a main theme. <br>
- Produce sound samples based on this main theme, as in the previous video. <br>
- Create a <i text-yellow>Reduced Listening</i> experience by supporting the sounds you produce with visual stimuli.<br>
- Concentrate and listen to the recordings that your classmate has made. Describe the sounds you hear in writing.
</div>

<style>
#imge {
  filter: blur(4px) !important;
}
</style>

---
transition: slide-up
class:  m-0 text-left text-shadow-lg p-0 
---
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
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
    background-image: url("https://source.unsplash.com/collection/9468077"), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
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

<Youtube width="100%" height="100%" static id="WqksLUiX2cw" />
