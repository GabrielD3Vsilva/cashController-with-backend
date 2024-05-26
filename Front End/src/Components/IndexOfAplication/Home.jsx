import axios from 'axios';
import CashItem from './CashItems/CashItem';
import FormGetCashInit from './FormCash/FormGetCashInit'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home ( ) {
    const location = useLocation( );
    const data = location.state;
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [exists, setExists] = useState( );
    
    useEffect(( )=>{
        axios.post('http://localhost:8080/returnIfCashExists', JSON.stringify({data}), {
            headers: {"Content-Type": "application/json"}
        }).then((response)=>{
            console.log(response.status);
            console.log(response.data);
            setExists(response.data);
        }).catch((error)=>console.log(error));
    }, [])

    const openOrCloseForm = ( ) => {
        setIsOpenForm(!isOpenForm);
    }

    return (
        <div className="h-screen w-screen bg-gray-200">
            <header className="bg-blue-950 w-screen">
                <h1 className="py-2 text-center text-white text-2xl ">Controlador 
                de finanças</h1>
            </header>

            <section className='flex justify-center mt-5 gap-4 flex-wrap '>
                    <CashItem title={'Verba Inicial'} value={100000}/>
                    <CashItem title={'Verba Gasta'} value={100000}/>
                    <CashItem title={'Verba disponível'} value={100000}/>
            </section>

            
            <main className='flex justify-center'>
                    <div className="flex flex-col gap-y-8">
                        <button className=" text-center px-2 bg-blue-600 py-1 mt-8 hover:bg-blue-900 transition-all ease-in-out font-bold text-white" onClick={openOrCloseForm}>Adicionar uma verba inicial</button>
                            
                    <div>
                        {isOpenForm? <FormGetCashInit email={data} setIsOpenForm={setIsOpenForm}/> : <></>}</div>
                    </div>
            </main>


        </div>
    )
}

export default Home;