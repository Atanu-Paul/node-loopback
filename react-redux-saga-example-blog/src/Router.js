import React from "react";
import Home from  "./pages/Home";
import SinglePost from "./pages/SinglePost"
import {Route, Routes} from "react-router-dom"
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Navigation from "./components/Navigation"

function Router(){
    return(
        <div>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/:id" element={<SinglePost/>} />
                </Routes>
        </div>
    )
}
export default Router;