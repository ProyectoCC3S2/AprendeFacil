import { Form, Input, Button, Image, Empty } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Wrapper from "./Wrapper";


const Profile = () => {
    let usuariobj = localStorage.getItem("usuario")
    let usuario = JSON.parse(usuariobj)
    const getData = () =>{
       console.log(usuariobj)
    }
    getData()
    return (     
        <Wrapper>
            
            <div className="profile">
                {/* Se usa para ver la foto de perfil*/}
                <div className="profile__avatar" >
                    <div>
                        {/*La Imagen por defecto es sacada de internet*/}
                        <Image width="80%" src={usuario.photo}>                        
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
                        {usuario.nickname}
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Nombres:
                        </div>
                        <div className="profile__info--item--data">
                            {usuario.first_name}
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Apellidos:
                        </div>
                        <div className="profile__info--item--data">
                        {usuario.last_name}
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Telefono:
                        </div>
                        <div className="profile__info--item--data">
                        {usuario.phone}
                        </div>
                    </div>
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Correo:
                        </div>
                        <div className="profile__info--item--data">
                        {usuario.email}
                        </div>   
                    </div>
                    {/*
                    <div className="profile__info--item">
                        <div className="profile__info--item--label">
                            Red Social:
                        </div>
                        <div className="profile__info--item--data">
                            Facebook
                        </div>   
                    </div>
                    */}
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