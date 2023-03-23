import {
  Container,
  Grid,
  Grow,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Form from "../Form/Form";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts, getPostsBySearch } from "../../actions/PostAction";
import Pagination from "../pagination";
import Posts from "../Posts/posts";
import useStyles from "./styles";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

const Home = (props) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const query = useQuery();
  const history = useNavigate();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (tagtoRemove) => {
    setTags(tags.filter((tag) => tag !== tagtoRemove));
  };

  //to check if the parameter "Page" exists in the URL.

  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPosts);
  }, [currentId, dispatch]);

  const handleKeyPress = (e) => {
    //keycode 1e is the enter key
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history("/");
    }
  };

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={7} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Posts"
                fullWidth
                onKeyPress={handleKeyPress}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                variant="outlined"
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
