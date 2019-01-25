# Sketch Constructor

This library provides helpers and classes that make it easy to read/write/manipulate Sketch files in Javascript, without Sketch installed!

## ⚠️ Warning ⚠️
This library is a work in progress, use at your own risk. But feel free to help out where you see bugs or incomplete things! Also, because this library is not using any Sketch APIs/libraries and manipulating the underlying sketch files, the internal file API might change in the future. We will do our best to keep up with any Sketch changes and communicate any breaking API changes.

## Why?
If you want to produce Sketch assets for your design team that are generated from your production codebase in a reliable and consistent way, like part of a build process or CI/CD pipeline. Or maybe you want to have your source of truth for your design tokens or components in Sketch, you can use this to extract that data out into your codebase.

## What can you do with this?

* Generate Sketch files programmatically without actually running Sketch (no plugins!)
* Use Sketch as input to create resources/documentation for a design system
* Build Sketch files in a CI/CD pipeline
* Read a Sketch file as a template, hydrate it with data, output a new Sketch file

## How is this different from html-sketchapp or react-sketchapp?
Those tools are great and very powerful, but rely on creating sketch plugins on the fly and manipulating a Sketch document that is open on your computer. They are also focused on rendering sketch files and not using a Sketch file as input or data. This tool however helps you directly manipulate and generate Sketch files without a sketch plugin or even having Sketch open or installed.

## Installation

This library is published as an npm module, you can install it via npm or yarn:

```bash
npm install --save-dev sketch-constructor
```

```bash
yarn add sketch-constructor
```

## Usage

### Creating a Sketch file
Creating a completely new Sketch file from scratch, programmatically in node.

```javascript
const {Sketch, Page, Artboard} = require('sketch-constructor');

// Without a path it creates an empty sketch class to work with
const newSketch = new Sketch();

// Create a new Page instance
const page = new Page({ });

// Add an artboard to the page
const artboard = new Artboard({});
page.addArtboard(artboard);

// Add the page to the Sketch instance
newSketch.addPage( page );

// You can also add a page by giving it an object, the arguments
// are the same as that of the Page constructor
newSketch.addPage({
  name: 'My Page'
});

// Creates the sketch file
newSketch.build('newSketch.sketch');
```

### Read/manipulate an existing Sketch file
Getting data from or manipulating an existing Sketch file.

```javascript
const {Sketch, Page} = require('sketch-constructor');

// static method fromFile returns a promise
Sketch.fromFile(`${process.cwd()}/__tests__/__sketch-files/test.sketch`)
  .then((sketch) => {
    // You can now get data from the sketch instance
    // For example, get all the Groups in a particular artboard
    // and page that has a name that includes 'test'
    sketch.getPage('Page 1')
      .getArtboard('Artboard 1')
      .getGroups((group) => group.name.includes('test'));

    // Or manipulate the sketch file the same way you would
    // with a new sketch instance
    var page = new Page({});
    sketch.addPage( page );
  });
```

## Models

These are all the classes Sketch uses in it's JSON schema. They should all map 1:1 with any object in the JSON that has `_class` attribute. All the models are ES6 classes which have instance properties that map 1:1 with the attributes of JSON schema of that class. This makes it easy automatically create class instances from a sketch document as well as write the JSON of a sketch document because calling `JSON.stringify()` on a class will only output instance properties.

All classes have the same constructor method signature:
```javascript
class Layer {
  constructor(args = {}, json) {}
}
```

If you are creating new classes from scratch, you will supply the constructor with a single object like this:
```javascript
let text = new Text({
  // options
});
```

This options object does NOT map 1:1 with the underlying JSON schema of the class. It simplifies the API so that you don't have to understand the underlying structure and to hopefully future-proof the classes. A simple example is the `Color` class:
```javascript
let color = new Color("#fff")
console.log(JSON.stringify(color, null, 2));
/*
{
  "_class": "color",
  "alpha": 1,
  "blue": 1,
  "green": 1,
  "red": 1
}
*/
```
Rather than having to pass in the rgba channels (out of 1 not 255 like CSS), you can pass in anything that [Tiny Color](https://github.com/bgrins/TinyColor) can understand.

For most classes there are helper methods to make interacting with them easier. For example, the `Color` class has all of the [Tiny Color](https://github.com/bgrins/TinyColor) methods so you can modify the color or get different representations of it.

If you start with an existing Sketch file by using `Sketch.fromFile(filePath)`, the library will recursively create all the underlying classes so you don't have to worry about manually instantiating the classes. For example:

```javascript
const { Sketch, Page, Artboard } = require('sketch-constructor');

Sketch.fromFile('myFile.sketch')
  .then((sketch) => {
    // create an array of Group instances
    const groups = sketch.getPage('Page 1')
      .getArtboard('Artboard 1')
      .getGroups((group) => group.name.includes('test'));

    // Now you can use any Group instance methods like adding layers
    groups.forEach((group) => {
      group.addLayer(
      new Text({
        string: "Hello",
        name: "Hello",
        fontSize: 24,
        color: "#ccc",
        frame: {
          width: 200,
          height: 50,
          x: 0,
          y: 120,
        }
      })
      )
    })
  })
```


## License

This library is licensed under the Apache 2.0 License.
