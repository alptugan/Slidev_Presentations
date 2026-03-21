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

Audiovisual 

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


---
transition: fade-out
layout: quotes
author: Aceti, Gibson & Müller Arisona
source: (2013)
---

# Live visuals have moved far beyond simple 'decorations' and are reshaping society, architecture, identity, and the boundaries between real and virtual experience.

<!--<img v-click="'+0'"  src="/edgard2.jpg" rounded-full w-100 abs-tr mr-10 mt-0/>-->


---
layout: image
image: /live-performance.jpg
class: effect_Shadow pt-35
---

<h1><span class='bg-black bg-op-70 text-white p-2'>What Is Audiovisual Performance?</span></h1>

<br>

<v-clicks>

<span class='bg-black bg-op-70 text-white p-2'>- An art form where **sound and image are co-created in real time** </span>

<span class='bg-black bg-op-70 text-white p-2'>- Involves performance, computation, interaction, and perception </span>

<span class='bg-black bg-op-70 text-white p-2'>- Encompasses VJing, live coding, video synthesis, data-driven visuals, and more </span>

<span class='bg-black bg-op-70 text-white p-2'>- The relationship between audio and visual is **not illustrative — it is structural** </span>

</v-clicks>

<!--
The key point here is that the best audiovisual work is not music with a video playing behind it — the two elements are conceptually and technically interdependent.
-->


---
layout: image-left
image: /history.jpg
transition: slide-left
class: text-3.3
---

# A Brief History I

<div class="space-y-4">

<div class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">4th - 6th Century</span><br/>
<b>Pythagoras & Aristotle</b> first philosophical correlations between sound and color.
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1704</span><br/>
<strong>Newton</strong> mapped musical intervals to spectral colors in <i>Opticks</i>.
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1725</span><br/>
The <strong>"Color Organs"</strong> — Louis-Bertrand Castel's <em>Clavecin Oculaire</em> attempted to map musical tones to colored light.
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1919</span><br/>
<strong>Thomas Wilfred</strong> — <em>Clavilux</em>; coined the term <em>"lumia"</em>
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1930s</span><br/>
<strong>Oskar Fischinger</strong> — abstract visual music films synchronized to classical music.
</div>


<div class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1960s</span><br/>
<strong>John Whitney</strong> — analog computer graphics synchronized to electronic music.
</div>

</div>


<!--
Each era represents a leap in the tools available — from physical optics, to analog electronics, to software.
-->


---
layout: image-left
image: /Transmediale-2010-Ryoji_Ikeda-Data-Tron-1.jpg
transition: slide-left
class: text-3.2
---

# A Brief History II

<div class="space-y-4">

<div class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1960s–70s</span><br/>
<strong>Video Synthesis</strong> — Nam June Paik and Stephen Beck developed early video instruments.
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1975</span><br/>
<strong>Paul Sharits</strong> — <em>Shutter Interface</em> 4-screen flicker film with synchronized tones.
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">1970s</span><br/>
<strong>Steina & Woody Vasulka</strong> — video synthesizer experiments converting video → audio.
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">2008</span><br/>
<strong>Ryoji Ikeda</strong> — <em>Test Pattern</em> series: barcode imagery + explosive noise at threshold of perception
</div>

<div v-click class="border-l-4 border-yellow-400 pl-4">
<span class="text-yellow-400 font-bold">2010</span><br/>
<strong>Live coding movement</strong> — TOPLAP, Algorave, Hydra, TidalCycles.
</div>

</div>



---
layout: default
transition: slide-left
---

# Audiovisual Content & Synesthesia


<div class="grid grid-cols-2 gap-6 mt-4">

<div v-click>

<div class="p-4 bg-blue-900/30 rounded border border-blue-500/30">
<h3 class="text-blue-300 font-bold">🎯 Direct Mapping</h3>
<p class="mt-2 text-gray-300">Sound amplitude → Visual brightness. A one-to-one relationship — the simplest and most immediate form of AV coupling.</p>
</div>

</div>

<div v-click>

