

let names = ['vasea', 'pechea'];
names.push('gheorghe')

let someArr: (string | number)[] = []
someArr.push('hello', 2)

let someObj: object;
someObj = { name: "Vitalie", age: 35, sex: "male" }

let secondObj: {
  name: string,
  age: number,
  sexy: boolean
}

secondObj = { name: 'Olea', age: 30, sexy: true }

let age: any = 35;
age = 22;
age = { suca: 'driuca' }


let mixed: any[] = [];//Don't forget to declare the array 
mixed.push(2);
mixed.push(true);

let ninja: { name: any, age: any }
ninja = { name: 24, age: 'Vasea' }