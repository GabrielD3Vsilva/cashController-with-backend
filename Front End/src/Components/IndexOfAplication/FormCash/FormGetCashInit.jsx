import axios from "axios";
import { useState } from "react";

function FormCashInit ({setIsOpenForm, email}) {

    const [cashInit, setCashInit] = useState( );

    const handleCashInit = async (e) => {
        e.preventDefault( );

        await axios.post('http://localhost:8080/registerCash', JSON.stringify({email, cashInit}),{
            headers: {
            "Content-Type": "application/json"
            }
        }
        ).then(
            (response)=>{
                console.log(response.data)
                setIsOpenForm(false);
            }

        ).catch((error)=>{console.log('houve o erro: ', error)})

    }
    

    return (
        <div>
            <form className="flex flex-col gap-2" onSubmit={(e)=>handleCashInit(e)}>
                <h3 className="text-lg font-semibold">Adicione a verba inicial: </h3>
                <input type="number" placeholder="valor em reais: " 
                className="py-1 text-center border-b-2 border-blue-950"
                onChange={(e)=>setCashInit(e.target.value)}/>

                <input type="submit" value="Adicionar verba" className="text-center bg-blue-600 py-1 hover:bg-blue-900 transition-all ease-in-out font-bold text-white"/>
            </form>
        </div>
    )
}

export default FormCashInit;