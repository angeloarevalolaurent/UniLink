import { Link } from "react-router-dom";

export default function LoginView() {

  return (
    <>
      <h1 className="text-4xl font-bold text-center">Iniciar Sesión</h1>

      <nav className="mt-10">
        <Link to={'/auth/register'} className=" text-center font-bold block">
            ¿No tienes Cuenta? Crea una aquí
        </Link>
      </nav>
    </>
  )
}
