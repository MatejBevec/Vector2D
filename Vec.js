//MATEJ BEVEC - 2019

//this class represents a vector on a 2D plane
//vectors are ordered pairs {x,y}

class Vec{

	//x;
	//y;

	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	//PUBLIC METHODS

	//returns this vector's magnitude
	length(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}

	//returns this vector scaled with the scalar s
	scale(s){
		return new Vec(this.x*s, this.y*s);
	}

	//returns the vector rotated around its base by the given angle
	//positive angles rotate counter-clockwise,
	//if the base vectors point up and to the right
	rotate(angle){
		let x = Math.cos(angle)*this.x - Math.sin(angle)*this.y;
		let y = Math.sin(angle)*this.x + Math.cos(angle)*this.y;
		return new Vec(x, y);
	}

	//returns a unit vector in this vector's direction
	normalize(){
		return this.scale(1/this.length());
	}

	//returns a string rep. of this vector in the form "(x, y)"
	toString(){
		return "(" + this.x + ", " + this.y + ")";
	}

	//IN PLACE PUBLIC METHODS

	//scales this vector with the scalar s
	scale_(s){
		this.x *= s;
		this.y *= s;
	}

	//rotates this vector by the given angle
	rotate_(angle){
		this.x = Math.cos(angle)*this.x - Math.sin(angle)*this.y;
		this.y = Math.sin(angle)*this.x + Math.cos(angle)*this.y;
	}

	//normalizes this vector
	normalize_(){
		let l = this.length()
		this.x /= l;
		this.y /= l;
	}

	//STATIC METHODS

	//returns the vector a + b
	static add(a, b){
		return new Vec(a.x + b.x, a.y + b.y);
	}

	//returns the dot product of a and b
	static dot(a, b){
		return (a.x*b.x + a.y*b.y);
	}

	//returns the angle from a to b
	static angle(a, b){
		return Math.acos( (Vec.dot(a,b) / (a.length()*b.length()))%1 );
	}

	//returns the projection of vector a onto b
	static project(a, b){
		let bNorm = b.normalize()
		let len = Vec.dot(a, bNorm);
		return bNorm.scale(len);
	}

	//linearly interpolates between a and b by the factor f
	static lerp(a, b, f){
		return Vec.add( a.scale(1 - f), b.scale(f) );
	}

	//returns the distance between a and b as points
	static distance(a, b){
		return Math.sqrt( Math.pow(b.x-a.x, 2) + Math.pow(b.y-a.y, 2) );
	}

	//returns the reflection of vector a about the normal b
	static reflect(a, n){
		let proj = Vec.project(a, n);
		return Vec.add(proj.scale(2), a.scale(-1));
	}

	//creates a vector from point a to point b
	static fromPoints(a, b){
		return new Vec(b.x-a.x, b.y-a.y);
	}

	//ANGLE UNIT CONVERSION

	static toDeg(rad){
		return rad/(Math.PI*2) * 360;
	}

	static toRad(deg){
		return deg/360 * Math.PI*2;
	}

}