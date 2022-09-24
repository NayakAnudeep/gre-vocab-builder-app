import React from "react";
import './addWords.css';
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { borderRight } from "@mui/system";

function AddWords(){
    return(
        <div class='cardContainer'>
            <Card variant="outlined" class='card'>
                <FormControl>
                    <TextField className="textField" id='standard-basic' label='Word Name' /><br></br>
                    <TextField id='standard-basic' label='Meaning'/><br></br>
                    <FormControl>
                        <InputLabel id='gb'>Good/Bad</InputLabel><br></br>
                        <Select id='gb' label='Good/Bad'>
                            <MenuItem value='Good'>Good</MenuItem>
                            <MenuItem value='Bad'>Bad</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br>
                    <TextField id='standard-basic' label='Synonyms if any'/><br></br>
                    <div class='btnContainer'>
                    <Button variant="outlined">Submit</Button>
                    </div>
                </FormControl>
            </Card>    
        </div>
    );
}

export default AddWords;