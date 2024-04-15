import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import picnic_blanket1 from '../images/PicnicBlanket/picnic_blanket1.jpg'
import picnic_blanket2 from '../images/PicnicBlanket/picnic_blanket2.jpg'
import picnic_blanket3 from '../images/PicnicBlanket/picnic_blanket3.jpg'
import picnic_blanket4 from '../images/PicnicBlanket/picnic_blanket4.jpg'
import picnic_blanket5 from '../images/PicnicBlanket/picnic_blanket5.jpg'
import { Grid } from '@mui/material';

const images = [
    {
        imgPath: picnic_blanket1,
    },
    {
        imgPath: picnic_blanket2
    },
    {
        imgPath: picnic_blanket3
    },
    {
        imgPath: picnic_blanket4
    },
    {
        imgPath: picnic_blanket5
    },
];

function Merch() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <div>
            <br></br>
            <br></br>
            <Grid container spacing={2} justifyContent="center">
                <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                        }}
                    >
                        <Typography>{images[activeStep].label}</Typography>
                    </Paper>
                    <div style={{ overflow: 'hidden', position: 'relative', height: 255 }}>
                        {images.map((step, index) => (
                            <img
                                key={step.label}
                                src={step.imgPath}
                                alt={step.label}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    left: `${(index - activeStep) * 100}%`,
                                    transition: 'left 0.5s ease',
                                }}
                            />
                        ))}
                    </div>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </Grid>
        </div>
    );
}

export default Merch;
