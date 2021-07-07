// Components import
import HeadInformation from "./components/header/HeadInformation";
import Card from "./components/todoList/card/Card";
import { TaskProvider } from "./context/TasksContext";
// MUI
import { Container, Grid } from "@material-ui/core";

function App() {
  return (
    <Container className="App" style={{ marginTop: 20 }}>
      <TaskProvider>
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <HeadInformation />
            <Card />
          </Grid>
        </Grid>
      </TaskProvider>
    </Container>
  );
}

export default App;
