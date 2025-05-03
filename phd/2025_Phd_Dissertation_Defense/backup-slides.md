---
theme: seriph
background: https://picsum.photos/1920/1080/?blur=10
title: PHD Final Jurry
exportFilename: "2025-alptugan-phd-defense"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Design
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

# Contextualizing Programming with Algorithmic Art Practices Using Computational Thinking Principles for Undergraduate Design Students 


<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    PHD Dissertation Alpha Version <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>

---
title: Table of Contents
---

<Toc text-3 ml-40 :columns="2"/>

---
layout: center
---

# Overview


<v-clicks>

- Chapter 1: Introduction
- Chapter 2: Literature Review
- Chapter 3: Theoretical Background
- Chapter 4: Methodology
  - Phase A: ALAP Research
  - Phase B: De-scription / In-scription Method 
- Chapter 5: Conclusions
</v-clicks>

<!--
This dissertation explores a unique teaching method for design students using algorithmic art practices, combining theoretical, practical, and empirical perspectives to make computational concepts accessible and engaging for visual learners in programming education.
-->

---
transition: slide-left
layout: center
---

# Introduction & Background
Programming knowledge becomes a required skill more than before.

<v-clicks>

- Paradigmatic Shift in Technology Usage... But Why?

- Increasing Number of Programmers (1.1. The 4th R)

- Changing Grammars in Technology (GUI → CBI) (1.2. Emerging Tendencies)

- Fresh Problem-Solving Paradigms (1.3. Computational Creativity)
</v-clicks>

<!--
Paradigmatic Shift is happening, 
Everything we do one way or another depends on computers. 
Designers, doctors, artists, citizens—everyone uses computers.
Having first aid education is not a must, but we should have it.
Having reading, writing, and arithmetics knowledge does not make you a scientist, but it is required to live in a modern world.

Why this shift happens?
-->

---
title: Cases of The Paradigmatic Shift
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
1. Growing Population of specific actors in a network results in domination of the crowded group. E.g. Democracy in our country. It is not the reflection of Tech. Determinism.

2. New Approaches in Human-Computer Interaction
-->

---
transition: slide-left
---

## New Paradigms For Computational Creativity

Evolution of computational environments as instruments

<div class='grid grid-cols-3 gap-4'>
  <div v-click>
    Conceptual Art, Algorithmic Art and its sub-branches - 60s
    <img p-0 m--5 scale-80 src='/Computers_and_automation.jpg'/>
  </div>
  
  <div v-click>
    1980-2000 Personal Computers, Discipline-specific software tools
    <img m--4 mt-2 scale-90 src='/personal_computer.jpg'/>
  </div>
  
  <div v-click>
    2000-Today Internet, Blockchain, Digital Art, Artificial Intelligence
    <img mt-0 ml--3 scale-90 src='/block_ai.jpg'/>
  </div>
</div>

---
transition: slide-left
---

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
layout: center
class: pl-40 pr-40
---

# More Than Technological Literacy

The act of being active actors rather than passive consumers. 
	
<v-click>

Encourage individuals to open the Black-Box. How?
</v-click>

<v-click>

- ANT
</v-click>

<v-click>

- Constructionist Learning Theories 
</v-click>


<v-click>

- Computational Thinking
</v-click>

<v-click>

- Context-based Learning
</v-click>

<!--
We presume that computers or other tech devices are working. Like mobile phones. 

If we don't know how it works we cannot identify the problem. Using computers, and new tools require expilicit knowledge called progrmaming. 

To use such tools, one must have programming knowledge.

To have programming aptitude, one must have relevant problem-solving skills.

Computational Thinking can serve as a theoretical basis.

Art can serve as a context for teaching programming to visual learners.
-->

---
title: Statement
layout: center
---

<h2 text-yellow pl-20 pr-20 mt--10>Statement</h2>
  
<div italic pl-30 pr-30 lh-8 mt-5>
Research indicates that contextualized programming education positively impacts students' learning and enthusiasm for the subject. However, there is a requirement for resources and explicit instructional methods specifically designed for students in design-based undergraduate programs, where visual learners are prominent. To bridge this gap, this study introduces materials (ALAP) and a method (D/I) that can be implemented in programming education within the context of algorithmic art.
</div>

---
layout: center
class: pl-40 pr-40
---

# Research Gap
<v-clicks>

- Contextualizing the knowledge works (Hansen, 2019; Guzdial, 2009).
- There is a need for elaborate approaches on programming educaiton (Brown & Wilson, 2018).
- Most studies focus on assesment of Computational Thinkig (CT).
- The necessity of CT tools for specific contexts.
- Most studies claim that contextualizing programming practices are beneficial. 
- But how?
</v-clicks>

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
layout: center
class: pl-40 pr-40
---

# Research Contributions


<v-clicks>

1. De-scription/In-scription Method
    
2. Tools for Computational Thinking 
    
3. Taxonomy for Algorithmic Art practices
    
4. Online Algorithmic Art Database
    
5. Case study of a 4-weeks long practical method
    
6. Methods and data for researchers

</v-clicks>

<!--
1. The research offers an experimental method called "De-scription/In-scription." The method can be used by educators who teach creative coding classes to visual learner profiles studying in design related departments.
    
