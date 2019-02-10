# Vector2D
A javascript library for vector operations on a 2D plane.

The class **Vec** Represents a vector in 2D space.
It provides the following methods:

*creating a vector object*
```javascript
new Vec(x, y)
```

*public methods*
```javascript
length()
//returns the vector's magnitude

scale(s)
//returns the vector scaled by the scalar s

rotate(angle)
//returns the vector rotated around its base by the given angle
//positive angles rotate counter-clockwise if the base vectors point right and up

normalize()
//returns a unit vector in the vector+s direction

toString()
//returns a string representation of the vector in the form "(x, y)"

scale_(s)
//in-place version of scale()
//scales the vector by the scalar s

rotate_(angle)
//in-place version of rotate()
//rotates the vector around its base by the given angle

normalize_()
//in-place version of normalize()
//normalizes the vector
```

*static methods*
```javascript
static add (a, b)
//returns the vector a + b (vector addition)

static dot (a, b)
//returns a scalar; the dot product of a and b

static angle (a, b)
//returns the angle from a to b in radians

static project (a, b)
//returns a vector; the projection of vector a onto b

static lerp (a, b)
//returns a vector; the result of linear interpolation between a and b by the factor f

static fromPoints (a, b)
//returns a vector pointing from point a to point b, treating a, b as points
```

*other methods*

```javascript
static toDeg(rad)
//returns the given angle in degrees

static toRad(deg)
//returns the given angle in radians
```


