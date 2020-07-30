import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/Button";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import Pistas from "./Pistas";
import Bandera from "./Bandera";

class TableroJuego extends Component{

	constructor(){
		super();

		this.state = {
			paises : null,
			pais : null,
			bandera : null,
			capital : null,
			subregion : null,
			poblacion : null,

		};
	};


	componentDidMount(){

		fetch("https://restcountries.eu/rest/v2/all")
		.then(response => response.json())
		.then(paises => this.setState({paises : paises}))
		.catch( error => console.log(error));

	};

	elegirPais = (continente) => {

		document.getElementById("continenteElegido").innerText = "El país a adivinar está en... " + continente;

		var subSeleccion = new Array();

		for(var indice in this.state.paises){
			if(this.state.paises[indice].region===continente){
				subSeleccion.push(this.state.paises[indice]);
			}
		}

		
		var indiceRandom = Math.floor(Math.random()*subSeleccion.length);

		var nuevoEstado = { pais : subSeleccion[indiceRandom].name,
						bandera : subSeleccion[indiceRandom].flag,
						capital : subSeleccion[indiceRandom].capital,
						subregion : subSeleccion[indiceRandom].subregion,
						poblacion : subSeleccion[indiceRandom].population,
					};

		this.setState(nuevoEstado);

	};


	adivinar = () => {
		console.log(this.state.pais + " capital " + this.state.capital);

		if(document.getElementById("paisUsuario").value.toUpperCase()==this.state.pais.toUpperCase()){
			console.log("GANADOR");
		}
		
	};

	render(){
		return(
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<Button 
					id="Asia"
					variant="contained"
					size="medium"
					onClick={() => this.elegirPais("Asia")}>
					Asia
					</Button>
				</Grid>

				<Grid item xs={2}>
					<Button 
					id="Europe"
					variant="contained"
					size="medium"
					onClick={() => this.elegirPais("Europe")}>
					Europe
					</Button>
				</Grid>

				<Grid item xs={2}>
					<Button 
					id="America"
					variant="contained"
					size="medium"
					onClick={() => this.elegirPais("Americas")}>
					America
					</Button>
				</Grid>

				<Grid item xs={2}>
					<Button 
					id="Africa"
					variant="contained"
					size="medium"
					onClick={() => this.elegirPais("Africa")}>
					Africa
					</Button>
				</Grid>

				<Grid item xs={2}>
					<Button 
					id="Oceania"
					variant="contained"
					size="medium"
					onClick={() => this.elegirPais("Oceania")}>
					Oceania
					</Button>
				</Grid>

		        <Grid item xs={12}>
		        	<div>
						<TextField 
						id="paisUsuario"
						label="¿De qué país se trata?"
						variant="outlined"
						size="small" />
						
						<IconButton
						variant="contained"
						color="primary"
						size="large"
						onClick={this.adivinar}>
						<SendOutlinedIcon />
						</IconButton>

					</div>
		        </Grid>
		      	
		      	<Grid item xs={12}>
		      		<div id="continenteElegido"></div>
		      	</Grid>

		      	<Grid item xs={6}>

		      	<Bandera 
		      	bandera={this.state.bandera} />		      		
		      	</Grid>		       	

		      	<Grid item xs={6}>

		      	<Pistas 
		      	capital={this.state.capital}
		      	poblacion={String(this.state.poblacion)}
		      	subregion={this.state.subregion} />
		      		
		      	</Grid>

		      </Grid>			
			)};

  };

  export default TableroJuego;