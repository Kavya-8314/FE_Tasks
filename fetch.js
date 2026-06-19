const URL="https://dummyjson.com/quotes"
fetch(URL).then((res)=>res.json()).then((data)=>{
      for(i=0;i<data.quotes.length;i++){
        console.log(data.quotes[i])
      }
   
    }
    )

const URL1="https://dummyjson.com/todos"
fetch(URL1).then(res=>res.json()).then((data)=>{
    for(i=0;i<data.todos.length;i++){
        console.log(data.todos[i])
    }
    
})

const URL2="https://jsonplaceholder.typicode.com/photos"
fetch(URL2).then((res)=>res.json()).then(data=>{
 for(i=0;i<data.length;i++){
    console.log(data[i].title)
 }
})

const URL3="https://pokeapi.co/api/v2/pokemon/ditto"
fetch(URL3).then(res=>res.json()).then((data)=>{
    for(i=0;i<data.abilities.length;i++){
        console.log(data.abilities[i])
    }
})