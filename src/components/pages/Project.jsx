import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Project.module.css'

function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers:{
                'Content-type':'application/json'
            }
        }).then( resp => resp.json())
        .then( (data) => {
            setProject(data)
        } )
        .catch( err => console.log(err))
    },[id])

    return (
        <div>
            <h1>Editar Projeto</h1>
            <h2>{ project.name} </h2>
        </div>
    )
}
export default Project