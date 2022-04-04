import styles from './ProjectCard.module.css'

import { BsPencil, BsFillTrashFill, BsPen, BsTrashFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({ id, name, budget, category, handleRemove }) {


    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.project_card} >
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text} >
                <span className={`${styles[category.toLowerCase()]}`} ></span> {category}
            </p>

            <div className={styles.project_card_actions} >
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove} >
                    <BsTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard