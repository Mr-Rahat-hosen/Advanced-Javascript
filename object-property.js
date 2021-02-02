const student = [
    {id: 21, name:"maruf"},
    {id: 41, name:"faruk"},
    {id: 51, name:"jonn"},
    {id: 61, name:"don"},
]
const names = student.map(y => y.name);
const id = student.map(z => z.id);
const bigger = student.filter( s => s.id> 40);
const biggerOne = student.find(s => s.id>40);
console.log(biggerOne);