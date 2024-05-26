function FormGetExpense ({email}) {
    return (
        <form className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-center mb-3">Adicione nova despeza </h4>
                <input type="text" placeholder="Título da despeza"
                className="py-1 text-center border-b-2 w-auto  border-blue-950"/>

                <input type="number" placeholder="Custo em reais: " 
                className="py-1 text-center border-b-2 border-blue-950"
                />

                <input type="submit" value="Adicionar despeza" className="text-center bg-blue-600 py-1 hover:bg-blue-900 transition-all ease-in-out font-bold text-white"/>
        </form>
    )
}

export default FormGetExpense;