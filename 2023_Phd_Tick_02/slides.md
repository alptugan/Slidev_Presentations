---
theme: seriph
background: https://source.unsplash.com/random/?sky&1
title: Contextualizing Programming with Algorithmic Art Practices
exportFilename: "2024-06-10-alptugan-"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University 
    Design Technology, and Society Phd Program
    Social Sciences Institute
    
    Access all week contents @[Github/alptugan](https://github.com/alptugan/Slidev_Presentations)
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

<div text-8>Contextualizing Programming with Algorithmic Art Practices Using Computational Thinking Principles for Undergraduate Design Students</div>
<div text-6 italic text-black>De-scription/In-scription Method</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Thesis Jury 02 <carbon:arrow-right class="inline"/>
  </span>
</div>
  <a href="https://github.com/alptugan/Slidev_Presentations" target="_blank" alt="GitHub" class="abs-br m-6 text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
  <carbon-logo-github />
</a>


---
title: Table of Contents
---

<Toc :columns="2"/>

---
layout: center
title: Statement
---
<v-click>

<h2>Statement</h2>Research indicates that contextualized programming education positively impacts students' learning and enthusiasm for the subject. However, there is a requirement for resources and explicit instructional methods specifically designed for students in design-based undergraduate programs, where visual learners are prominent. To bridge this gap, this study introduces materials (ALAP) and a method (D/I) that can be implemented in programming education within the framework of algorithmic art.
</v-click>




--- 
transition: slide-left
layout: statement
title: Research Question
---

# Research Question
## How should we <span text-color-green>contextualize</span> programming fundamentals through <span text-color-green>algorithmic art practices</span> to improve students' <span text-color-green>computational thinking</span> skills and <span text-color-green>engagement</span> in design departments?


<!-- Nasıl yapmalıyız sorusu. Çünkü belirsiz olarak atfettiğim alan burası. CT teorik anlamda, teknoloji tabanlı problem-çözme yöntemi. Nasıl sorusuna cevabım da 2 modülde geliyor. 1.cisi materyal olarak kullanılacak kaynak, 2.cisi bu kaynağın nasıl hazırlanacağı. 

- ALAP kategorileri belirlendi. 
- Daha sonra bunlara dair görsel ve yazılı taksonomi oluşturuldu.
- Neden görsel, yazılı ve programmatik karşılıkları var?
- Çünkü matematikte olduğu gibi, programlamada da bir çok semiotik var (tekrar, yer değşitirme, vs.. gibi...). Bu anlamda şekiller görsel, yazılar written, kodsal karşılıkları da programming oluyor. 
- Daha sonra D/I (CT tabanlı) metodu geliştirildi. 

-->


--- 
layout: center
title: The Framework
---


<h2>The Framework</h2>
<div mt-5 v-click>

- Algorithmic Art Praxis Categories <kbd color-blue>Contextualization</kbd>
- Computational Thinking <kbd color-blue>Methodological Approach</kbd>
- Theory of Semiotic Registers <kbd color-blue>Register Conversion</kbd>
</div>

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
class: m-auto
title: How does it relate to programming?
---

# How does Duval's theory relate to the programming?
In the context of programming education, non-congruent conversions can arise when students need to translate between natural language descriptions of problems and their corresponding programming code representation - (Bråting & Kilhamn, 2021).

::right::
<div v-click>
  <img src='/Bloom_Taxonomy.png' />
</div>

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
# De-scription / In-scription Method
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

<img h-100 src='/figure_praxis_cheat_Sheet_in_class.jpg' />

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

<!--BUnların hepsine baktığınızı var sayarak araya doldurmuyorum. -->

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
layout: center
class: text-center
title: Interview Observation
---
# Interview Observation Section (to be removed??)

---
layout: default
title: Conclusion
---

# Conclusion
Equipping students with opportunities to express themselves through visual aids like the ALAP categories can significantly enhance the learning experience, comprehending cognitive processes, and fostering self-assurance and willingness to articulate views.

- ALAP Database provide source material for contextualization.
- ALAP categories eases the process of register conversion. 
- ALAP cheatsheet improves communication between the instructor and the learner.
- D/I Method provides an explicit, step-by-step, problem-solving approach.
- Increased self-confidence results in higher engagement.

<!--
Incorporating the ALAP (Algorithmic Art Programming) categories facilitated the conversion of natural language and visual expressions into symbolic registers for programming, making the process more accessible for students.

The teaching approach integrates computational thinking, algorithmic art practices, and Duval's theory of semiotic representation, aiming to enhance student motivation, engagement, and comprehension of programming paradigms.

Survey data indicates a significant boost in students' confidence in computer programming, finding the contextualization of programming education with algorithmic art useful, and developing a better understanding of the intersections between creating visuals and programming.

Survey results indicate that the teaching method used in the creative coding classes was generally effective in enhancing student motivation and engagement, with some expressing a need for improvement in specific areas, including more case studies related to the ALAP categories.

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
