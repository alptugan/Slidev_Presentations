---
theme: apple-basic
selectable: true
css: unocss
image: /cover.avif
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
codeCopy: true
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
---

# COD 412 Sound Projects & Media

Listening Modes

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
author: John Cage
source: American avant-garde composer (1912-1992)
title: 💭 John Cage
---

# There is no such thing as an empty space or an empty time. There is always something to see, something to hear.

---
layout: center
class: px-50
---

# Hearing vs. Listening

**Hearing** is the passive perception of sound—an automatic physiological process that occurs without directed attention. It is indiscriminate and ambient.

**Listening** is active, directed attention—an intentional and conscious choice to process sounds in order to grasp understanding. It involves directed attention and participatory engagement.


---
layout: center
class: px-50
---

# Theories & Frameworks

- Michel Chion (film sound)
- R. Murray Schafer (acoustic ecology)
- Pierre Schaeffer (musique concrète)
- Barry Truax (soundscape eology)


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

1.Causal Listening

2.Semantic Listening

3.Reduced Listening
  
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
[Listening to identify the source or cause of a sound. This is the most common mode in everyday life.]{style="opacity:0.4"}

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
image: /morse.avif
class: text-left text-3.5
transition: slide-up
---

# Semantic Listening
Listening to interpret a code, language, or message. Focuses on meaning rather than source.

We interpret sounds that carry symbolic meaning—spoken language, Morse code, alarms, warning signals. The same semantic content can be conveyed through highly varied acoustic forms (different accents, voices, or instruments).

**Examples**

- Understanding dialogue in a film
- Interpreting a fire alarm's urgency
- Decoding Morse code signals

<Youtube v-click width="100%" height="auto" id="xsDk5_bktFo" />


---
layout: image-right
image: /pierre.jpg
class: text-left
transition: slide-up
---

# Reduced Listening

<v-click>

Reduced listening is the term coined by <i text-yellow>Pierre Schaeffer</i> to describe a mode of listening that concentrates on the <i text-yellow>characteristics</i> of the sound itself, rather than its origin or significance. 
</v-click>

<v-click>

Listening to the sound itself, independent of cause and meaning. Focuses on intrinsic qualities.

**Examples**
- Analyzing the timbre of a musical note
- Experiencing Musique concrète
- Focusing on the texture of ambient drones

</v-click>

---
transition: slide-up
class: p-0 m-0
title: 📺 Listening Modes
---

<Youtube width="100%" height="550" static id="HdNBdKwgudk" />


---

# Chion's Modes in Action

<div class='grid grid-cols-3 gap-3'>
<div>

### 🪇 Causal Listening in Film & Games

- Horror Film Technique
- Foley Design
- Game Audio

</div>

<div>

### 🗣️ Semantic Listening in Narrative Media
- Dialogue Clarity
- Symbolic Sound Design
- Morse Code Example
</div>

<div>

### 🎵 Reduced Listening in Sound Design
- Atmospheric Soundscapes
- Musique Concrète
- Technical Description

</div>
</div>


  <!--
# Casual
Horror Film Technique: Off-screen footsteps, creaking doors, or breathing sounds trigger causal listening. The audience instinctively tries to identify the source, creating tension through uncertainty about what they cannot see.

Foley Design: Sound designers create detailed Foley to make actions believable. The sound of a cup being set down tells us if it's empty (hollow ring) or full (dull thud)—causal information without visual confirmation.

Game Audio: In Fallout 3, a broadcast tower emits beeping sounds. Causal listening tells players there's electronic equipment nearby, providing environmental orientation without explicit visual cues.

# Semantic
Dialogue Clarity: Sound designers ensure dialogue is clear and distinct, even amidst heavy background noise. The audience must extract narrative information from spoken words.

Symbolic Sound Design: Alarms signify danger, church bells signal time or ceremony, and specific musical motifs carry cultural and emotional codes that audiences interpret semantically.

Morse Code Example: The same Fallout 3 broadcast tower: listeners who know Morse code can extract a message from the beeping, shifting from causal to semantic listening.

# Reduced
Atmospheric Soundscapes: Drone sounds, deep reverberating noises, or abstract textures create emotional atmosphere without requiring specific visual reference. The audience experiences the sound's qualities directly.

Musique Concrète: Compositions using recorded sounds as raw material focus attention on timbre, texture, and sonic morphology rather than the original sources of the sounds.

