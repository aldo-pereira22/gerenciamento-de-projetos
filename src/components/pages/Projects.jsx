import { useLocation } from "react-router-dom";
import Message from "../layouts/Message";
import styles from './Projects.module.css'
import { Link } from "react-router-dom"
import Container from "../layouts/Container";
import LinkButton from "../layouts/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../layouts/Loading";


function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoadging, setRemoveLoading] = useState(true)

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(false)
                })
                .catch(err => console.log(err))
    }, [])
    return (

        <div className={styles.project_container}>
            <div className={styles.title_container} >
                <h1>Meus Projetos</h1>
                <LinkButton to="/newprojects" text="Criar Projeto" />

            </div>
            <Container custonClass="start" >
                <br />
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    ))
                }
            {message && <Message type="success" msg={message} />}

            </Container>
        </div>

    )

}

export default Projects