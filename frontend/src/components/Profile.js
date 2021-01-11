import { Form, Input, Button, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";

const Profile = () => {

    return (     
        <Wrapper>
            
            <div className="profile">
                {/* Se usa para ver la foto de perfil*/}
                <div className="profile__avatar" >
                    <div>
                        <Image width="80%" src="https://scontent.flim2-2.fna.fbcdn.net/v/t31.0-8/10865941_840129099386712_2631633907601281414_o.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_ohc=gLUn93TbbRgAX8ZV-5R&_nc_ht=scontent.flim2-2.fna&oh=3e72875b222ddf553f93d2b4964783f0&oe=60220E11"
                            alt="foto-perfil">
                        </Image>
                    </div>
                    <div>
                        <Button type="primary" style={{margin:"5px 0px 5px 0px"}} size="small">
                            Cambiar Foto
                        </Button>
                    </div>
                </div>
                {/* Se usa para ver la información de perfil*/}
                <div className="profile__info">
                    <div className="profile__info--tittle">Información de Usuario</div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Nombres:
                        </div>
                        <div className="profile__info--item--data">
                            Nombre1 Nombre2
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Apellidos:
                        </div>
                        <div className="profile__info--item--data">
                            Apellido1 Apellido2
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
                            prototipo@uni.pe
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