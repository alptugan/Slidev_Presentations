---
theme: seriph
background: https://picsum.photos/1920/1080/?blur=10
title: PHD Final Jurry
exportFilename: "2025-alptugan-phd-defense"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
  ### Özyeğin University Design
  Technology, and Society Phd Program, Social Sciences Institute

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

## Contextualizing Programming with Algorithmic Art Practices Using Computational Thinking Principles for Undergraduate Design Students 

<div class="pt-12 font-bold text-5">
Özyeğin University Design, Technology and Society Department
</div>
<div class="pt-0 italic">
Alp Tuğan
</div>

<div class="pt-12">
15.05.2025
</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    START <carbon:arrow-right class="inline"/>
  </span>
</div>

<!--
Welcome to all.

First of all, thank you.

The core idea and motivation is proposing a methodological approach contextualizing programming with algorithmic art.
-->

---
title: Table of Contents
---

<Toc text-3 ml-40 :columns="2"/>

---
layout: center
class: px-50
---

#  Introduction
.

Rapid advancements in technology necessitate programming skills and computational thinking (CT) for everyone.

Growing programmer population

Paradigmatic Shift on Human-computer Interaction

GUI to Command-based Interface (CBI)

<!--
Paradigmatic Shift is required, we can observe this in three contexts.

1. The number of programmers increased. Causing the change in HCI paradigms. Why? Because the more a social group grows population, the more they have HCI paradigms. Open-source tools, custom scripts, command-based interfaces increased. Like reading, writing, and arithmetics are essential, programming should be 4th R.

2. Growing Population of specific actors in a network results in domination of the crowded group. E.g. Democracy in our country. It is not the reflection of Tech. Determinism.

23 New Approaches in Human-Computer Interaction


-->

---
layout: center
---

# Cases of The Paradigmatic Shift

<div class='grid grid-cols-3 gap-4'>
<div>
  <div class='' >
  Increasing Number of Programmers (Statista, 2020)
  </div>
  
  <div mt-2>
    <img src='/fp1_statistic_id627312_developers-population-worldwide-2018-2024.png'/>
  </div>

</div>

<div v-click>
  <div class=''>
  GUI → CBI (Command-based Interface)
  </div>
  
  <div mt-2>
  <img src='/git-cli-hero.png'/>
  </div>

  <Youtube mt-2 id='cBdyHp_XVFQ?t=32' width='100%' height='auto'/>
</div>

<div v-click>
  This Presentation is another proof-of-concept
  <img mt-2 src='/slidev.jpg'/>
</div>
</div>

<!--
This is the reason why programming becomes a required knowledge. It does not mean that eveybody must learn programming as a programmer. It is required how reading, writing, and artihmetics is required in a modern society today.

1. Paradigmatic Shift is happening, 
Everything we do one way or another depends on computers. 
Designers, doctors, artists, citizens—everyone uses computers.
Having first aid education is not a must, but we should have it.
Having reading, writing, and arithmetics knowledge does not make you a scientist, but it is required to live in a modern world.

Why this shift happens?

2. Increasing number of programmers mean that teachnology dependent tools is increasing also. Which means that rather than using predefined scripts, we start to alter the scripts
-->

---

# Existing Software Follow The Trend

<div class='grid grid-cols-2 gap-10'>
  <div>
    <kbd>CBI AI Tools</kbd><br>
    Eg. Mid Journey, DALL-E
    <img src='/figure4.png'/>
    <div text-3 mt-2>
    "Prompt: <i>A Panda fixing the rooftop.</i>"
    </div>
  </div>

  <div>
    <div v-click><kbd>Scripting</kbd><br>
    Eg. Adobe Illustrator</div>
    <img v-click src='/figure6.jpg'/>
    <div v-click mt-7>
    <img src='/script.jpg'/>  
  </div>
  </div>
</div>

<!--
All of these new paradigms reduce the tedius tasks, and leave time for the designer to be creative. 