2. It facilitates meaningful discussions among instructors regarding the implementation of computational thinking principles tailored for visual learners in the context of algorithmic art.
    
3. It suggests 18 distinct categories of paradigmatic approaches used in algorithmic art and its sub-genres, including generative art, to assist in analyzing computer-generated artworks.
    
4. The provided database includes a significant online repository named "Algorithmic Art Praxis (ALAP)," which archives algorithm-based artworks dating back to 1940, providing valuable historical insights for studying the evolution of algorithmic art. This enriches the research with historical insights and valuable resources for studying the evolution of algorithmic art. The online platform provides researchers and students with convenient access to a collection of artworks that exemplify each category delineated in the study.
    
5. The research provides an in-depth analysis of both quantitative and qualitative data, specifically focusing on the perspectives of design majors towards computer programming over a four weeks long workshop.
    
6. It provides three fundamental tools to aid computational thinking activities, namely Algorithmic Art Praxis (ALAP) database, ALAP Categories and ALAP Cheat Sheet.
-->

---

# Litereture Review Summary
- Programming is a tedious process for students
- The prejudice against coding among students causes declining attendance to computing classes  <span style="color:#666">(Allwood, 1986; Winslow, 1996; Robins et al., 2003; Ring et al., 2008; Yardi & Bruckman, 2007)</span>.
- The lack of inadequate computer literacy education at earlier ages <span style="color:#666">(Guzdial, 2009; Yardi & Bruckman, 2007)</span>
- The wrong choice of programming language and out-of-date course materials <span style="color:#666">(Brown & Wilson, 2018; Robins et al., 2003; Guzdial, 2009; Hansen, 2019)</span>.
- Contextualizing Programming Fundamentals with Art Increases Student Engagement <span style="color:#666">(Liao & Pope, 2008; Guzdial, 2009)</span>.

---
layout: section
class: pl-30 pr-30
---

# Theoretical Foundations



---
layout: two-cols
---

## Actor-Network Theory: A birds-eye View of The Research
ANT provides an overall umbrella for the purpose of this research to analyze and develop methods and tools for the study.

- ANT ontologically aligns well with Constructionist and Pragmatist paradigms, pointing out the existence of multiple realities while analyzing the social world.
- The research problem (engagement of design students in programming classes) represents all the subjects above as macro-actors.
- "Sensual Objects" from Harman's OOO (prejudices, translation).

::right::

<img ml-2 mt-23 src='/PHD_ANT_01.jpg'/>
<div class='caption'>
Figure: Research Network Actors
</div>

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
transition: slide-left
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
layout: two-cols
title: How does it relate to programming?
---

# How does Duval's theory relate to the programming?
In the context of programming education, non-congruent conversions can arise when students need to translate between natural language descriptions of problems and their corresponding programming code representation - (Bråting & Kilhamn, 2021).

<br>

<v-click>

#### Point on a circular path (Verbal)

</v-click>

<br>

<v-click>

#### Point on a circular path (Trigonometric)



##### x = cos(α) * r
##### y = sin(α) * r

</v-click>

::right::

<!--
<div v-click>
  <img src='/Bloom_Taxonomy.png' />
</div>


Need to detail this part

Dairenin üstünde nokta var. Ama
-->

---
layout: intro
---

# Methodology

 - Phase 1: ALAP Database, Categories and Cheat Sheet
 - Bridge: Theory of Semiotic Registers
 - Phase 2: De-scription/In-scription Method

---
layout: two-cols
---

# Phase1: Algorithmic Art Praxis 

<img src='/figure_10.png' />

Link to [ALAP Database](https://alptugan.notion.site/0025088dd8be4eafad7826c90260dc59?v=e8195072f5ec42f4b9f39a70b64b429d)


::right::

<img scale-75 mt--15 src='/figure_database_diagram_02.jpg' />

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
transition: slide-left
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

---
transition: slide-left
title: Methodology
---
# OPP

<img h-130 m-auto src='/PHD_ANT_03_expanded.jpg' />

---
transition: slide-left
title: Methodology
---

# Methodology

<img src='/figure_method.jpg' />

1. ALAP Survey to measure accuracy and usability of the categories as written/visual registers 
2. Survey to test effects of the method integrated with ALAP 

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

---
layout: center
class: pl-40 pr-40
title: Method Applied (Choose)
---

# Method Applied

1. Choose: Student selected the image below

<img src='/Selin_Kabadayi.png' />
<div bottom-0 class='caption'>
Paul Brown, "4^16-2030311203312120", 2005
</div>

---
layout: center
class: pl-70 pr-70 text-center
title: Method Applied (Analysis)
---

## 2. Analysis 

<img m-auto src='/selin02.png' />


---
layout: center
class: pl-70 pr-70 text-center
title: Method Applied (Procedural Flow)
---

## 3. Procedural Flow

<img m-auto src='/selin01.png' />

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
title: Survey 1 (ALAP Categories)
---
# Survey 1 - ALAP Categories 

<img src='/figure_ALAP_survey.jpg' />

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
BUnların hepsine baktığınızı var sayarak araya doldurmuyorum.
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

<!--Final projelerinde bile kullandılar-->
