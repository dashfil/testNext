import { useContext, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import context from '../Context/context';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

export default function Login() {
  const [open, setOpen] = useState(false);
  const {state,dispatch} = useContext(context)
  const [load, setLoad] = useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const loading = () =>{
    setLoad(true)
  }
   const stopLoading = () => {
     setLoad(false)
   }
  const login = (event) =>{
    event.preventDefault();
    loading()
    const dataUser = {
      'email': event.target.email.value,
      'password': event.target.password.value,
    }
       fetch('http://api.interview.michaelknyazev.com/api/v1/login', {
           headers: {
             "content-type": "application/json"
           },
           method: "POST",
           body: JSON.stringify(
             dataUser
           ),
         })
         .then(res => res.json())
         .then(data => dispatch({type:'LOGIN_USER',payload:data}))
         .then(finish => stopLoading())
       
          
  }
  return (
    <>
    {Object.keys(state?.user).length == 0 ? 
    <div>
      < Button variant = "contained"
     
      onClick = {
        handleClickOpen
      }>
        Войти
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={login}>
        <DialogTitle>Вход</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name='email'
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
             < TextField
             autoFocus
             margin = "dense"
             name = 'password'
             label = "Password"
             type = "password"
             fullWidth
             variant = "standard" />
        </DialogContent>
        <DialogActions>
          {load?
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>:
          <Button type='submit'>Войти</Button>}
        </DialogActions>
      </form>
      </Dialog>
    </div> :
     <Typography variant="h6" gutterBottom component="div">
        Профиль
      </Typography>
}
    </>
  );
}