Video Scripting: https://www.youtube.com/watch?v=AtqHdzVqok0&ab_channel=Dansky
Video Scripting: https://www.youtube.com/watch?v=EGdgrP7azUQ&t=648s&ab_channel=NTProductions
-->

---

# Problems
- Traditional programming courses present challenges for design students:
  - Abstract concepts: Programming fundamentals often feel disconnected from real-world applications.
  - Lack of relevance: Traditional approaches struggle to resonate with non-context preferences, leading to disengagement.

- Students may hold prejudice against coding, perceiving it as tedious or only relevant to technical fields.

- Translating natural language understanding into formal programming languages is a key difficulty for novices.

- High dropout rates: Programming courses in higher education face a rising trend of dropouts and failures.
<!--

Programming, itself, is an abstracted version of spoken language similar to mathematics. Even CS students struggle in classes. Non-majors like designers find programming 
- irrelevant for them 
- tedious task
- prejudice of mathematical knowledge requirement
- Problem of natural language -> Prog. Lang. (The cognitive challenge of converting ideas from natural language to code)

Causing increasing drop-out rates
-->

---
layout: center
class: pl-40 pr-40
---

# Research Gap & Goal

Literature supports context-based learning for engagement but lacks specific, actionable methodologies tailored for visual learners.

<v-clicks>

- There is a need for elaborate approaches on programming education.
- Lack of computational thinking tools for learning.

- The scope and methods used when suggesting contextualizing programming with "art" remain unclear.

- Contextualizing programming with art has positive impacts. But how?

**Research Goal:** Propose practical methods and contribute to debates on developing CT skills through contextualized programming paradigms by analyzing algorithmic art.

Develop and evaluate a methodology using algorithmic art to facilitate programming education that is both educationally rigorous and creatively relevant to design students

</v-clicks>

<!--
Clearly state the gap identified in the literature: while context helps, there isn't a defined framework or tools for using art, specifically algorithmic art, effectively for design students learning to program

Explain that existing CT tools often target technical students

Articulate the specific research goal: to fill this gap by creating and evaluating a structured, art-based approach

Research indicates that contextualized programming education positively impacts students' learning and enthusiasm for the subject. However, there is a requirement for resources and explicit instructional methods specifically designed for students in design-based undergraduate programs, where visual learners are prominent. To bridge this gap, this study introduces materials (ALAP) and a method (D/I) that can be implemented in programming education within the context of algorithmic art.
-->


---
layout: statement
title: RQ
---

# Research Question


## How can we contextualize programming fundamentals through algorithmic art practices to improve students' computational thinking skills and engagement in higher education?

---
layout: center
class: pl-30 pr-30
title: SRQs
---

### SRQ1: <span text-gray italic>"What are the common practices used in algorithmic works of art related to programming fundamentals, especially in creative coding?"</span>

<br>
<br>

### SRQ2: <span text-gray italic>"How can we relate common practices used in algorithmic art with computational thinking to provide hands on tools that can be used as teaching and learning material in a visual context?"</span>


---
layout: two-cols
---

# Theoretical Foundations
Constructionist Learning + ANT + Semiotic Representations

Seymour Papert's Constructionist Theory: Students learn best when actively creating personally meaningful artifacts. This underpins the hands-on, creative coding approach.

Actor-Network Theory (ANT): Useful for understanding complex relationships between human and non-human actors. 

Duval's Theory of Semiotic Representation: Addresses the cognitive challenges of converting representations between different systems (visual, verbal, code). Non-congruent conversions and cognitive dissociation are key challenges the method aims to address.

::right::

<img ml-12 mt-13 src='/PHD_ANT_01.jpg'/>
<div class='caption'>
Figure: Research Network Actors
</div>

<!--

- Explain that the research is built on established educational and sociological theories.

- Detail Constructionism's emphasis on "learning by making" and its relevance to creative coding.

