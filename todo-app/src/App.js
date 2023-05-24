import "./App.css";
import { Provider } from "react-redux";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import store from "./store/store";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Box sx={{ flexGrow: 1 }} component="nav">
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                }}
              >
                To Do Items
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
