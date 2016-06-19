# JSON to Layers

[!JSON to Layers HERO](http://creative-tweet.net/img/github/json-to-layers-hero.png)

You can import from Fireworks PNG (as JSON) to the Sketch 3. ([README in Japanese](https://github.com/littlebusters/JSON-to-Layers/blob/master/README.ja.md))

TL;DR: [Fireworks to Sketch 3 — QuickCast.](http://quick.as/pk7yuzz8b)

## Installation

[Download the plugin zip](https://github.com/littlebusters/JSON-to-Layers/archive/master.zip) and unzip. Open the Folder and double click the "JSON to Layers.sketchplugin".

And need install "[Fw to JSON](https://github.com/littlebusters/Fw-to-JSON)" command.

## Usage

1. Create new document and run the plugin in Sketch 3.
1. Select the exported JSON file in the [Fw to JSON](https://github.com/littlebusters/Fw-to-JSON).
1. To complete the import wait a little.

## Import JSON on Sketch 3.

### Pages & States

Pages and States convert as Artboards. Pages are arranged horizontally to the canvas. Stataes are vertically aligned to the canvas. 

### Rectangle

If not transformed create Rectangle Layer in Sketch 3. Otherwise, create layer by Path.

### Layer and Sub-Layer

Layers and sub-layers convert group layer with enabled "Click-through when selecting".

### Feather (Fill & Stroke)

Can't convert the feather.

### Gradinent Fill

Will convert Linear to Liner Gradient, Radial and Elliptical to Radial Gradient, Conical to Angular Gradient. otherwise convert to Linear gradient in Sketch.However, conical is incomplete conversion.

### Pattern Fill

Export as a bitmap of applying the pattern. Original pattern files are not exported.

### Stroke

Stroke setting to be converted is as follows.

- Stroke width
- Stroke position
- Radius
- dash setting
- shape (circle or square)

3-th of each gap and line setting are discared in Sketch 3.

### Blending

These blend mode is not supported in the Sketch 3. Convert as "Normal".

- average
- dissolve
- inversecolorburn
- softburn
- linearburn
- inversecolordodge
- softdodge
- lineardodge
- softlight2
- vividlight
- linearlight
- pinlight
- hardmix
- negation
- red
- green
- blue
- reflect
- glow
- freeze
- heat
- additive
- subtractive
- subtract
- interpolation
- stamp
- xor
- invert
- tint
- erase

### Live Effects

There Live Effects are not convert.

- Ajust Color
  - Auto Levels
  - Brightness/Contrast
  - Curves
  - Hue/Saturation
  - Invert
  - Levels
- Bevel and Emboss
- Blur
  - Blur
  -	Blur More
  - Radius Blur
- Other
- Sharpen
- Photoshop Live Effects
  - Bevel and Emboss
  - Satin
  - Pattern Overlay

### Text

Inside process is different, it will not be same result.

### Symbol

Symbol convert as symbol. but, if Different bounding, generate as new symbol.

### Auto Shape

Convert as Group.

### Texture and Bitmap

Export as Fireworks PNG and apply patterned Fill in Sketch 3.

## Bug reports

1. Open Console.app from `/Applications/Utilities/`.
1. Type "Sketch Plugin" in filter box.
1. Run broken plugin.
1. Submit output of the Console.app via Github issues with the version of your Sketch.app.

## Lisence

This software is released under the MIT License, see LICENSE.
