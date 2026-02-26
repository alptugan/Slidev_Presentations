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

week 03 - Digitizing Data & Low-Fidelity Layouts

---
layout: center
---

# Week 2 Assignment

Bridging the gap between **analog** and **digital**

<v-clicks>

- 📊 Part 1: Digitizing Your Data
- 🎨 Part 2: Low-Fidelity Poster Layouts

</v-clicks>

---
layout: two-cols-header
---

# Assignment Overview

From messy to structured

::left::

## Analog World
<v-clicks>

- Hand-drawn data sheets
- Physical observations
- Raw, unprocessed information
- Subjective records

</v-clicks>

::right::

## Digital World
<v-clicks>

- CSV files (structured data)
- Machine-readable formats
- Process-ready information
- Visualization-ready datasets

</v-clicks>

---
layout: section
---

# Part 1
## Digitizing Your Data

Creating the CSV

---

# What is CSV?

**CSV = Comma Separated Values**

<v-clicks>

- Plain text file format
- Each line = one record
- Values separated by commas
- No formatting (colors, bold, etc.)
- Universal compatibility
- **Why?** Raw data is what visualization tools need

</v-clicks>

---
layout: two-cols-header
---
# Step 1: Create Headers

The first row defines your data structure

::left::

<div class="mt-8 pr-10">

### ❌ Bad Headers
```csv
Time I drank coffee, Type of drink, Amount
```

<br>

### ✅ Good Headers
```csv
timestamp,drink_type,volume_ml,location,mood
```

</div>


::right::


<div class="mt-8">

<v-clicks>

### Rules
- Single words or short phrases
- Use underscores instead of spaces
- Lowercase recommended
- Descriptive but concise

</v-clicks>

</div>

---
layout: two-cols-header
class: mt-0
---

<div mt-20>

# Step 2: Input Data

</div>


::left::

Each row = one single event (granular record)

```csv {all|1|2|3|4|all}
timestamp,drink_type,volume_ml,location,mood
09:00,espresso,200,home,tired
14:00,latte,350,campus,energetic
19:00,americano,250,library,focused
```

::right::

<v-clicks>

**Important:**
- Don't summarize! (No "5 coffees")
- List each event separately
- One row per observation
- Maintain consistency

</v-clicks>

---

# Step 3: Clean Your Data

Consistency is critical for machines

<div class="grid grid-cols-2 gap-4 mt-8">

<div>

### ❌ Inconsistent
```csv
location
Home
home
HOME 
```

**Computer sees:** 3 different values

</div>

<div>

### ✅ Consistent

```csv
location
home
home
home
```

**Computer sees:** 1 value

</div>

</div>

---
class: text-3.5
layout: center
---
# Data Cleaning Checklist

<v-clicks>

1. **Consistent Spelling**
   - "Home" vs "home" vs "HOME " are different!
   
2. **No Units in Cells**
   - Write `200` not `200 ml`
   - Put units in the header or notes
   
3. **Standardize Dates**
   - Use `YYYY-MM-DD` format (ISO 8601)
   - Example: `2026-02-23`
   
4. **Remove Extra Spaces**
   - `"cafe "` ≠ `"cafe"`

</v-clicks>

---
layout: center
---

# Step 4: Export as CSV

File → Download → Comma Separated Values (.csv)

<v-clicks>

### Tools You Can Use:
- 📊 Google Sheets
- 📈 Microsoft Excel
- 🍎 Apple Numbers

### What Gets Stripped Away:
- All formatting (bold, colors, fonts)
- Formulas (only values remain)
- Multiple sheets (export one at a time)
- Images and charts

### What Remains:
- **Pure, raw data** ready for visualization tools

</v-clicks>

---
layout: center
---
# CSV Real-World Example

Personal tracking data (coffee consumption)

```csv {all|1|2-5|all}
date,time,drink_type,volume_ml,location,mood,caffeine_mg
2026-02-20,08:30,espresso,50,home,tired,63
2026-02-20,14:15,cappuccino,250,office,focused,85
2026-02-20,19:00,decaf,300,cafe,relaxed,5
2026-02-21,07:45,latte,350,home,sleepy,75
```

**This CSV is now ready for:**
- 📊 RawGraphs
- 📈 Tableau Public
- 🐍 Python Analysis
- 📱 Any visualization tool

---
layout: center
---
# Visualization Tools for Your Data

Upload your CSV and instantly visualize:

<div class="grid grid-cols-4 gap-4">

<div>

