import { Card } from "@material-ui/core";
import './flashcards.css';
import Button from "@material-ui/core/Button";
import { useState } from "react";

function Flashcard(){

    const [state, setState]= useState(true);

    function Explanation(){
        return(
        <div class='flashCard'>
            <div class='wordContainerExplanation'>
                To make( an unpleasant feeling) less intense
            </div>
            <br></br>
            <div className="nextBtn">
                <Button onClick={()=> setState(!state)} className="centerBtn" variant="contained">NEXT</Button>
            </div>
        </div>
        );
    }

    function Question(){
    
        return(
        <div class='flashCard'>
            <div class='wordContainer'>
                Abate
            </div>
            <br></br>
            <div className="decision">
                <Button onClick={() => setState(!state)} className="leftBtn" variant="contained">I remember</Button>
                <Button onClick={() => setState(!state)} className="rightBtn" variant="contained">I don't remember</Button>
            </div>
        </div>
    );
    }
    
    if(state===true){
        return(
            <div class='flashCardContainer'>
                <Card>
                    <Question/>
                </Card>    
            </div>
        );
    }
    else{
        return(
            <div class='flashCardContainer'>
                <Card>
                    <Explanation/>
                </Card>    
            </div>
        );
    }
    
}

export default Flashcard;