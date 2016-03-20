# Fire Gem(WIP)

**This READMEA is Work in Progress!!**

You can convert to Fireworks PNG stracture as JSON and import it in the BohemianCoding Sketch 3.

## Installation

Download the plugin zip and unzip.

### for Fireworks

"Fw to JSON" folder move to "Commands" Folder of Fireworks.

If you use the OSX, You can open the "Commands" Folder if run the command on Terminal.app.

```
$ open "~/Library/Application Support/Adobe/Fireworks CS6/Commands"
```

### for Sketch 3

1. Duble-click the `JSON to Layers.sketchplugin`.

## Usage

1. Open any Fireworks PNG file.
1. Run the "Fw to JSON" command.
1. Select the folder you want to export.
1. If JSON file and resource files exist, displays an alert.
1. Export is finished, displays an alert with number of exported layers and objects.
1. Create new document and run the plugin in Sketch 3.
1. Select the exported JSON file, to complete the import wait a little.

## Convert Fireworks to JSON.

- Bitmap, textured fill and patterned fill is exporting as a Fireworks PNG file.
- Also exports hidden objects, Please remove the unnecessary objects.
- Symbol object will be detach instance from symbol. **Don't save after run the command.**

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

Will convert Linear and Radial, Conical. otherwise convert to Linear gradient in Sketch.However, conical is incomplete conversion.

### Pattern Fill

Export as a bitmap of applying the pattern. Original pattern files are not exported.

### Stroke

Stroke setting to be converted is as follows.

- Stroke width
- Stroke position
- Radius
- dash setting
- shape (circle or square)


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