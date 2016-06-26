var json2Layer = json2Layer || {};

json2Layer.scriptVersion = '1.0.3';

json2Layer.blendMode = [];
json2Layer.blendMode['normal'] = 0;
json2Layer.blendMode['darken'] = 1;
json2Layer.blendMode['multiply'] = 2;
json2Layer.blendMode['colorBurn'] = 3;
json2Layer.blendMode['lighten'] = 4;
json2Layer.blendMode['screen'] = 5;
json2Layer.blendMode['colordodge'] = 6;
json2Layer.blendMode['overlay'] = 7;
json2Layer.blendMode['softlight1'] = 8;
json2Layer.blendMode['hardlight'] = 9;
json2Layer.blendMode['difference'] = 10;
json2Layer.blendMode['exclusion'] = 11;
json2Layer.blendMode['hue'] = 12;
json2Layer.blendMode['saturation'] = 13;
json2Layer.blendMode['color'] = 14;
json2Layer.blendMode['luminosity'] = 15;

json2Layer.solidFill = [0, 0, 2, 10, 7, 5, 0, 0, 0, 1, 4, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 9, 8, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

json2Layer.PsLE = ['satin', 'dropShadow', 'innerShadow', 'outerGlow', 'innerGlow', 'solidFill', 'gradientFill', 'patternFill', 'bevelEmboss', 'stroke'];
// Sketch 3 not support
// average, dissolve, inversecolorburn, softburn, linearburn, inversecolordodge, softdodge, lineardodge, softlight2, vividlight, linearlight, pinlight, hardmix, negation, red, green, blue, reflect, glow, freeze, heat, additive, subtractive, subtract, interpolation, stamp, xor, invert, tint, erase

json2Layer.appVer = {};
json2Layer.appVer.full = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
json2Layer.appVer.major    = ( json2Layer.appVer.full.split( '.' ) )[0];
json2Layer.appVer.minor    = ( json2Layer.appVer.full.split( '.' ) )[1];
json2Layer.appVer.revision = ( json2Layer.appVer.full.split( '.' ) )[2] || 0;

json2Layer.symbols = [];

json2Layer.resPath = {}
