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
  Press Space<carbon:arrow-right />
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


---
layout: section
---

# Studio Practice
99 Variations Study (ref: Formstorming by Ellen Lupton)

---
layout: center
---

# Studio Exercise Guide: The "5 Apples" Formstorming

- Total Duration: 3–4 Hours (In-Class)

- Software: Adobe Illustrator, Photshop or Figma

- Objective: Move beyond standard charts (bars/pies) and explore the visual semantics of quantity.

---
layout: image-right
image: '/28234519-2328946103.webp'
backgroundSize: 100%
class: mt-0
---

# Formstorming 
Theoretical Framing
<br>

**The Inspiration**: Raymond Queneau's Exercises in Style (1947), where he retells the same mundane story (a man on a bus) in 99 different literary styles (e.g., as a sonnet, scientifically, slang, passive voice).

**The Design Equivalent**: Matt Madden’s 99 Ways to Tell a Story: Madden took Queneau’s concept and applied it to comics.

**The Goal**: Apply this to your Data. 

<br>

[_For example:_]{style="color:#ffcc00"} How can the number **"5"**{style="color:#ffcc00"} be represented **without using a number or a bar chart**{style="color:#ffcc00"} ?


---
layout: default
---

# 99 Ways to Tell Story
by Matt Madden

<div class='grid grid-cols-3 gap-4'>
<div>
<img h-90 src='/template.jpg' />
Starter Sketch
</div>

<div>
<img h-90 src='/Underground-Comix.jpg' />
Underground Comix
</div>

<div>
<img src='/Fantasy.jpg' />
Fantasy
</div>
</div>

---
layout: default
---

# 99 Ways to Tell Story
by Matt Madden

<div class='grid grid-cols-3 gap-4'>
<div>
<img h-90 src='/superhero.jpg' />
Super Hero
</div>

<div>
<img h-90 src='/Palindrome.jpg' />
Palindrome
</div>

<div>
<img src='/one-panel.jpg' />
One Panel
</div>
</div>


---
layout: default
---

# 99 Ways to Tell Story
by Matt Madden

<div class='grid grid-cols-3 gap-4'>
<div>
<img h-90 src='/Map.jpg' />
Map
</div>

<div>
<img h-90 src='/Manga.jpg' />
Manga
</div>

<div>
<img src='/humor-comic.jpg' />
Humor Comic
</div>
</div>


---
layout: two-cols
---

# The Analog Sprint (45 Minutes)
- [The Prompt:]{style="color:#ffcc00"} "You have 5 Apples. Visualize this quantity."

- [The Constraint:]{style="color:#ffcc00"} You cannot use the number "5" or the word "Five." You cannot use a standard excel bar chart.

- [Two minutes]{style="color:#ffcc00"} for each box.

::right::

# Possible Styles

- **Literal**: Show the apples.

- **Abstract**: Show the volume of the apples.

- **Geometric**: Use only triangles.

- **Negative Space**: Show the absence of apples.

- **Destructive**: Show 5 apples that have been eaten.

- **Typographic**: Use the letter "A" five times.

- **Instructional**: How would IKEA show 5 apples?

- **Glitch**: The data is corrupted.


---
layout: two-cols
---

# Digital Execution (90 Minutes)
Digitize the sketches that you created on analog session.

1. Isotype (Iconography)
2. Abstract Geometric
3. Organic / Hand-Drawn
4. Topographic (Map)
5. Minimalist (1 pixel)
6. Maximalist (Texture)
7. Typographic (Text as image)
8. Glitch / Error
9. 3D / Isometric
10. Photographic (Collage)

::right::

<br><br><br><br><br>

11. Metaphorical (Pie crusts),12. Scientific (Molecular)
13. Negative Space
14. Pattern / Tessellation
15. UI Element (Loading bar)
16. Industrial (Blueprint)
17. Fluid / Liquid
18. 8-Bit / Pixel Art
19. Blurred / Bokeh
20. X-Ray / Transparent

---
layout: default
---

# Critique (30 Minutes)

"The Wall of 120."

Have them export all 20 as JPEGs.

Upload to a shared 🔗 [FigJam](https://www.figma.com/board/xBbAYlsfm8WyMMahecs9Ve/Digital-Sketches-for-99-Variations?node-id=0-1&t=QbFiqP5rXKYolq7o-1).

<!--
Review Question: "Which of these conveys '5' the fastest? Which conveys the 'feeling' of an apple best?"

This highlights the difference between Data Visualization (clarity/speed) and Data Art (emotion/aesthetic).
-->

---
layout: section
---

# Which of these conveys '5' the fastest? Which conveys the 'feeling' of an apple best?
In terms of Data Visualization (clarity/speed) and Data Art (emotion/aesthetic)

---
layout: default
---

# References

Relevant Sources & Links for Class

1. The Primary Reference (Design Pedagogy):
<br>
    Book: Graphic Design: The New Basics by Ellen Lupton & Jennifer Cole Phillips.
<br>
    Link:(https://medium.com/@PAPress/what-is-formstorming-3951e742a402)


2. The Conceptual Reference (Literary):
<br>
    Book: 99 Ways to Tell a Story: Exercises in Style by Matt Madden.


3. The Visual Reference (Data Styles):
<br>
    Website: The Data Viz Project.https://datavizproject.com/


4. The Aesthetic Reference:
<br>
    Book/Project: Data Sketches by Nadieh Bremer & Shirley Wu.
<br>
    Link:(https://www.datasketch.es/) - Specifically look at their "process" pages to see how they sketched many versions of the same data.



---
layout: center
---

# Assignment

<br>

### 1. Digitize Week 1 data into a clean CSV or excel file. Include the data as a table in week 02 insights on your Notion page.

<br>

### 2. Produce 3 low-fidelity poster layouts based on one of your "99 Variations" sketches using Photoshop, Figma, or Illustrator. Then choose one of them as a guide for your original data.

<br>

### 3. Create entry about week 02 insights on your blog as a response paper due to Monday. Paste link as reply on LMS.
<br>

### 4. Share the link on LMS.

<br>

### 5. Print your selected design on a A3 paper due to Thursday session. Include the final design and three low-fidelity (wireframe design) on your week02 insights blog entry. 

---
layout: end
class: font-mono
---

# Fin
^ _ ^