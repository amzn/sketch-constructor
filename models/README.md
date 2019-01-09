# Models

These are all the classes Sketch uses in it's JSON schema. They should all map 1:1 with any object in the JSON that has `_class` attribute. All the models are ES6 classes which have instance properties that map 1:1 with the attributes of JSON schema of that class. This makes it easy automatically create class instances from a sketch document as well as write the JSON of a sketch document because calling `JSON.stringify()` on a class will only output instance properties.

All classes have the same constructor method signature:
```javascript
class Base {
  constructor(args = {}, json) {}
}
```

If you are creating new classes from scratch, you will supply the constructor with a single object like this:
```javascript
let base = new Base({
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