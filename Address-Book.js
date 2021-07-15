class Addressbook{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    toString() 
    {
      return "First Name: " + this.firstName + ", Last Name: " + this.lastName
        + "\nAddress: " + this.address
        + ", City: " + this.city + ", State: "
        + this.state + "\nZip: " + this.zip
        + ", Phone Number: " + this.phoneNumber + ", Email: " + this.email;
    }
}
try{
    let addressbook=new Addressbook("Sairam","Kadakuntla","street no-12","Hyderabad","Telangana","500028",
    "91 8121212826","sairam.kadakuntla30@gmail.com");
    console.log(addressbook.toString())
}
catch(e){
    console.log(e);
}