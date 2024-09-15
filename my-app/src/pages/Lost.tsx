import React from "react";
import './style/home.css'
import sadwhale from './style/SadWhale.gif';
import { useNavigate } from 'react-router-dom';

export function Lost(){
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/test');
    };
    return(
        <div>
            
        </div>
    );
}