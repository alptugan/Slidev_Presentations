---
background: /cover-alap.jpg
title: Algorithmic Art Praxis
exportFilename: "Algorithmic Art Praxis"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan, PhD

    Access all week contents @[Github/alptugan](https://github.com/alptugan/Slidev_Presentations)
drawings:
    persist: true
aspect-ratio: 16/9
css: unocss
download: true
# controls whether texts in slides are selectable
selectable: true
codeCopy: true
# favicon, can be a local file path or URL
favicon: "https://www.alptugan.com/v5/favicon-192.png"
themeConfig:
    primary: "#ffcc00"
transition: fade-out
theme: seriph
src: /pages/header.md
---

---
layout: default
---
# Table of Contents

<Toc :columns="2" />




---
image: /alap-web.jpg
layout: image-left
backgroundSize: 100%
class: pt-40
---

# ALAP Database
Check ALAP database [Algorithmic Art Repo](https://alptugan.notion.site/0025088dd8be4eafad7826c90260dc59)

---
class: pt-10
image: /alap-entry.jpg
layout: image
backgroundSize: 40%
title: Algorithmic Art Database
---


<Arrow v-click x1="100" y1="165" x2="305" y2="165" />

<div
  v-motion
  :initial="{ opacity:0 }"
  :enter="{ x: 0, y: 95 }"
  :click-1="{ x: 45, y: 95, opacity:1 }"
  :leave="{ y: 0, x: 80, opacity:0 }"
>
  Artist Name
</div>



<Arrow v-click x1="100" y1="285" x2="305" y2="185" />


<div
  v-motion
  :initial="{ opacity:0 }"
  :enter="{ x: 0, y: 285 }"
  :click-2="{ x: 45, y: 225, opacity:1 }"
  :leave="{ y: 500, x: 0, opacity:0 }"
>
  Artwork Name
</div>



---
layout: image
image: /alap-detail.jpg
backgroundSize: 60%
title: Algorithmic Art Detail
---



---
layout: image-left
image: /alap-detail.jpg
class: font-size-2.5
backgroundSize: 180%
---

<v-click>

| **Parameter**       | **Description**                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| Title           | The artwork’s official title.                                                                         |
| Medium          | The tangible supplies that were utilized to make the artwork.                                         |
| Artist          | The artist(s)’s name and last name.                                                                   |
| Classification  | Processes used to produce the artwork.                                                                |
| Praxis          | Outlines the potential algorithmic practice categories that could be applied to  produce the artwork. |
| Date            | Artwork creation date.                                                                                |
| Size            | The original dimensions of the artwork (metric or inch units).                                        |
| URL             | The official source of the artwork.                                                                   |
| Additional Info | Information regarding the technical hardware and methods used in creating the  artwork.               |


</v-click>


---
layout: center
---

# ALAP Cheat Sheet & Categories Download Links

<div class='grid grid-cols-2 gap-4'>
<div m-auto>
    <img mb-3 h-80 src='/alap-categories-sm.jpg' />
    <a target='_blank' href="https://media-host.alptugan.workers.dev/Documents/ALAP-Categories.pdf">Download the Categories</a>
</div>

<div m-auto >
    <img mb-3 h-80 src='/alap-cheat-sheet.jpg' />
    <a href='https://media-host.alptugan.workers.dev/Documents/ALAP-Categories-Cheat_Sheet.pdf' target='_blank'>Download the Cheat Sheet</a>
</div>
</div>


---
layout: image
image: /alap-categories.jpg
backgroundSize: 60%
title: Algorithmic Art Praxis Categories
---


<Arrow v-click color-yellow x1="505" y1="15" x2="505" y2="125"  
v-motion
  :initial="{ opacity:0}"
  :enter="{ 
  opacity: 1,
  transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, 
    }"
/>


<div
  v-motion
  :initial="{ opacity:0 }"
  :enter="{ 
  x: 460, y: -10,
  transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, 
    }"
  :click-1="{ x: 460, y: -10, opacity:1 }"
  :leave="{ x: 460, y: -100, opacity:0 }"
  text-yellow
>
  Choose Praxis (Category)
</div>



---
layout: section
---

# In-class Practice
Bring up your ALAP documents and answer the following 12 surveys.



---
layout: image
image: /ALAP-categories-and-cheat_sheet.jpg
backgroundSize: 68%
title: ALAP Categories & Cheat Sheet
---



---
layout: image-left
image: /surveys.jpg
backgroundSize: 90%
class: text-3.8
---

# Quiz
Take out your printed documents. You can choose multiple options.

