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

# Week 3: Typography as Interface

**COD 301: Multimedia Data Narratives**

*Hierarchy in Information Design & The "Read-Glance-Deep Dive" Structure*

---
layout: default
---

# The Typographic Interface

* **Myth:** Data is just the shapes, bars, and lines. Text is just the caption.
* **Reality:** Typography is the *navigation system* of your visualization.
* **Syntax vs. Semantics:** Graphic elements (lines/bars) provide the visual syntax (trends). Typography provides the semantics (meaning, context, and causality).

---
layout: default
---

# The Cognitive Load: Read-Glance-Deep Dive

Effective information design accounts for how humans process visual information at different attention spans.

* **Read (Macro-Attention):** The entry point. The title and subtitle.
* **Glance (Meso-Attention):** The visual evidence. The shapes, colors, and trends.
* **Deep Dive (Micro-Attention):** The annotation layer. The nuanced details and context.

---
layout: two-cols-header
---

# The "Read" Layer: Active vs. Passive Titles

Your title should act as a journalistic headline, not a file name.

::left::

<div mr-20 v-click>

### Active Title ✅
States the conclusion.
* **Example:** "Youth Unemployment Hit a Historic Peak of 25% in 2021" 
* **Benefit:** If the viewer reads nothing else, they still leave with your core insight.

</div>



::right::

<v-click>

### Passive Title ❌
Describes the subject.
* **Example:** "Unemployment Rates in Turkey (2018-2024)"
* **Drawback:** High cognitive load. The viewer has to figure out what the data means.

</v-click>



---
layout: default
---

# The "Glance" Layer: Form & Function

Once the title sets the expectation, the visual layer must verify the claim.

* **Focus:** Axes, scales, and pre-attentive attributes (color, size, position).
* **Reading Connection:** *The Truthful Art*, Chapter 5 (pg. 127).

<br>

<v-click>

> **Key Takeaway:** Mismanaging scales (e.g., hiding the baseline) distorts the visual truth. The "glance" must honestly represent the data's geometry.

</v-click>

---
layout: default
---

# The "Deep Dive": The Annotation Layer

The most critical part of data storytelling. While the "Glance" layer shows *what* happened, the "Deep Dive" layer explains *why* it happened.

* **Visual Highlights:** Dimming background data and emphasizing the signal.
* **Contextual Labels:** Text pointing to specific anomalies (e.g., "Pandemic lockdown begins here").
* **Connectors:** Lines or arrows linking text directly to the data subject.

---
layout: quotes
author: Amanda Cox
source: Former Graphics Editor, The New York Times 
title: The Golden Rule of Data Storytelling
---

# The annotation layer is the most important thing we do… otherwise it's a case of here it is, you go figure it out.

<br>

Your job is to prevent the reader from going on a "scavenger hunt" to find meaning in your chart.

---
layout: image
image: /1.jpg
title: Case Study-XBX Business (Avoid)
backgroundSize: 80%
---


---
layout: image
image: /2.jpg
title: Case Study-XBX Business (Use)
backgroundSize: 80%
---

---
layout: image
image: /3.jpg
title: Case Study-XBX Business Design Comparison
backgroundSize: 80%
---






---
layout: image-right
image: /ss.jpg
---

# Studio Exercise: Analysis (45 Minutes)

- Read the following [page](https://data.europa.eu/apps/data-visualisation-guide/visual-annotations-introduction). 
- Choose a data visualization project from [Visual Cinnamon](https://www.visualcinnamon.com/portfolio/).
- Analyze the title, subtitle, annotation layers, and explain your insights shortly.
- Use Figma Jam, [link to Figma board](https://www.figma.com/board/xBbAYlsfm8WyMMahecs9Ve/Digital-Sketches-for-99-Variations?node-id=0-1&t=LZNqI7letfXx1PqW-1)

---
layout: default
---

# Studio Exercise: The Annotation Layer (60 Minutes)

**Goal:** Transform a "passive" chart into an "active" narrative.

<v-clicks>

* **Step 1: The Blind Swap (15 mins)**
  * Exchange your raw, un-annotated chart with a partner.
  * Partner must guess the main takeaway in silence. (Notice the disconnect without text!)
* **Step 2: The Active Title (15 mins)**
  * Write 3 title variations (Descriptive, Interrogative, Declarative/Active). Choose the best Active Title.
* **Step 3: The "Why" Annotations (30 mins)**
  * Identify 2-3 pivot points in your data. Write annotations that explain the *cause* behind the trend.

</v-clicks>

---
layout: default
---

# Project Launch: The A1 Data Poster

**Deliverable:** An A1-sized static data visualization poster based on your collected data.

**Requirements:**

1. **Hierarchy:** Must clearly demonstrate the Read-Glance-Deep Dive structure.
2. **Typography:** Strict use of grid, kerning, and typographic contrast to separate titles from annotations.
3. **Scale:** The "Read" and "Glance" layers must be legible from 2 meters away. The "Deep Dive" layer should reward close reading at 30 centimeters.

---
layout: center
---

# References

- Connecting the slide title to the graph, [source](https://www.storytellingwithdata.com/blog/2021/6/20/connecting-the-slide-title-to-the-graph)
- ⭐ Visual Annotations: Introduction, [source](https://data.europa.eu/apps/data-visualisation-guide/visual-annotations-introduction)



---
layout: end
class: font-mono
---

# Fin
^ _ ^
