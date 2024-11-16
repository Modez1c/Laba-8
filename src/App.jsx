import { useState } from 'react';
import './App.scss';
import crossIcon from './assets/icons/cross.svg';
import Popup from './components/popup/Popup.jsx';

function App() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const saveTask = (task) => {
    setTasks((prev) => [...prev, task])
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id))
  }

  const completeTask = (value, id) => {
    setTasks((prev) => prev.map((item) => (
      item.id === id ? {...item, completed: value} : item
    )))
  }

  return (
    <ul className="main">
      {
        tasks.map((item) => (
          <li className="main__card" key={item.id} style={{ backgroundColor: item.color }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h2 style={{ textDecoration: `${item.completed ? 'line-through' : ''}` }}>{item.name}</h2>

              <div style={{ display: 'flex', gap: '5px', alignItems: 'center'}}>
                <input type="checkbox" onChange={(event) => {
                  completeTask(event.target.checked, item.id)
                }} />
                <button onClick={() => deleteTask(item.id)}>delete</button>
              </div>
            </div>
            <p style={{ textDecoration: `${item.completed ? 'line-through' : ''}` }}>{item.description}</p>
          </li>
        ))
      }
      <li className="main__create-task-container" onClick={() => setOpen(true)}>
        <img src={crossIcon || ''} alt="crossIcon"/>
      </li>
      {
        open && (
          <Popup setOpen={setOpen} saveTask={saveTask} />
        )
      }
    </ul>
  );
}

export default App;
