let capital = (value) => {
    let str= value.toLowerCase().split(' ');
    let result =str.map((val)=>{
          return  val.charAt(0).toUpperCase()+val.slice(1);
    })
    return result.join(' ')
}
console.log(capital("MY NAME IS HEROO"));

let i=10;
let j = Math.sqrt(i);
console.log(j);