import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";
import React from 'react';
import Tarjeta from './Tarjeta'

const Monedas = function({numMonedas}){
	const costoMoneda = 0.25
	var costo = numMonedas * costoMoneda;
	return(
		<div style={{fontSize:'35px'}}>
			Precio: ${costo}
		</div>
	);
}

class RecargarMonedas extends React.Component {
	constructor(){
		super()
		this.state = {
			totalMonedas: 100,
			numMonedas: 0,
			showTarjeta: false
		};
	}
    render(){
    	const onFinish = (values) => {
    		this.setState({
    			numMonedas: values.monedas,
    			showTarjeta: true
    		});
    	}
    	const callbackFunction = () => {
			  this.setState({totalMonedas: parseInt(this.state.totalMonedas) + parseInt(this.state.numMonedas)});
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
				{this.state.showTarjeta && <Monedas numMonedas={this.state.numMonedas} />}
				{this.state.showTarjeta && <Tarjeta parentCallback={callbackFunction} />}
			</Wrapper>
		);
	};
};

export default RecargarMonedas;
