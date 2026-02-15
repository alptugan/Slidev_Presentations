---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: COD 301 Design Studio
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
favicon: "https://www.alptugan.com/v6/favicon-192.png"
---

# COD 301 Design Studio

Week 01 - Introduction

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
....
-->

---
transition: fade-out
layout: section
---
 
# Data Visualization

<!--
Here is another comment.
-->

---
layout: default
title: Case Study Deniz Cem Önduygu
class: text-center
---

[Click to view Deniz's Datavis Works](https://www.denizcemonduygu.com/)

<img src='/deniz.jpg' scale-70 mt--22/>

---
layout: quote
transition: fade-out
---

# You are not just learning "charts"; you are learning **Information Architecture** across print, time-based media, and interactive web.

---
title: Dear Data
---

<Youtube id='iqaVe1MCTlA' width='100%' height='100%' />

---
layout: default
class: text-center
---

# Dear-Data Postcard Samples
[Link to DearData Web Page](https://www.dear-data.com/theproject)

<img src='/deardata.jpeg' scale-80 mt--12/>



---
transition: fade-out
layout: quote
title: The Scope
---

<v-clicks>

1. **Typography:** Data requires rigorous typographic hierarchy (Posters/Infographics).
2. **Video:** Modern data storytelling relies heavily on Motion Graphics and "explainer" videos.
3. **Sound:** Data Sonification (representing data with sound) is a cutting-edge field that fulfills the "Sound" requirement.
4. **Internet:** The final output can be a "Scrollytelling" web experience, covering the web skills.
</v-clicks>


---
layout: two-cols
layoutClass: gap-16
---

# Syllabus

Data Narratives & Information Experiences

For other policies and instructional details refer to the syllabus on LMS.

<img scale-60 mt--25 src='/syl.jpg' />

::right::

#### **Phase 1: The Static Image (Typography & Hierarchy)**
_Focus: Print, Layout, Visual Semiotics._

#### **Phase 2: The Moving Image (Video & Motion)**
_Focus: Timeline, Pacing, Narrative Arc._

#### **Phase 3: The Sonic Layer (Sound Design)**
_Focus: Sonification, Texture, Feedback._

#### **Phase 4: The Digital Container (Web & Portfolio)**
_Focus: Interaction, Documentation, Publishing._


---
layout: section
---

# Review the Syllabus

---
layout: image-right
image: https://cover.sli.dev
class: text-4
---

# Course Material

The following texts are essential for this course. Weekly readings are assigned from these volumes to ground studio practice in theoretical rigor.


<v-clicks>

- **The Truthful Art: Data, Charts, and Maps for Communication** by Alberto Cairo (New Riders, 2016).
            
- **Dear Data** by Giorgia Lupi and Stefanie Posavec (Princeton Architectural Press, 2016).
            
- **The Soundscape: Our Sonic Environment and the Tuning of the World** by R. Murray Schafer (Destiny Books, 1993/Original 1977).
            
- **Sustainable Web Design** by Tom Greenwood (A Book Apart, 2021).
            
- **Designing Interface Animation** by Val Head (Rosenfeld Media, 2016).

</v-clicks>
            
<!--
    - _Why:_ The standard text for understanding data journalism and the architecture of information.

    - _Why:_ A manifesto for "Data Humanism"—essential for teaching students to see data in their daily lives before using software.

    - _Why:_ The foundational text for Acoustic Ecology, necessary for the sound design module.

    - _Why:_ Critical for the "Portfolio/Web" module, shifting focus from decoration to performance and ecology.

    - _Why:_ Bridges the gap between static graphic design and motion graphics.
-->

---
layout: default
---

# Week 1: Data Humanism & The Quantified Self
- **Topic:** "Small Data" vs. Big Data. How to collect data without computers.
- **Reading:** *Dear Data* (Read the Introduction and browse the first 10 weeks of postcards, Giorgia Lupi).
- **Studio Exercise:** _The Pocket Audit._ Students strictly use pen and paper to track one personal habit for 7 days (e.g., "Times I complained," "Colors I saw," "Music I listened to").


---

# Resources

- 📺 [Data Visualization in 2025: The Ultimate Guide](https://www.youtube.com/watch?v=loYuxWSsLNc) In this video, you will get an in-depth explanation of what data visualization really is. You will learn also what data visualization helps with, the different types of charts and graphs to use and how you can make them.
- 📺 [Science of Data Visualization](https://www.youtube.com/watch?v=csXmVBw8cdo) Technical chart types; bar, scatter plot, line, histograms, pie, box plots, bubble chart.
- 📺 [The beauty of data visualization - David McCandless](https://www.youtube.com/watch?v=5Zg-C8AAIGg)
- 📖 [Quantified Self](https://quantifiedself.com/show-and-tell/) Inspirational projects from the community. week1
- 📖 [Quantified Self](https://quantifiedself.com/get-started/) Get Started Guide. week1


---
layout: section
---
# BREAK

---
layout: image-right
image: /lil.jpeg
backgroundSize: 30em
---
# Case Studies
### Quantified Self

- [Making Data Art From 100 Days](https://media.quantifiedself.com/slides/1100_LKarabaic_100daysofqsDailyArtFromData.pdf) 

- 👩🏻‍🌾 Lilian Karabaic has been tracking herself for 11 years and docmenting that data as a research outcome.

- 🌐 Refer to Lilian's [website](https://anomalily.net/2021-expense-report/).

- 🛠️ Set of [tools](https://anomalily.net/life-stack/) to help you collect data.

::right::



---
layout: image-left
image: /dams.png
backgroundSize: 30em
class: pt-32
---

# Case Studies
### Graft Online

The application, which is multilingual, presents the data of the dams which can be filtered/ sorted by area, volume, basin, type and construction year in a visual manner.

- 🌐 View interactive project, [Graft Online](https://graftonline.org/en) 



---
layout: image-right
image: https://cover.sli.dev
---

# Assignment
1. Whatch the videos at `Resources` section.
2. Analog data collection. Choose a personal behavior to track for one week (e.g., "Every time I check my phone," "Every coffee I drink," "Negative vs. Positive thoughts"). Compile the raw data and bring physical sketches to class. Use pen, paper and any other physical material. 
3. **Reading:** *Dear Data* (Read the Introduction and browse the first 10 weeks of postcards, Giorgia Lupi).
4. Setup an account on Github. [Tutorial](https://teaching.alptugan.com/Tutorials/Github---Setup-Personal-Account)  


---
layout: image-right
image: https://m.media-amazon.com/images/M/MV5BMTUyMDU4NzE0Nl5BMl5BanBnXkFtZTgwMzg0MDQyMTI@._V1_SX600.jpg
backgroundSize: 32em
---

# Design Inspiration
The following page includes several art & design related movies, series and documentations. I highgly encourage you to watch them to enhance your creative perspective.

📺 [Link to the article](https://teaching.alptugan.com/Courses/Art-Design-Technology-Series)