<div class="p-4 bg-red-900/30 rounded border border-blue-500/30">
<h3 class="text-red-300 font-bold">∑ FFT Analysis</h3>
<p class="mt-2 text-gray-300"><b>Fast Fourier Transform</b> — breaking audio into frequency bins to drive specific visual parameters.</p>
<p class="mt-2 text-gray-300"></p>
</div>

</div>

<div v-click>

<div class="p-4 bg-green-900/30 rounded border border-blue-500/30">
<h3 class="text-green-300 font-bold">Data Sonification</h3>
<p class="mt-2 text-gray-300">Turning visual data — pixels, depth maps, sensor input → <em>into sound</em>.</p>
</div>

</div>

<div v-click>

<div class="p-4 bg-yellow-900/30 rounded border border-blue-500/30">
<h3 class="text-yellow-300 font-bold">The Unified Goal</h3>
<p class="mt-2 text-gray-300">Creating a <em>unified</em> perception where the audience cannot distinguish the origin of the stimulus.</p>
</div>

</div>

</div>

<!--
FFT is the workhorse of AV systems. Every visualization reacting to music frequency bands is using some form of FFT decomposition.
-->


---
layout: image-right
image: /arselec.jpg
transition: slide-left
class: text-3.8
---

# Global Events

Major festivals pushing these technologies to the limit:

<v-clicks>

<div class="space-y-5 mt-4">

<div>
<span class="text-yellow-400 font-bold text-lg">MUTEK</span> <span class="opacity-60 text-sm">Montreal / Global</span><br/>
The premier festival for electronic music and digital creativity.
</div>

<div>
<span class="text-yellow-400 font-bold text-lg">Sónar</span> <span class="opacity-60 text-sm">Barcelona</span><br/>
A massive convergence of music, creativity, and technology.
</div>

<div>
<span class="text-yellow-400 font-bold text-lg">Ars Electronica</span> <span class="opacity-60 text-sm">Linz</span><br/>
Intersection of art, technology, and society since 1979.
</div>

<div>
<span class="text-yellow-400 font-bold text-lg">CTM Festival</span> <span class="opacity-60 text-sm">Berlin</span><br/>
Adventurous music and audio-visual art.
</div>

</div>

</v-clicks>

<!--
If you want to see where the field is heading, these four festivals are essential viewing. Many of them archive performances on YouTube and Vimeo.
-->

---
layout: section
---

# Showcase of Audiovisual Works


---
layout: image-left
image: /datamatics-datatron_8k-1-3011784385.jpg
transition: slide-left
class: text-4 
backgroundSize: 100%
---

# Ryoji Ikeda

### *datamatics*

<v-click>

**Artist:** Ryoji Ikeda · Japan

**Concept:** Using **pure data** as raw artistic material:
- DNA sequences
- Hard drive error logs
- Geographic coordinates

</v-click>

<v-click>

**System:**
- Extreme precision monochrome visuals
- High-frequency ultrasonic sound pulses


</v-click>

<v-click>
<div class="mt-4 p-3 border border-yellow-400/40 rounded-lg">
🎬 <a href="https://www.youtube.com/watch?v=y_Y6uC9uVvA" target="_blank" class="text-yellow-400">Ryoji Ikeda — datamatics [ver.2.0]</a>
</div>
</v-click>

<!--
Ikeda is perhaps the most rigorous practitioner in this field. His work strips away all metaphor — the data IS the content.

**Concept:**
- Converts data (any binary file) into ultra-dense barcode imagery projected at extreme scale
- Synchronized with a precisely composed soundtrack of explosive, pulsating noise
- Works at the threshold of human visual and auditory perception

**Audio-Reactive Mechanism:**
- The **data-to-image pipeline** is itself driven by the underlying data stream
- Sound and image are **generated from the same source data** — not layered post-hoc
- Tempo, rhythm, and spectral content of sound mirror the scan rate of visual patterns

**Listening Mode invoked:**
- Primarily **Reduced Listening** — the sound is stripped of all cultural association; pure signal
- Forces confrontation with **audio as material phenomenon**


-->

