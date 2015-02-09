function spacer(x) {
	var res = '';
	while(x--) res += ' ';
	return res;
}

module.exports = function(x /* String (or n# of white spaces required )*/, n /* Number of spaces to add (default 8) */, before /* Add spaces before Boolean */) {

	var spaces = n || 8;

	switch(typeof x){
		case('integer'): return spacer(x); break;
		case('string'): return before ? spacer(spaces - x.length) + x : x + spacer(spaces - x.length); break;
		default: throw 'You need to space either a INTEGER or STRING as first param';
	}

};