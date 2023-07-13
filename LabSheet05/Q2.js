// Abstract superclass
class Solid {
    calculateVolume() {
      throw new Error("Method 'calculateVolume()' must be implemented.");
    }
  
    calculateSurfaceArea() {
      throw new Error("Method 'calculateSurfaceArea()' must be implemented.");
    }
  }
  
  // Subclass - Cube
  class Cube extends Solid {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    calculateVolume() {
      return Math.pow(this.sideLength, 3);
    }
  
    calculateSurfaceArea() {
      return 6 * Math.pow(this.sideLength, 2);
    }
  }

  // Subclass - Cuboid
  class Cuboid extends Solid {
    constructor(l,w,h) {
      super();
      this.length = l;
      this.width = w;
      this.height = h;
    }
  
    calculateVolume() {
      return this.length*this.width*this.height;
    }
  
    calculateSurfaceArea() {
      return ((this.length*this.width*2)+(this.width*this.height*2)+(this.length*this.height*2));
    }
  }

  // Subclass - Cylinder
  class Cylinder extends Solid {
    constructor(r,h) {
      super();
      this.radius = r;
      this.height = h;
    }
  
    calculateVolume() {
      return Math.PI*this.radius**2*this.height;
    }
  
    calculateSurfaceArea() {
      return (Math.PI*this.radius**2*2 + 2*Math.PI*this.radius*this.height);
    }
  }
  
  // Subclass - Sphere
  class Sphere extends Solid {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateVolume() {
      return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
  
    calculateSurfaceArea() {
      return 4 * Math.PI * Math.pow(this.radius, 2);
    }
  }

  // Subclass - Cone
  class Cone extends Solid {
    constructor(r,h) {
      super();
      this.radius = r;
      this.height = h;
    }
  
    calculateVolume() {
      return (Math.PI*this.radius**2*this.height)/3;
    }
  
    calculateSurfaceArea() {
        const slantHeight = Math.sqrt(this.radius**2 + this.height**2);
        const baseArea = Math.PI * this.radius**2;
        const lateralArea = Math.PI * this.radius * slantHeight;
        const surfaceArea = baseArea + lateralArea;
        return surfaceArea;
    }
  }
  
  // Create instances and calculate volume/surface area
  const cube = new Cube(5);
  console.log("cube Volume:", cube.calculateVolume());
  console.log("cube Surface Area:", cube.calculateSurfaceArea());

  const cuboid = new Cuboid(1,2,3);
  console.log("cuboid Volume:", cuboid.calculateVolume());
  console.log("cuboid Surface Area:", cuboid.calculateSurfaceArea());

  const cylinder = new Cylinder(2,3);
  console.log("cylinder Volume:", cylinder.calculateVolume());
  console.log("cylinder Surface Area:", cylinder.calculateSurfaceArea());
  
  const sphere = new Sphere(3);
  console.log("sphere Volume:", sphere.calculateVolume());
  console.log("sphere Surface Area:", sphere.calculateSurfaceArea());

  const cone = new Cone(4,5);
  console.log("cone Volume:", cone.calculateVolume());
  console.log("cone Surface Area:", cone.calculateSurfaceArea());

  
  