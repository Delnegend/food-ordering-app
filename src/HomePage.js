import React from 'react';

import './Homepage.css';
import { Container, TextField, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FoodAccordion(){
    return(
        <div className="Homepage-body-food-selection">
            <Accordion id="BanhMi">
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header-banhmi"
                >
                    <Typography>Bánh mì</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Bánh mì đầy đủ</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion id="Mi">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header-mi"
                >
                    <Typography>Mì</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Mì tôm trứng & xúc xích</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

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