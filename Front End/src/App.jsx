import Login from "./Components/Forms/Login";
import RegisterUser from "./Components/Forms/RegisterUser";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App ( ) {
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<RegisterUser/>}/>
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;