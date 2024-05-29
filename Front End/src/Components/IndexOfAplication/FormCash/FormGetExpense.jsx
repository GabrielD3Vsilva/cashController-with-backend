import { useState } from "react";
import axios from "axios";
import React from "react";

function FormGetExpense ({email}) {
    const [expenseTitle, setExpenseTitle] = useState( );
    const [expenseValue, setExpenseValue] = useState( );

    const handleExpense = async (e) => {
        e.preventDefault( );  
        await axios.post('http://localhost:8080/getExpenseFromForm', JSON.stringify({email, expenseTitle, expenseValue}), {
            headers: {"Content-Type": "application/json"}
        }).then((response)=>{
            console.log(response.data);
            window.location.reload( );
            
        }).catch((error)=>console.log(error));
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={(e)=>handleExpense(e)}>
            <h4 className="text-lg font-semibold text-center mb-3">Adicione nova despeza </h4>
                <input type="text" placeholder="Título da despeza"
                className="py-1 text-center border-b-2 w-auto  border-blue-950"
                onChange={(e)=>setExpenseTitle(e.target.value)}/>

                <input type="number" placeholder="Custo em reais: " 
                className="py-1 text-center border-b-2 border-blue-950"
                onChange={(e)=>setExpenseValue(e.target.value)}/>

                <input type="submit" value="Adicionar despeza" className="text-center bg-blue-600 py-1 hover:bg-blue-900 transition-all ease-in-out font-bold text-white"/>
        </form>
    )
}

export default FormGetExpense;