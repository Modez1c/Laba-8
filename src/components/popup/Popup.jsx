import './Popup.scss';
import { useState } from 'react';

const colors = [
  '#fdf3b4',
  '#d1eaed',
  '#ffdadb',
  '#ffd4aa'
]


const Popup = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setOpen, saveTask } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  return (
    <div className="popup">
      <div className="popup__container">
        <button onClick={() => setOpen(false)}>Close</button>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/>

        <div>
          <button onClick={() => setOpen(false)}>Discard</button>
          <button onClick={() => {
            saveTask({ id: new Date().getTime(), name, description, color: colors[Math.floor(Math.random() * colors.length)] });
            setOpen(false);
          }}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
