//super class
 class Employee{
    constructor(empNo, name, address, contact, NIC, join_d, desig, salary){
        this.empNo = empNo;
        this.name = name;
        this.address = address;
        this.contact = contact;
        this.NIC = NIC;
        this.joinedDate = join_d;
        this.designation = desig;
        this.salary = salary;
    }
    reportsToDuty(){
        const currentTime = new Date().toLocaleTimeString();
        console.log(`${this.name} ${this.empNo} arrives at ${currentTime}`);
    }
    dutyOff(){
        const currentTime = new Date().toLocaleTimeString();
        console.log(`${this.name} ${this.empNo} leaves at ${currentTime}`);
    }
    requestLunch(lunchType) {
        console.log(`${this.name} ${this.empNo} requests ${lunchType} lunch`);
    }
    requestLeave(leaveDate, numberOfDays, reason) {
        console.log(`${this.name} ${this.empNo} requests leave for ${numberOfDays} days starting from ${leaveDate} due to ${reason}`);
    }
}

//subclasses
class PermanentEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary) {
      super(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary);
    }
  }
  
  class ContractBasedEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary, duration) {
      super(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary);
      this.duration = duration;
    }
  
    requestDutyExtension(extensionDuration) {
      console.log(`${this.name} ${this.empNo} requests duty extension for ${extensionDuration} months`);
    }
  }
  
  class TemporaryEmployee extends Employee {
    constructor(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary, duration) {
      super(employeeNumber, name, address, contactNumber, NICNumber, joinedDate, designation, salary);
      this.duration = duration;
    }
  
    requestDutyExtension(extensionDuration) {
      console.log(`${this.name} ${this.empNo} requests duty extension for ${extensionDuration} months`);
    }
  }
  
  // Usage example:
  const permanentEmployee = new PermanentEmployee("P001", "John Smith", "123 Main St", "1234567890", "ABC123", new Date(), "Manager", 5000);
  permanentEmployee.reportsToDuty();
  permanentEmployee.dutyOff();
  permanentEmployee.requestLunch("chicken");
  permanentEmployee.requestLeave("2023-07-05", 3, "personal reasons");
  
  const contractEmployee = new ContractBasedEmployee("C001", "Jane Doe", "456 Elm St", "9876543210", "XYZ456", new Date(), "Developer", 4000);
  contractEmployee.reportsToDuty();
  contractEmployee.dutyOff();
  contractEmployee.requestLunch("vegetable");
  contractEmployee.requestDutyExtension(3);
  
  const temporaryEmployee = new TemporaryEmployee("T001", "Bob Johnson", "789 Oak St", "4567891230", "DEF789", new Date(), "Assistant", 3000);
  temporaryEmployee.reportsToDuty();
  temporaryEmployee.dutyOff();
  
