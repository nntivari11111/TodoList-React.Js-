import AddTask from './components/AddTask/AddTask';
import './App.css';
import Counter from './components/Counter/Counter';
import Tasks from './components/Tasks/Tasks';
import data from "./data/tasks.json"

function App() {
  return (
    <div className="App">
      <AddTask/>
      {data.map(item => (
        
      <Tasks {...item}/>
     ))}
      <Counter/>
      <hr></hr>
     
    </div>
  );
}

export default App;