- Describe how Pragmatism supports the development and testing of practical methods.

- Explain ANT's relevance, particularly the idea of understanding and modifying the "scripts" within technology, linking it to the method's name.

- Introduce Duval's theory to frame the challenges students face in translating between different ways of representing information (like ideas, sketches, and code)
-->

---
layout: image
image: /PHD_ANT_02.jpg
backgroundSize: 75%
---


---  
title: Registers
layout: two-cols
---

# What is register?
A register of representation refers to a specific semiotic system used to express mathematical concepts, such as natural language, symbolic notation, graphical representations, or visual displays. (Duval, 2006)

1. Visual Register 
2. Verbal Register
3. Written Register
4. Programming register 

::right::


<div ml-20>

<img h-115 src='/Registers.png' />

</div>


---
layout: two-cols
title: Register Conversion
---

# Register Conversion
Congruent and Non-congruent registers

### Congruent Register Conversion
<img src='/congruent_conversion.png' />

::right::

<div mt-22 ml-10 v-click>

  ### Non-congruent Register Conversion

  `Adding eight and half of four gives the sum of ten`, the word "adding" comes before the numbers, two is derived from the half of four and the conversion becomes non-congruent.
</div> 


<!--non-congruent conversion relates to the cognitive challenges students face when transforming representations between different semiotic registers, especially when there is no one-to-one mapping between the source and target representations. 

Bu yüzden her bir kategorinin, aynı zamanda ilgili pratiği gösterirken, farklı registerlara dönüştüğünde de karışıklığa sebep olmaması için cheat-sheet önemli hale geliyor.

-->


---
layout: intro
---

# Methodology

 - Phase 1: ALAP Database, Categories and Cheat Sheet
 - Bridge: Theory of Semiotic Registers
 - Phase 2: De-scription/In-scription Method

<!--
The research consists of two consequential phases aimed at creating a framework connecting computational and artistic practices

Phase 1: 
Develop tools (database, categories, cheat sheet) to connect programming practices with algorithmic art for visual learners

Addresses sub-question 1 about common practices in algorithmic art

◦◦◦◦◦◦◦◦◦◦◦◦

Phase 2: 
Create a hands-on teaching method integrating Phase 1 outcomes

Evaluate the method's impact on student engagement and CT skills through a case study/workshop

Address sub-question 2 by offering a practical framework.


◦◦◦◦◦◦◦◦◦◦◦◦
Outline the structure of the research methodology.

Clearly distinguish the goals of Phase 1 (creating resources) and Phase 2 (using resources in a teaching method).

Mention that these phases build upon each other and address specific research questions
-->

---
layout: two-cols
---

# Phase1: Algorithmic Art Praxis 

<img src='/figure_10.png' />

