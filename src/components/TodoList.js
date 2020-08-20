import React, {useState} from 'react';
import '../styles/App.css';

const TodoList = () => {

    const [tareas, setTareas] = useState([]);
    const [completadas, setCompletadas] = useState([]);

    const hanleAddTarea = () =>{
        const nuevaTarea = document.querySelector('#nuevaTarea').value;
        console.log('Nueva tarea', {nuevaTarea})

        setTareas(prevState => {
            return[
                ...prevState,
                nuevaTarea
            ]
        })
    }

    const handleDelTarea = (index) =>{
        setTareas((prevState) => {
            return prevState.filter((tarea, i) => i !==index);
        });
    };


    const handleCompTarea =(index) =>{ //Extraido del doc del inge XD
        setCompletadas((prevState) => [
            ...prevState,
            tareas[index]
        ])

        handleDelTarea(index)
    }

    return (
        <>
            <div>
                <label htmlFor="nuevaTarea">Nueva Tarea -> </label>
                <input type="text" id='nuevaTarea'/>
                <button onClick={hanleAddTarea}>Ingresar</button>
            </div>

            <ul>
                {
                    tareas.map(
                        (tareas, index) => {
                            return (
                                <li key={`tarea-${index}`}>{tareas}
                                    <button onClick={() => handleDelTarea(index)}>Eliminar</button>
                                    <button onClick={() => handleCompTarea(index)}>Completada</button>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            <ul>
                {
                    completadas.map(
                        (completadas, index) => {
                            return (
                                <li key={`tarea-${index}`}>{completadas}</li>
                            )
                        }
                    )
                }
            </ul>

        </>
    );
}

export default TodoList;