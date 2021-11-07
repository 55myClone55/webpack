import './style.css'
//
let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
headers.append('Access-Control-Allow-Credentials', 'true');

headers.append('GET', 'POST', 'OPTIONS');


let form = document.getElementById('form')



form.addEventListener('submit',function(e){
    e.preventDefault()

       
    
    
    
    let name = document.querySelector('.name').value
    let text = document.getElementById('text').value
   console.log(name)
   
    
   if(name === '' || text === ''){
    alert('Заполните поля')
}else{
    alert('Oтправлено')
}
    fetch("https://jordan.ashton.fashion/api/goods/30/comments",{
    method: 'POST', 
    mode: 'cors', // no-cors, *cors, same-origin
     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
   credentials: 'same-origin',
   referrerPolicy: 'no-referrer',// *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify({
        name:name,
    text:text
    }),
    redirect: 'follow',
    headers: headers
  })
 .then(function(response){
     return response.json()
    })
 .then(function(data) {
     console.log(data)
        
})

})

let temp = document.querySelector('.temp')
        async function fromer(){
      let  response = await fetch('https://jordan.ashton.fashion/api/goods/30/comments')
      let content = await response.json()
      content = content.data
      //console.log(content)
      let key
for( key in content){

temp.innerHTML += `<div>
<h3 >${content[key].name}</h3>
<h5 alt='text'>${content[key].text}</h5>
</div>
`
}
    }

let table = document.querySelector('.flex')
let pagination = document.querySelector('#pagination')
let notesOnPage = 2

let button = document.querySelector('.one')
button.addEventListener('click',fro)
async function fro(){
    let  response = await fetch('https://jordan.ashton.fashion/api/goods/30/comments')
    let content = await response.json()
    content = content.data
   
let countOfItems = Math.ceil(content.length/notesOnPage)

let showPage = (function() {
    
    let active;

    return function(item){
    
    if(active){
        active.classList.remove('active')
    }
    active = item
    
    item.classList.add('active');
    
            let pageNum = +item.innerHTML;
            let start = (pageNum - 1) * notesOnPage;
            let end = start + notesOnPage;
            let notes = content.slice(start,end)
           // console.log(notes)
           table.innerHTML = ' '
    for(let note of notes){
    let tr = document.createElement('tr')
    table.appendChild(tr)
    
    let td
    td = document.createElement('td')
    td.innerHTML = note.name;
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = note.text;
    tr.appendChild(td)
           }
    }
}())

let items = []
for(let i = 1; i <= countOfItems; i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li)
    items.push(li)
}

showPage(items[0])

for(let item of items){
    item.addEventListener('click', function(){
        showPage(this)
    })
}
let Bod = document.querySelector('.root')
 let logos = document.createElement('button')
 logos.classList.add('two');
 logos.innerHTML = 'Конец'
    Bod.appendChild(logos)

    logos.addEventListener('click', function(){
        document.querySelector('.one').style.display = 'none'
           })
    
  }
 
