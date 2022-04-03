import { useHistory } from './NewProject.modulecss'
import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {

    const history = useHistory()

    function createPost(project) {
        //Inicialização de serviços
        project.cost = 0,
        project.service = []

        fetch("http://localhost:5000/projects",{
            method:"POST",
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(project)
        })
        .then( (resp) => resp.json())
        .then( (data) => {
            console.log(data)
            // redirect
        } )
        .catch( err => console.log(err))
     }
    return (
        <div className={styles.newproject_container} >
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <p>Formulário</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>

    )
}

export default NewProject