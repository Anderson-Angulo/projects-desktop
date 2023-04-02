<template>
  <nav class="navbar">
    <div class="container">
      <img class="brand" src="./assets/logo.svg" width="50" alt="logo">
      <div>TODO LIST APP</div>
    </div>
 
  </nav>
  <main>
    <section class="container">
      <form class="add-todo-form">
        <input v-model="todoTitle" type="text" placeholder="Todo Title">
        <div>
          <button v-on:click="addTodo">Add Todo</button>
        </div>
      </form>
    </section>
    <section class="container">
      <ul>
        <li v-for="todo in todos" class="item">
          {{ todo }}
          <div class="actions">
            <button @click="removeTodo(todo)" class="item-button delete">&times;</button>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script >
  export default {
    data(){
      return {
        todoTitle:"",
        todos:[]
      }
    },
    methods:{
      addTodo(e){
        e.preventDefault()
        this.todos.push(this.todoTitle)
      },
      removeTodo(todo){
        this.todos=this.todos.filter(t=>t !== todo )
      }
    }
  }
</script>

<style scoped>

   section{
    padding: 2rem 0;
   }
   ul,li,ol{
    padding: 0;
    list-style: none;
   }
   button{
    cursor: pointer;
    border: none;
    outline: none;
   }
   ul{
    display:flex;
    flex-direction: column;
    gap:1rem;
   }
   .item{
      background: var(--accent-color);
      width: 40vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding:.5rem 1rem;
      border-radius: .5rem;
      font-size: 1.125rem;
   }
   .item-button{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color:var(--text-color);
    font-size: 1.25rem;
    transition:background .1s
   }

   .item-button:hover{
    background: #f15360;
   }

   .delete{
    background: var(--danger-color);;
   }
  .navbar{
    background:var(--navbar-color);
    margin-bottom: 30px;
    padding: .5rem 0;
  }

  .navbar > .container{
    display: flex;
    align-items: center;
    height: 4rem;    
  }

  .brand{
    font-size: 2rem;
  }

  .add-todo-form{
    display: flex;
    justify-content: space-between;
    width:35vw;
  }

  .add-todo-form input{
    flex:1;
    padding:1rem;
    border:none;
    border-radius: .25rem 0 0 .25rem;
  }

  .add-todo-form button{
    background: var(--accent-color);
    color:var(--text-color);
    padding:1rem;
    border-radius: 0 .25rem  .25rem 0; 
    transition: background .1s;
  }
  .add-todo-form button:hover{
    background: #33e293;
  }
</style>
