let person = {
    name: "Gbenga Lasisi",
    color: "black",
    age: 54,
    height: "6ft",
    isMarried: true,
    nameOfKids: ["fifehan", 'gboyega'],
};
// console.log(typeof obj)
//create a country obj listing the name, year of independence, president, continent, yer of existence and 2 football club.
let country ={
    name: "Nigeria",
    yearOfIndepence: 1960,
    president: "Corrupt Asiwaju",
    Continent: "Africa",
    yearOfExistence: "65 years",
    footballClub: ["sunshine", `Eyimba`],
}
console.log(country.president)
console.log(country['president'])
console.log(country.footballClub[1])
yearOfExistencearray = [country.yearOfExistence]
console.log(yearOfExistencearray)
yearOfExistencearray = country.yearOfExistence.split(" ");
console.log(yearOfExistencearray)

country.name = "tobi";
country.state = "ondo";
country.localgovernment = "OWO";
console.log(country)
country.footballClub.push("manchester");
delete country.Continent;
console.log(country);
//creation, update, insert, delete

//this
const club = {
    name: "arsenal",
    location: "North London",
    coachName: "Mikel Arteta",
    captain: "Martin Odeegard",
    year: 1897,
    details: function() {
        console.log(`The club name is ${this.name} founded in year ${this.year} annd coached by ${this.coachName}`)
    }
}
club.name = 'chelsea'

console.log(club.details());

const car = {
    name: "Jaguar",
    model: "xf",
    year: 2010,
    countryofproduction: "England",
    details: function() {
      console.log(`The car name is ${this.name} with model ${this.model},  manufactured in the year ${this.year}`)
    }

}
console.log(car.details());

console.log(Object.values(car))
console.log(Object.keys(car))
console.log(Object.entries(car))

//object loop
for (let i in car) {
    console.log(i);
}

Object.freeze(car);
Object.seal(car)
car.year = 2025

console.log(car);

const newObj = Object.assign(country, car)

console.log(newObj);
// converts object to string
console.log(JSON.stringify(car));