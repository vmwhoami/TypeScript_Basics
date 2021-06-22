class Person {
  readonly name: string;
  surname: string;
  public phone: number;
  private gender: string;
  //All are public by default
  constructor(a: string, b: string, c: number, d: string) {
    this.name = a;
    this.surname = b;
    this.phone = c;
    this.gender = d;
  }

  presentation = () => {
    return `This is ${this.name} with the 
    family name of ${this.surname} ${this.gender === 'male' ? 'he' : 'she'} is a ${this.gender} 
    and has the number:  ${this.phone} `
  }

}

const jim = new Person("Jim", "Kwik", 69442476, "male");
const bob = new Person("Bob", "Dilan", 694424345, "male");
const jane = new Person("Jane", "Doe", 694434345, "female");
const persons: Person[] = [];
persons.push(jim);
persons.push(bob);
persons.push(jane);

persons.forEach(person => {
  console.log(person.name);
})