- [ALAP 01 Survey](https://forms.gle/4wVqCfkFkri42j8P8)
- [ALAP 02 Survey](https://forms.gle/RRzGZ9cN3tusbUK89)
- [ALAP 03 Survey](https://forms.gle/n7eYC9zfTsNRQLN5A)
- [ALAP 04 Survey](https://forms.gle/tYzfCvF9dMBNoSMD7)
- [ALAP 05 Survey](https://forms.gle/bf7AQvUoH2ArFXCi9)
- [ALAP 06 Survey](https://forms.gle/uS4d7FXc8Q51bJKu9)
- [ALAP 07 Survey](https://forms.gle/KqBt28bRinqSLkTz5)
- [ALAP 08 Survey](https://forms.gle/7g5KfDxGKhXZgtSK7)
- [ALAP 09 Survey](https://forms.gle/hHbgHsGZMLddb2KT9)
- [ALAP 10 Survey](https://forms.gle/AuJm32rt37PPw71fA)
- [ALAP 11 Survey](https://forms.gle/p1spzzQYRwXvgwNo7)
- [ALAP 12 Survey](https://forms.gle/sYNMNThHkwEbWKtn7)


---
src: /pages/break.md
hide: false
---


---
layout: section
image: /inclass.png
backgroundSize: 100%
---
# In-class Discussion
## Final Projects & Instructions

---
layout: default
---
# Food for Inspiration

1. Review the [list](https://teaching.alptugan.com/Courses/COD-207-Creative-Coding-I#inspiration--showcases). 
2. Review the previous student [works](https://sites.google.com/ozyegin.edu.tr/cod-207-selected-projects/all).
3. Previous student works video [documentations](https://youtube.com/playlist?list=PLvcJjvBzWDXan8ZkLsE5gYtNX9AhjQNW-&si=0PDGlFD5MJGjYDML).
4. Discuss your project idea with an LLM. Instruct the AI to ask questions about your project. 
5. Example project documentation of Tuğan's open-source sound reactive audio-visualizer ([Rutt-Etra Video Synth](https://github.com/alptugan/Rutt-Etra-Original_AlpTugan)).
6. Example project documentation of Tuğan's open-source icon generator for Mac OS, [icns Creator](https://github.com/alptugan/icns-creator). 


---

# 1. Project Template Document
Your final project document must include the following information. **Please complete every section to avoid losing points.**

<span text-yellow>**1. Course:**</span> COD 207 Creative Coding I

<span text-yellow>**2. Student Name/Surname:**</span> [Your Name]

<span text-yellow>**3. Project Title:**</span> Provide a title for your work. (You may update this after receiving feedback).

<span text-yellow>**4. Mood Board:**</span> Include your mood board here. If you are using Miro, Notion, or another cloud-based app, please add a screenshot and a **public link** so I can access it.

<span text-yellow>**5. Project Type:**</span> What is the category of your project? Choose one of the following or propose your own:

<span text-yellow>**6. Project Description:**</span>
Write a comprehensive description of your project. This section should cover:

---
layout: two-cols
class: pl-5 ptr-5 text-4.2
---
# Project Type?

*   <span text-yellow>**Generative Art:**</span>
    *   Abstract digital painting
    *   Animated loops (GIFs)
    *   Plotter drawings (vector-based designs for print)
*   <span text-yellow>**Computational Design:**</span>
    *   Generative poster design
    *   Generative cover design
    *   Generative book covers
    *   Algorithmic typography or logo design
*   <span text-yellow>**Interactive Media:**</span>
    *   Mini-games (Educational, advergame, casual game, puzzle game, etc...)
    *   Mouse/Keyboard interactive visual systems
    *   Audio-reactive visuals (Music visualizer)

::right::

# _

*   <span text-yellow>**Data Visualization:**</span>
    *   Visualizing personal data (e.g., screen time, steps)
    *   Abstract mapping of external datasets
*   <span text-yellow>**Generative Collage:**</span>
    *   Remixing images and shapes using code
*   <span text-yellow>**Other:**</span>
    *   If you have a unique idea not listed here, please explain it in detail.


---

# Project Description
Write a comprehensive description of your project. This section should cover:
1.  <span text-yellow>**Concept:**</span> What is the core idea or theme?
2.  <span text-yellow>**Technical Approach:**</span> Which coding techniques and tools are you using? Why did you choose them?
3.  <span text-yellow>**Connection:**</span> How does the technical approach support your concept and mood board?

*Do not write these as separate bullet points; please write them as a cohesive paragraph.*


---

# 2. Final Project Video Documentation
You must screen-record your project. The video resolution must be at least <span text-yellow>**1920x1080 px**</span>.

*   <span text-yellow>**Audio/Text:**</span> Use subtitles or a voice-over to briefly explain your work.
*   <span text-yellow>**Content:**</span>
    *   If it is <span text-yellow>**artwork**</span>, explain your inspiration and motivation.
    *   If it is a <span text-yellow>**design (poster, book cover, etc.)**</span>, explain the context and usage.
*   <span text-yellow>**Goal:**</span> The video must clearly demonstrate how the project works to an audience who has never seen it before.


---

# 3. Source Code & Outcomes
1.  Download your source code from p5.js or OpenProcessing.
2.  Rename the downloaded `.zip` file using your name and surname.
    *   *Example:* <span text-yellow>**sketch-alptugan.zip**</span>

---

# 4. Submission Instructions
1.  Create a folder on your computer named with the course code, your name, and surname.
    *   *Example:* <span text-yellow>**alptugan_cod207_A**</span>
2.  Place your <span text-yellow>**Final Project PDF**</span>, <span text-yellow>**Video Documentation**</span>, and <span text-yellow>**Source Code (.zip)**</span> inside this folder.
3.  Upload the folder to the Google Drive link provided below.
    *   <font color="#c0504d" bold>DO NOT UPLOAD THE FILES DIRECTLY TO THE LMS.</font>
4.  Once uploaded to Drive, copy <span text-yellow>the link to your folder</span> and paste it into the <span text-yellow>LMS</span> submission box.

---
class: text-3.7
---

# GRADING POLICY
As stated in the course syllabus, the final project accounts for **30%** of your final grade. You will be evaluated based on the following criteria:

| **Description**                                                                                              | **Points**      |
| :----------------------------------------------------------------------------------------------------------- | :---------- |
| **Detailed Comments in the Code**<br>(Is the code explained clearly via comments?)                           | 20 PTS      |
| **Aesthetics & Design**<br>(Visual balance, composition, and theoretical grounding)                          | 40 PTS      |
| **Project Document, Description & Analysis**<br>(Quality of the project document and computational thinking) | 20 PTS      |
| **Video Documentation**<br>(Clarity, resolution, and explanation)                                            | 20 PTS      |
| **TOTAL**                                                                                                    | 100 PTS     |

---
src: /pages/assignment.md
hide: true
---
