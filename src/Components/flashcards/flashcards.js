import React from "react";
import './flashcards.css';

export default class Flashcard extends React.Component{
    render(){
        return(
            <div class='flashcard'>
                <div class='word'>
                    Abate
                </div>
                <div className="decision">
                    <div>I remember</div>
                    <div>I don't remember</div>
                </div>
            </div>
        );
    }
}