/*1 guardar lista de tareas en el localStorage
2 obener una lista de tareas en una variabe que sea array
3- */


const createtodo = document.getElementById('createtodo');
const addTodo = document.getElementById('addTodo');

const todolist = [];

  const donetodo = () => {
    const valueImputTodo = createtodo.value;
    todolist.push(valueImputTodo)
    console.log(todolist);

    const valueInLocalStorage = JSON.stringify(valueImputTodo);
    console.log(valueInLocalStorage);

    window.localStorage.setItem('myListTodo', valueInLocalStorage);
  }

    const getListTodo = window.localStorage.getItem('myListTodo');
    const originalValue = JSON.parse(getListTodo);
    console.log(originalValue);
    

  const listTodoMap = originalValue.map((values) =>{
     Textlis


  })


  addTodo.addEventListener('click',donetodo);
