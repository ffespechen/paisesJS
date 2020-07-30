import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


class Pistas extends Component{

render(){
	return(
		<Card>
			<CardContent>
				<h3>Pistas</h3>
				<h4>La Capital del país es {this.props.capital}</h4>
				<h4>La Población es de {this.props.poblacion} habitantes</h4>
				<h4>Dentro de su continente, está en la subregión {this.props.subregion}</h4>
			</CardContent>
		</Card>

		)

};


};

export default Pistas;