### RawGraphs
[rawgraphs.io](https://www.rawgraphs.io)
- Drag-and-drop
- No coding
- Live preview
- Export charts

</div>

<div>

### Tableau Public
[public.tableau.com](https://public.tableau.com/)
- Professional dashboards
- Interactive filters
- Public gallery
- Share online

</div>

<div>

### Observable
[observablehq.com](https://observablehq.com)
- JavaScript notebooks
- D3.js integration
- Share notebooks
- Advanced control

</div>


<div>

### Traditional Tools
[Video 1](https://www.youtube.com/watch?v=VPwJz18TWdI&t=123s), [Video 2](https://www.youtube.com/watch?v=H2PnvZZ-2J4)
- Google Spread Sheets
- Microsoft Excel
- Apple Numbers


</div>

</div>

---
layout: section
---

# Part 2
## Low-Fidelity Poster Layouts

Planning before polishing

---
layout: center
---
# What is Low-Fidelity?

**Low-Fi Layout = Visual Blueprint**

Also called: Wireframe, Thumbnail, Rough

<v-clicks>

### Focus On:
- ✅ Hierarchy
- ✅ Composition
- ✅ Structure
- ✅ Information flow

### NOT Focused On:
- ❌ Colors
- ❌ Fonts
- ❌ Polished graphics
- ❌ Final details

</v-clicks>

---
layout: center
---
# Low-Fi Guidelines

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## Use Only:
- **Grayscale**: Black, white, gray
- **Placeholders**: Boxes with X's for images
- **Squiggle text**: Lorem ipsum or lines
- **Simple shapes**: Rectangles, circles

</div>

<div>

## Show Clearly:
- **Title** (largest element)
- **Main visualization** (hero chart)
- **Supporting charts**
- **Text blocks**
- **Source/credits** (smallest)

</div>

</div>

---
layout: center
---
# Create 3 Different Layouts

**Why three?** Prevent falling in love with your first idea!

<v-clicks>

1. **Layout A**: The Central Anchor (Radial/Centralized)
2. **Layout B**: The Columnar Narrative (Grid-Based/Linear)
3. **Layout C**: The Split Contrast (Asymmetrical)

Each should have a **distinctly different** structure

</v-clicks>

---
layout: two-cols-header
---

# Layout A: Central Anchor

Radial / Centralized composition

::left::

## Structure:
- Title at the very top
- Main chart in the center (50% of poster)
- Small charts surrounding like satellites
- Supporting text around edges

::right::

## Best For:
- Network diagrams
- Complex flow charts
- Single powerful image
- Relationship visualizations

<div class="mt-4 text-sm opacity-75">

**Visual Strategy:** All roads lead to the center

</div>

---
layout: two-cols-header
---

# Layout A: Visual Example

::left::

<div w-68 ml-auto mr-auto>

```txt {lines:false}
┌─────────────────────────────────┐
│          YOUR TITLE HERE        │
├─────────────────────────────────┤
│  ┌────────┐    ┌─────────────┐  │
│  │ Data   │    │   HERO      │  │
│  |        |───►│   CHART     │  │
│  │ Box 1  │    │             │  │
│  │        │    │    (50%)    │  │
│  └────────┘    │             │  │
│         ┌──────┤             │  │
│  ┌──────┴──┐   └─────────────┘  │
│  │ Data    │      ┌──────────┐  │
│  │ Box 2   │      │ Context  │  │
│  └─────────┘      │ Text     │  │
│                   └──────────┘  │
│                                 │
│              Source: Data URL   │
└─────────────────────────────────┘
```

</div>

**Best for:** Showcasing one powerful insight with supporting details orbiting around it.


::right::

<img v-click h-90 ml-10 src='/A.jpg' />

---
layout: two-cols-header
class: p-15
---

# Layout B: Columnar Narrative

Grid-Based / Linear composition

::left::

## Structure:
- Divide A1 into 3-4 vertical columns
- Title spanning all columns at top
- Left column: Introduction/context
- Middle/right: Charts flowing top-to-bottom
- General → Specific flow

::right::

## Best For:
- Comparing categories
- Timelines
- Sequential storytelling
- Multiple data points

<div class="mt-4 text-sm opacity-75">

**Visual Strategy:** Read like a magazine

</div>

---
layout: two-cols-header
---

# Layout B: Visual Example


::left::

<div w-88 ml-auto mr-auto>

```txt {lines:false}
┌────────────────────────────────────────────┐
│        TITLE SPANNING ALL COLUMNS          │
├──────────┬──────────────┬──────────────────┤
│ Context  │ Chart 1      │ Chart 2          │
│ & Info   │ (General     │ (Specific        │
│          │ Overview)    │ Deep Dive)       │
│ • Bullet │              │                  │
│ • Point  │  ┌────────┐  │  ┌────────────┐  │
│ • Data   │  │ Trend  │  │  │ Comparison │  │
│          │  └────────┘  │  └────────────┘  │
│ Lorem    │              │                  │
│ Ipsum    │ Chart 3      │ Chart 4          │
│ text...  │ (Category A) │ (Category B)     │
│          │              │                  │
│          │  ┌────────┐  │  ┌────────────┐  │
│          │  │  Data  │  │  │   Stats    │  │
│          │  └────────┘  │  └────────────┘  │
└──────────┴──────────────┴──────────────────┘
             Source & Credits
```

</div>

**Best for:** Telling a story with multiple data points flowing sequentially.


::right::

<img v-click h-95 ml-10 src='/B.jpg' />


---
layout: two-cols-header
class: p-15
---

# Layout C: Split Contrast

Asymmetrical composition

::left::

## Structure:
- Massive number/chart (2/3 of poster)
- Narrow column on right
- Extreme scale contrast
- Drama through size difference

::right::

## Best For:
- Single shocking statistic
- One key insight
- Bold statements
- Maximum impact

<div class="mt-4 text-sm opacity-75">

**Visual Strategy:** Make them gasp

</div>

---
layout: two-cols-header
---

# Layout C: Visual Example

::left::

<div w-94 ml-auto mr-auto>

```txt {lines:false}
┌───────────────────────────────────────────────┐
│                              │ Title          │
│                              ├────────────────┤
│                              │ • Key insight  │
│         ┌─────────────────┐  │   as bullets   │
│         │                 │  │                │
│    2M   │  MASSIVE CHART  │  │ • Supporting   │
│  ┌──────┤  OR BIG NUMBER  │  │   context      │
│  │ or   │                 │  │                │
│  │ 50%  │      HERO       │  │ • Explanation  │
│         │     GRAPHIC     │  │                │
│         │      HERE       │  │ • Call to      │
│         │                 │  │   action       │
│         │    (Takes up    │  │                │
│         │     66% of      │  │                │
│         │     space)      │  │ Source: URL    │
│         │                 │  │                │
│         └─────────────────┘  │                │
└───────────────────────────────────────────────┘
```

</div>

**Best for:** Making one statistic or finding undeniable and memorable.


::right::

<img v-click h-90 ml-10 src='/C.jpg' />

---
layout: center
class: text-center!
---

# Layout D: Combine All Layouts

<img h-100 ml-auto mr-auto src='/All.jpg' />

---
layout: center
---
# Deliverable Options

Choose your preferred method:

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## Digital Option
- 3 separate artboards (A1 size)
- Illustrator / Figma / Sketch
- Export as PDFs
- Grayscale only
- Low-fidelity elements

</div>

<div>

## Analog Option
- 3 sheets of A4 paper
- Neat hand sketches
- Photograph or scan
- Upload digital files
- Must be legible

</div>

</div>

---

# Real-World Case Study: Layout A

**Example: Medical Dashboard**

Vital signs layout (heart rate, blood pressure, oxygen) orbit around a central patient status chart.

<v-clicks>

### Why this works:
- One main focal point (patient data)
- Surrounding data informs the center
- Eye naturally goes to the hero element
- Easy to scan at a glance

### When to use:
- Network visualizations
- System relationships
- Hierarchical data

</v-clicks>

---

# Real-World Case Study: Layout B

**Example: Financial Times Data Journalism**

Articles like "Global wealth inequality" use columnar layouts:
- Left: Context & intro
- Center: Main chart/timeline
- Right: Key statistics & takeaways

<v-clicks>

### Why this works:
- Mimics familiar magazine reading
- Multiple data points tell a story
- Information flows logically
- Supports narrative engagement

### When to use:
- Comparative analysis
- Time-based data
- Multiple perspectives on one topic

</v-clicks>

---

# Real-World Case Study: Layout C

**Example: WHO Emergency Health Alert**

"1 in 7 deaths" poster:
- Left 2/3: Giant "1/7" or trend chart
- Right 1/3: Details, context, resources

<v-clicks>

### Why this works:
- Shocking number grabs attention
- No competing elements distract
- Supporting info provides nuance
- Memorable and shareable

### When to use:
- Single powerful statistic
- Call-to-action campaigns
- High-impact findings

</v-clicks>

---

# Inspiration & Resources

**Explore these projects using data-driven design:**

<div class="grid grid-cols-2 gap-6 text-sm mt-6">

<div>

### Data Collection & Sources
- [Our World in Data](https://ourworldindata.org)
- [Kaggle Datasets](https://kaggle.com)
- [Google News Lab](https://newslab.withgoogle.com)

### Design Systems
- [Dribbble](https://dribbble.com) (search: data viz)
- [Behance](https://behance.net) (search: poster)

</div>

<div>

### Tools to Try
- [RawGraphs](https://rawgraphs.io)
- [Figma](https://figma.com)
- [Adobe Illustrator](https://adobe.com)

### Inspiration in the Wild
- Conference posters
- Museum exhibitions
- Government reports
- Science research posters

</div>

</div>

---
layout: two-cols-header
class: p-10
---

# Assignment Checklist

::left::

<v-clicks>

## Part 1: CSV File ✓
- [ ] Headers are clean (no spaces, consistent)
- [ ] Data is granular (one row per event)
- [ ] Spelling is consistent
- [ ] No units in cells
- [ ] Dates standardized (YYYY-MM-DD)
- [ ] Exported as `.csv`

</v-clicks>

::right::

<v-clicks>

## Part 2: Layout Variations ✓
- [ ] Layout A: Central Anchor created
- [ ] Layout B: Columnar Narrative created
- [ ] Layout C: Split Contrast created
- [ ] All three are **distinctly different**
- [ ] Grayscale only (no colors)
- [ ] Clear hierarchy visible

</v-clicks>


---
layout: end
class: font-mono
---

# Fin
^ _ ^
