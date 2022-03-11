import './App.css';
import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <div className="App">
      
      <div>
        <Button
          color="danger"
          onClick={toggle}
        >
          Click Me
        </Button>
        <Modal
          backdrop={false}
          centered
          fade={false}
          fullscreen="md"
          size="lg"
          isOpen={modal}
          toggle={toggle}
        >
          <ModalHeader toggle={toggle}>
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={function noRefCheck(){}}
            >
              Do Something
            </Button>
            {' '}
            <Button onClick={function noRefCheck(){}}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>

    </div>
  );
}

export default App
