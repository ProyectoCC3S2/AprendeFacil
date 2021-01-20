import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";
import React from 'react';
import Tarjeta from './Tarjeta'

const Monedas = function({retiroMonedas}){
	const costoMoneda = 0.25
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
		this.state = {
			totalMonedas: 100,
			retiroMonedas: 0,
			showTarjeta: false
		};
	}
    render(){
    	const onFinish = (values) => {
    		this.setState({
    			retiroMonedas: values.monedas,
    			showTarjeta: true
    		});
    	}
    	const callbackFunction = () => {
			  this.setState({totalMonedas:  this.state.totalMonedas - this.state.retiroMonedas});
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
