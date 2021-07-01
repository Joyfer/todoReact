// Components import
import Sidebar from "./components/bars/sidebar/Sidebar";
import HeadInformation from "./components/header/HeadInformation";
// MUI
import { Container, Grid } from "@material-ui/core";

function App() {
  return (
    <Container className="App">
      <Grid container spacing={3} style={{ justifyContent: "center" }}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={6}>
          <HeadInformation />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
