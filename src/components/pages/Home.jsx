import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home() {
    return (
            <section className={styles.home_container} >
                <h1> Bem-Vindo ao <span>Manager</span> </h1>
                <p> Sua plataforma de gerenciamento de Projetos!</p>
                <h5>Comece a gerenciar os seus projetos agora mesmo!</h5> <br />    
                <LinkButton to="/newprojects" text="Criar Projeto" />
                <img src={savings} alt="Costs" />

            </section>
    
        )
}

export default Home