---
background: https://source.unsplash.com/collection/94734566/1920x1080
title: Week 10 -
exportFilename: "week10-Typography-"
class: text-center
highlighter: shiki
lineNumbers: true
info: |
    ## Özyeğin University Course Presentation
    Lecturer Alp Tuğan

    Access all week contents @[Github/alptugan](https://github.com/alptugan/Slidev_Presentations)
drawings:
    persist: true
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
favicon: "https://www.alptugan.com/v5/favicon-192.png"
themeConfig:
    primary: "#ffcc00"
transition: fade-out
theme: seriph
src: ./pages/header.md
---

---
layout: default
---
# Table of Contents

<Toc :columns="2" />




---
layout: center
---


# Display Text on Canvas
text() function with default parameters



---
layout: center
---

# Custom style
Style customization

---
layout: center
---

# Loading Custom Fonts
```js {0|1,4|6,10|3|6|6,10|7|8|9|10|6|7|8|9|10|6|7|8|9|10|6|7|8|9|10} {lines:true, startLine:1} 
function setup() {
  // Creates the application window params: width=600, height=600
  createCanvas(600, 600);
}

function draw() {
  // Set the background color of the window params: Red: 100, Green: 20, Blue: 20
  // R,G,B values must be between 0 - 255
  background(100,20,20);
}
```

---
src: ./pages/break.md
hide: false
---


---
layout: center
---

# Deconstruct / Reconstruct

- Hansen's method 
- Comoputational Graphic Design Repository → [link](https://www.pinterest.com/stixan/computational-graphic-design-inspiration/)



---
src: ./pages/assignment.md
hide: false
---