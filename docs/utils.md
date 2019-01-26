## textAlignmentMap 


Maps text alignment integer enums to human-readable strings

**Example**  
```js
textAlignmentMap.left // => 0
```

* * *

## verticalAlignmentMap 


Maps vertical alignment int enums to human-readable strings

**Example**  
```js
verticalAlignmentMap.top // => 0
```

* * *

## layerToClass 
> layerToClass(layer) ⇒ <code>Layer</code>


layerToClass

Takes a raw JSON layer and returns a new class instance.

**Returns**: <code>Layer</code> - - An instance of a subclass of a Layer, such as Artboard, Group, or Text  

| Param | Type | Description |
| --- | --- | --- |
| layer | <code>Object</code> | The raw JSON of a layer as an object |


* * *

## stackLayers 
> stackLayers(layers, gutter) ⇒ <code>Array.&lt;Layer&gt;</code>


stackLayers
Positions an array of layers so they flow vertically like they would on the web.

**Returns**: <code>Array.&lt;Layer&gt;</code> - - An array of Layers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| layers | <code>Array.&lt;Layer&gt;</code> |  | An array of Layers |
| gutter | <code>int</code> | <code>0</code> | Optional gutter between layers |


* * *

