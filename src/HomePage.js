import React from 'react';

import './Homepage.css';
import { TextField, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Homepage(){
    return(
        <div className="Homepage-wrapper">
            <div className="Homepage-header">
                <h1>UCC Food App</h1>
            </div>
            <div className="Homepage-body">
                <TextField placeholder="Tìm kiếm" id="Homepage-body-search-bar"/>
                <div className="Homepage-body-food-selection">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Bánh mì</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Bánh mì thịt nướng
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Homepage;