import Login from "./Components/Forms/Login.jsx";
import RegisterUser from "./Components/Forms/RegisterUser.jsx";
import Home from "./Components/IndexOfAplication/Home.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App ( ) {
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<RegisterUser/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;