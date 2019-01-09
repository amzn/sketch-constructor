# Generating a Sketch file from a Style Dictionary

This example shows how you can generate a Sketch file from a [Style Dictionary](https://amzn.github.io/style-dictionary). Similar to the [building from scratch](../building-from-scratch) example, this one generates a Sketch file programmatically.

## Things to look at

### config.js
This is the Style Dictionary configuration file. This is using the node module configuration file so we can easily add custom actions. Take a look at the `action` part of the config, here is where it is calling the function that actually creates the Sketch file.

### sketch/index.js
This file exports a function that is called in the custom action defined in `config.js`. Here we create a new Sketch instance and then add Pages to it and add shared styles.

### sketch/Swatch.js
This is a custom Sketch component that is created by extending the Group class and creating a Rectangle and 2 Text layers underneath.