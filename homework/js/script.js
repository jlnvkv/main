class AbstractHuman {
    constructor( height , weight , name , date , gender , invalid ){
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.invalid = invalid;
    }
    sayHi(){
        console.log (`Привет, меня зовут ${this.name} `)
    }
    set setNewName (name) {
        this.name = name;
    }
    set setNewInvalid (invalid){
        this.invalid = invalid;
    }
    get getInfo(){
        const information = {
            height: this.height,
            weight: this.weight,
            name: this.name,
            date: this.date,
            gender: this.gender,
            invalid: this.invalid
        };
        console.log(information);
    }
}
class FrontendDeveloper extends AbstractHuman {
    constructor ( height , weight , name , date , gender , invalid , carierStart ,previousСompanies){
        super(height , weight , name , date , gender , invalid);

        this.carierStart = carierStart;
        this.previousСompanies = previousСompanies;
    }
    sayHi(){
        console.log (`Привет, меня зовут ${this.name}, я Фронтенд разработчик. Работаю с ${this.carierstart} `)
    }
    getExpirienceInfo(companyName){
        const company = this.previousСompanies.find((item) => item.companyName === companyName)
        return company
    }
addCompany(company){
    this.previousСompanies.push(company)
}

}






class Builder extends AbstractHuman {
    constructor ( height , weight , name , date , gender , invalid , location , tools , speed ){
        super(height , weight , name , date , gender , invalid);

        this.location = location;
        this.tools = tools;
        this.speed = speed;
    }
    
}