Link to [ALAP Database](https://alptugan.notion.site/0025088dd8be4eafad7826c90260dc59?v=e8195072f5ec42f4b9f39a70b64b429d)


::right::

<img scale-75 mt--15 src='/figure_database_diagram_02.jpg' />

<!--
ALAP Database: An online repository of algorithmic artworks (1940-2000) illustrating how programming constructs are foundational to algorithmic art. Includes works from both computer-generated artists and those using algorithms for human agents (e.g., Sol LeWitt).

ALAP Categories: 18 distinct categories linking visual art techniques to core programming concepts (e.g., Tiling, Translation, Rotation, Scaling, Repetition, Randomness, Oscillation, Trace). Derived from programming terms and algorithms in creative coding frameworks.

ALAP Cheat Sheet: A tool condensing and simplifying ALAP categories into practical steps with visual illustrations and descriptions. Designed for visual learners to connect programming constructs to concrete examples.

Purpose: To contextualize programming education, make abstract concepts accessible, facilitate interdisciplinary understanding, and provide tools for teaching CT.

Platform: Hosted on Notion, designed as a visually appealing grid (image gallery) with detailed information and filtering.
-->

---

# Categorization Rationale

<img scale-90 mt--5 src='/figure_13_design_approach_02.jpg' />

---

# Outcomes: ALAP Categories

<img scale-70 mt--25 src='/ALAP-categories-and-cheat_sheet.jpg' />

---  
title: Bridging Phase1 and Phase 2
layout: section
---

# Bridging Phase1 and Phase 2
## Semiotic Registers


---
title: The Methodological Framework
---

# The Methodological Framework 

<div class='grid grid-cols-4 gap-4'>
  <div v-click>
    Computational Thinking
    <img p-0 src='/CT.png'/>
  </div>
  <div v-click>
    ALAP Categories
    <img p-0 src='/ALAP_txt.png'/>
  </div>
  <div v-click>
    Multiple Registers
    <img src='/ALAP_vis.png'/>
  </div>
  <div v-click>
    Register Conversion
    <img src='/Registers.png'/>
  </div>
</div>

<!--
The ALAP framework maps algorithmic art techniques to computational thinking skills.

Viewing art through this lens facilitates skills such as:
- Decomposition: Breaking down complex artworks into constituent elements and underlying code structures.

- Pattern Recognition: Identifying recurring visual patterns linked to programming concepts like loops or repetition.

- Abstraction: Simplifying complex artistic concepts to essential features, establishing variable names and values.

- Algorithm Design: Defining step-by-step procedures to recreate or generate art.

The ALAP Categories and Cheat Sheet act as guides in this process, easing the initial step of decomposition and providing a framework for analysis.

It connects abstract programming principles to concrete, visually familiar examples, making them relatable for visual learners.
-->


---
layout: two-cols
class: pl-0 pr-0
title: Method
---

# Phase 2: De-scription / In-scription Method
1. Choose an image from the database
2. Analyze it using pen and pencil or any other tool like drawing tablets familiar to the learner.
3. Determine the instruction order.
4. Register Conversion Stage. 
    - Use the cheat-sheet.
    - Research using the cheat-sheets (web-sites, previous assignments, ALAP codes).
5. Algorithm Design

::right::

<div mt-25 ml-5>
<img src='/figure_Description-Inscription.jpg' />
</div>

<!--
A pedagogical approach focusing on hands-on, experiential engagement with programming through algorithmic art.

De-scription Phase: Students analyze algorithmic artworks, deconstructing them into underlying code structures. This is an interpretative process revealing inner mechanisms, linked to CT steps (decomposition, pattern recognition, abstraction, algorithm design). It involves identifying formalistic features using multi-functional registers (visual, verbal).


In-scription Phase: Students apply insights to creative coding projects, reconstructing principles and iteratively refining code. This involves translating analysis into mono-functional programming language registers.


The method addresses the challenge of register conversion (translating between different semiotic representations), aiming to facilitate the cognitive dissociation required for non-congruent conversions.


Borrows terminology from Akrich's Script Theory (ANT), representing "opening the black box" of code and modifying its content.
-->

---
layout: center
class: px-10
---

# D/I Method Applied
<div class='grid grid-cols-3 gap-4'>
<div>
  
  ## 1. Choose
  <img src='/Selin_Kabadayi.png' />
</div>

<div>

  ## 2. Analysis 
  <img m-auto src='/selin02.png' />
</div>

<div>

  ## 3. Procedural Flow
  <img m-auto src='/selin01.png' />
</div>
</div>

<div bottom-0 class='caption'>
  Paul Brown, "4^16-2030311203312120", 2005
  </div>

<!--
1.
Choose: Select an artwork from the ALAP database (instructor or student choice, often focusing on specific ALAP categories). Provide students with the ALAP cheat sheet.

2.
Analysis: Observe and describe the artwork's formalistic features (color, shape, composition) using multi-functional registers (notes, sketches, verbal descriptions). Instructor assistance ("treatments") helps students switch registers.

3.
Procedural Flow: Identify the likely procedural order or steps taken to create the artwork.

4.
Abstraction: Convert findings from analysis and procedural flow into programming language registers. Use ALAP categories, cheat sheet, and code snippets to identify relevant programming practices (e.g., translating "dark red" to fill(200, 20, 10)). Notes become variables, flow becomes code order.

5.
Algorithm Design: Write the code based on the abstracted findings to recreate or generate the artwork. Encourage iteration, experimentation with values, and collaborative learning (peer discussions, pair programming).
-->


---
layout: center
class: pl-0 pr-0
title: Method Applied (Register Conversion)
---

## 4. Register Conversion
<br>

| **Written Register**            | **Programming Language Register**             |
| --------------------------- | ----------------------------------------- |
| Green color                 →| `let green; green = color(36, 343, 143);` |
| Triangle                    →| `triangle(x1,y1,x2,y2,x3,y3);`            |
| Square                      →| `rect(xr1, yr1, sr1, sr1);`               |
| Create canvas 800 by 800 px →| `createCanvas(800, 800)`                  |
| ... | `...`                  |


---
layout: center
class: pl-60 pr-60 text-center
title: Method Applied (Algorithm Design)
---

## 5. Algorithm Design
<br>

<img src='/Selin_Kabadayi_final.jpg' />


---
layout: center
class: pl-10 pr-10 text-center
title: Method Applied (More Examples)
---
## Other Students
<br>

<img src='/img_method_exemplified.jpeg' />

---
layout: center
class: text-center
title: Evaluation and Results
---

# Survey 1 - ALAP Categories 

<img src='/figure_ALAP_survey.jpg' />

<!--
Method implemented with 30-40 design students at Özyeğin University over a four-week workshop.

Data collected via pre/post-surveys, interviews, and in-class observations.
-->

---
layout: center
class: text-center
title: Results (ALAP Categories)
---
# Results (Survey 1)

<div class='grid grid-cols-3 gap-2 mb-3'>
<div>
<img src='/alap_results/qs1.png' />
</div>
<div>
<img src='/alap_results/qs2.png' />
</div>
<div>
<img src='/alap_results/qs3.png' />
</div>
</div>

<div class='grid grid-cols-3 gap-2 mb-3'>
<div>
<img src='/alap_results/qs4.png' />
</div>
<div>
<img src='/alap_results/qs5.png' />
</div>
<div>
<img src='/alap_results/qs6.png' />
</div>
</div>

<div class='grid grid-cols-3 gap-2 mb-3'>
<div>
<img src='/alap_results/qs7.png' />
</div>
<div>
<img src='/alap_results/qs8.png' />
</div>
<div>
<img src='/alap_results/qs9.png' />
</div>
</div>

<div class='grid grid-cols-3 gap-2'>
<div>
<img src='/alap_results/qs10.png' />
</div>
<div>
<img src='/alap_results/qs11.png' />
</div>
<div>
<img src='/alap_results/qs12.png' />
</div>
</div>

---
layout: two-cols
title: Conclusion (ALAP Survey)
---

# Conclusion: ALAP Survey 

<img h-100 src='/figure_praxis_categories.png' />

::right::

<div mt-13 ml-0 v-click>
Results show that;

- Participants comprehend categories. 
- Some of the selected artworks take time to identify. The artworks, including abstract and natural forms (e.g., Desmond Paul Henry's ), become more challenging than those generated with simple shapes, such as Vera Molnar's geometric works.
- Increased engagement.
- Peer assessment.
- In-class discussions increased.
- Participants use cheat-sheets while asking questions.

</div>

<!--
Key Findings:
- Enhanced student engagement and comprehension.

- Shift in perception: students see programming as an empowering, adaptable medium.

- Students could generally identify relevant ALAP categories in artworks, showing the categories resonated with their visual cognition. Some confusion noted between similar categories (Tiling/Tessellation).

- CT method showed mixed responses on directly helping remember programming practices, but positively impacted organization and breaking down tasks.

- The method enhances CT skills through iterative experimentation.

Student Feedback: Positive reception, increased interest in coding despite initial prejudice, recognition of creative potential, request for more case studies. Challenges included pacing and difficulty translating to code ("like learning a new language")
-->

---
layout: two-cols
class: text-left
title: Survey 2 (D/I)
---
# Results (Survey De-scription/In-scription)

<img h-100 src='/figure_Description-Inscription.jpg' />

::right::

<div mt-23 ml-5>

- The survey is divided into two main sections. 
- The first section, related to participants' backgrounds, providing essential demographic information. 
- The second section, focuses on the efficiency of the De-scription/In-scription method. 

</div>

---
layout: center
class: text-center
title: Results 1 (D/I)
---
# Participants' Background


<div class='grid grid-cols-3 gap-4'>
<div>
<img src='/ct_results/survey-1-image1.png' />
</div>
<div>
<img src='/ct_results/survey-1-image2.png' />
</div>
<div>
<img src='/ct_results/survey-1-image3.png' />
</div>
</div>


<div class='grid grid-cols-3 gap-4' mt-2>
<div>
<img src='/ct_results/survey-1-image4.png' />
</div>
<div>
<img src='/ct_results/survey-1-image5.png' />
</div>
<div>
<img src='/ct_results/survey-1-image6.png' />
</div>
</div>


<div class='grid grid-cols-3 gap-4' mt-2>
<div>
</div>
<div>
<img src='/ct_results/survey-1-image7.png' />
</div>
<div>
</div>
</div>


---
layout: center
class: text-center
title: Results 2 (D/I)
---
# Is The Method Effective?
<div class='grid grid-cols-3 gap-4'>
<div>
<img src='/ct_results/survey-1-image8.png' />
</div>
<div>
<img src='/ct_results/survey-1-image9.png' />
</div>
<div>
<img src='/ct_results/survey-1-image10.png' />
</div>
</div>

<div class='grid grid-cols-3 gap-4 mt-2'>
<div>
<img src='/ct_results/survey-1-image11.png' />
</div>
<div>
<img src='/ct_results/survey-1-image12.png' />
</div>
<div>

</div>
</div>
<!--The survey data indicated that the CT-based programming approach positively impacted student learning, motivation, and engagement. However, the feedback also highlighted areas for improvement, such as increased exposure to algorithmic/generative art, creative coding, and better support for students struggling with programming concepts.

Some participants desired additional case studies and explanations related to specific programming paradigms like Agent-based and Displacement. These findings align with Duval's emphasis on the cognitive challenges of non-congruent conversions between semiotic registers (Duval, 2006; Hoppe, 2020). Overall, the survey results suggest that the De-scription/In-scription method, grounded in algorithmic art practices, effectively boosted student motivation and provided a constructive learning experience. However, incorporating additional support mechanisms, such as generative art projects and supplementary exercises, could further enhance the cognitive processes involved in semiotic register conversion, improving comprehension of programming concepts.
-->


---

# Contributions of the Research
.

The De-scription/In-scription Method: A validated experimental method specifically for teaching creative coding to visual learners in design.

The ALAP Framework and Resources:
Algorithmic Art Praxis (ALAP) database: A unique online repository (1940-2000) providing historical context and examples.

ALAP Categories: 18 distinct categories linking algorithmic art practices to programming paradigms.

ALAP Cheat Sheet: A practical, visual tool aiding register conversion and CT activities.

Theoretical Contribution: Contributes to the discourse on CT in higher education, reframing it as essential for interdisciplinary creativity, not just technical fields. Empirically grounds Papert's constructionism and utilizes concepts from ANT and Duval's semiotics in a practical teaching method.

Empirical Analysis: Provides in-depth quantitative and qualitative data on design majors' perspectives towards programming

---
class: text-4
---

# Limitations and Future Directions

<v-click>

### *Limitations*
Restricted Accessibility of the ALAP Database: Currently only accessible to the author, hindering wider use and sustainability.

Study conducted with a specific group of design students at one university.

Workshop duration (four weeks) is relatively short for comprehensive programming proficiency.
</v-click>

<v-click>

### *Future Research Directions*

Establish a dedicated, accessible online platform for the ALAP database, allowing collaboration and expansion (including contemporary works).

Integrate interactive elements allowing direct code experimentation within visual contexts.

Add more case studies within the ALAP framework.

Explore the application of the method in other non-technical disciplines.

Further clarify distinctions between similar ALAP categories (e.g., Tiling/Tessellation) and provide more references

</v-click>

---
layout: default
title: Conclusion
---

# Conclusion
Equipping students with opportunities to express themselves through visual aids like the ALAP categories can significantly enhance the learning experience, comprehending cognitive processes, and fostering self-assurance and willingness to articulate views.

- ALAP Database provide source material for contextualization.
- ALAP categories eases the process of register conversion. 
- ALAP cheatsheet improves communication between the instructor and the learner (CT Tools).
- D/I Method provides an explicit, step-by-step, problem-solving approach.
- Improvement of student ↔ instructor communication.
- Increased self-confidence results in higher engagement.

<!--
This dissertation provides a comprehensive framework (ALAP + De-scription/In-scription) for contextualized programming education using algorithmic art practices.

Offers a structured, visually engaging pathway for design students to explore programming and computational thinking.

Successfully bridges the gap between technical skill acquisition and artistic exploration.

Repositions coding: From an intimidating technical skill to a creative, adaptable tool essential for designers in a technology-driven future.

Equips design students with essential CT skills, enhancing engagement and preparing them as both users and innovators of digital technology

◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦

Survey results indicate that the teaching method used in the creative coding classes was generally effective in enhancing student motivation and engagement, with some expressing a need for improvement in specific areas, including more case studies related to the ALAP categories.

Genel olarak CT için bir dizi tool ortaya çıkardım.
Çünkü CT tool ları eksik.
Temel alanımız programlama eğitimi.
Kitlemiz de gösel öğrenenler. (Tasarım odaklı bölümler bu yüzden...)

Benim vardığım en temel çıkarım ise CT teorik anlamda çalışan bir çerçeve ancak pratik anlamda yetersiz kalıyor. 

Problem çözme aşamasını kolaylaştırma şekli, kişiye sistematik ilerlemesini söylemekten öteye gidemiyor. Burada temel sorun Duval'in de belirttiği gibi register'lar arası translation.
Bunun için de ALAP kategorileri ve cheat sheet'i var. 

Bunun ötesinde contextualize etmek işe yarıyor fakat bu da başka bir layer ekleyerek durumu yine zorlaştırıyor.

Vardığım sonuç contextualize edilen eğitimde CT' için özel toollar tasarlamak gerekiyor. Aksi taktirde CT'nin efektif olma olasılığı azalıyor...

Benim vardığım en temel çıkarım ise CT teorik anlamda çalışan bir çerçeve ancak pratik anlamda yetersiz kalıyor. 

Problem çözme aşamasını kolaylaştırma şekli, kişiye sistematik ilerlemesini söylemekten öteye gidemiyor. Burada temel sorun Duval'in de belirttiği gibi register'lar arası translation.
Bunun için de ALAP kategorileri ve cheat sheet'i var. 

Bunun ötesinde contextualize etmek işe yarıyor fakat bu da başka bir layer ekleyerek durumu yine zorlaştırıyor.
Vardığım sonuç contextualize edilen eğitimde CT' için özel toollar tasarlamak gerekiyor. Aksi taktirde CT'nin efektif olma olasılığı azalıyor...
-->

---
layout: end
title: Fin
---

Thank you.
<br>
<div v-click>
The End
</div>

<!--
Final projelerinde bile kullandılar
-->
