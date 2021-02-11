import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";
import React from 'react';
import Tarjeta from './Tarjeta'

import axios from 'axios';

const Monedas = function({retiroMonedas}){
	const costoMoneda = .8;
	var costo = retiroMonedas * costoMoneda;
	return(
		<div style={{fontSize:'35px'}}>
			Recibes: ${costo}
		</div>
	);
}

class ConvertirMonedas extends React.Component {
	constructor(){
		super()
		
		let usuariobj = localStorage.getItem("usuario");
		this.usuario = usuariobj ? JSON.parse(usuariobj) : {coins:0};
		
		this.state = {
			totalMonedas: this.usuario.coins,
			retiroMonedas: 0,
			showTarjeta: false
		};
	}
    render(){
		let usuariobj = localStorage.getItem("usuario");
		if( !usuariobj){
			  window.location.href = "/IniciarSesion"
		}
    	let usuario = this.usuario;
    	const onFinish = (values) => {
    		this.setState({
    			retiroMonedas: values.monedas,
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
			  let money = usuario.coins - this.state.retiroMonedas;
			  axios.put(`http://localhost:4000/api/Auth/${usuario._id}`, 
			  {
				coins: money,
			  }).then(response => {
				localStorage.clear()
				localStorage.setItem("usuario",JSON.stringify(response.data.money))
			  }
			  )
			  //window.location.reload();
			  return response.json()
		  })
		  .catch(err => console.log(err));
    	}
    	const callbackFunction = () => {
			  this.setState({
			  		totalMonedas:  this.state.totalMonedas - this.state.retiroMonedas,
			  		showTarjeta : false
		  		});
		};
		return(
			<Wrapper>
				<div>
				  <h2>Convertir Monedas</h2>
				</div>
				<h3>Tienes {this.state.totalMonedas} monedas</h3>
				<Form
					name="convertir-monedas"
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
						max={this.state.totalMonedas}
						step="1"
					  />
					</Form.Item>
					<Form.Item>
					  <Button type="primary" htmlType="submit">
						Convertir
					  </Button>
					</Form.Item>
				</Form>
				{this.state.showTarjeta && <Monedas retiroMonedas={this.state.retiroMonedas} />}
				{this.state.showTarjeta && <Tarjeta parentCallback={callbackFunction}/>}
			</Wrapper>
		);
	};
};

export default ConvertirMonedas;
