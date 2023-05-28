import React from 'react';

import './Homepage.css';
import { Container, TextField} from '@mui/material';

import FoodAccordion from './Components/FoodAccordion';


function Homepage(){
    return(
        <div className="Homepage-wrapper">
            <div className="Homepage-header">
                <h1>UCC Food App</h1>
            </div>
            <div className="Homepage-body">
                <TextField placeholder="Tìm kiếm" id="Homepage-body-search-bar"/>
                <div className="Homepage-body-food-selection">
                    <Container>
                        <FoodAccordion/>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Homepage;