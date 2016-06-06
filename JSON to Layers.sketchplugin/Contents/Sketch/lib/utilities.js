// utilities
function getCoordfromTrigFunc( radius, angle, isPsLE ) {
	var coord = {}
	if ( !isPsLE ) {
		angle = 360 - angle;
	} else {
		angle = 180 - angle;
	}

	coord.x = radius * Math.cos( angle / 180 * Math.PI );
	coord.y = radius * Math.sin( angle / 180 * Math.PI );

	return coord;
}

function getGradientStopColorOnOpacitySide ( assets ) {
	// log( '    getGradientStopColorOnOpacitySide:');
	// log( assets );

	var pr = hex2Digit( assets.prev.color.slice( 1, 3 ) ) - 0;
	var pg = hex2Digit( assets.prev.color.slice( 3, 5 ) ) - 0;
	var pb = hex2Digit( assets.prev.color.slice( 5, 7 ) ) - 0;

	var nr = hex2Digit( assets.next.color.slice( 1, 3 ) ) - 0;
	var ng = hex2Digit( assets.next.color.slice( 3, 5 ) ) - 0;
	var nb = hex2Digit( assets.next.color.slice( 5, 7 ) ) - 0;

	// log( '    prevColor: ' + pr + ' / ' + pg + ' / ' + pb + ' | nextColor: ' + nr + ' / ' + ng + ' / ' + nb );

	var range = assets.next.position - assets.prev.position;
	var offset = 1 / range;
	// log( '    offset: ' + offset );
	var localRangePosition = ( assets.current.position - assets.prev.position ) * offset;
	// log( '    range: ' + range + ' / offset: ' + offset + ' / localRangePosition: ' + localRangePosition );
	
	var r = roundWithDigit( pr + ( nr - pr ) * localRangePosition, 0 );
	var g = roundWithDigit( pg + ( ng - pg ) * localRangePosition, 0 );
	var b = roundWithDigit( pb + ( nb - pb ) * localRangePosition, 0 );

	r = digit2Hex( r );
	g = digit2Hex( g );
	b = digit2Hex( b );
	// log( '    retrun: ' + '#' + r + g + b );

	return '#' + r + g + b;
}

function getGradientOpacity ( assets ) {
	// log( '    getGradientOpacity:');
	// log( assets );

	var range = assets.next.position - assets.prev.position;
	var offset = 1 / range;
	var localRangePosition = ( assets.current.position - assets.prev.position ) * offset;

	var opacity = roundWithDigit( assets.prev.opacity + ( assets.next.opacity - assets.prev.opacity ) * localRangePosition, 2 );

	return opacity;
}

function floorWithDigit ( _val, _specifiedDigit ) {
	var digit = Math.pow( 10, _specifiedDigit );
	var val = Math.floor( _val * digit );

	return  val / digit;
}

function roundWithDigit ( _val, _specifiedDigit ) {
	var digit = Math.pow( 10, _specifiedDigit );
	var val = Math.round( _val * digit );

	return  val / digit;
}

function getOpacityByDigit ( _hex ) {
	if ( _hex ) {
		var digit = ( parseInt( '0x' + _hex ).toString( 10 ) ) / 255;
	} else {
		var digit = 1;
	}

	return roundWithDigit( digit, 2 );
}

function digit2Hex ( _digit ) {
	var hex = parseInt( _digit ).toString( 16 );
	if ( 1 == hex.length ) hex = '0' + hex;
	return hex;
}

function hex2Digit ( _hex ) {
	return ( parseInt( '0x' + _hex ).toString( 10 ) );
}

function bit2Percent ( val ) {
	return roundWithDigit( val / 255, 4 );
}

function getHexColor( color ) {
	if( 7 == color.length ) return color;
	return color.slice( 0, 7 );
}

function getOpacity( color ) {
	if( 7 == color.length ) return 1;

	var hex = color.slice( 7, 9 );
	var opacity = parseInt( '0x' + hex ).toString( 10 ) / 255;
	opacity = roundWithDigit( opacity, 2 );

	return opacity;
}

function hex2Color ( hex ) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex ),
		red   = parseInt(result[1], 16) / 255,
		green = parseInt(result[2], 16) / 255,
		blue  = parseInt(result[3], 16) / 255,
		alpha = getOpacity( hex );
    return NSColor.colorWithCalibratedRed_green_blue_alpha( red, green, blue, alpha )
}

function rgb2Gray ( hex ) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex ),
		red   = hex2Digit( parseInt( result[1], 16 )) - 0,
		green = hex2Digit( parseInt( result[2], 16 )) - 0,
		blue  = hex2Digit( parseInt( result[3], 16 )) - 0;
	var gray  = digit2Hex(( Math.round( red + green + blue ) / 3 ));
	return '#' + gray + gray + gray;
}

function gray2Alpha ( hex ) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex ),
		red   = parseInt( result[1], 16 ),
		green = parseInt( result[2], 16 ),
		blue  = parseInt( result[3], 16 );

	if ( red != green || green != blue ) {
		hex = rgb2Gray( hex );
		result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
	}

	var grayPercent = hex2Digit( result[1] ) - 0;
	return bit2Percent( grayPercent );
}