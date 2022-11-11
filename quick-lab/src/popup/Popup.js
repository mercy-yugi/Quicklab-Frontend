import * as React from 'react';
import './Popup.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';




export default function FormDialog({observation}) {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [secondOpen,setSecondOpen]=React.useState(false)

  const [explanation , setExplanation] = React.useState('')
  const[observations, setObservation] = React.useState('')
 const[explanationError, setExplanationError] = React.useState(false)
 const[observationError, setObservationError] = React.useState(false)


const handleSubmit = (e) => {
       e.preventDefault()
       setExplanationError(false)
         setObservationError(false)
       if (explanation === ''){
         setExplanationError(true)
       }
       else if (observations === ''){
        setObservationError(true)
       }
       else if (explanation && observations){
        // console.log(observations)
        handleClose()
       }
       else{
        console.log('nothing here')
       }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSecondOpen(true)
  };
  const handleSecondClose=()=>{
    setSecondOpen(false)
    toast("Congratulations, you have successfully completed your practical with quicklab")
    navigate('/')
    
  }

  return (
    <div >

      <Button color='primary'  variant="contained" 
      style={{width: '250px', transition: 'transform 500ms ease'}} 
       onClick={handleClickOpen} className="record">
        Record Observation
      </Button>

      <Dialog style={{borderRadius: '30px'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <div className={'form'} >
       <DialogTitle id="alert-dialog-title">
          <b>{"Record Observation"}</b>
        </DialogTitle>
        <DialogContent>
          <h4 style={{color: 'white'}}>Observation</h4>
          <TextField id="outlined-basic" 
          onChange={(e) => setObservation(e.target.value) }
           multiline rows={3} placeholder='The color turned..'  style={{backgroundColor: 'white', width: '100%', borderRadius: '5px'}}
           error= {observationError}
           />
          <h4 style={{color: 'white'}}>Explanation</h4>
          <TextField id="outlined-basic"
            onChange={(e) => setExplanation(e.target.value) }
            error= {explanationError}
           multiline rows={3} placeholder="Because ..."
            variant="outlined"
             style={{backgroundColor: 'white', width: '100%', borderRadius: '5px'}}
             required/>
        </DialogContent>
        <DialogActions>
          <Button   color='primary' variant="contained" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto' }} onClick={handleSubmit} >
            Save
          </Button>
        </DialogActions>
       </div>
      </Dialog>

      <Dialog style={{borderRadius: '30px'}}
        open={secondOpen}
        onClose={handleSecondClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <div className={'form'} >
       <DialogTitle id="alert-dialog-title">
          <b>{"Expected Observation"}</b>
        </DialogTitle>
        <DialogContent>
          <h4 style={{color: 'white'}}>Observation</h4>
          <p id="outlined-basic" style={{backgroundColor: 'white', padding:'4%', width: '100%', borderRadius: '5px'}}>{observation}  </p>
        </DialogContent>
        <DialogActions>
          <Button  color='primary' variant="contained" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto'}} onClick={handleSecondClose}>
            Exit
          </Button>
        </DialogActions>
       </div>
      </Dialog>


    </div>
  );
}