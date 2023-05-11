import React, { useState } from 'react';
import Card from './Components/Card/Card';
import User from './Components/User/User';
import Button from './Components/Button/Button';
import DeleteUser from './Components/DeleteUser/DeleteUser';
import Modal from './Components/Modal/Modal';
import Form from './Components/Form/Form';
import './App.css';

let arrStorage = []
if (JSON.parse(localStorage.getItem('korisnici')) !== null) {
  arrStorage = JSON.parse(localStorage.getItem('korisnici'))
}

function App() {

  const [displayModal, setDisplayModal] = useState(false)
  const [allUsers, setAllUsers] = useState(arrStorage)



  const showModal = () => {
    setDisplayModal(true)
  }
  const closeModal = () => {
    setDisplayModal(false)
  }

  const addUser = (user) => {
    setAllUsers(prevState => {
      return [...prevState, user]
    })
    arrStorage.push(user)
    localStorage.setItem('korisnici', JSON.stringify(arrStorage))
    closeModal()
  }

  const handleDelete = () => {
    setAllUsers(prevState => {
      return prevState.filter(user => user.marked === false)
    })
    localStorage.setItem('korisnici', JSON.stringify(arrStorage.filter(user => user.marked === false)))
  }

  const handleMarked = (event) => {
    allUsers.find(user => event.target.parentElement.children[2].textContent === user.mail).marked = true
  }

  return (
    <React.Fragment>

      {displayModal && <div className='pozadinaModala'>
        <Modal title={'Add user'} >
          <Form onAddUser={addUser} onCloseModal={closeModal} />
        </Modal>
      </div>}

      <Card boja={'crvena'}>
        <Button onShowModal={showModal} />
        <DeleteUser onHandleDelete={handleDelete} />
      </Card>
      <Card boja={'dark'}>
        {allUsers.map(user => <User key={Math.floor(Math.random() * 100)} ime={user.firstName}
          prezime={user.secondName} email={user.mail} godine={user.age} zanimanje={user.profesion} onHandleMarked={handleMarked} />)}
      </Card>
    </React.Fragment>
  );
}

export default App;
