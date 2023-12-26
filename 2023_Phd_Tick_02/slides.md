---
theme: seriph
background: https://source.unsplash.com/aiqKc07b5PA/1920x1080
title: Contextualizing Programming with Algorithmic Art Practices
exportFilename: "2023-alptugan-"
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

<div text-10>Contextualizing Programming with Algorithmic Art Practices Using Computational Thinking Principles for Undergraduate Design Students</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Thesis Jury Tick 01 <carbon:arrow-right class="inline"/>
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
---

# Overview

<v-clicks>

- Theoretical Basis <span style="color:#ffcc00">→</span> Constructionism ~ Pragmatism
- Point of View <span style="color:#ffcc00">→</span> ANT ~ Script Theory 
- Algorithmic Art Praxis (ALAP) to Contextualize <span style="color:#ffcc00">→</span> Computatonal Thinking ~ Programming Fundamentals
</v-clicks>



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

<!--Paradigmatic Shift is happening, 
Everything we do one way or another depends on computers. 
Designers, doktors, artists, citizens, everyone uses computers.
Having First Aid Education is not a must but we should have it.
HAving reading, writing, and arithmetics don't make use scientist but it is required to live in a modern society.

Why this shift happens?

-->

---  
class: bottom-0 
title: Example Data - Increasing Developer Numbers
---

<div scale-90 mt--20>
<img src='/fp1_statistic_id627312_developers-population-worldwide-2018-2024.png'/>
</div>

<div class='caption' bottom-0>
Increasing Number of Programmers (Statista, 2020)
</div>

<!--Growing Population of specific actors in a network results in domination of the crowded group. E.g. Democracy in our country. It is not the reflection of Tech. Determinism.-->

---  
class: bottom-0 
transition: slide-left
title: Changing Grammers GUI → CBI
---

<div scale-90>
<img src='/git-cli-hero.png'/>
</div>

<div class='caption'>
Changing Grammars in Technology GUI → CBI (Command-based Interface)
</div>

<!--New Approaches in Human-Computer Interaction-->

---
transition: slide-left
title: Example Data - GUI → CBI 01
---

<Youtube id='cBdyHp_XVFQ?t=32' width='100%' height='100%'/>

---
layout: section
transition: slide-left
title: Example Data - GUI → CBI 02
---

## This Presentation is another proof-of-concept

<v-click>

Text-based presentation tool → Sli.dev
</v-click>

---
transition: slide-left
layout: center
class: m-0 p-0
title: Example Data - GUI → CBI 03
---

<img scale-50 src='/slidev.jpg'/>


---
transition: slide-left
---

## New Paradigms For Computational Creativity

Evolution of computational environments as instruments

<br>

<div class='grid grid-cols-3 gap-4'>
  <div v-click>
    Conceptual Art, Algorithmic Art and its sub-branches - 60s
    <img p-0 m--5 scale-85 src='/Computers_and_automation.jpg'/>
  </div>
  <div v-click>
    1980-2000 Personal Computers, Discipline-specific software tools
    <img m--4 p-0 mt-0 scale-90 src='/personal_computer.jpg'/>
  </div>
  <div v-click>
    2000-Today Internet, Blockchain, Digital Art, Artificial Intelligence
    <img mt-2 src='/_467d99a0-91d5-4fb4-8263-d81f9892c676.jpeg'/>
  </div>
</div>

---
transition: slide-left
title: Example Data - Computational Creativity AI, Scripting & Github
---

<div class='grid grid-cols-2 gap-10'>
  <div v-click>
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




<!--All of these new paradigms reduce the tedius tasks, and leave time for the designer to be creative. 

Video Scripting: https://www.youtube.com/watch?v=AtqHdzVqok0&ab_channel=Dansky
Video Scripting: https://www.youtube.com/watch?v=EGdgrP7azUQ&t=648s&ab_channel=NTProductions
-->


---
layout: center
class: pl-40 pr-40
title: Programming will be the 4th R
---

<h1><span text-white>r</span>eading, W<span text-white>r</span>iting, A<span text-white>r</span>ithmetics & P<span text-white>r</span>ogramming</h1>
Programming becomes the 4th R
<br>
In such an era design students should learn fundamentals of programming as well.


<!--
We presume that computers or other tech devices are working. Like mobile phones. 
If we don't know how it works we cannot identify the problem. Using computers, and new tools require expilicit knowledge called progrmaming. 
To use such tools, one must have programming knowledge.
To have programming aptitude, one must have relevant problem-solving skills.
Computational Thinking can serve as a theoretical basis.


