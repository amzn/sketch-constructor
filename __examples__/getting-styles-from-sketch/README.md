# Getting styles from a sketch document

In this example we take an existing sketch file, myFile.sketch, and inspect it in node so that we can use it to output things like a CSS file for instance.

### What to look at

index.js

This file is doing all the work. It starts by importing the required node modules and then calling `Sketch.fromFile()` with the path of a sketch file. This method returns a promise which returns a `Sketch` instance. This Sketch class creates all necessary sub-classes so you can manipulate or get information from any part of the sketch document using the.Model classes.

In this example we are looking at the shared text styles in the sketch document and writing those out to a CSS file. When you run `npm start` it will generate 'dist/styles.css' based on the text styles in the sketch document. You should be able to open that css file and see:

```css
.H1 {
  color: rgb(134, 140, 145);
  font-size: 48px;
  font-family: 'Helvetica-Light';
}
.H2 {
  color: rgb(48, 57, 66);
  font-size: 36px;
  font-family: 'Helvetica';
}
```

Now if you open 'myFile.sketch' and add another shared text style, save the sketch file, run `npm start` again you should see the css file has been updated!