import React from 'react';
import {Button, Fab, Grid, Typography} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import {Translation} from "react-i18next";
 

const heading = {
    //background: 'linear-gradient(360deg, #F1F5F8 30%, #1D1F26 100%)', //#182952
    //backgroundColor: '#F1F5F8',
    background: '#2E2E35',
    height: 920,
    color:'white',
    fontWeight: 'bold',
    textAlign: 'center'
}


const info = {
    paddingTop: '10%',
}

const styles = theme => ({
    desktopSize: {
        [theme.breakpoints.up("md")]: {
            width:"300px",
            height:"auto",
        }
    },
    mobileSize: {
        [theme.breakpoints.down("sm")]: {
            width:"250px",
            height: 'auto',
            paddingTop: 50
        }
    },
    button: {
        color: 'white',
        width: 100,
        height: 100,
        backgroundColor: 'teal'
    }
});


function Header(props) {
  const { classes } = props;
  return (
    <div style={heading}>
        <Typography component="div">
            <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid container item direction="row" justify="space-around" alignItems="center" style={info}>
                    <Grid item container direction="column" lg={4} spacing={1}>
                        <Grid item>
                            <Typography component="p" variant="h4">
                                <Translation>
                                    {
                                        t => <>{t('Danko KONATE')}</>
                                    }
                                </Translation>
                            </Typography>
                            <hr style={{width:70 , height:3,  color: "red", display: 'block', margin: 'auto' , marginTop: '40', padding: '5px'}}/>
                         </Grid>
                        <Grid item>
                            <Typography component="" variant="h5">
                                <Button  href="https://konatedanko.netlify.app/" variant="contained" color="secondary" size="lg">
                                        <Translation>
                                        {
                                            t => <>{t('Contacter-moi')}</>
                                        }
                                        </Translation>
                                </Button>
                                   
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg={3}>
                        <img className={`${classes.desktopSize} ${classes.mobileSize}`} src={"/images/header4.png"} alt="Logo" />
                    </Grid>
                    <Grid item container direction="column" lg={4} spacing={1}>
                        <Grid item>
                            <Typography component="em" variant="h5" style={{color: "#B78B43"}}>
                                <Translation>
                                    {
                                        t => <>{t('Introduction')}</>
                                    }
                                </Translation> 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component="p" variant="h4">
                                <Translation>
                                    {
                                        t => <>{t('Chef de projet    &   Developpeur')}</>
                                    }
                                </Translation> 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography component="p" variant="">
                                <Translation>
                                    {
                                        t => <>{t('Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu')}</>
                                    }
                                </Translation> 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item justify="center"  style={{padding: 50 , width:50}}>
                    <Fab color="secondary" aria-label="edit" onClick={props.executeScroll} className={classes.button}>
                        <ArrowDownwardIcon style={{fontSize: 40}} />
                    </Fab>
                </Grid> 
            </Grid>
        </Typography>
    </div>      
  )
}

export default withStyles(styles)(Header);
