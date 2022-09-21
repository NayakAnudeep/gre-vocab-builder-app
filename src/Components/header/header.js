import React from "react";
import './header.css';

export default class Header extends React.Component{

    render(){
        return(
            <div class="headers">
                <div className= 'heading'>GRE vocab</div>
                <div className= 'options'>
                    <button>Show words</button>
                    <button class='Add'>Add words</button>
                </div>
            </div>
        );
    }
} 