//Book class
class Book{
    constructor(name, price, author, publisher, type){
        this.Name = name;
        this.Price = price;
        this.Author = author;
        this.Publisher = publisher;
        this.Type = type
        this.Discount_percentage = 0;
        this.price_after_discount = 0;
        
    }

    //method to calculate discount percentage
    cal_Discount_Percentage(){
        if(this.Type=="educational")
            this.Discount_percentage = 0.2;
        else if(this.Type=="novel" || this.Type=="short story")
            this.Discount_percentage = 0.15;
        else if(this.Type=="biography")
            this.Discount_percentage = 0.1;
        else
            this.Discount_percentage = 0;
    }

    //method to calculate last price
    cal_last_price(){
        this.cal_Discount_Percentage()
        this.price_after_discount = this.Price*(1-this.Discount_percentage)
    }

    //method to display details
    displayDetails(){
        this.cal_Discount_Percentage()
        this.cal_last_price();
        console.log("Book name: "+this.Name)
        console.log("Initial price: "+this.Price)
        console.log("Author: "+this.Author)
        console.log("Publisher: "+this.Publisher)
        console.log("Discount percentage: "+this.Discount_percentage*100+"%")
        console.log("Price after discount: "+this.price_after_discount)
    }
}

//create book objects
const book02 = new Book("ABC", 1000, "Samuel Jackson", "Sanasa Publishers", "educational");
const book01 = new Book("GOT", 1000, "George RR Martin", "Sarasavi Publishers", "novel");
const book03 = new Book("GHJ", 1000, "Tommy Rogers", "Penguin Publishers", "short story");
const book04 = new Book("XYZ", 1000, "Eric Hamilton", "Tiger Publishers", "biography");

//display details
book01.displayDetails();
console.log("")
book02.displayDetails();
console.log("")
book03.displayDetails();
console.log("")
book04.displayDetails();