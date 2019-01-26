## Artboard 


class Artboard
An artboard in Sketch


* [Artboard](#Artboard)
    * [new Artboard(args, json)](#new_Artboard_new)
    * [.Model](#Artboard.Model)


* * *

### Artboard 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> | Use this when creating an artboard programmatically |
| [args.backgroundColor] | <code>String</code> | Passed to [Color](#Color) constructor |
| [args.exportOptions] | <code>Object</code> | Object passed to [ExportOptions](#ExportOptions) constructor |
| [args.frame] | <code>Object</code> | Object passed to [Rect](#Rect) constructor |
| [args.name] | <code>String</code> |  |
| [args.layers] | [<code>Array.&lt;Layer&gt;</code>](#Layer) |  |
| [args.horizontalRulerData] | <code>Object</code> | Object passed to [RulerData](#RulerData) constructor |
| [args.verticalRulerData] | <code>Object</code> | Object passed to [RulerData](#RulerData) constructor |
| json | [<code>Model</code>](#Artboard.Model) | This is used using an existing |


* * *

### Model 


The underlying JSON object structure in a Sketch document.

**Mixes**: [<code>Model</code>](#Group.Model)  
**Properties**

| Name | Type |
| --- | --- |
| shouldBreakMaskChain | <code>boolean</code> | 
| horizontalRulerData | [<code>Model</code>](#RulerData.Model) | 
| verticalRulerData | [<code>Model</code>](#RulerData.Model) | 
| includeBackgroundColorInExport | <code>boolean</code> | 
| includeInCloudUpload | <code>boolean</code> | 
| isFlowHome | <code>boolean</code> | 
| resizesContent | <code>boolean</code> | 
| hasClickThrough | <code>boolean</code> | 
| backgroundColor | [<code>Model</code>](#Color.Model) | 


* * *

## AttributedString 


An AttributedString is a string of text that has certain parts of it with different styles.


* [AttributedString](#AttributedString)
    * [new AttributedString(args, json)](#new_AttributedString_new)
    * [.Model](#AttributedString.Model)


* * *

### AttributedString 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.string | <code>String</code> |  |
| [args.attributes] | <code>Array.&lt;StringAttribute&gt;</code> | If you don't pass any attributes, this will pass args to a new StringAttribute that will cover the full lenght of the string |
| json | [<code>Model</code>](#AttributedString.Model) |  |


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| string | <code>String</code> | 
| attributes | <code>Array.&lt;StringAttribute&gt;</code> | 


* * *

## Border 


Border class


* [Border](#Border)
    * [new Border(args, json)](#new_Border_new)
    * [.Model](#Border.Model)
    * [.Position](#Border.Position) : <code>enum</code>


* * *

### Border 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.color | <code>Object</code> \| <code>String</code> | Sent to [Color](#Color) |
| args.fillType | [<code>FillType</code>](#Fill.FillType) |  |
| args.position | [<code>Position</code>](#Border.Position) |  |
| args.thickness | <code>integer</code> |  |
| json | [<code>Model</code>](#Border.Model) |  |


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| isEnabled | <code>boolean</code> | 
| color | [<code>Model</code>](#Color.Model) | 
| fillType | [<code>FillType</code>](#Fill.FillType) | 
| position | <code>Border.position</code> | 
| thickness | <code>integer</code> | 


* * *

### Position 


**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Inside | <code>integer</code> | <code>1</code> | 
| Center | <code>integer</code> | <code>0</code> | 
| Outside | <code>integer</code> | <code>2</code> | 


* * *

## BorderOptions 


Border options


* [BorderOptions](#BorderOptions)
    * [new BorderOptions([args], json)](#new_BorderOptions_new)
    * [.Model](#BorderOptions.Model)
    * [.LineCapStyle](#BorderOptions.LineCapStyle)
    * [.LineJoinStyle](#BorderOptions.LineJoinStyle)


* * *

### BorderOptions 



| Param | Type |
| --- | --- |
| [args] | <code>Object</code> | 
| args.dashPattern | <code>Array.&lt;integer&gt;</code> | 
| args.lineCapStyle | [<code>LineCapStyle</code>](#BorderOptions.LineCapStyle) | 
| args.lineJoinStyle | [<code>LineJoinStyle</code>](#BorderOptions.LineJoinStyle) | 
| json | [<code>Model</code>](#BorderOptions.Model) | 


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| isEnabled | <code>boolean</code> | 
| dashPattern | <code>Array.&lt;integer&gt;</code> | 
| lineCapStyle | [<code>LineCapStyle</code>](#BorderOptions.LineCapStyle) | 
| lineJoinStyle | [<code>LineJoinStyle</code>](#BorderOptions.LineJoinStyle) | 


* * *

### LineCapStyle 


**Properties**

| Name | Default |
| --- | --- |
| butt | <code>0</code> | 
| round | <code>1</code> | 
| projecting | <code>2</code> | 


* * *

### LineJoinStyle 


**Properties**

| Name | Default |
| --- | --- |
| miter | <code>0</code> | 
| round | <code>1</code> | 
| bevel | <code>2</code> | 


* * *

## Color 


Color class

**Mixes**: <code>TinyColor</code>  

* [Color](#Color)
    * [new Color(args, json)](#new_Color_new)
    * _instance_
        * [.set(tinyColor)](#Color+set) ⇒ <code>this</code>
        * [._getTinyColor()](#Color+_getTinyColor) ⇒ <code>TinyColor</code>
    * _static_
        * [.Model](#Color.Model)


* * *

### Color 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>String</code> \| <code>Object</code> | This is passed to tinycolor 2. As long as tinycolor2 can understand this argument, the color will work. |
| json | [<code>Model</code>](#Color.Model) |  |


* * *

### set 
> color.set(tinyColor) ⇒ <code>this</code>




Set/update the color

**Returns**: <code>this</code> - Returns this for chaining  

| Param | Type | Description |
| --- | --- | --- |
| tinyColor | <code>String</code> \| <code>Object</code> | Setting the color, basically the same as instantiating a new Color class. |


* * *

### _getTinyColor 
> color._getTinyColor() ⇒ <code>TinyColor</code>





* * *

### Model 


**Properties**

| Name | Type | Description |
| --- | --- | --- |
| alpha | <code>float</code> | 0-1 |
| blue | <code>float</code> | 0-1 |
| green | <code>float</code> | 0-1 |
| red | <code>float</code> | 0-1 |


* * *

## CurvePoint 


CurvePoints are used to create Shapes


* [CurvePoint](#CurvePoint)
    * [new CurvePoint(args, json)](#new_CurvePoint_new)
    * [.Model](#CurvePoint.Model)


* * *

### CurvePoint 



| Param | Type |
| --- | --- |
| args | [<code>Model</code>](#CurvePoint.Model) | 
| json | [<code>Model</code>](#CurvePoint.Model) | 


* * *

### Model 


**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cornerRadius | <code>integer</code> |  |
| curveFrom | <code>String</code> | "{0,0}" |
| curveTo | <code>String</code> | "{0,0}" |
| point | <code>String</code> | "{0,0}" |
| curveMode | <code>integer</code> |  |
| hasCurveFrom | <code>boolean</code> |  |
| hasCurveTo | <code>boolean</code> |  |


* * *

## Document 


A Document is a sketch file


* [Document](#Document)
    * [new Document(args, json)](#new_Document_new)
    * [.getLayerStyles()](#Document+getLayerStyles) ⇒ <code>Array.&lt;SharedStyle&gt;</code>
    * [.getLayerStyle(name)](#Document+getLayerStyle) ⇒ <code>SharedStyle</code>
    * [.addLayerStyle(style)](#Document+addLayerStyle) ⇒ <code>this</code>
    * [.getTextStyles()](#Document+getTextStyles) ⇒ <code>Array.&lt;SharedStyle&gt;</code>
    * [.addTextStyle(style)](#Document+addTextStyle) ⇒ <code>this</code>
    * [.addPage(pageID)](#Document+addPage) ⇒ <code>this</code>


* * *

### Document 



| Param | Type |
| --- | --- |
| args | <code>Object</code> | 
| json | <code>Document.Model</code> | 


* * *

### getLayerStyles 
> document.getLayerStyles() ⇒ <code>Array.&lt;SharedStyle&gt;</code>




**Returns**: <code>Array.&lt;SharedStyle&gt;</code> - An array of layer styles as SharedStyle classes  

* * *

### getLayerStyle 
> document.getLayerStyle(name) ⇒ <code>SharedStyle</code>





| Param | Type |
| --- | --- |
| name | <code>String</code> | 


* * *

### addLayerStyle 
> document.addLayerStyle(style) ⇒ <code>this</code>





| Param | Type |
| --- | --- |
| style | <code>SharedStyle</code> | 


* * *

### getTextStyles 
> document.getTextStyles() ⇒ <code>Array.&lt;SharedStyle&gt;</code>




**Returns**: <code>Array.&lt;SharedStyle&gt;</code> - An array of SharedStyles  

* * *

### addTextStyle 
> document.addTextStyle(style) ⇒ <code>this</code>





| Param | Type |
| --- | --- |
| style | <code>SharedStyle</code> | 


* * *

### addPage 
> document.addPage(pageID) ⇒ <code>this</code>





| Param | Type |
| --- | --- |
| pageID | <code>String</code> | 


* * *

## ExportOptions 


Options for exporting an artboard


* [ExportOptions](#ExportOptions)
    * [new ExportOptions(args, json)](#new_ExportOptions_new)
    * [.Model](#ExportOptions.Model)


* * *

### ExportOptions 



| Param | Type |
| --- | --- |
| args | [<code>Model</code>](#ExportOptions.Model) | 
| json | [<code>Model</code>](#ExportOptions.Model) | 


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| exportFormats | <code>Array</code> | 
| includedLayerIds | <code>Array.&lt;String&gt;</code> | 
| layerOptions | <code>integer</code> | 
| shouldTrim | <code>boolean</code> | 


* * *

## Fill 



* [Fill](#Fill)
    * [new Fill(args, json)](#new_Fill_new)
    * [.Model](#Fill.Model)
    * [.FillType](#Fill.FillType)


* * *

### Fill 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.color | <code>String</code> \| <code>Object</code> | Passed to [Color](#Color) constructor |
| json | [<code>Model</code>](#Fill.Model) |  |


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| isEnabled | <code>boolean</code> | 
| color | [<code>Model</code>](#Color.Model) | 
| fillType | <code>integer</code> | 
| noiseIndex | <code>integer</code> | 
| noiseIntensity | <code>integer</code> | 
| patternFillType | <code>integer</code> | 
| patternTileScale | <code>integer</code> | 


* * *

### FillType 


**Properties**

| Name | Default |
| --- | --- |
| Color | <code>0</code> | 
| Gradient | <code>1</code> | 
| Pattern | <code>4</code> | 
| Noise | <code>5</code> | 


* * *

## Gradient 


Gradient


* [Gradient](#Gradient)
    * [new Gradient(args, json)](#new_Gradient_new)
    * [.Model](#Gradient.Model)


* * *

### Gradient 



| Param | Type |
| --- | --- |
| args | <code>Object</code> | 
| json | [<code>Model</code>](#Gradient.Model) | 


* * *

### Model 



* * *

## Group 


A group extends

**Extends**: [<code>Layer</code>](#Layer)  

* [Group](#Group) ⇐ [<code>Layer</code>](#Layer)
    * [new Group(args, json)](#new_Group_new)
    * _instance_
        * [.getLayers([predicate])](#Layer+getLayers) ⇒ [<code>Array.&lt;Layer&gt;</code>](#Layer)
    * _static_
        * [.Model](#Group.Model)


* * *

### Group 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.frame | <code>Object</code> | Sent to [Rect](#Rect) |
| args.style | <code>Object</code> | Sent to [Style](#Style) |
| args.layers | [<code>Array.&lt;Layer&gt;</code>](#Layer) |  |
| json | [<code>Model</code>](#Group.Model) |  |


* * *

### getLayers 
> group.getLayers([predicate]) ⇒ [<code>Array.&lt;Layer&gt;</code>](#Layer)




Get all direct child layers, and optionally filter them by a predicate function.

**Returns**: [<code>Array.&lt;Layer&gt;</code>](#Layer) - An array of layers. Will only be the direct children layers.  

| Param | Type | Description |
| --- | --- | --- |
| [predicate] | <code>function</code> | Filter function if you want to only return certain layers |


* * *

### Model 


**Mixes**: [<code>Model</code>](#Layer.Model)  

* * *

## Layer 


Base layer class

This is an abstract class and should not be directly instantiated.


* [Layer](#Layer)
    * _instance_
        * [.getLayers([predicate])](#Layer+getLayers) ⇒ [<code>Array.&lt;Layer&gt;</code>](#Layer)
    * _static_
        * [.Model](#Layer.Model)


* * *

### getLayers 
> layer.getLayers([predicate]) ⇒ [<code>Array.&lt;Layer&gt;</code>](#Layer)




Get all direct child layers, and optionally filter them by a predicate function.

**Returns**: [<code>Array.&lt;Layer&gt;</code>](#Layer) - An array of layers. Will only be the direct children layers.  

| Param | Type | Description |
| --- | --- | --- |
| [predicate] | <code>function</code> | Filter function if you want to only return certain layers |


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| do_objectID | <code>String</code> | 
| booleanOperation | <code>integer</code> | 
| exportOptions | [<code>Model</code>](#ExportOptions.Model) | 
| frame | [<code>Model</code>](#Rect.Model) | 
| isFixedToViewport | <code>boolean</code> | 
| isFlippedHorizontal | <code>boolean</code> | 
| isFlippedVertical | <code>boolean</code> | 
| isLocked | <code>boolean</code> | 
| isVisible | <code>boolean</code> | 
| name | <code>String</code> | 
| nameIsFixed | <code>boolean</code> | 


* * *

## Meta 


This is an internal class, you shouldn't be directly dealing with this class. It outputs the meta.json file in the top level directory of a Sketch file.


* [Meta](#Meta)
    * [new Meta(args, json)](#new_Meta_new)
    * [.Model](#Meta.Model)


* * *

### Meta 



| Param | Type |
| --- | --- |
| args | [<code>Model</code>](#Meta.Model) | 
| json | [<code>Model</code>](#Meta.Model) | 


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| commit | <code>String</code> | 
| pagesAndArtboards | <code>Object</code> | 
| version | <code>integer</code> | 
| fonts | <code>Array</code> | 
| compatibilityVersion | <code>integer</code> | 
| app | <code>String</code> | 


* * *

## Page 



* [Page](#Page)
    * [new Page(args, json)](#new_Page_new)
    * _instance_
        * [.getArtboards(predicate)](#Page+getArtboards) ⇒ [<code>Array.&lt;Artboard&gt;</code>](#Artboard)
        * [.getArtboard(name)](#Page+getArtboard) ⇒ [<code>Artboard</code>](#Artboard)
        * [.addArtboard(artboard)](#Page+addArtboard) ⇒ <code>this</code>
    * _static_
        * [.Model](#Page.Model)


* * *

### Page 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.style | <code>Object</code> | [Style](#Style) |
| json | [<code>Model</code>](#Page.Model) |  |


* * *

### getArtboards 
> page.getArtboards(predicate) ⇒ [<code>Array.&lt;Artboard&gt;</code>](#Artboard)





| Param | Type |
| --- | --- |
| predicate | <code>function</code> | 


* * *

### getArtboard 
> page.getArtboard(name) ⇒ [<code>Artboard</code>](#Artboard)





| Param | Type |
| --- | --- |
| name | <code>String</code> | 


* * *

### addArtboard 
> page.addArtboard(artboard) ⇒ <code>this</code>





| Param | Type |
| --- | --- |
| artboard | [<code>Artboard</code>](#Artboard) | 


* * *

### Model 


**Mixes**: [<code>Model</code>](#Group.Model)  

* * *

## Rect 


A Rect is a lower-level class used to define the frame of a layer. Don't use this
if you mean to use a Rectangle instead!


* [Rect](#Rect)
    * [new Rect(args, json)](#new_Rect_new)
    * [.Model](#Rect.Model)


* * *

### Rect 



| Param | Type |
| --- | --- |
| args | [<code>Model</code>](#Rect.Model) | 
| json | [<code>Model</code>](#Rect.Model) | 


* * *

### Model 


Underlying JSON object structure in a Sketch document

**Properties**

| Name | Type |
| --- | --- |
| constrainProportions | <code>boolean</code> | 
| height | <code>integer</code> | 
| width | <code>integer</code> | 
| x | <code>integer</code> | 
| y | <code>integer</code> | 


* * *

## Rectangle 



* [Rectangle](#Rectangle)
    * [new Rectangle(args, json)](#new_Rectangle_new)
    * [.Model](#Rectangle.Model)


* * *

### Rectangle 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.name | <code>String</code> |  |
| args.x | <code>integer</code> |  |
| args.y | <code>integer</code> |  |
| args.height | <code>integer</code> |  |
| args.width | <code>integer</code> |  |
| args.style | <code>Object</code> | Passed to [LayerStyle](LayerStyle) |
| json | [<code>Model</code>](#Rectangle.Model) |  |


* * *

### Model 


**Mixes**: [<code>Model</code>](#Layer.Model)  
**Properties**

| Name | Type |
| --- | --- |
| edited | <code>boolean</code> | 
| isClosed | <code>boolean</code> | 
| pointRadiusBehaviour | <code>integer</code> | 
| points | <code>Array.&lt;String&gt;</code> | 
| fixedRadius | <code>integer</code> | 
| hasConvertedToNewRoundCorners | <code>boolean</code> | 


* * *

## RulerData 



* [RulerData](#RulerData)
    * [new RulerData(args, json)](#new_RulerData_new)
    * [.Model](#RulerData.Model)


* * *

### RulerData 



| Param | Type |
| --- | --- |
| args | [<code>Model</code>](#RulerData.Model) | 
| json | [<code>Model</code>](#RulerData.Model) | 


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| base | <code>integer</code> | 
| guides | <code>Array</code> | 


* * *

## Style 



* [Style](#Style)
    * [new Style(args, json)](#new_Style_new)
    * [.Model](#Style.Model)
    * [.MarkerType](#Style.MarkerType) : <code>enum</code>
    * [.WindingRule](#Style.WindingRule) : <code>enum</code>
    * [.BlendMode](#Style.BlendMode) : <code>enum</code>


* * *

### Style 



| Param | Type | Description |
| --- | --- | --- |
| args | <code>Object</code> |  |
| args.fills | <code>Array.&lt;Object&gt;</code> | Sent to [Fill](#Fill) |
| args.borders | <code>Array.&lt;Object&gt;</code> | Sent to [Border](#Border) |
| args.shadows | <code>Array.&lt;Object&gt;</code> | Sent to [Shadow](Shadow) |
| json | [<code>Model</code>](#Style.Model) |  |


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| startMarkerType | [<code>MarkerType</code>](#Style.MarkerType) | 
| endMarkerType | [<code>MarkerType</code>](#Style.MarkerType) | 
| border | [<code>Array.&lt;Model&gt;</code>](#Border.Model) | 
| fills | [<code>Array.&lt;Model&gt;</code>](#Fill.Model) | 
| shadows | <code>Array.&lt;Shadow.Model&gt;</code> | 
| textStyle | <code>TextStyle.Model</code> | 
| contextSettings | <code>Object</code> | 


* * *

### MarkerType 


**Properties**

| Name | Type | Default |
| --- | --- | --- |
| none | <code>integer</code> | <code>0</code> | 
| openArrow | <code>integer</code> | <code>1</code> | 
| filledArrow | <code>integer</code> | <code>2</code> | 
| line | <code>integer</code> | <code>3</code> | 
| openCircle | <code>integer</code> | <code>4</code> | 
| filledCircle | <code>integer</code> | <code>5</code> | 
| openSquare | <code>integer</code> | <code>6</code> | 
| filledSquare | <code>integer</code> | <code>7</code> | 


* * *

### WindingRule 



* * *

### BlendMode 


**Properties**

| Name | Type | Default |
| --- | --- | --- |
| Normal | <code>integer</code> | <code>0</code> | 
| Darken | <code>integer</code> | <code>1</code> | 
| Multiply | <code>integer</code> | <code>2</code> | 
| ColorBurn | <code>integer</code> | <code>3</code> | 
| Lighten | <code>integer</code> | <code>4</code> | 
| Screen | <code>integer</code> | <code>5</code> | 
| ColorDodge | <code>integer</code> | <code>6</code> | 
| Overlay | <code>integer</code> | <code>7</code> | 
| SoftLight | <code>integer</code> | <code>8</code> | 
| HardLight | <code>integer</code> | <code>9</code> | 
| Difference | <code>integer</code> | <code>10</code> | 
| Exclusion | <code>integer</code> | <code>11</code> | 
| Hue | <code>integer</code> | <code>12</code> | 
| Saturation | <code>integer</code> | <code>13</code> | 
| Color | <code>integer</code> | <code>14</code> | 
| Luminosity | <code>integer</code> | <code>15</code> | 


* * *

## SymbolInstance 


This class is incomplete

**Todo**

- [ ] add OverrideValue class


* [SymbolInstance](#SymbolInstance)
    * [new SymbolInstance(args, json)](#new_SymbolInstance_new)
    * [.Model](#SymbolInstance.Model)


* * *

### SymbolInstance 



| Param | Type |
| --- | --- |
| args | <code>Object</code> | 
| json | [<code>Model</code>](#SymbolInstance.Model) | 


* * *

### Model 



* * *

## Text 


Text Layer Class

**Extends**: [<code>Layer</code>](#Layer)  

* [Text](#Text) ⇐ [<code>Layer</code>](#Layer)
    * [new Text([args], [json])](#new_Text_new)
    * _instance_
        * [.getLayers([predicate])](#Layer+getLayers) ⇒ [<code>Array.&lt;Layer&gt;</code>](#Layer)
    * _static_
        * [.Model](#Text.Model) : <code>Object</code>


* * *

### Text 



| Param | Type | Description |
| --- | --- | --- |
| [args] | <code>Object</code> |  |
| [args.frame] | <code>Object</code> | Passed to [Rect](#Rect) |
| [args.style] | <code>Object</code> | Passsed to [TextStyle](#TextStyle) |
| [json] | [<code>Model</code>](#Text.Model) |  |

**Example**  
```js
const text = new Text({
  string: "hello"
});
```

* * *

### getLayers 
> text.getLayers([predicate]) ⇒ [<code>Array.&lt;Layer&gt;</code>](#Layer)




Get all direct child layers, and optionally filter them by a predicate function.

**Returns**: [<code>Array.&lt;Layer&gt;</code>](#Layer) - An array of layers. Will only be the direct children layers.  

| Param | Type | Description |
| --- | --- | --- |
| [predicate] | <code>function</code> | Filter function if you want to only return certain layers |


* * *

### Model 


The underlying object structure this class consists of in Sketch JSON

**Mixes**: [<code>Model</code>](#Layer.Model)  
**Properties**

| Name | Type |
| --- | --- |
| automaticallyDrawOnUnderlyingPath | <code>boolean</code> | 
| dontSynchroniseWithSymbol | <code>boolean</code> | 


* * *

## TextStyle 


TextStyle
A TextStyle is applied to a Text layer.


* * *

### TextStyle 



| Param | Type | Description |
| --- | --- | --- |
| [args] | <code>Object</code> | Configuration when creating a TextStyle programmatically. |
| [json] | <code>Object</code> | Raw JSON object when this class is instantiated from a Sketch document. |


* * *

## User 



* [User](#User)
    * [new User(args, json)](#new_User_new)
    * _instance_
        * [.addPage(pageID, opts)](#User+addPage) ⇒ <code>this</code>
    * _static_
        * [.Model](#User.Model)


* * *

### User 



| Param | Type |
| --- | --- |
| args | <code>Object</code> | 
| [args.pageListHeight] | <code>String</code> | 
| json | [<code>Model</code>](#User.Model) | 


* * *

### addPage 
> user.addPage(pageID, opts) ⇒ <code>this</code>





| Param | Type |
| --- | --- |
| pageID | <code>String</code> | 
| opts | <code>Object</code> | 
| opts.scrollOrigin | <code>String</code> | 
| opts.zoomValue | <code>integer</code> | 


* * *

### Model 


**Properties**

| Name | Type |
| --- | --- |
| document | <code>Object</code> | 
| document.pageListHeight | <code>String</code> | 


* * *

