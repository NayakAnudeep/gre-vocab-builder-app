import React from "react";
import './header.css';
import { Button } from "@material-ui/core";
import {useNavigate} from "react-router-dom";


function Header(){
    let navigate= useNavigate();

    return(
        <div>
            <div class="headers">
                <div className= 'heading'>GRE vocab</div>
                <div className= 'options'>
                    <Button onClick={() => navigate('/addWords')} className="leftBtnHeader" variant="contained">Add words</Button>
                    <Button onClick={() => navigate('/flashCard')} className="rightBtnHeader" variant="contained">Flashcard</Button>
                    <Button onClick={() => navigate('/addWords')} className="rightBtnHeader" variant="contained">Show words</Button>
                </div>
            </div>
        </div>
    );
    
} 

export default Header;