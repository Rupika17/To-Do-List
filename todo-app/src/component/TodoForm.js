import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../action/actions";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTodo = () => {
    if (newTodo.title.trim() === "") {
      alert("Please enter a title for the todo.");
      return;
    }

    dispatch(
      addTodo({
        title: newTodo.title,
        description: newTodo.description,
      })
    );

    setNewTodo({ title: "", description: "" });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="filled-basic"
        label="To Do"
        variant="filled"
        name="title"
        value={newTodo.title}
        placeholder="Enter todo title"
        onChange={handleInputChange}
      />
      <TextField
        id="filled-basic"
        label="Description"
        variant="filled"
        name="description"
        value={newTodo.description}
        placeholder="Enter todo description"
        onChange={handleInputChange}
      />
      <Button onClick={handleAddTodo} variant="contained">
        Click To Add
      </Button>
    </Box>
  );
};

export default TodoForm;
