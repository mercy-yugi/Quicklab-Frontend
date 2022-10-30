import * as React from 'react';
import './Popup.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >

      <Button color='primary'  variant="contained" 
      style={{width: '250px'}} 
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
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
          <h4 style={{color: 'white'}}>Observation</h4>
          <TextField id="outlined-basic"  multiline rows={3} placeholder='The color turned..'  style={{backgroundColor: 'white', width: '100%', borderRadius: '5px'}}/>
          <h4 style={{color: 'white'}}>Explanation</h4>
          <TextField id="outlined-basic" multiline rows={3} placeholder="Because ..." variant="outlined" style={{backgroundColor: 'white', width: '100%', borderRadius: '5px'}}/>
        </DialogContent>
        <DialogActions>
          <Button  color='primary' variant="contained" style={{width: '40%', marginRight: 'auto', marginLeft: 'auto'}} onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
       </div>
      </Dialog>
    </div>
  );
}