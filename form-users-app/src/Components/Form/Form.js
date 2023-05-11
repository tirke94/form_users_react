import React from 'react'
import './Form.css'

const initialUser = {
    firstName: '',
    secondName: '',
    mail: '',
    age: '',
    profesion: '',
    marked: false
}

const Form = ({ onAddUser, onCloseModal }) => {
    const [user, setUser] = React.useState(initialUser)

    const handleUser = (event) => {

        setUser((prevState) => {
            if (event.target.id === 'firstName') {
                return { ...prevState, firstName: event.target.value }
            }
            if (event.target.id === 'secondName') {
                return { ...prevState, secondName: event.target.value }
            }
            if (event.target.id === 'mail') {
                return { ...prevState, mail: event.target.value }
            }
            if (event.target.id === 'age') {
                return { ...prevState, age: event.target.value }
            }
            if (event.target.id === 'zanimanje') {
                return { ...prevState, profesion: event.target.value }
            }
        })
    }

    const resetform = () => {
        setUser(initialUser)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (user.firstName === '' || user.secondName === ''
            || user.mail === '' || user.age === ''
            || user.profesion === '') {
            return
        }
        onAddUser(user)
        resetform()
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <label className='label' htmlFor="firstName">Ime: </label>
                <input onChange={handleUser} value={user.firstName} type="text" name='name' id='firstName' placeholder='Enter your name' required />
            </div>
            <div>
                <label className='label' htmlFor="secondName" >Prezime: </label>
                <input onChange={handleUser} value={user.secondName} type="text" name='surname' id='secondName' placeholder='Enter your surname' required />
            </div>
            <div>
                <label className='label' htmlFor="mail" >Mail: </label>
                <input onChange={handleUser} value={user.mail} type="email" name='mail' id='mail' placeholder='Enter your mail' required />
            </div>
            <div>
                <label className='label' htmlFor="age" >Age: </label>
                <input onChange={handleUser} value={user.age} type="number" name='age' id='age' placeholder='Enter your age' required />
            </div>
            <div>
                <label className='label' htmlFor="zanimanje" >Zanimanje: </label>
                <input onChange={handleUser} value={user.profesion} type="text" name='zanimanje' id='zanimanje' placeholder='Enter your profesion' required />
            </div>
            <div>
                <button onClick={onCloseModal} id='btnCancel'>Cancel</button>
                <input type="submit" id='btnAdd' value='Add' />
            </div>
        </form>
    )
}

export default Form