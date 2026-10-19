import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import type { LoginForm } from "../types";
import api from "../config/axios";
import { toast } from "sonner";
import { isAxiosError } from "axios";
export default function LoginView() {

  const initialState = {
    email:'',
    password:''
  }

  const {register, handleSubmit, formState:{errors} } = useForm<LoginForm>({defaultValues: initialState})

  const handleLogin = async(formData:LoginForm) =>{
   try {
      const {data} = await api.post(`/auth/login`, formData)
      toast.success(data.msg);
      
      
    } catch (error) {

      if (isAxiosError(error) && error.response) {
          toast.error(error.response.data.error);
      }
      
    }
  }

  return (
    <>
  
<h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-center">
    Iniciar Sesión
</h1>

<form
    onSubmit={handleSubmit(handleLogin)}
    className="bg-white px-8 py-10 rounded-2xl space-y-7 mt-8 border border-slate-200/80 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.12)]"
    noValidate
>
    <div className="grid grid-cols-1 gap-2">
        <label
            htmlFor="email"
            className="text-sm font-semibold tracking-wide text-slate-700"
        >
            E-mail
        </label>

        <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="w-full bg-slate-50/80 border border-slate-200 px-4 py-3.5 rounded-xl text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15"
            {...register("email", {
                required: "El Email es obligatorio",
                pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                },
            })}
        />

        {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
    </div>

    <div className="grid grid-cols-1 gap-2">
        <label
            htmlFor="password"
            className="text-sm font-semibold tracking-wide text-slate-700"
        >
            Contraseña
        </label>

        <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full bg-slate-50/80 border border-slate-200 px-4 py-3.5 rounded-xl text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:bg-white focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15"
            {...register("password", {
                required: "El Password es obligatorio",
            })}
        />

        {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
    </div>

    <input
        type="submit"
        className="w-full bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition-all duration-200 px-4 py-3.5 text-slate-900 text-sm uppercase tracking-wider rounded-xl font-bold cursor-pointer shadow-md shadow-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30"
        value="Iniciar sesión"
    />
</form>

<nav className="mt-7 text-center">
    <Link
        to="/auth/register"
        className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
    >
        ¿No tienes cuenta?{" "}
        <span className="font-bold text-cyan-600 hover:text-cyan-700 underline underline-offset-4 decoration-cyan-300">
            Crea una aquí
        </span>
    </Link>
</nav>

</>
  )
}
