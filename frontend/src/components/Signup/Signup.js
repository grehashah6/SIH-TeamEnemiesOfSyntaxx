import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Component1 from '../Steps/Component1';
import Component2 from '../Steps/Component2';
import Component3 from '../Steps/Component3';
import Feed from '../Feed/Feed';
import {Routes, Route, useNavigate} from 'react-router-dom';

const steps = ['Education', 'Work Experience', 'Startup Details'];

export default function Signup() {
    const navigate = useNavigate();

    const navigateToFeed = () => {
      // 👇️ navigate to /contacts
      navigate('/feed');
    };
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
        isLastStep() && allStepsCompleted()
        && navigate("/feed")
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      
      <div>
        { activeStep === 1 ? (
          <div class="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 py-4">
              <h1 className='text-2xl m-8 font-bold'>Profile Details </h1>
              <div className='w-full my-4'>
                <Stepper nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <Component1 />
              <div className='w-full'>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {activeStep !== steps.length &&
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? 'Finish'
                          : 'Next'}
                      </Button>
                    }
                  {/* {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography variant="caption" sx={{ display: 'inline-block' }}>
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? 'Finish'
                          : 'Complete Step'}
                      </Button>
                    ))} */}
                </Box>
              </div>
            </div>
        ): activeStep === 2 ? (
              <div class="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 py-4">
                <h1 className='text-2xl m-8 font-bold'>Profile Details </h1>
                <div className='w-full my-4'>
                <Stepper nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
              </div>
                <Component3 />
                <div className='w-full'>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {activeStep !== steps.length &&
                        <Button onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? 'Finish'
                            : 'Next'}
                        </Button>
                      }
                    {/* {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? 'Finish'
                            : 'Complete Step'}
                        </Button>
                      ))} */}
                  </Box>
                </div>
              </div>
          ) : (
            <div class="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 py-4">
              <h1 className='text-2xl m-8 font-bold'>Profile Details </h1>
              <div className='w-full my-4'>
                <Stepper nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
              </div>

                <Component2 />
                <div className='w-full'>

                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {activeStep !== steps.length &&
                        <Button onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? 'Finish'
                            : 'Next'}
                        </Button>
                      }
                    {/* {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? 'Finish'
                            : 'Complete Step'}
                        </Button>
                      ))} */}
                  </Box>
                </div>
              </div>
          )}
      </div>
    </Box>
  );
}
