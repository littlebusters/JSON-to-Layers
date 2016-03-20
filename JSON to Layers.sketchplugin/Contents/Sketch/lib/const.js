var fw2json = fw2json || {};

fw2json.scriptVersion = '0.9.2';

fw2json.blendMode = [];
fw2json.blendMode['normal'] = 0;
fw2json.blendMode['darken'] = 1;
fw2json.blendMode['multiply'] = 2;
fw2json.blendMode['colorBurn'] = 3;
fw2json.blendMode['lighten'] = 4;
fw2json.blendMode['screen'] = 5;
fw2json.blendMode['colordodge'] = 6;
fw2json.blendMode['overlay'] = 7;
fw2json.blendMode['softlight1'] = 8;
fw2json.blendMode['hardlight'] = 9;
fw2json.blendMode['difference'] = 10;
fw2json.blendMode['exclusion'] = 11;
fw2json.blendMode['hue'] = 12;
fw2json.blendMode['saturation'] = 13;
fw2json.blendMode['color'] = 14;
fw2json.blendMode['luminosity'] = 15;

fw2json.solidFill = [0, 0, 2, 10, 7, 5, 0, 0, 0, 1, 4, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 9, 8, 0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

fw2json.PsLE = ['satin', 'dropShadow', 'innerShadow', 'outerGlow', 'innerGlow', 'solidFill', 'gradientFill', 'patternFill', 'bevelEmboss', 'stroke'];
// Sketch 3 not support
// average, dissolve, inversecolorburn, softburn, linearburn, inversecolordodge, softdodge, lineardodge, softlight2, vividlight, linearlight, pinlight, hardmix, negation, red, green, blue, reflect, glow, freeze, heat, additive, subtractive, subtract, interpolation, stamp, xor, invert, tint, erase

fw2json.appVer = {};
fw2json.appVer.full = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"];
fw2json.appVer.major    = ( fw2json.appVer.full.split( '.' ) )[0];
fw2json.appVer.minor    = ( fw2json.appVer.full.split( '.' ) )[1];
fw2json.appVer.revision = ( fw2json.appVer.full.split( '.' ) )[2] || 0;

fw2json.symbols = [];

fw2json.resPath = {}
