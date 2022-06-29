// zmienne/stałe

let ndx = 0;
const data = [
   { title : "pink lake",
    src : "Image/1.webp" },

  {  title : "blue lagoon",
    src : "Image/2.webp"},

   { title : "forrest pound",
    src : "Image/3.webp"}
]
// metody/funkcje

function changeHTMLinfo(ndx)
{
    const obraz = document.querySelector('.obraz')
    obraz.src = data[ndx].src;
    const h2 = document.querySelector('h2')
    h2.innerText = data[ndx].title;
}

function takeImg(ndx)
{
    changeHTMLinfo(ndx);
}

// program/eventy

const left = document.querySelector('.lefftArr')
left.onclick = function(){

if (ndx > 0){
    ndx = ndx-1;
}
else ndx = 2;
changeHTMLinfo(ndx);
}

const right = document.querySelector('.rightArr')
right.onclick = function(){
     
if (ndx < 2){
    ndx = ndx+1;
}
else ndx = 0;
changeHTMLinfo(ndx);
}
