---
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
selectable: true
codeCopy: true
favicon: "https://www.alptugan.com/v6/favicon-192.png"
layout: image-to
themeConfig:
  primary: "#ffcc00"
  secondary: "#e2d292"
---

# COD 412 Sound Projects & Media

week 02 - Acoustic Ecology

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
layout: image-right
image: '/13.jpeg'
backgroundSize: 100%
class: mt-0
---

# Open Call: Sound of The Year Awards

Visit the [link](https://soundoftheyearawards.com/) for application.

Submissions are now open!

Deadline: 30th March 2026

---
layout: image-left
image: /akbank yarisma.jpg
class: text-left mt-32
backgroundSize: 100%
---
# Open Calls
Akbank Sanat "42. Günümüz Sanatçıları" Contest. Check the [open call](https://www.akbanksanat.com/en/akbank_gso)

If you are selected as emerging artist with your project, you will earn extra credits for your final grade. Depending on your artwork you can propose it as final project also.


---
layout: image-right
image: '/s1.jpeg'
backgroundSize: 100%
class: mt-0
---

# Acoustic Ecology: Understanding Our Sonic Environment
The Study of Sound, Environment, and Living Organisms

- The World Soundscape Project, [ref](https://www.sfu.ca/~truax/wsp.html)

---
class: mt-10
---

# The Crew

<div class='flex gap-4 h-4/7'>

<img class='flex-1 object-cover' src='/s2.jpeg' />
<img class='flex-1 object-cover' src='/WSP2.jpg' />

</div>

---
layout: center
---

# What is Acoustic Ecology?

<v-clicks>

- Also known as Ecoacoustics
- Studies the relationship between living organisms and their environment through sound
- Focuses on ecological and cultural significance of sound
- Examines effects of human-made sounds on natural soundscapes
- Works to preserve natural sounds and minimize noise pollution
 
</v-clicks>


---
layout: image-right
image: '/R-Murray-Schafer_Photo-by-Andre-Leduc-4104283283.jpg'
backgroundSize: 100%
class: mt-0
---

# R. Murray Schafer

The Father of Acoustic Ecology

<v-clicks>

- Canadian composer, musician, and writer (1933-2021)
- **Key philosophy:** Treat the acoustic environment as a musical composition
- Warned about visual dominance corrupting listening abilities
- Proposed including listening courses in curriculum
- Developed the concept of "**sonological competence**"
</v-clicks>

---
layout: image-right
image: '/WSP20a.jpg'
backgroundSize: 100%
class: mt-0
---

# Sonological Competence

Developing Conscious Listening

<!--
- Practice of listening to the environment
- **Exercise:** List five sounds heard during a specific time (not music)
- Finding: Most students don't recall sounds "consciously"
- Solution: "Ear cleaning" exercises through soundwalks
- Goal: Increase sonic awareness
-->

---
layout: image-right
image: '/OIP-2705128569.jpg'
backgroundSize: 110%
class: mt-0
---

# World Soundscape Project

**Documenting Our Sonic Heritage**

<v-clicks>

- Started in early 1970s with student soundwalks
- Activities:
  - Recording soundscapes
  - Measuring amplitude levels
  - Creating isobel maps
  - Developing descriptions for sonic features
- Foundation for modern acoustic ecology research
</v-clicks>

---
layout: image-right
image: '/IsobelStanleyPark.jpg'
backgroundSize: 100%
class: mt-50
---

# Isobel Maps

Visit the [link](https://www.sfu.ca/sonic-studio-webdav/cmns/Handbook5/handbook/Isobel.html)

---
layout: two-cols
---

# Element 1 - Keynote
The Background Sounds

- Dominant frequencies setting the tone
- Like background actors in movies
- Often not heard consciously
- **Natural environments:** wind, insects, water, forests, animals
- **Urban environments:** traffic, air conditioner, fridge, electrical noises


::right::

<div mt-16 ml-20 color-gray>
🌧️ Rain ambience. 
<audio mt-2 controls>
  <source src="/keynote-Rain.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>



<div mt-10 ml-20 color-gray>
🔌 Electrical hum in a restaurant.
<audio mt-2 controls>
  <source src="/keynote-Hum_Restaurant.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>


<div mt-10 ml-20 color-gray>
🏤 Corridor ambience with ventilation as a keynote sound in an office building. 
<audio mt-2 controls>
  <source src="/keynote-Office_Ambience_UBC.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

---
layout: two-cols
---

# Element 2 - Signal
The Foreground Sounds

- Protagonist sounds of the environment
- Convey specific messages or information
- Examples:
  - Warning devices
  - Computer welcome sounds
  - Whistles
  - Horns
  - Sirens

::right::


<div mt-10 ml-20 color-gray>
📯 B.C. Ferry horns, Horseshoe Bay, West Vancouver, B.C
<audio mt-2 controls>
  <source src="/signal-BC_Ferry.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>


<div mt-10 ml-20 color-gray>
🛳️ Steam whistle, Vancouver harbour.
<audio mt-2 controls>
  <source src="/signal-Steam_Signal.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

<div mt-10 ml-20 color-gray>
 🔔 Cathedral bell, Salzburg, Austria.
 <audio mt-2 controls>
  <source src="/signal-Salvatore_Mundi.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>



---
layout: two-cols
class: mt-25
---

# Element 3 - Soundmark
Sonic Landmarks

- Derived from "landmark" for analogy
- Unique identifiable sounds
- Hold cultural or social significance to a location
- Examples: church bells, train whistles
- Should be preserved and protected as cultural heritage

::right::

<div ml-20 color-gray>
 📯 Foghorns at Point Atkinson.
 <audio mt-2 controls>
  <source src="/soundmark-Foghorns.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

<div mt-10 ml-20 color-gray>
💨 Nine O’Clock gun, Stanley Park. 
 <audio mt-2 controls>
  <source src="/soundmark-Nine_Oclock_Gun.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

<div mt-10 ml-20 color-gray>
🏫 Steam clock, Gastown, Vancouver, B.C.
 <audio mt-2 controls>
  <source src="/soundmark-Steam_Clock.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

---
layout: two-cols
---

# Hi-Fi vs Lo-Fi Soundscapes
Pre-Industrial vs Post-Industrial

**Hi-Fi (High Fidelity):**
- Sounds overlap less frequently
- More acoustic space
- Natural sounds in harmony
- Cyclic behavior
- Balanced in level, spectra, and rhythm

**Lo-Fi (Low Fidelity):**
- Almost constant level
- Creates "Sound Wall"
- Isolates listener from environment
- Meaningful sounds are masked

::right::


<div mt-2 ml-20 color-gray>
⛪︎ Sound Example: A piazza in Cembra, Italy, with voices and footsteps in the foreground, a more distant church bell, and a choir from another church in the middle ground.
<audio mt-2 controls>
  <source src="/HiFi_Cembra.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

<div mt-10 ml-20 color-gray>
🏙️ Competing background music from shops along Carnaby Street, London. 
<audio mt-2 controls>
  <source src="/lofi-Muzak_CarnabySt.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

<div mt-10 ml-20 color-gray>
🏫 Outdoor ambience, University of British Columbia, with construction noise. 
<audio mt-2 controls>
  <source src="/lofi-Campus_Ambience_UBC.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

---
layout: image-right
image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200'
backgroundSize: 100%
class: mt-14
---

# The Sound Wall Problem
Isolation in Lo-Fi Environments

- Meaningful sounds become masked
- "Aural space" is reduced
- Individual cannot hear reflected sounds of own movement/speech
- Sonic information mutates into anti-information: "noise"
- Listener becomes isolated from environment



<div mt-0 ml-108 color-gray>

 <audio mt--12 controls style="width:490px">
  <source src="/Masking_Fountain.wav" type="audio/wave">
Your browser does not support the audio element.
</audio> 
</div>

---
layout: image-right
image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=1200'
backgroundSize: 100%
class: mt-0
---

# Ecological Impact
Sound and Species Survival

- According to Krause (1993):
  - Spreading urban areas can "block" or "mask" spectral niches
  - Could lead to species extinctions
- Natural soundscapes have specific frequency ranges for different species
- Human noise disrupts these natural acoustic niches

---
layout: image-right
image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1200'
backgroundSize: 100%
class: mt-15
---

# Practical Applications
Why This Matters for Sound Design

<v-clicks>

- Urban planning and architecture
- Environmental studies
- Creating harmonious sonic environments
- Enhancing quality of life
- Contributing to human wellbeing
- Preserving natural and cultural sonic heritage
- Soundscape Compositions

</v-clicks>

---
layout: image
image: https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200
class: text-shadow-color-black! effect_Shadow
---

# References
**Further Reading**

- Wrightson, Kendall. 2000. "An Introduction to Acoustic Ecology." *Soundscape: The Journal of Acoustic Ecology* 1(1):10–13.
- Schafer, R. Murray. 1977. *The Soundscape: Our Sonic Environment and the Tuning of the World*
- Krause, Bernie. 1993. *The Niche Hypothesis*
- [Simon Fraser University, Sonic Studies](https://www.sfu.ca/sonic-studio-webdav/cmns/Handbook5/handbook/)


---
layout: image-right
image: /soundmeter.jpg
backgroundSize: 100%
---

# dB Meter Apps

Follow the [link](https://play.google.com/store/apps/details?id=com.gamebasic.decibel&hl=en-US&pli=1) for Android app. You can use a similar application for iPhone as well.

**Keywords:** 

sound meter, decibel meter, sound level...


---

# Assignment 1

1. Collect sounds and classify them according to Schaefer's categories.
2. **Sound**: Create a soundscape composition using your collected material.
3. **Reading**: Refer to Other Materials (11)


---
layout: two-cols
class: text-3.5
---

# Assignment 2

1. **Site Selection (choose a space in the campus)**
  - Mark the boundaries on google maps

2. **Data Collection**
  - Use a sound level meter (or calibrated smartphone app).
  - Record decibel levels at 10–15 evenly spaced points.
  - At each point, note: (1) Time of measurement, (2) Weather conditions, (3) Dominant sound sources



3. **Map Creation**
  - Plot measurement points on the base map.
  - Draw contour lines connecting equal decibel values (e.g., 50 dB, 60 dB, 70 dB).
  - Use colour coding: 
    - (blue/green) = quieter zones 
    - (orange/red) = louder zones
    - Annotate with sound sources and ecological notes.

::right::


<div ml-10 mt-8>

4. **Analysis & Reflection**
  - Write a 500–700 word commentary addressing:
    - Keynote sounds: constant background sounds shaping the acoustic identity.
    - Soundmarks: unique or culturally significant sounds.
    - Spatial contrasts: quiet refuges vs. noisy hotspots.
    - Ecological/cultural implications: how sound reflects human activity, biodiversity, or social patterns.


<br>

### 📝 **Deliverables**
- Isobel Map (hand-drawn or digital).
- Field Notes (raw measurements + observations).
- Commentary Essay (500–700 words).

</div>