<v-click>

Encourage individuals to open the Black-Box. How?
</v-click>

<v-click>

ANT → Script Analysis 
</v-click>

<v-click>

Constructionist Learning Theories (Helper tools, involving learners, discovery).
</v-click>


<v-click>

Theoretical Background as <kbd>Computational Thinking</kbd> can help constructing <kbd>programming</kbd> knowledge.
</v-click>

<v-click>

Visual learners learn more effectively within visual stimuli.
</v-click>


-->


---
layout: center
class: pl-40 pr-40
---

# The Main Problem

Engagement of students 

## Litereture Review Summary
- Programming is a tedious process for students
- The prejudice against coding among students causes declining attendance to computing classes  <span style="color:#666">(Allwood, 1986; Winslow, 1996; Robins et al., 2003; Ring et al., 2008; Yardi & Bruckman, 2007)</span>.
- The lack of inadequate computer literacy education at earlier ages <span style="color:#666">(Guzdial, 2009; Yardi & Bruckman, 2007)</span>
- The wrong choice of programming language and out-of-date course materials <span style="color:#666">(Brown & Wilson, 2018; Robins et al., 2003; Guzdial, 2009; Hansen, 2019)</span>.
- Contextualizing Programming Fundamentals with Art Increases Student Engagement <span style="color:#666">(Liao & Pope, 2008; Guzdial, 2009)</span>. 
- But How?

<!-- Detailed in section 2 Literature Review -->

---
layout: center
class: pl-40 pr-40
---

# How to Avoid from the Problem?

- Contextualize Programming With Art Positive results (Hansen, 2019; Guzdial, 2009).
- There is a need for elaborate approaches on programming educaiton (Brown & Wilson, 2018).
- Design students are Visual Learners (Ref.)

---
layout: center
class: pl-40 pr-40
---

# But 

- What is the scope of the Art?
- How to contextualize programming fundamentals with the Art?
- How to link a specific visual form with programming?


---
layout: statement
class: pl-40 pr-40
---

# Research Question

How can we contextualize programming fundamentals through Algorithmic Art practices to improve students' Computational Thinking skills and engagement in design departments?

---
layout: default
class: pl-40 pr-40
---

# Answer 
## Categorization of Algorithmic Art Practices

- Identify patterns and similarities
- Organize knowledge and resources (Stahl, 2006)
- Develop effective teaching methods

---
layout: section
---

# Methodology

---
layout: center
class: pl-0 pr-0 text-center
---

# Data Collection
22 data sources, 2000 images

<img h-110 m-auto src='/data_collection.png' />


---
layout: center
class: pl-0 pr-0 text-center
---

# Infrastructure

<img h-110 m-auto src='/figure_database_diagram.jpg' />


---
layout: center
class: pl-0 pr-0 text-center
---

# Algorithmic Art Praxis Web App

<img h-110 m-auto src='/img_praxis_website_1.png' />

---
layout: center
class: pl-0 pr-0 text-center
---

# Item Detail View

<img h-110 m-auto src='/img_praxis_website_3.jpg' />

---
layout: two-cols
class: pl-0 pr-0 text-left
---

# Method for Classification
Cyclical Iterative Design Process

<img w-100 m-auto src='/figure_2_design_approach_.jpg' />

::right::

<div v-click pt-16 pl-5>

1. Accessibility: Easy to remeber

2. Learning: Leverage previous knowledge

3. Programming Specificity: Linking words with programming terms
</div>

---
layout: two-cols
---

# Findings
Computational Thinking Framework

<img w-100 m-auto src='/Findings.png' />

::right::
<img pt-22 w-100 m-auto src='/Molnar01.png' />


---
layout: two-cols
class: text-center
title: Conclusion
---

<h1 pt-50>Discussion & Conclusion</h1>

::right::

<img h-140 pt-0 ml-10 mt--7 src='/figure_praxis.jpg' />



---
layout: center
class: pl-40 pr-40
---

# Future Studies?
Method exemplified (Empirical Study)

1. Decompose (De-scribe)
2. Translation (Implementing modular code blocks)
3. Algorithm Design
4. De-inscribe


<!-- KOKO -->

---
layout: end
# src: ./pages/backup.md
# hide: false
title: Fin
---
