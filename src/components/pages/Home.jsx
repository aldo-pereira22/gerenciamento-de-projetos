import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home() {
    return (
            <section className={styles.home_container} >
                <h1>Sua plataforma de Gerenciamento de Projetos</h1>
                <p> Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/newprojects" text="Criar Projeto" />
                <img src={savings} alt="Costs" />

            </section>
    
        )
}

export default Home