---
layout: image-left
image: /henke.jpg
transition: slide-left
class: text-4
---

# Robert Henke

### *Lumière*

<v-click>

**Artist:** Robert Henke · aka **Monolake** · Berlin

**Concept:** Using **high-powered lasers** as a visual medium controlled entirely via Max/MSP.

</v-click>

<v-click>

**System:**
- Max/MSP patcher generating vector paths
- ILDA protocol → laser projectors
- Audio oscillators tuned to the same frequency ratios as the geometric forms

</v-click>

<v-click>
<div class="mt-4 p-3 border border-yellow-400/40 rounded-lg">
🎬 <a href="https://www.youtube.com/watch?v=7cmkZfkuMR8" target="_blank" class="text-yellow-400">Robert Henke — Lumière II</a>
</div>
</v-click>

<!--
Lumière is a masterclass in constraint-based art. By limiting the medium to laser vectors, Henke achieves a purity of mapping between sound and image.
-->

---
layout: two-cols-header
transition: slide-left
class: text-3.8 pr-5
---

# Holly Herndon

::left::

### *PROTO*

<v-click>

**Concept:** **Human–AI collaboration** as compositional method.

> **"Spawn"** — an AI "baby" trained on the voices of Herndon's ensemble.

</v-click>

<v-click>

**Live Setup:**
- Real-time vocal processing and manipulation
- Generative visuals reacting to the AI's training data activations
- The ensemble *teaches* the AI during rehearsal; it *performs* live

</v-click>

::right::

### *PROTO PPROCESS*

<v-click>



**Themes Explored:**
- Ownership and authorship of AI-generated music
- The voice as dataset and instrument
- Collective training vs. individual creativity

<Youtube id='6baj34lxF4g' width='100%' height='200' />


</v-click>



<!--
Holly Herndon's work is critically important right now because it's one of the first rigorous artistic engagements with AI as collaborator rather than tool.
-->

---
layout: two-cols-header
class: pr-5 text-2.6
---

# Olivia Jack

::left::

### Live Performance

Olivia Jack develops and performs with Hydra — the browser-based video synthesizer she created. 

`a.fft[0]` = bass, `a.fft[1]` = low-mids, `a.fft[2]` = mids, `a.fft[3]` = highs

<Youtube id='vEqq5zFlrig' width='100%' height='300' />


::right::

### Hydra Live Coding

```javascript
a.setSmooth(0.8)  // smooth FFT response
noise(
  () => 3 + a.fft[0] * 10,
  () => 0.2 + a.fft[3] * 0.5
)
  .mult(
    osc(
      () => a.fft[1] * 40, 
      0.05
    ).rotate(() => a.fft[2])
  )
  .color(
    () => a.fft[0],
    () => 1 - a.fft[1],
    () => a.fft[3]
  )
  .modulateScale(src(o0), 
    () => 1 + a.fft[1] * 0.3
  )
  .out(o0)
```

<p class="text-2.5 text-gray-400 m-0! p-0!">Reference: Ribas, L. (2012). <em>Audiovisual Dynamics</em>. xCoAx. | hydra.ojack.xyz</p>


<style>
p {
  line-height: 1.1rem;
}

</style>

<!--

**Context:**
- Olivia Jack develops and performs with Hydra — the browser-based video synthesizer she created
- Performs in Algorave contexts alongside live coders using TidalCycles / SuperCollider
- **All code is projected for the audience** — the process is transparent, performative, political

**Audio-Reactive Mechanism:**
- Web Audio API provides **real-time FFT** of incoming audio (mic or soundcard)
- `a.fft[0]` = bass, `a.fft[1]` = low-mids, `a.fft[2]` = mids, `a.fft[3]` = highs
- These values **modulate any parameter** of the visual signal chain in real time

**Listening Mode invoked:**
- **Causal Listening** (audience hears code being typed, sees output)
- **Semantic Listening** (for coders reading the live code projected)
- Unique: **Computational Listening** — the machine listens and responds autonomously

-->

---
layout: default
---

# Beyond Chion — More Listening Dimensions

