class Person {
  name: string;
  surname: string;
  phone: number;
  gender: string;
  //All are public by default
  constructor(a: string, b: string, c: number, d: string) {
    this.name = a;
    this.surname = b;
    this.phone = c;
    this.gender = d;
  }

  presentation = () => {
    return `${this.name} with the 
    family name of ${this.surname} is a ${this.gender} 
    and has the number:  ${this.phone} `
  }

}

const jim = new Person("Jim", "Kwik", 69442476, "male");
const bob = new Person("Bob", "Dilan", 694424345, "male");

const persons: Person[] = [];
persons.push(jim);
persons.push(bob);


