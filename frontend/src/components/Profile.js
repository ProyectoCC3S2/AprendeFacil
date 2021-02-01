import { Form, Input, Button, Image, Empty } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";

const Profile = () => {

    return (     
        <Wrapper>
            
            <div className="profile">
                {/* Se usa para ver la foto de perfil*/}
                <div className="profile__avatar" >
                    <div>
                        <Image width="80%" src="https://scontent-lim1-1.xx.fbcdn.net/v/t1.0-9/294585_158789240882503_1526909984_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeHtowMxiPCtjqJHRXMTIuQnprmID2KUmVqmuYgPYpSZWnn0OCBCwVqW-oXrnj13j0nWJCRjilV95-l0x2XJ400a&_nc_ohc=3aCxculePlQAX9EXaSh&_nc_ht=scontent-lim1-1.xx&oh=8ad089b74842a01a0e2e6d62e012a4cf&oe=60201D5A"
                            
                            alt="foto-perfil">
                        </Image>
                    </div>
                    <div>
                        <Button type="primary" style={{margin:"3px 0px 3px 0px"}} size="small">
                            Cambiar Foto
                        </Button>
                    </div>
                </div>
                {/* Se usa para ver la información de perfil*/}
                <div className="profile__info">
                    <div className="profile__info--tittle">Información de Usuario</div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Nickname:
                        </div>
                        <div className="profile__info--item--data">
                            aprendef 
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Nombres:
                        </div>
                        <div className="profile__info--item--data">
                            Cesar 
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Apellidos:
                        </div>
                        <div className="profile__info--item--data">
                            Colorado 
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Telefono:
                        </div>
                        <div className="profile__info--item--data">
                            988900190
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Correo:
                        </div>
                        <div className="profile__info--item--data">
                            ccoloradoc@uni.pe
                        </div>   
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Red Social:
                        </div>
                        <div className="profile__info--item--data">
                            Facebook
                        </div>   
                    </div>
                    <div className="profile__info--button">
                        <Button type="secondary" style={{margin:"5px 0px 5px 0px"}} >
                            Cambiar de Contraseña
                        </Button>
                        <Button type="primary" style={{margin:"5px 0px 5px 0px"}} >
                            Historial de publicaciones
                        </Button>
                        <Button type="primary" style={{margin:"20px 8px 20px 8px"}} danger >
                            Eliminar Cuenta
                        </Button>
                    </div>
                </div>
            </div>
        </Wrapper> 

    );
};

export default Profile;