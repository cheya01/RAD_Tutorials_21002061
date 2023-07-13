// Student class
class Student {
    constructor(index, name, DOB, address, con_number, email) {
      let Index_number = index;
      let Name = name;
      let date_of_birth = DOB;
      let Address = address;
      let contact_number = con_number;
      let Email = email;
    }
    //method to display details
    showDetails() {
      console.log(`Index Number: ${this.Index_number}`);
      console.log(`Name: ${this.Name}`);
      console.log(`Date of Birth: ${this.date_of_birth}`);
      console.log(`Address: ${this.Address}`);
      console.log(`Contact Number: ${this.contact_number}`);
      console.log(`Email: ${this.Email}`);
    }
    //method to find group number
    setGroupNumber() {
      this.GroupNo = 0;
      if (this.Index_number % 4 === 0)
        this.GroupNo = 1;
      else if (this.Index_number % 4 === 1)
        this.GroupNo = 2;
      else if (this.Index_number % 4 === 2)
        this.GroupNo = 3;
      else if (this.Index_number % 4 === 3)
        this.GroupNo = 4;
    }
    //method to display group number
    showGroupNo() {
      console.log(`Index Number: ${this.Index_number}`);
      console.log(`Name: ${this.Name}`);
      console.log(`Group Number: ${this.GroupNo}`);
    }
  }
  
  // Creating student objects
  const student01 = new Student(1234, "Tommy Rogers", "12.03.2001", "100A, School Rd, Colombo", "0711234567", "TR@gmail.com");
  student01.showDetails();
  student01.setGroupNumber();
  student01.showGroupNo();
   console.log(student01.Name);