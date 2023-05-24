// APP WITHOUT REDUX

import {
    AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const initialTodos = [
  {
    id: 1,
    title: "Learn React",
    description: "Complete the React tutorial",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    description: "Take the dog for a walk in the park",
    completed: false,
  },
];

function ToDoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

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

    const newTodoItem = {
      id: Date.now(),
      title: newTodo.title,
      description: newTodo.description,
      completed: false,
    };

    setTodos([newTodoItem, ...todos]);
    setNewTodo({ title: "", description: "" });
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      const completedTodos = updatedTodos.filter((todo) => todo.completed);
      const incompletedTodos = updatedTodos.filter((todo) => !todo.completed);
      return [...incompletedTodos, ...completedTodos];
    });
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} component="nav" >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              To Do Items 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <Box
        component="form"
        sx={{
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

      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
        }}
        noValidate
        autoComplete="off"
      >
        <List>
          {todos.map((todo) => (
            <>
              <ListItem alignItems="flex-start">
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  {todo.completed ? (
                    <Tooltip title="Click to-do">
                      <CloseIcon />
                    </Tooltip>
                  ) : (
                    <Tooltip title="Click to complete">
                      <DoneIcon />
                    </Tooltip>
                  )}
                </IconButton>
                <ListItemText
                  primary={todo.title}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.description}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default ToDoList;