Technical Description: A sound designer might describe the Fallout 3 beep as "a sine wave at approximately 3000 Hz in short bursts of roughly 0.5 seconds"—pure acoustic analysis without reference to source or meaning.

  -->


---
transition: fade-out
layout: quotes
author: Michel Chion
source: Audiovision 
title: 💭 Michel Chion
---

# These three listening modes overlap and combine in the complex and varied context of the film soundtrack.


---
layout: two-cols-header
class: text-4 pr-5
---

# The Soundscape & Acoustic Ecology
R. Murray Schafer (1933-2021)

::left::

## The World Soundscape Project
- **The Tuning of the World:** (1977) Schafer's seminal work that articulated the philosophy of acoustic ecology and established the field's foundational concepts.

## The Soundscape Concept
- **Natural Sounds:** Wind, water, birds, animals—geophony and biophony
- **Human Sounds:** Speech, music, footsteps, community activities
- **Technological Sounds:** Machinery, vehicles, electronics—anthrophony

::right::

## Shafer's Concern
- Schafer believed that visual culture had come to predominate over engagement through hearing. He observed a decline in children's "**sonological competence**"—the ability to consciously take in non-musical sounds. 
- Modern urban environments have created "**sonic sewers**" where technological noise overwhelms natural and human sounds, creating acoustic imbalance.

<!--
## The World Soundscape Project
Founded in 1965 at Simon Fraser University, the WSP brought together scientists, artists, and policymakers to study the relationship between living organisms and their sonic environment. Schafer's team documented rising noise pollution and its detrimental effects on urban environments.

Schafer's vision was interdisciplinary, spanning acoustics, architecture, linguistics, music, psychology, sociology, and urban planning—recognizing that sound environments affect all aspects of human life.


## The Soundscape Concept
Schafer defined the soundscape as "a huge musical composition, unfolding around us ceaselessly"—a composition for which we are all responsible. Unlike passive background noise, the soundscape is an active environment that shapes our experience of place.

## 
-->

---
layout: two-cols-header
class: pr-5
---

# Understanding Soundscapes


::left::
### Acoustic Ecology Principles

<v-clicks>

- **Hi-Fi** (individual sounds can be clearly distinguished)
- **Lo-Fi** (sounds overlap and mask each other)
- **Soundmarks** (sounds, memorable or unique to a specific location)
- **Signals** (foreground sounds)
- **Keynote Sounds** (background sounds)

</v-clicks>

::right::

### 💡 Acoustic Design

Schafer advocated for acoustic design—principles by which the **aesthetic quality** of soundscapes may be improved. This involves **conscious choices** about what **sounds** we introduce into **environments** and how we can restore acoustic balance.


<!--
High Fidelity: Environments where individual sounds can be clearly distinguished. Rural or natural settings often exhibit hi-fi characteristics—you can hear discrete sounds across the frequency spectrum.

Low-Fidelity: Environments where sounds overlap and mask each other. Urban industrial areas are typically lo-fi—constant background noise from traffic, machinery, and crowds creates a sonic "wall" where individual sounds are difficult to discern.
-->

---
transition: fade-out
layout: quotes
author: R. Murray Schafer
source: Tunning of The World
title: 💭 R. Murray Schafer
---

# The world is a huge musical composition that's going on all the time, without a beginning and presumably without an ending.


---
layout: two-cols-header
class: pr-5 text-4
---

# Acousmatics & The Sound Object
Pierre Schaeffer (1910-1995)

::left::

## Origins of Acousmatics
The term "**acousmatic**" comes from the Greek akousmatikoi—the uninitiated disciples of **Pythagoras** who listened to their teacher from behind a veil for five years before being allowed to see him face-to-face. This practice emphasized listening without visual distraction.

<!--In 1955, Schaeffer and Jérôme Peignot revived the term to describe musique concrète—music created from recorded sounds rather than traditional instruments.-->

## The Sound Object (Objet Sonore)
Schaeffer defined the sound object as "an intentional representation of a sound"—the correlate of reduced listening. It is not the physical instrument that produced the sound, nor the recording medium, but the perceptual content of the auditory experience itself.


::right::

## Key Publication

Traité des objets musicaux (Treatise on Musical Objects, 1966)

<!--Schaeffer's magnum opus presenting his theory of the sound object, four listening modes, and the PROGREMU (Programme de Recherche Musicale) system for classifying sounds.-->

## Coined Terms
- **Reduced Listening** (Écoute Réduite)
- **Musique Concrète**

