import React, {useState} from 'react';
/*
import logo from '../images/logo.svg';
*/
import '../styles/App.css';


const UserList = (props) => {

    const [users, setUsers] = useState(props.users);
    const [count, setCount] = useState(0);

    const handleAddUser = () => {
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;

        console.log('firstName', firstName)
        console.log('lastName', lastName)

        const newUser = {
            firstName,
            lastName
        };

        setUsers((prevState) => {
            return [
                ...prevState,
                newUser
            ];
        });
    };

    return (
        <>
            {count}
            <button onClick={() => setCount(count + 1)}>Sumar</button>
            <button onClick={() => setCount(0)}>Resetear</button>

            <div>
                <label htmlFor='firstName'>Nombre</label>
                <input type='text' id='firstName'/>

                <label htmlFor='lastName'>Apellido</label>
                <input type='text' id='lastName'/>

                <button onClick={handleAddUser}>Agregar</button>
            </div>

            <ul>
                {
                    users.map((user, index) => {
                        return  <li key={`user-${index}`}>
                                    {user.firstName} - {user.lastName}
                                </li>
                    })
                }
            </ul>
        </>
    );
}

export default UserList ;
