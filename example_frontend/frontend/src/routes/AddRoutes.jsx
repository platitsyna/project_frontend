import React from 'react';
import {Route} from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Objects from "../pages/Objects";
import Characteristics from "../pages/Characteristics";
import {Routes} from "react-router";

const AddRoutes = () => {
    return (
        <Routes>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/objects" element={<Objects/>}/>
            <Route path="/characteristics" element={<Characteristics/>}/>
        </Routes>
    );
};

export default AddRoutes;