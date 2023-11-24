import React from "react";
import {Routes,Route} from 'react-router-dom';
import Savemyseat from "./Banner/Banner1/Savemyseat";


function Routing(){
    return(
        <Routes>
            <Route path="/Savemyseat" element={<Savemyseat />}></Route>
        </Routes>
    )
}
export default Routing