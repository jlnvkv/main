class AbstractHuman {
    constructor( height , weight , name , date , gender , invalid ){
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.invalid = invalid;
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