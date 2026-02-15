---
css: unocss
image: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: COD 301 Design Studio III
info: |
  ## COD 301 Design Studio III
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

# COD 301 Design Studio III

week 02 - Visual variables and Encoding Data

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
author: John W. Tukey
source: Exploratory Data Analysis
---

# The greatest value of a picture is when it forces us to notice what we never expected to see.


---
layout: image-to
image: /five-qualities.jpeg
class: text-yellow! 
---

# The Five Qualities of Great Visualizations


---
layout: center
---

# Five Qualities of Great Visualizations

1. It is [**truthful**]{style="color:#ffcc00"}, as it's based on thorough and honest research.
2. It is [**functional**]{style="color:#00ffcc"}, as it constitutes an accurate depiction of the data, and it's built in a way that lets people do meaningful operations based on it (seeing change in time).
3. It is [**beautiful**]{style="color:#E53166"}, in the sense of being attractive, intriguing, and even aesthetically pleasing for its intended audience-scientists, in the first place, but the general public, too.
4. It is [**insightful**]{style="color:#3375DA"}, as it reveals evidence that we would have a hard time seeing otherwise.
5. It is [**enlightening**]{style="color:#4BF370"} because if we grasp and accept the evidence it depicts, it will change our minds for the better.


---

# Data Collection

<v-clicks>

- Check the accuracy of the data. 

- In case of missing data, find alternative sources.

- DO NOT insert pseudo-data! 🤥 Morality & ⚠️ Ethics

</v-clicks>

---

# Add Context Using Remaining  Visual Channels
Visual channels are the components of a data visualization that we can use to encode data.

## BUT
- Do not overcomplicate the design.
- Keep it minimum.
- Keep the design balance.


---
transition: fade-out
layout: default
---

# Visual Variables (Channels)

<v-clicks>

- Position
- Size
- Color
- Texture
- Shape

</v-clicks>


---
layout: image-right
image: /peacock-real.jpg
backgroundSize: 30em
---

# Olympics Feathers Case

- Inspiration
- A Peacock's feather

<br>

<img v-click mt-6 scale-110 src='/Peacock-Ryan Bosse.png' />

<div text-3 op-30 v-click>

Design by Ryan Bosse
</div>

---
layout: default
---

# Sketches

<div class='flex gap-4 h-4/6'>
<img v-click class='flex-1 object-cover' src='/f1.jpg' />
<img v-click class='flex-1 object-cover' src='/f2.jpg' />
</div>

---
layout: center      
class: text-center
---

# More Sketches

<img class='h-100 m-auto' src='/f3.jpg' />

---
layout: default
---

# Implementing Design
Feather tails become an issue 

<div class='flex gap-4 h-4/7'>
<img v-click class='flex-1 object-cover' src='/ftip01.jpg' />
<img v-click class='flex-1 object-cover' src='/ftip02.jpg' />
</div>


---
layout: default
---

# Refining The Design

<img h-100 src='/ftip03.jpg' />


---
layout: image-right
image: /olympics-final.jpg
---

# Presentation of Data
Non-linear or Linear Representation of data. Vist the following 
[link](https://olympicfeathers.visualcinnamon.com/).

- Static Image
- Interactive media
- Physical objects

<v-click>

The representation style of the data depends on the designer's unique style, client's requests, contextual theme, amount of data, and so on...

</v-click>




---
layout: image-right
image: "/betelgeuse.jpg"
backgroundSize: 100%
class: mt-30
---
# Figures in the Sky
How cultures across the World have seen their myths and legends in the stars.

- 28 Different "Sky Cultures"
- Modern to Aztecs...
- Orion constellation

---
layout: image-right
image: '/betelgeuse2.jpg'
backgroundSize: 100%
class: mt-50
---

# Betelgeuse

Click [link](https://figuresinthesky.visualcinnamon.com/) to interactively review the constellations.


---
layout: image-right
image: "/data-stars.png"
---

# Data Sources
There are no ready-made data available for the designer. 

- [Stellarium](https://stellarium.org) web page.
- Source data of the Stellarium on [Github](https://github.com/Stellarium/stellarium).
- BUT, data is unformatted.


---
layout: center
---

# Sketches
After the research and data collection, design process starts with pen and paper.

<div class='grid grid-cols-3 gap-4'>
<div v-click>
<img src='/s1.jpeg' />
</div>

<div v-click>
<img src='/s2.jpeg' />
</div>

<div v-click>
<img src='/s3.jpeg' />
</div>
</div>


---
layout: center
---

# Sketches
Refer to the [link](https://www.datasketch.es/project/figures-in-the-sky) to review behind the scenes of the data visualization project.

<img src='/s4.jpeg' />