import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login ( ) {
    const [email, setEmail] = useState( );
    const [password, setPassword] = useState( );
    const navigate = useNavigate( );

    const handleLogin = async (e) => {
        e.preventDefault( );

        await axios.post('http://localhost:8080/login', JSON.stringify({email, password}), 
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            (response)=>{
                console.log(response.data);
                navigate('/home', {state: email});
            }
        ).catch((error)=>console.log('houve um erro:', error))
    }


    return (
        <div className="bg-blue-950 h-screen w-screen ">
            <section className="pt-10 flex flex-col gap-10">
                <h1 className="text-center text-white text-3xl font-semibold ">Login</h1>

                <form className="justify-center flex" onSubmit={(e)=>handleLogin(e)}>
                    <section className=" flex w-1/2 md:w-1/4 flex-col gap-2">

                        <input type="email" placeholder="Seu email: "
                        className="py-2 text-center font-semibold"
                        onChange={(e)=>setEmail(e.target.value)}/> 

                        <input type="password" placeholder="Sua senha:" 
                        className="py-2 text-center font-semibold"
                        onChange={(e)=>setPassword(e.target.value)}/>

                        <input type="submit" value="Conectar" 
                        className="bg-blue-600 py-3 hover:bg-blue-900 transition-all ease-in-out font-bold hover:text-white"/>

                        <Link to="/" className="text-center bg-blue-600 py-3 hover:bg-blue-900 transition-all ease-in-out font-bold hover:text-white">
                            Crie uma conta
                        </Link>
                    </section>
                </form>
            </section>
        </div>
    )
}

export default Login;