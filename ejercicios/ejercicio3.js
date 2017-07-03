String.prototype.reverse = function() {

	var x = this.length;
	var A = "";
	while (x>=0) {
		A = A + this.charAt(x);
		x--;
	}
	return A;

};

var x = new String("1 2 3 4 5 6 7 8 9 0");
document.write( x.reverse());
