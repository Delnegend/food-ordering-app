import React from 'react';

import './Components.css';
import { AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import styled from '@mui/material/styles/styled';
import * as colours from '@mui/material/colors';

//Customised Typography components for the AccordionSummary components in the CustomAccordion components
// The texts are white
const CustomSummaryTypography = styled(Typography)(({theme})=>({
    color: 'white'
    
}));

//Same as CustomSummaryTypography but for CustomAccordionDetails
// and the texts are orange
const CustomDetailTypography = styled(Typography)(({theme})=>({
    color: 'orange'
}));

const CustomAccordionDetails = styled(AccordionDetails)(({theme})=>({
    backgroundColor: 'black',
}));

const CustomAccordionSummary = styled(AccordionSummary)(({theme})=>({
    backgroundColor: 'rgb(50, 50, 50)',
}));

// Every CustomAccordion components are squares and have a margin of 3px
const CustomAccordion = styled((props) => <MuiAccordion square="true" {...props} />)(({theme}) => ({
    margin: '3px'
}));

function FoodAccordion(){
    return(
        <div className="Homepage-body-food-selection">
            <CustomAccordion id="BanhMi">
                <CustomAccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <CustomSummaryTypography>Bánh mì</CustomSummaryTypography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                    <CustomDetailTypography>Bánh mì đầy đủ</CustomDetailTypography>
                </CustomAccordionDetails>
            </CustomAccordion>
            <CustomAccordion id="Mi">
                <CustomAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <CustomSummaryTypography>Mì</CustomSummaryTypography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                    <CustomDetailTypography>Mì tôm trứng & xúc xích</CustomDetailTypography>
                </CustomAccordionDetails>
            </CustomAccordion>
            <CustomAccordion id="Xoi">
                <CustomAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <CustomSummaryTypography>Xôi</CustomSummaryTypography>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                    <CustomDetailTypography>Xôi đầy đủ</CustomDetailTypography>
                </CustomAccordionDetails>
            </CustomAccordion>
        </div>
    );
}

export default FoodAccordion;