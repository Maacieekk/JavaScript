console.log("tekst")
const pi = 3.14;
let y = 2;
let x;
console.log("liczba Pi="+pi+" pomnóż razy : "+y)
x = pi*y;
console.log("wynik  "+x)
console.log(x+""+pi)
//objekt



const person ={
    name: "john",
    age: 30,
    
}

//tablica array[]
const people = ["john", "Doe", "Jane"]
console.log(person.name)
console.log(people[1])

// funkcja 

function say( name ){

   console.log("hello   "+name) 
}
say(person.name)

function add(x, y){
    return x + y
}
 console.log( add(2,5))
// pobieranie elementow z html

 console.log(document.URL)
 const dom = document.querySelector('.klasa')
 dom.innerHTML = "hello from JS"
 console.log(dom)
 // js do html
 const newdom = document.createElement("div")
 newdom.innerHTML = "jakiś tekst"
 console.log(newdom)

dom.append(newdom)
console.clear()
//iwenty :)
newdom.onclick = function(){
    console.log("click")
}

