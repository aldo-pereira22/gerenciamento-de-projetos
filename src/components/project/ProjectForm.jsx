function ProjectForm() {
    return (
        <form action="">

            <div>

                <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>

                <input type="number" placeholder="Insira o orçamento total" />
            </div>

            <div>

                <select name="categor_id">
                    <option disabled value="">Selecione a categoria</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar Projeto" />
            </div>

        </form>
    )
}

export default ProjectForm