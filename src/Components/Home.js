import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
  }));
  

function Home() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState('priority1');
    const [task,setTask] = React.useState([]);
    const classes = useStyles();
    const [taskValue,setTaskvalue] =React.useState('');
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

      const handleInput = (event) =>{
        setTaskvalue(event.target.value);
      }
     
      const handleDelete = () => {
        console.log('You clicked the delete icon.');
      };
    
    
    return (
        <div>
          <h2 style={{fontWeight:'lighter',color:'#ff1744'}}>Todo-List App</h2>
          <div className={classes.root}>
          <Grid container spacing={3}>
            {task.map((x,index) =>{
              return(
                <Grid item xs={10} key={index}>
                  <Paper className={classes.paper}>
                    <Typography align="left" variant="h4" component="h4">{x.task}</Typography>
                    <Typography align="right" color="primary" variant="h6" component="h6">
                          <Chip
                          label={x.priority}
                          clickable
                          color="primary"
                          onDelete={handleDelete}
                          deleteIcon={<DoneIcon />}
                          variant="outlined"
                        />
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
            <Grid item xs={2}>
            <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            </Grid>
            </Grid>
            
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Todo Task</DialogTitle>
                <DialogContent>
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" color="secondary" value={taskValue} label="Enter the Task" onChange={handleInput} />
                  </form>
                  <FormControlLabel value="priority1" color="primary" control={
                    <Radio
                    checked={selectedValue === 'priority1'}
                    onChange={handleChange}
                    value="priority1"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'priority1' }}
                    color="secondary"
                    label="Priority1"
                  />
                  } label="Priority1" />


                  <FormControlLabel value="Priority2" color="secondary" control={
                    <Radio
                    checked={selectedValue === 'priority2'}
                    onChange={handleChange}
                    value="priority2"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'priority1' }}
                    color="secondary"
                    label="Priority2"
                  />
                  } label="Priority2" />

                  <FormControlLabel value="Priority3" control={
                      <Radio
                      checked={selectedValue === 'priority3'}
                      onChange={handleChange}
                      value="priority3"
                      color="secondary"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'priority3' }}
                      label="Priority3"
                    />
                  } label="Priority3" />


                  <FormControlLabel value="Priority4" control={
                    <Radio
                      checked={selectedValue === 'priority4'}
                      onChange={handleChange}
                      value="priority4"
                      color="secondary"
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'priority4' }}
                      label="Priority4"
                    />
                  } label="Priority4" />

                </DialogContent>
                <DialogActions>
                  <Fab color="secondary" aria-label="send" onClick={()=> {
                    setTask(task.concat({
                      "task":taskValue,
                      "priority":selectedValue
                    }))
                    console.log(task);
                    handleClose();
                    setTaskvalue('');
                  }}>
                      <SendIcon />
                  </Fab>
                </DialogActions>
            </Dialog>
          </div>
        </div>
    )
}

export default Home