<div class="grid grid-cols-2 gap-3 mt-0">

<div v-click class="bg-green-500/10 border border-green-400/40 rounded-xl p-5">
  ⚡ / 😴 <h3 class="text-green-300 font-bold mb-0">Active vs. Passive Listening</h3>
  <p class="text-3 text-gray-300 mt-1!">Listening oscillates between <strong>passive/unconscious monitoring</strong> and <strong>active/alert attention</strong> — a survival mechanism. A disruptive sound shifts us into active mode automatically.</p>
  <p class="text-xs text-gray-400 m-0! p-0!">— Gomes et al. (2021)</p>
</div>

<div v-click class="bg-orange-500/10 border border-orange-400/40 rounded-xl p-5">
  🤖 <h3 class="text-orange-300 font-bold mt-0 p-0">Computational Listening</h3>
  <p class="text-3 text-gray-300 mt-1!">When computation becomes part of the environment, listening is no longer purely human. Meta-environments <strong>listen themselves</strong>, becoming agents — listening is "a hybrid of human and computational operations."</p>
  <p class="text-xs text-gray-400 m-0! p-0!">— Carvalhais, in Gomes et al. (2021)</p>
</div>

<div v-click class="bg-red-500/10 border border-red-400/40 rounded-xl p-5">
  <div class="text-xl mb-1">🌍</div>
  <h3 class="text-red-300 font-bold mb-2">Soundscape Listening (Schafer)</h3>
  <p class="text-3 text-gray-300 mt-1!">R. Murray Schafer (1977): the soundscape is "sound as a form of collective identity." We listen not just to sounds but to <strong>environments as cultural texts</strong>. Basis for soundscape composition.</p>
  <p class="text-xs text-gray-400 m-0! p-0!">— Çamcı et al. (2015), Gomes et al. (2021)</p>
</div>

<div v-click class="bg-cyan-500/10 border border-cyan-400/40 rounded-xl p-5 mb-0! pb-0!">
  <div class="text-xl mb-1">👁</div>
  <h3 class="text-cyan-300 font-bold mb-2">Audio-Vision (Chion)</h3>
  <p class="text-3 text-gray-300 mt-1!">When sound and image co-exist, we don't just hear or just see — <strong>synchresis</strong> fuses them into a unified cross-modal perceptual event. Each modality shapes the other.</p>
  <p class="text-xs text-gray-400 m-0! p-0!">— Ribas (2012), Chion (1994)</p>
</div>

</div>


<style>

p {
  line-height: 1.2rem;
}

</style>  

---
layout: section
---

# Sound–Image Relations

---
transition: fade-out
layout: quotes
author: Ian Andrews, cited in Aceti et al. (2013)
source: Theories of Audiovisual Dynamics
---

# The 'purest' form of the audiovisual is one where there is a direct causal relation between audio and video — video being a direct consequence of the audio signal, or audio generated directly from graphics.



---
layout: default
---

# The Synthetic Audiovisual Interface
## Jihoon Kim, in *Live Visuals* (Aceti et al., 2013)

<v-clicks>

Kim defines works that:
1. **Translate image into sound or vice versa** by unearthing the material attributes of media
2. **Push the threshold** of the relation between hearing and seeing

</v-clicks>

<div class="grid grid-cols-3 gap-4 mt-6">

<div v-click class="bg-white/5 border border-white/20 rounded-xl p-4 text-center">
  <div class="text-2xl mb-2">🎞</div>
  <h4 class="text-yellow-300 text-sm font-bold mb-1">Celluloid Phase</h4>
  <p class="text-xs text-gray-300">1970s — Paul Sharits, Lis Rhodes. Optical film soundtrack used as both image and sound source.</p>
</div>

<div v-click class="bg-white/5 border border-white/20 rounded-xl p-4 text-center">
  <div class="text-2xl mb-2">📺</div>
  <h4 class="text-blue-300 text-sm font-bold mb-1">Analogue Video Phase</h4>
  <p class="text-xs text-gray-300">Vasulkas — video synthesizers convert video signal waveforms into audio. Reciprocal translatability.</p>
