import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import "./App.css";

function App() {
  // const [value, setValue] = useState('');

  // const getAsyncRandom = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const number = Math.floor(Math.random() * 10 + 1);
  //       if (number % 2 === 0) {
  //         resolve(number);
  //       } else {
  //         reject(number);
  //       }
  //     }, 2000);
  //     setValue('>>> Please wait >>>');
  //   });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     let value = await getAsyncRandom();
  //     setValue(value + ' : Even number');
  //   } catch (err) {
  //     setValue(err + ' : Odd number');
  //   }
  // };

  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <button className="button" onClick={() => handleSubmit()}>
          Click Me
        </button>
        {value}
      </header> */}

      <>
        {values.map((v, idx) => (
          <Button key={idx} className="me-2" onClick={() => handleShow(v)}>
            Full screen
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        ))}
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal body content</Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default App;
