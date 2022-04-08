import { parse, v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Container from '../layouts/Container'
import Loading from '../layouts/Loading'
import ProjectForm from '../project/ProjectForm'
import styles from './Project.module.css'
import Message from '../layouts/Message'
import ServiceForm from '../servicos/ServiceForm'
import ServiceCard from '../servicos/ServiceCard'

function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [services, setServices] = useState([])

    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState()
    const [type, setType] = useState()


    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(resp => resp.json())
                .then((data) => {
                    setProject(data)
                    setServices(data.services)
                })
                .catch(err => console.log(err))
        }, 100)
    }, [id])

    function createService(project) {
        setMessage('')
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
        console.log("Novo CUSTO: ", newCost)
        console.log("ORÇAMENTO: ", project.budget)

        // Verifica se o novo valor do custo é maior que o orçamento do projeto
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }

        project.cost = newCost

        // Adiciona o serviço ao projeto
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => {
                resp.json()
            })
            .then((data) => {
                setShowServiceForm(false)
                console.log(data)
            })
            .catch(err => console.log(err))

    }
    function editPost(project) {
        setMessage('')
        // Validação do orçamento
        if (project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto atualizado com sucesso')
                setType('success')

            })
            .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }


    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function removeService() {

    }

    return (
        <>

            {project.name ? (

                <div className={styles.project_details} >
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        {/* <Message type={type} msg={message} /> */}

                        <div className={styles.details_container} >
                            <h1>Projeto: {project.name} </h1>
                            <button className={styles.btn} onClick={toggleProjectForm} >
                                {!showProjectForm ? 'Editar' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info} >
                                    <p> <span>Categoria:</span> {project.category.name} </p>
                                    <p>
                                        <span>Total do orçamento:</span> R$ {project.budget}
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span> R$ {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info} >
                                    <ProjectForm handleSubmit={editPost} btnText="Editar" projectData={project} />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container} >
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm} >
                                {!showServiceForm ? 'Adicionar' : 'Fechar'}
                            </button>

                            <div className={styles.project_info} >
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText="Adicionar serviço"
                                        projectData={project}
                                    />

                                )

                                }

                            </div>

                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start" >
                            {services.length > 0 &&
                                services.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.id}
                                        handleRemove={removeService}



                                    />
                                ))
                            }

                            {services.length == 0 && <p> Não Há serviços cadastrado</p>}
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}
export default Project