</div>

<div v-click class="bg-white/5 border border-white/20 rounded-xl p-4 text-center">
  <div class="text-2xl mb-2">💻</div>
  <h4 class="text-purple-300 text-sm font-bold mb-1">Digital Phase</h4>
  <p class="text-xs text-gray-300">Ryoji Ikeda, Bruce McClure — real-time computation + modified hardware at threshold of human perception.</p>
</div>

</div>

<!--
Kim's framework is powerful because it gives us a historical arc AND a set of criteria for evaluating whether a work is truly audiovisual (not just illustrated music).
-->

---
layout: default
---

# Four Principles of AV Software Art
## Golan Levin (2010), cited in Ribas

<div class="grid grid-cols-2 gap-6 mt-4">

<div v-click class="bg-yellow-500/10 border border-yellow-400/40 rounded-xl p-5">
  <h3 class="text-yellow-300 font-bold mb-2">1. Visualization / Sonification</h3>
  <p class="text-sm text-gray-300">Developing expressive visual or sonic languages in response to the other modality. Sound becomes shape; image becomes tone.</p>
</div>

<div v-click class="bg-blue-500/10 border border-blue-400/40 rounded-xl p-5">
  <h3 class="text-blue-300 font-bold mb-2">2. Transmutability</h3>
  <p class="text-sm text-gray-300">Any input data can be algorithmically visualized or sonified. Digital polymorphism — "anything can become anything."</p>
</div>

<div v-click class="bg-green-500/10 border border-green-400/40 rounded-xl p-5">
  <h3 class="text-green-300 font-bold mb-2">3. Interactive Performativity</h3>
  <p class="text-sm text-gray-300">Systems as "open works" — they are experienced properly only when used. The audience becomes a co-performer.</p>
</div>

<div v-click class="bg-purple-500/10 border border-purple-400/40 rounded-xl p-5">
  <h3 class="text-purple-300 font-bold mb-2">4. Generative Autonomy</h3>
  <p class="text-sm text-gray-300">Systems that produce animations or sound from their own rule-sets — "recipes for autonomous processes" (Galanter, 2006).</p>
</div>

</div>

<p v-click class="text-2.8 text-gray-400 mt-0!">— Ribas, *Audiovisual Dynamics* (2012)</p>

<!--
These four principles give us a design vocabulary. When building an AV piece, ask yourself: which of these principles am I working with? Often the most powerful works combine all four.
-->

---
layout: section
---

# 🛠 Tools of the Trade


---
layout: default
class: text-4
---

# TouchDesigner

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Developer:** Derivative (Toronto, 2003–)

<v-clicks>

- **Node-based visual programming** — operators connected in networks
- Real-time 3D rendering, video compositing, and generative graphics
- Deep integration with **audio analysis** (CHOPs — Channel Operators)
- Supports: OSC, MIDI, DMX, Spout/Syphon, NDI, serial, Kinect, Leap Motion
- Used for large-scale VJ, projection mapping, interactive installations
- Python scripting for custom logic
- Industry standard for **live visuals & installations**

</v-clicks>

</div>

<div v-click>

<img src="/touchdesigner.jpg" class="rounded-xl shadow-2xl w-full object-cover" alt="TouchDesigner interface screenshot" />
<p class="text-xs text-gray-400 mt-2 text-center">TouchDesigner — node-based network editor (Derivative)</p>

</div>

</div>

---
layout: default
class: text-4
---

# Cycling '74 MAX / MSP / Jitter

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Developer:** Cycling '74 (San Francisco, 1990–)

<v-clicks>

- **Visual dataflow programming** — objects connected by patch cables
- **MAX** = message handling & control flow
- **MSP** = real-time audio signal processing (~ suffix)
- **Jitter** = real-time video, matrix, and 3D (jit. prefix)
- **gen~** = low-level signal processing compiled to hardware
- Deep integration: sensors, OSC, MIDI, serial, camera, OpenGL/WebGL
- Used in Çamcı et al. (2015) for **Interactive Virtual Soundscapes**
- Fundamental tool in electronic music and live AV performance