<!--Reduced Listening: The mode of listening that focuses on sound for its own sake, independently of its cause or meaning. Recording technology enables this by separating sounds from their sources—the loudspeaker becomes the "veil."


Music Concrete: Unlike "abstract" electronic music that starts with musical ideas and realizes them in sound, musique concrète begins with recorded sounds from the world and seeks to perceive musical values within them. The emphasis is on listening; the ear trains itself to hear new musical values.
-->

---
transition: fade-out
layout: quotes
author: Pierre Schaeffer
source: 
title: 💭 Pierre Schaeffer
---

# Often surprised, often uncertain, we discover that much of what we thought we were hearing, was in reality only seen, and explained, by the context.

---
layout: two-cols-header
class: pr-5 text-4
---

# Levels of Listening Attention
Barry Truax • Acoustic Communication (1984/2001)

<div class='grid grid-cols-3 gap-3'>
<div>

## Background Listening

**Attention Level:** Entirely passive. Listening that is not directed at achieving any practical purpose. Sound is perceived but not consciously attended to.

- Music playing while you work
- Traffic noise you're aware of but ignore
- Air conditioning hum

</div>

<div>

## Listening-in-Readiness
**Attention Level:** Intermediate. Attention is in readiness to receive significant information, but focus is probably directed elsewhere.

- Responding to phone alerts during conversation
- Awareness of traffic while crossing street
- Recognizing your name in a noisy room

</div>

<div>

## Listening-in-Search
**Attention Level:** Most active. Conscious search for cues, involving focused attention on specific sounds to the exclusion of others.

- Mechanic diagnosing engine problems
- Tapping walls to find studs
- Ship captain using echo for orientation

</div>
</div>


---
transition: fade-out
layout: quotes
author: Barry Traux
source: ""
title: 💭 Barry Truax's Concern
---

# Modern technological noise pollution is causing background listening to dominate, while the more active modes (listening-in-readiness and listening-in-search) are rapidly declining. This represents a loss of "**sonological competence**."


---
layout: image-left
image: /break.avif
class: text-left pt-60 pl-45
transition: slide-up
---

# _BREAK_
10 mins.

