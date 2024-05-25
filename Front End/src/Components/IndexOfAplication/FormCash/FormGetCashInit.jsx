function FormCashInit ({setIsOpenForm}) {
    const closeTheForm = (e) => {
        e.preventDefault
        setIsOpenForm(false);
    }

    return (
        <div>
            <form className="flex flex-col gap-2" onSubmit={(e)=>closeTheForm(e)}>
                <h3 className="">Adicione a verba inicial: </h3>
                <input type="number" placeholder="valor em reais: " 
                className="py-1"/>

                <input type="submit" value="Adicionar verba" className="text-center bg-blue-600 py-1 hover:bg-blue-900 transition-all ease-in-out font-bold hover:text-white"/>
            </form>
        </div>
    )
}

export default FormCashInit;