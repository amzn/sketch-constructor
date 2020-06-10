## textAlignmentMap 


Maps text alignment integer enums to human-readable strings

**Example**  
```js
textAlignmentMap.left // => 0
```

* * *

## textBehaviourMap 


Maps text text behaviour integer enums to human-readable strings

**Example**  
```js
textBehaviourMap.auto // => 0
```

* * *

## textTransformMap 


Maps text transform integer enums to human-readable strings

**Example**  
```js
textTransformMap.uppercase // => 1
```

* * *

## verticalAlignmentMap 


Maps vertical alignment int enums to human-readable strings

**Example**  
```js
verticalAlignmentMap.top // => 0
```

* * *

## blendModeMap 


Maps blend modes int enums to human-readable strings

**Example**  
```js
blendModeMap.multiply // => 2
```

* * *

## resizingConstraintsMap 


Maps resizing contrains int enums to human-readable strings

**Example**  
```js
resizingConstraintsMap.top // => 31
```

* * *

## STORAGE_DIR 


Path to the temporary sketch constructor folder


* * *

## STORAGE_IMG_DIR 


Path to the temporary local image folder


* * *

## STORAGE_PREVIEW_DIR 


Path to directory with preview file


* * *

## STORAGE_PREVIEW_FILE 


Path to preview file


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

