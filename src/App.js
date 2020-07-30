import React, {Component} from 'react';
import './App.css';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Titulo from "./components/Titulo";
import TableroJuego from "./components/TableroJuego";

class App extends Component {



  render(){
  return (
    <div className="App">
      <header>

      <Grid container spacing={4}>
      	<Grid item xs={12}>
      		<Titulo />
      	</Grid>
      </Grid>

      <div id="tablero">
        <TableroJuego />
      </div>

      </header>
    </div>
  )};
}

export default App;
