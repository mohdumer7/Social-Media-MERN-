import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import sociopath from "./images/sociopath.png";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/PostAction";

const App = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center" className={classes.heading}>
          SocioPath
        </Typography>
        <img
          src={sociopath}
          alt="sociopath"
          height="60"
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
