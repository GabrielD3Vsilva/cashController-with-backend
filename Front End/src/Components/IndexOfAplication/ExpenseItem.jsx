import axios from "axios";
import React from "react";

function ExpenseItem ({expenseTitle, expenseValue, expenseId}) {
    const handleIdToDelete = async ( ) => {
        await axios.post('http://localhost:8080/deleteExpense', JSON.stringify({id: expenseId}), {
            headers: {"Content-Type": "application/json"}
        }).then((response)=>{
            console.log(response.data);
            window.location.reload( );
        })
        .catch((error)=>console.log(error));
    }

    return (
        <div className="flex">
            <div className="flex justify-between px-5 py-2 flex-wrap bg-blue-900 text-white gap-3">
                <h5 className="md:text-lg">{expenseTitle}</h5>
                <h5 className="md:text-lg"><span className="font-bold">Custo:</span>  {expenseValue} reais</h5>
            </div>

            <button onClick={handleIdToDelete} className="bg-red-950 transition-all ease-in-out hover:bg-red-500 rounded-sm px-4 text-white font-bold">Deletar</button>
        </div>
    )
}

export default ExpenseItem;