[**Synchresis**: Chion's term for the "forging of an immediate and necessary relationship between something one sees and something one hears." In film, these three listening modes overlap and combine in complex ways throughout the soundtrack.]{style="font-size:0.8rem;line-height:0"}


---
layout: default
---

# Theories in Dialogue
Synthesis

| **Theorist**        | **Framework Focus** | **Key Modes/Concepts** | **Primary Context** |
|---------------------|---------------------|------------------------|---------------------|
| *Michel Chion*      | Purpose of listening|Causal, Semantic, Reduced|Film & audiovisual media|
| *R. Murray Schafer* | Environmental context|Soundscape, Hi-Fi/Lo-Fi, Soundmarks|Acoustic ecology & environment|
| *Pierre Schaeffer*  |Phenomenological experience|Acousmatic, Sound Object, Reduced|Musique concrète & composition|
| *Barry Truax*       |Level of attention|Background, Readiness, Search|Acoustic communication|
| *Bernie Krause*     |Environmental context|Biophony, Geophony, Anthrophony|Acoustic ecology & environment|

---
layout: default
---

# Overlaps & Connections

### Truax ↔ Chion
Listening-in-Search relates to Causal Listening (both seek information from sound). Listening-in-Readiness relates to Semantic Listening (both rely on learned associations).


### Schaeffer ↔ Chion
Reduced Listening is shared—both focus on sound's intrinsic qualities independent of cause or meaning. Chion adopted this concept from Schaeffer.

### Schafer ↔ All
Schafer's soundscape provides the environmental context within which all listening modes operate. His concern with noise pollution affects our ability to engage in all modes.


---
layout: default
---

# Key Differences

**Chion** focuses on what we listen for (purpose), making his framework particularly useful for analyzing film sound where designers intentionally guide audience attention.

<v-click>

**Truax** focuses on how much attention we give (level), providing a spectrum from passive to active that's useful for understanding everyday listening behaviors.

</v-click>

<v-click>

**Schafer** focuses on where we listen (environment), emphasizing the social and ecological responsibility we have for our sonic environments.

</v-click>

<v-click>

**Schaeffer** focuses on how we experience (phenomenology), seeking to understand the essence of auditory perception through the sound object.

</v-click>

<div v-click class="callout-box px-4 py-0.5 border-l-4 border-yellow rounded bg-yellow bg-op-10">

These frameworks are **complementary**, not competing. **Chion** helps you design for **narrative purpose**, **Truax** helps you understand **audience attention**, **Schafer** helps you consider **environmental context**, and **Schaeffer** helps you **appreciate sound**'s intrinsic qualities. Together, they provide a comprehensive toolkit for critical listening and creative sound design.

</div>

<style>
.callout-box p {
  line-height: 1.6 !important;
}
</style>

---
layout: section
---

# Applying Listening Mode Theories
[_Professional Practice_]{style="color:grey"}

---
layout: default
title: How to Apply Theories
---

<div class='grid grid-cols-3 gap-4 text-3'>
<div>

### 🎞️ Film Sound Design
**Manipulating Causal Listening:** Use off-screen sounds to create tension. When the audience hears footsteps or breathing but cannot see the source, causal listening drives narrative suspense. Horror films exploit this extensively.

**Semantic Listening for Clarity:** Ensure dialogue intelligibility through careful mixing and noise reduction. Use symbolic sounds (alarms, sirens) to convey meaning efficiently without exposition.

**Reduced Listening for Emotion:** Create atmospheric textures and drones that evoke emotion through timbre and texture rather than recognizable sources. Abstract soundscapes can convey unease, wonder, or melancholy.

</div>

<div>


<div v-click>

### 🎮 Video Game Audio
**Karen Collins' Application:** Game sound theorist Karen Collins applies Chion's modes to [*interactive audio*]{style="color:grey"}. Players constantly shift between modes based on gameplay needs—causal for spatial awareness, semantic for narrative cues.

**David Huron's Additions:** Musicologist David Huron proposed additional modes for games: [Signal Listening]{style="color:grey"} (anticipating warning sounds), [Sing-Along Listening]{style="color:grey"} (following musical cues), and [Retentive Listening]{style="color:grey"} (remembering sounds for later use).

</div>

<div v-click>

### ™ Audio Branding & Sonic Identity
**Reduced Listening for Memorability:** Successful sonic logos (Intel, McDonald's, Netflix) work through reduced listening—they're memorable for their intrinsic acoustic qualities (rhythm, pitch contour, timbre) rather than what they represent.

**Semantic Associations:** Once established, these sounds acquire semantic meaning through repetition and context. The Intel jingle becomes synonymous with innovation; the Netflix sound with entertainment.

</div>

</div>

<div>

<div v-click>

### ⛰️ Soundscape Composition
**Hildegard Westerkamp:** Composer [Hildegard Westerkamp]{style="color:grey"} creates works like Into the Labyrinth (2000) using transformed field recordings. She takes environmental sounds (bicycle bells, crickets, stone chipping) and applies pitch shifting, time stretching, and reverb to create abstracted soundscapes.

**Technique:** Start with [recognizable environmental recordings]{style="color:grey"} (causal listening), then transform them until they become [abstract textures]{style="color:grey"} (reduced listening). The listener moves between recognizing sources and experiencing pure sound.

</div>

<div v-click>

### 🛠️ Practical Techniques
- Layer sounds that activate different modes
- Transform recordings to shift between modes
- Use acousmatic presentation (unseen sources)
- Consider environmental context (Schafer)

</div>

</div>
</div>

<style>
p {
  line-height: 1.4 !important;
}
</style>


---
layout: section
---

# Case Studies: Listening Modes at Work

---
layout: default
---

# Hereditary - Manipulating Casual Listening

[Sound designer manipulates causal listening by withholding visual confirmation, maximizing anxiety.]{style="color:grey; font-size: 0.8rem;margin-bottom:0px!important"}

<Youtube id='4HKmLQ7Wwfk' width='100%' height='380' />


---
layout: default
---

# Fallout 3: Broadcast Tower
[Same sound activates different modes for different listeners based on knowledge and attention.]{style="color:grey; font-size: 0.8rem;margin-bottom:0px!important"}

<Youtube id='ocNiFiCZIeA' width='100%' height='380' />

<!--
1. Causal: "There's electronic equipment nearby"—provides spatial orientation and world-building.

2. Semantic: Players who know Morse code can decode the message, revealing narrative information.

3. Reduced: "Sine wave at ~3000 Hz, 0.5-second bursts"—pure acoustic description for sound designers.
-->


---
layout: default
---

# Westerkamp: Into the Labyrinth

[Westerkamp: "A sonic journey into aspects of India's culture, on the edge between dream and reality."]{style="color:grey; font-size: 0.8rem;margin-bottom:0px!important"}


<Youtube id='VxOI5p5TvOc' width='100%' height='380' />

<!--

Scenario: Soundscape composition using transformed field recordings from India—bicycle bells, stone chipping, crickets, temple sounds.

Original Recordings: Recognizable environmental sounds trigger causal listening—listeners identify bicycle bells, insects, human activity.

Transformations: Pitch shifting (6 octaves), time stretching, reverb processing. Bicycle bell becomes resonant drone; crickets become ethereal texture.

Result: Listeners move between recognizing sources and experiencing pure sound qualities—a journey between causal and reduced listening.

-->

---
layout: default
---

# Netflix Sonic Logo
[Effective audio branding works first at the reduced listening level (memorable sound), then builds semantic associations over time.]{style="color:grey; font-size: 0.8rem;margin-bottom:0px!important"}

<Youtube id='6Jg_rkKtJgo' width='100%' height='380' />

<!--
Scenario: The iconic "ta-dum" sound that plays when opening Netflix.

Reduced Listening: Memorable for its acoustic qualities—two notes (a perfect fifth apart), specific envelope (quick attack, short decay), rich harmonic content with subtle reverb tail.

Semantic Listening (after learning): Through repeated exposure, the sound acquires meaning—entertainment, anticipation, "showtime."
-->

---
layout: section
---

# Your Turn
[*Deep Listening Assignments*]{style="color: grey"}

---
layout: default
title: Assignment Options
class: text-3
---

<div class='grid grid-cols-3 gap-5'>
<div>

### Soundscape Documentation

**Task:**
Record a 5-minute environmental soundscape in a location of your choice. Use your phone or any recording device.


**Analysis Framework:**
Using Schafer's framework, categorize the sounds you captured:
- 🍃 Natural sounds (geophony & biophony)
- 👨‍👨‍👧‍👧 Human/social sounds (speech, music, activity)
- ⚙️ Technological sounds (machinery, electronics)

**Questions:** Is this a hi-fi or lo-fi environment? Are there identifiable soundmarks, signal, and keynote sounds? What's the acoustic balance?

**Submit:** 📝 Recording + 1-page written analysis

</div>

<div v-click>

### Listening Mode Analysis
**Task:** Select a film scene or game sequence (2-3 minutes) and analyze how sound design activates Chion's three listening modes.

**Analysis Framework:** Analyze the chosen video footage according to Chion's Listening Mode Framework.
- *Causal Listening Moments:* Identify sounds where the audience is meant to recognize sources. How does the design guide causal identification?

- *Semantic Listening Moments:* Where does the audience extract meaning—dialogue, symbolic sounds, coded messages?

- *Reduced Listening Moments:* Identify abstract textures, drones, or atmospheric elements that work through pure acoustic qualities.

**Submit:** 📽️ Video clip + 2-page analysis with timestamps

</div>

<div v-click>

### Creative Sound Object

**Task:** Create a 30-60 second sound composition using reduced listening principles, inspired by Schaeffer's musique concrète.

**Guidelines:**
- Record everyday sounds from your environment
- Focus on timbre, texture, pitch, rhythm—not source recognition
- Apply transformations: pitch shift, time stretch, reverse, layer
- Create something where the original sources become unrecognizable or secondary

**Submit:** 🎵 Write a brief artist statement (200 words) explaining your creative process and how you approached reduced listening.

</div>
</div>

<style>
p {
  line-height: 1.5 !important;
}
</style>


---
layout: image-left
image: /reduced.avif
class: text-left
transition: slide-up
hide: true
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
<li>Disciplined attention on the inherent attributes of audible things.</li>
</v-clicks>

---
layout: center
class: text-left p-50
transition: slide-up
hide: true
---

# What Is Reduced Listening Good For?
In film and television, sounds are typically used for their ability to evoke images, convey meaning, or suggest particular associations with real or imaginary causes or texts, rather than as purely formal elements in their own right.
<v-clicks>

<li>In films, sounds evoke contrete and abstract emotions</li>

</v-clicks>




---
layout: default
hide: true
---

# Three Modes of Listening
## Michel Chion, *Audio-Vision* (1994)

<div class="grid grid-cols-3 gap-6 mt-6">

<div v-click class="bg-yellow-500/10 border border-yellow-400/40 rounded-xl p-5">
  <div class="text-3xl mb-2">👂</div>
  <h3 class="text-yellow-300 text-lg font-bold mb-2">Causal Listening</h3>
  <p class="text-sm text-gray-300">Listening to <strong>identify the source</strong> of a sound — recognizing a violin, rain, a voice, without visual reference.</p>
  <p class="text-xs text-gray-400 mt-3 italic">"Through causal listening we can identify the source of a sound simply by listening, without having the visual reference."</p>
</div>

<div v-click class="bg-blue-500/10 border border-blue-400/40 rounded-xl p-5">
  <div class="text-3xl mb-2">🗣</div>
  <h3 class="text-blue-300 text-lg font-bold mb-2">Semantic Listening</h3>
  <p class="text-sm text-gray-300">Being <strong>aware of language or code</strong> to interpret implied meaning — speech, morse code, musical notation systems.</p>
  <p class="text-xs text-gray-400 mt-3 italic">"Interpreting the implied meaning like in a conversation or decoding morse."</p>
</div>

<div v-click class="bg-purple-500/10 border border-purple-400/40 rounded-xl p-5">
  <div class="text-3xl mb-2">🔬</div>
  <h3 class="text-purple-300 text-lg font-bold mb-2">Reduced Listening</h3>
  <p class="text-sm text-gray-300">Focusing on the <strong>intrinsic traits of the sound itself</strong> — pitch, timbre, spectral qualities — detached from source or meaning.</p>
  <p class="text-xs text-gray-400 mt-3 italic">"A great amount of people go an entire life without being conscious of this ability."</p>
</div>

</div>

<p v-click class="text-xs text-gray-400 mt-6">— Gomes, Portovedo & Carvalhais (2021), drawing on Chion (1994) and Schaeffer's <em>musique concrète</em></p>

<!--
Chion's framework is foundational. Notice that "reduced listening" — the most analytical mode — is actually the rarest and hardest to cultivate. This is what ear training and spectromorphology exercises try to develop.
-->

---
layout: default
hide: true
---

# Beyond Chion — More Listening Dimensions

<div class="grid grid-cols-2 gap-6 mt-6">

<div v-click class="bg-green-500/10 border border-green-400/40 rounded-xl p-5">
  <div class="text-2xl mb-2">⚡ / 😴</div>
  <h3 class="text-green-300 font-bold mb-2">Active vs. Passive Listening</h3>
  <p class="text-sm text-gray-300">Listening oscillates between <strong>passive/unconscious monitoring</strong> and <strong>active/alert attention</strong> — a survival mechanism. A disruptive sound shifts us into active mode automatically.</p>
  <p class="text-xs text-gray-400 mt-3">— Gomes et al. (2021)</p>
</div>

<div v-click class="bg-orange-500/10 border border-orange-400/40 rounded-xl p-5">
  <div class="text-2xl mb-2">🤖</div>
  <h3 class="text-orange-300 font-bold mb-2">Computational Listening</h3>
  <p class="text-sm text-gray-300">When computation becomes part of the environment, listening is no longer purely human. Meta-environments <strong>listen themselves</strong>, becoming agents — listening is "a hybrid of human and computational operations."</p>
  <p class="text-xs text-gray-400 mt-3">— Carvalhais, in Gomes et al. (2021)</p>
</div>

<div v-click class="bg-red-500/10 border border-red-400/40 rounded-xl p-5">
  <div class="text-2xl mb-2">🌍</div>
  <h3 class="text-red-300 font-bold mb-2">Soundscape Listening (Schafer)</h3>
  <p class="text-sm text-gray-300">R. Murray Schafer (1977): the soundscape is "sound as a form of collective identity." We listen not just to sounds but to <strong>environments as cultural texts</strong>. Basis for soundscape composition.</p>
  <p class="text-xs text-gray-400 mt-3">— Çamcı et al. (2015), Gomes et al. (2021)</p>
</div>

<div v-click class="bg-cyan-500/10 border border-cyan-400/40 rounded-xl p-5">
  <div class="text-2xl mb-2">👁</div>
  <h3 class="text-cyan-300 font-bold mb-2">Audio-Vision (Chion)</h3>
  <p class="text-sm text-gray-300">When sound and image co-exist, we don't just hear or just see — <strong>synchresis</strong> fuses them into a unified cross-modal perceptual event. Each modality shapes the other.</p>
  <p class="text-xs text-gray-400 mt-3">— Ribas (2012), Chion (1994)</p>
</div>

</div>

<!--
Key insight for AV artists: different listening modes can be designed for. You can create work that forces causal listening, or that induces reduced listening through abstraction. The listening mode is a compositional parameter.
-->