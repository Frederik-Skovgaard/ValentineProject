import { useState } from 'react'
import Modal from "./Modal";
import './App.css'

function App() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalContent, setModalContent] = useState(null);

   const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <>
      <div class="page">
      <div class="center-box">
        <img src="/hey.gif" class="heyGif"></img>
        <h2>Be my Valentine? 🐾💖😽</h2>
        <button class="yesBtn" onClick={() => openModal("/fast-cat-cat-excited.gif")}>Yes!</button>
        <button class="noBtn" onClick={() => openModal("/Sad Cat GIF.gif")}>{"No :("}</button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
         <img src={modalContent} />
      </Modal>
      </div>
    </div>
    </>
  )
}

export default App
