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
    get firstName(){
        return this._firstName
    }
    set firstName(firstName){
        let firstRegex=RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
        if(firstRegex.test(firstName))
        this._firstName=firstName;
        else throw "Invalid Firstname"
    }
    get lastName(){
        return this._lastName
    }
    set lastName(lastName){
        let lastregex=RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
        if(lastregex.test(lastName))
        this._lastName=lastName
        else throw "invalid last name"
    }
    get address(){
        return this._address
    }
    set address(address){
        let addressregex=RegExp("^[A-Za-z0-9]{4,}$")
        if(addressregex.test(address))
        this._address=address;
        else throw "invalid address"
    }
    get city(){
        return this._city
    }
    set city(city){
        let cityregex=RegExp("^[A-Za-z0-9]{4,}$")
        if(cityregex.test(city))
        this._city=city;
        else throw "invalid city"
    }
    get state(){
        return this._state
    }
    set state(state){
        let stateregex=RegExp("^[A-Za-z0-9]{4,}$")
        if(stateregex.test(state))
        this._state=state;
        else throw "invalid state"
    }
    get phoneNumber(){
        return this._phoneNumber
    }
    set phoneNumber(phoneNumber){
        let phoneregex=RegExp("^[0-9]{2}[ ]{1}[0-9]{10}$")
        if(phoneregex.test(phoneNumber))
        this._phoneNumber=phoneNumber;
        else throw "invalid number"
    }
    get email(){
        return this._email
    }
    set email(email){
        let emailregex=RegExp("^[A-Za-z0-9]{4,}[.]{1}[A-Za-z0-9]{4,}[@]{1}[A-Za-z]{4,}[.]{1}[A-Za-z]{2,}$")
        if(emailregex.test(email))
        this._email=email;
        else throw "invalid email"
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
    let addressbook=new Addressbook("Sairam","Kadakuntla","nagar","Hyderabad","Telangana","500028",
    "91 8121212826","sairam.kadakuntla30@gmail.com");
    console.log(addressbook.toString())
}
catch(e){
    console.log(e);
}