let button = document.getElementById('add');
let input = document.getElementById('input');
let todolist = document.getElementById('todolist');

let todos=[];
window.onload= function(){
 todos = JSON.parse(localStorage.getItem('todos')) || [];
 todos.forEach(function(todo)
 {
     addtodo (todo);
 }
 )
};

button.addEventListener('click', function(){
   todos.push(input.value);
   addtodo(input.value);
   localStorage.setItem('todos', JSON.stringify(todos));
   input.value = '';
})

function addtodo (todo){
    let para = document.createElement('p');
    para.style.color = 'white';
    para.innerText= todo;
    todolist.appendChild(para);
  
    para.addEventListener('click', function(){
    para.style.textDecoration = 'line-through'
    remove(todo); 
    })
para.addEventListener('dblclick', function(){
    todolist.removeChild(para);
    remove(todo);
})
}

function remove(todo){
    let index = todos.indexOf(todo);
    if(index > -1)
    {
    todos.splice(index, 1);
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}