import { Container, Grid, Grow } from "@material-ui/core";
import React, { useState } from "react";
import Form from "../Form/Form";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../../actions/PostAction";

import Posts from "../Posts/posts";

const Home = (props) => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