</v-clicks>

</div>

<div v-click>

<img src="https://us-east-1.graphassets.com/AYPey75xpR2CpIG3owsnAz/HfyzzEj0TSqqa9MiSbpd" class="rounded-xl shadow-2xl w-full object-cover" alt="MAX/MSP/Jitter interface screenshot" />
<p class="text-xs text-gray-400 mt-2 text-center">MAX/MSP/Jitter — patcher editor with audio and video objects (Cycling '74)</p>

</div>

</div>

---
layout: default
class: text-3
---

# Processing & openFrameworks

<div class="grid grid-cols-2 gap-6 mt-4">

<div v-click>

## Processing (2001–)

- Created by Ben Fry & Casey Reas at MIT Media Lab
- **Minim library** for audio analysis (FFT, beat detection)
- Low barrier to entry — ideal for teaching
- Strong community, thousands of libraries


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Processing_4.0b1_Screenshot.png/500px-Processing_4.0b1_Screenshot.png" class="rounded-xl shadow-2xl h-70" alt="Processing IDE screenshot" />


</div>

<div>

## openFrameworks (2005–)

<v-clicks depth="1">

- Open-source C++ toolkit for creative coding
- **High performance** — hardware-level access
- Add-ons (ofx) for everything: computer vision, physics, audio, 3D
- Preferred for **real-time interactive installations**

</v-clicks>

<div v-click class="mt-4">

<img src="//upload.wikimedia.org/wikipedia/commons/thumb/8/87/OfxOpenCV.png/500px-OfxOpenCV.png" class="rounded-xl shadow-2xl h-70 object-cover" alt="openFrameworks IDE screenshot" />


</div>

</div>

</div>

---
layout: default
---

# Hydra — Browser-Based Live Coding

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Developer:** Olivia Jack (2018–) · [hydra.ojack.xyz](https://hydra.ojack.xyz)

<v-clicks>

- **Browser-based video synthesis** inspired by analog modular synthesizers
- Live coding in JavaScript — modify visuals in real time while they run
- Signals can be **fed by audio** using the Web Audio API
- Used in Algorave and live performance contexts
- Free, open-source, zero installation
- Can send/receive OSC, connect to TidalCycles, SuperCollider

</v-clicks>

</div>

<div v-click>

<img src="https://hydra.ojack.xyz/docs/images/hydra.png" class="rounded-xl shadow-2xl w-full object-cover" alt="Hydra live coding visual output" />
<p class="text-xs text-gray-400 mt-2 text-center">Hydra — browser-based live coding visual output (hydra.ojack.xyz)</p>

</div>

</div>

---
layout: default
---

# More Tools in the AV Ecosystem

<div class="grid grid-cols-3 gap-4 mt-4 text-sm">

<div v-click class="bg-white/5 border border-white/15 rounded-xl p-4">
  <h4 class="text-yellow-300 font-bold mb-2">🎵 Strudel</h4>
  <p class="text-gray-300">Live coding language for algorithmic music and visual patterns. Often paired with Hydra for full AV live coding.</p>
</div>

<div v-click class="bg-white/5 border border-white/15 rounded-xl p-4">
  <h4 class="text-blue-300 font-bold mb-2">🔊 SuperCollider</h4>
  <p class="text-gray-300">Platform for audio synthesis and algorithmic composition. Powerful server-client architecture. Core of many live coding setups.</p>
</div>

<div v-click class="bg-white/5 border border-white/15 rounded-xl p-4">
  <h4 class="text-green-300 font-bold mb-2">🕹 VVVV</h4>
  <p class="text-gray-300">Visual live programming environment for real-time video, motion graphics, and interaction design. Node-based like TD but with .NET.</p>
</div>

<div v-click class="bg-white/5 border border-white/15 rounded-xl p-4">
  <h4 class="text-purple-300 font-bold mb-2">🌐 p5.js</h4>
  <p class="text-gray-300">JavaScript port of Processing. p5.sound library provides FFT, amplitude, oscillators. Runs in browser — great for teaching.</p>
</div>

<div v-click class="bg-white/5 border border-white/15 rounded-xl p-4">
  <h4 class="text-red-300 font-bold mb-2">⚡ GLSL / WebGL</h4>
  <p class="text-gray-300">Fragment shaders running on GPU — extreme performance for generative visuals. Used in Shadertoy, integrated in all major AV tools.</p>
</div>

<div v-click class="bg-white/5 border border-white/15 rounded-xl p-4">
  <h4 class="text-cyan-300 font-bold mb-2">📡 OSC Protocol</h4>
  <p class="text-gray-300">Open Sound Control — the glue between AV tools. Connects MAX ↔ TD ↔ Processing ↔ Hydra over network. Used in Çamcı et al. (2015).</p>
</div>

</div>

<!--
The real power comes from connecting these tools. OSC is the universal language that lets MAX talk to TouchDesigner talk to Processing in real time.
-->



---
layout: default
transition: slide-left
class: text-3.5
---

# The Assignment

## "Reactive Synesthesia"

**Objective:** Create a **1-minute AV sketch** that demonstrates a direct, intentional mapping between audio analysis and visual parameters.


### Steps

<div class='grid grid-cols-2 gap-4'>
<div>

**① Select a Tool**
Choose one: TouchDesigner · Max/MSP · Hydra

**② Record the Input**
Capture a **10-second audio sample** of an *industrial* sound (machinery, construction, metal, etc.)

**③ Map 3 → 3 Parameters**

| Audio Input | → | Visual Output |
|-------------|---|---------------|
| Low-end energy | → | Rotation / Scale |
| Mid-range peaks | → | Color / Hue Shift |
| Overall Volume | → | Noise Displacement |


</div>

<div>


**④ Submit**
A screen recording of the tool's interface *while the audio plays* — **show your patch!**

</div>
</div>


<style>

p {
  line-height: 1.1rem!important
}

th {
  padding-top: 0;
  padding-bottom: 0.5;
}
  </style>


---
layout: image-left
image: /section-dark.jpg
transition: fade-out
class: text-3
---

## Conclusion & Resources

<v-clicks>

### Core Tools

<div class="space-y-2 mt-2">

<div class="p-3 border border-yellow-400/40 rounded-lg">
<span class="text-yellow-400 font-bold">TouchDesigner</span> · Derivative<br/>
<a href="https://derivative.ca" target="_blank" class="text-sm opacity-70">derivative.ca</a>
</div>

<div class="p-3 border border-yellow-400/40 rounded-lg">
<span class="text-yellow-400 font-bold">Max/MSP + Jitter</span> · Cycling '74<br/>
<a href="https://cycling74.com" target="_blank" class="text-sm opacity-70">cycling74.com</a>
</div>

<div class="p-3 border border-yellow-400/40 rounded-lg">
<span class="text-yellow-400 font-bold">Hydra</span> · Olivia Jack<br/>
<a href="https://hydra.ojack.xyz" target="_blank" class="text-sm opacity-70">hydra.ojack.xyz</a>
</div>

</div>


### Communities & Learning

- 🎓 **The Interactive & Immersive HQ** — YouTube tutorials (TouchDesigner)
- 🌐 **TOPLAP** — Live coding community & manifesto
- 🎧 **Lines / llllllll.co** — Forum for experimental music & tools

</v-clicks>


<style>

p {
  line-height: 1rem!important
}

  </style>

<!--
These resources will carry you well beyond this course. The communities around these tools are exceptionally open and collaborative.
-->

---
layout: center
transition: fade-out
---

<div class="text-center">

<div class="text-6xl mb-6">🎛️</div>

# END

**Audiovisual Systems**


<div class="mt-2 opacity-40 text-xs">
Alp Tuğan, PhD · March 2026
</div>

<div class="mt-8 grid grid-cols-3 gap-4 text-xs opacity-50 max-w-md mx-auto">
<div>derivative.ca</div>
<div>cycling74.com</div>
<div>hydra.ojack.xyz</div>
</div>

</div>
