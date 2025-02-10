---
background: /cover-week2-2028.png
title: Week 02 - Objects
exportFilename: "week02-OOP"
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
layout: default
---

# Coding is a Superpower

<Youtube id='Bwiln7v0fdc' width='100%' height='90%' />

---

# Computer Arts Society Online Event
[Register link](https://www.eventbrite.com/e/8-bit-ii-computer-art-from-the-1980s-tickets-1216653897559)

<img scale-90 src='/event.jpg' />




---
image: /oop1.jpg
layout: image-left
---


# Object Oriented Programming (OOP)

Object-oriented programming (OOP) is a way of <span text-color-green>organizing</span> and designing computer programs. It focuses on creating <span text-color-yellow>objects</span> that have both <span text-color-red>properties</span> (attributes) and <span text-color-red>actions</span> (methods). 

Objects are created from <span text-color-purple>classes</span>, which are like <span text-color-blue>blueprints</span> that define what an object can do and what information it can hold. OOP helps in writing code that is modular, reusable, and easy to understand and maintain.



---
layout: default
class: text-left py-10
---

# Objects and Classes
An object is a blueprint for creating objects called a class.

<img h-100 m-auto src='/blog-images-3.png' />

---
layout: center
class: text-left
---
# Syntax In Javascript

<img h-70 src='/syntax.png' />


```js {1|11|2|5|3|4|7|8|all}
class Name-of-the-class {
    constructor() {
        // Properties of the class
        this.name = "MyClass";
    }

    // You can add your custom functions
    someFunctionName() {

    }
}
```
---
layout: default
image: /oop1.png
preload: false
---

# Create a class in p5JS Editor
Move your mouse next to "mySketch" tab. A plus (+) will appear.

<img src='/week2-file-add.png' />
<Arrow v-click v-motion-fade
  :initial="{ x: 10, y: 40, opacity: 0 }"
  :enter="{ x: 10, y: 0, opacity: 1, transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, }" x2="85" y2="210" x1="85" y1="450" color="rgba(254, 234, 12,1)" />


<Arrow v-click v-motion-fade
  :initial="{ x: 10, y: 40, opacity: 0 }"
  :enter="{ x: 10, y: 0, opacity: 1, transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, }" x2="380" y2="190" x1="380" y1="450" color="rgba(254, 234, 12,1)" />


<Arrow v-click v-motion-fade
  :initial="{ x: 10, y: 40, opacity: 0 }"
  :enter="{ x: 10, y: 0, opacity: 1, transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, }" x2="640" y2="230" x1="640" y1="450" color="rgba(254, 234, 12,1)" />


---
layout: default
image: /oop1.png
preload: false
---

# Create a class in openProcessing
Move your mouse next to "mySketch" tab. A plus (+) will appear.

<img m-auto h-100 src='/oop1.png' />
<Arrow v-motion-fade
  :initial="{ x: -20, y: 20, opacity: 0 }"
  :enter="{ x: 0, y: 0, opacity: 1, transition: {
      repeat: Infinity,
      repeatType: 'mirror',
    }, }" x2="400" y2="175" x1="100" y1="450" color="rgb(254, 0, 0)" />

---
src: ./pages/break.md
hide: false
---

---
layout: image-left
image: /oop2.png
class: text-left py-40
---
# Convert Your Object into Class
- Choose a class name.
- Create a new file on openProcessing or p5JS editor.
- Use the template example of my sketch as starter code.

---
layout: section
---

# Goto and check slide page \#7
<Link to="7">Click to view</Link> 

<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<div class="i-carbon-sun dark:i-carbon-moon opacity-0" />

<!-- A basic anchor icon from Phosphor icons -->
<button class="i-ph-anchor"/>

---
layout: two-cols
class: text-left pl-5 my-auto
---

````md magic-move
```js
class class_name {

}
```

```js
class Gem {
  
}
```

```js
class Gem {
  constructor() {
    
  }
}
```


```js
class Gem {
  constructor() {
    
  }

  display() {
    
  }
}
```

```js
class Gem {
  constructor() {
    
  }

  display() {
    fill(200);
    stroke(180)
    beginShape();
    for(var i = 0; i < 3; i++) {
      var x = 100 * cos(TWO_PI/ 3 * i);
      var y = 100 * sin(TWO_PI/ 3 * i);
      vertext(x,y);
    }
    endShape();
  }
}
```

````

::right::

# Convert Your Object into Class
- Create a new file on openProcessing or p5JS editor.
- Choose a name for the class.
- Define the `constructor()` function.

---

<Youtube id='ZLWxSam4HfE' width='100%' height='100%' />


---
class: p-0 m-0
layout: default
title: Joani Lemercier
---

<Tweet scale="0.7" pl-100 id="1886854389287280795" />


---
class: m-0
layout: default
title: Bonnie2.0.0
---

<div style="position:absolute">
Visit Instagram profile ➡️ <a href="https://www.instagram.com/bonnie2.0.0/" target="_blank">link</a>
</div>

<SlidevVideo controls h-120 m-auto>
  
  <source src="/ml5.mp4" type="video/mp4" />
  <!-- <source src="/myMovie.webm" type="video/webm" /> -->
  
</SlidevVideo>

---

# Side Scrolling Game
[Play](https://aijs.io/project?user=Tezumie&project=SK89)

<img h-100 m-auto src='/game-dog.png' />



---
src: ./pages/assignment.md
hide: false
---
