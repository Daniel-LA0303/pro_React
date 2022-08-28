import React, {useState} from 'react';
import Modal from './components/Modal';
import './App.css'

function App() {

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);


  return (
    <div className="App">
      <button
        onClick={() => Toggle()}
      >
        Modal
      </button>
      <Modal 
        show={modal}
        close={Toggle}
        title="dynamic"
      >
        This is a modal
      </Modal>

    </div>
  )
}

export default App
