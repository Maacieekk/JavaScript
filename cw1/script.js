let ndx = 0;
const data = [
   { title : "pink lake",
    src : "Image/1.webp" },

  {  title : "blue lagoon",
    src : "Image/2.webp"},

   { title : "forrest pound",
    src : "Image/3.webp"}
]

function changeHTMLinfo(ndx)
{
    console.log(data[ndx].title,data[ndx].src);
    const obraz = document.querySelector('.obraz')
    obraz.src = data[ndx].src;
    const h2 = document.querySelector('h2')
    h2.innerText = data[ndx].title;
}

// const zdjęcia = document.createElement("div")
//  newdom.innerHTML = "jakiś tekst"
//  console.log(newdom)
const left = document.querySelector('.lefftArr')
left.onclick = function(){
    console.log(ndx)
if (ndx > 0)
{
ndx = ndx-1;
}
else ndx = 2;
changeHTMLinfo(ndx);
console.log(ndx)
}

const right = document.querySelector('.rightArr')
right.onclick = function(){
    console.log(ndx)  
if (ndx < 2){
    ndx = ndx+1;
}
else ndx = 0;
changeHTMLinfo(ndx);
console.log(ndx)
}