# todo-app

---

### Importation outside React :

`npm install uuid`

`import { v4 as uuidv4 } from 'uuid';`

to define `id: uuidv4()`


***other importation from react :***

useState & useEffect

---

### Interesting skills :

```
localstorage getItem &

setItem with useEffect &

JSON.parse()/JSON.stringify()

by using LOCAL_STORAGE_KEY with uuid
```

`map() & filter() methods`

`how states are used in all files & useEffect`

---

## App.js

Main file to manage localstorage &

useState([])

`map() & filter() methods` with setTodos()

---------------------------------------

App.js ---> TodoForm.js/
   |/
   -------> TodoList.js ---> Todo.js  

---------------------------------------

## TodoForm.js

useState({}) with stadard definition for objects

input type text

button to sumit input type text

---

## TodoList.js

map() to define todo (todo.id, todo.task) for Todo.js

---

## Todo.js

definition of "todo.id" to reuse in "App.js"
with "delete" button and with checked of checkbox.

input type checkbox 

button delete one element from the list.
