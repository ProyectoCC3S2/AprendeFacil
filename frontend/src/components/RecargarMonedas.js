import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";
import React from 'react';
import Tarjeta from './Tarjeta'

import axios from 'axios';

const Monedas = function({recargaMonedas}){
	const costoMoneda = .8;
	var costo = recargaMonedas * costoMoneda;
	return(
		<div style={{fontSize:'35px'}}>
			Precio: ${costo}
		</div>
	);
}

class RecargarMonedas extends React.Component {
	constructor(){
		super()
		
		let usuariobj = localStorage.getItem("usuario")
		this.usuario = JSON.parse(usuariobj)
		
		this.state = {
			totalMonedas: this.usuario.coins,
			recargaMonedas: 0,
			showTarjeta: false
		};
	}
    render(){
    	
    	let usuario = this.usuario;
    	const onFinish = (values) => {
    		this.setState({
    			recargaMonedas: values.monedas,
    			showTarjeta: true
    		});
    		return fetch(
			  `http://localhost:4000/api/publicacion/recargarmonedas`,
			  {
				  crossDomain:true,
				  method: 'POST',
				  headers: {'Content-Type':'application/json'},
				  body: JSON.stringify(values),
			  })
			.then(response => {
			  let money = usuario.coins -(-1)* this.state.recargaMonedas;
			  axios.put(`http://localhost:4000/api/Auth/${usuario._id}`, 
			  {
				coins: money,
			  }).then(response => {
				localStorage.clear()
				localStorage.setItem("usuario",JSON.stringify(response.data.money))
			  }
			  )
			  //window.location.reload();
		  })
		  .catch(err => console.log(err));
    		
    	}
    	const callbackFunction = () => {
			  this.setState({
			  		totalMonedas: parseInt(this.state.totalMonedas) + parseInt(this.state.recargaMonedas),
			  		showTarjeta : false
		  		});
		};
		return(
			<Wrapper>
				<div>
				  <h2>Recargar Monedas</h2>
				</div>
				<h3>Tienes {this.state.totalMonedas} monedas</h3>
				<Form
					name="recargar-monedas"
					className="recargar-form"
					onFinish={onFinish}
				  >
					<Form.Item
					  name="monedas"
					  label="Número de monedas"
					  initialValue="0"
					  >
						<Input
						type="number"
						min="0"
						step="1"
					  />
					</Form.Item>
					<Form.Item>
					  <Button type="primary" htmlType="submit">
						Comprar
					  </Button>
					</Form.Item>
				</Form>
				{this.state.showTarjeta && <Monedas recargaMonedas={this.state.recargaMonedas} />}
				{this.state.showTarjeta && <Tarjeta parentCallback={callbackFunction} />}
			</Wrapper>
		);
	};
};

export default RecargarMonedas;
