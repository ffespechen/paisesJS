import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


class Pistas extends Component{

render(){
	return(
		<Card>
			<CardMedia
			component="img"
			image={this.props.bandera} />
		</Card>

		)

};


};

export default Pistas;
