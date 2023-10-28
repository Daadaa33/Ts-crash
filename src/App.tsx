const id : number = 4
let names : string = "daadaa"
let isOpen : boolean = false
let url : any = "http://localhost/5173"
let person : string[] = ["John" , "borne"]
let numeric : number[] = [1, 2, 3]

// tuples
let tuples : [string, number ] =["dada" , 34]
// Tupless arrays
let persons: [string, number][] = [
  ["John", 32],
  ["dada", 34],
];


// union 
let pId : string | number = 3

// enum
enum Color {Red, Green, Blue}
let color: Color = Color.Green;

enum p1 {
  put ,
  down ,
  left ,
  right,
}
console.log(p1.down)


// Userect
type User = {
  name: string;
  age: number;
  isTrue: boolean;
};

const employee: User = {
  name: "dada",
  age: 21,
  isTrue: false,
};


// type assertion
let cid : any = 2
let employeeId = cid as number
employeeId = 23

// fuction
const add: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

// void
function logMessage(message: string): void {
  console.log(message);
}








const App = () => {
 
  return (
    <div>App</div>
  )
}

export default App