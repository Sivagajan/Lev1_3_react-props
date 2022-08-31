import logo from './logo.svg';
import './App.css';
import ListItem from './components/ListItem'

let liste = [
  {task:'Hit the gym', img:'./images/gym.png', icon:'./images/check.png'},
  {task:'Pay bills', img:'./images/bill.png', icon:'./images/check.png'}, 
  {task:'Meet George', img:'./images/dance.png', icon:'./images/no.png'},
  {task:'Buy Eggs', img:'./images/eat.png', icon:'./images/no.png'},
  {task:'Read Books',img:'./images/book.png', icon:'./images/doing.png'},
  {task:'Organize Office',img:'./images/organize.png', icon:'./images/doing.png'}
]


function App() {
  return (
    <div className="App">
    <h1>The ToDoList</h1>
      <ListItem  tasks={liste}/>
    </div>
  );
}

export default App;
