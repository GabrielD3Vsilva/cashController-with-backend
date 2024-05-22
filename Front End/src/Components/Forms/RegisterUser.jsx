function RegisterUser ( ) {
    return (
        <div className="bg-blue-950 h-screen w-screen ">
            <section className="pt-10 flex flex-col gap-10">
                <h1 className="text-center text-white text-3xl font-semibold ">Registre-se</h1>

                <form className="justify-center flex">
                    <section className=" flex w-1/2 md:w-1/4 flex-col gap-2">
                        <input type="text" placeholder="Seu nome: "
                        className="py-2 text-center font-semibold"/>
                        <input type="email" placeholder="Seu email: "
                        className="py-2 text-center ont-semibold"/>      
                        <input type="password" placeholder="Crie uma senha:" 
                        className="py-2 text-center ont-semibold"/>
                        <input type="password" placeholder="Confirme sua senha:" 
                        className="py-2 text-center ont-semibold"/>
    
                        <input type="submit" value="Cadastrar" 
                        className="bg-blue-600 py-3 hover:bg-blue-900 transition-all ease-in-out font-bold hover:text-white"/>
                    </section>
                </form>
            </section>
        </div>
    )
}

export default RegisterUser;