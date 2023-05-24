import { Box, Divider, IconButton, List, ListItem, ListItemText, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../action/actions';
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
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
  );
};

export default TodoList;
