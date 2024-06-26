import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function RegisterUser ( ) {
    const [nameUser, setNameUser] = useState( );
    const [email, setEmail] = useState( );
    const [password, setPassword] = useState( );
    const [confirmPassword, setConfirmPassword] = useState( );
    const [error, setError] = useState( );
    const navigate = useNavigate( );
    
    const handleRegisterSubmit = async (e) => {
        e.preventDefault( );

        axios.post('http://localhost:8080/register', JSON.stringify({nameUser,email, password, confirmPassword}), {
            headers: {"Content-Type": "application/json"}
        })
        .then(
            (response)=>{
                console.log(response.status);
                navigate('/login');
            }
        )
        .catch((error)=>{
            console.log(`ops houve um erro ${error}`);
            setError(true);
        })
    }

    return (
        <div className="bg-blue-950 h-screen w-screen ">
            <section className="pt-10 flex flex-col gap-10">
                <h1 className="text-center text-white text-3xl font-semibold ">Registre-se</h1>

                {error?<h2 className='text-center text-xl text-white'>Erro ao registrar, tente novamente.</h2>:<></>}

                <form className="justify-center flex" onSubmit={(e)=>handleRegisterSubmit(e)}>
                    <section className=" flex w-1/2 md:w-1/4 flex-col gap-2">
                        <input type="text" placeholder="Seu nome: "
                        className="py-2 text-center font-semibold"
                        onChange={(e)=>setNameUser(e.target.value)}/>

                        <input type="email" placeholder="Seu email: "
                        className="py-2 text-center font-semibold"
                        onChange={(e)=>setEmail(e.target.value)}/> 

                        <input type="password" placeholder="Crie uma senha:" 
                        className="py-2 text-center font-semibold"
                        onChange={(e)=>setPassword(e.target.value)}/>

                        <input type="password" placeholder="Confirme sua senha:" 
                        className="py-2 text-center font-semibold"
                        onChange={(e)=>setConfirmPassword(e.target.value)}/>
    
                        <input type="submit" value="Cadastrar" 
                        className="bg-blue-600 py-3 hover:bg-blue-900 transition-all ease-in-out font-bold hover:text-white"/>

                        <Link to="/login" className='bg-blue-600 py-3 hover:bg-blue-900 transition-all ease-in-out font-bold hover:text-white text-center'>
                            Ir para Login
                        </Link>
                    </section>
                </form>
            </section>
        </div>
    )
}

export default RegisterUser;