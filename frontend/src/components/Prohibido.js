import Wrapper2 from "./Wrapper2";
import {Link} from "react-router-dom";

const Prohibido = () => {
  return (     
    <Wrapper2>
        <Link to={"/IniciarSesion"}>
          <div className="post__prohibe">
              <p className="post__done--sentence">¡DEBE INGRESAR PARA VER ESTE TIPO DE CONTENIDO!</p>
          </div>
        </Link>
    </Wrapper2> 

  );
};

export default Prohibido;