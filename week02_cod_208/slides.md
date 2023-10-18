---
theme : "black"
transition: "slide"
highlightTheme : "arta"
---
# Classes in p5.js [Tutorial]

![bg](https://p5js.org/assets/img/p5js.svg){:height="auto" width="60%"}

In p5.js, an object is a standalone entity that encapsulates state and behavior. Objects have properties and methods, which can be accessed and modified using dot notation. This tutorial will cover the basics of creating and using objects in p5.js.

---

## Creating Objects

To create an object in p5.js, you need to define a class first. A class is a blueprint for creating objects with a specific set of properties and methods. Here's an example of a class that defines a simple rectangle object: "**Falling Items**"

<pre>
<code data-line-numbers="3,4-6">class FallingItem {
  constructor(x, y, w, h) {
    this.x = x;   // x positon of the item
    this.y = y;   // y positon of the item
    this.w = w;   // width of the item
    this.h = h;   // height of the item
  }

  // A custom function to display the item on the canvas
  // within input arguments in the *construtor()*
  show() {
    rect(this.x, this.y, this.w, this.h);
  }
}
</code>
</pre>

In this example, we define a FallingItem class with four properties: `x`, `y`, `w`, and `h`. We also define a `show()` method that draws a rectangle on the canvas using the `rect()` function.

---

## How to instantiate a class in p5JS

To create a new instance of the FallingItem class, we can use the `new` operator:

``` js

let r = new FallingItem(50, 50, 100, 50);

```

This creates a new rectangle with an x-coordinate of 50, a y-coordinate of 50, a width of 100, and a height of 50.

---

## Accessing Class Properties

Once you've created a class, you can access its properties using dot notation. For example, to get the x-coordinate of the rectangle we created earlier, we can do:

``` js
let x = r.x;

```

--

To modify the x-coordinate, we can do:

``` js
r.x = 75;

```

---

## Calling Class Methods

You can also call object methods using dot notation. For example, to draw the rectangle we created earlier, we can do:

```
r.show();

```

---

## Conclusion

That's it for this tutorial on objects in p5.js. We covered the basics of creating and using objects, including defining a class, creating instances of that class, accessing object properties, and calling object methods. With these tools, you can create and manipulate objects to add interactivity and complexity to your p5.js sketches
