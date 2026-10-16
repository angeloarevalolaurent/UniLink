
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import PasswordStrengthChecklist from "../components/PasswordStrengthCkeckList";
import type { RegisterForm } from "../types";
import axios, { isAxiosError } from "axios";

export default function RegisterView() {
  const initialState:RegisterForm ={
    name: '',
    email: '',
    handle:'',
    password:'',
    password_confirmation:''
  }

  const {register, watch, reset, handleSubmit,formState:{errors} } = useForm({defaultValues: initialState})

  const passwordValue = watch('password') || ''
  
  const handleRegister = async (formData: RegisterForm) =>{
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData)
      console.log(data);
      reset()
      
    } catch (error) {

      if (isAxiosError(error) && error.response) {
          console.log(error.response.data.error);
      }
      
    }
    
  }
  return (
    <>
      {/* Header */}
      <header className="mb-7 space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-cyan-400 sm:text-4xl">
          Crea tu cuenta
        </h1>

        <p className="max-w-md text-sm leading-6 text-slate-300">
          Reúne todos tus enlaces en un solo lugar y crea una página
          que represente tu identidad digital.
        </p>
      </header>

      {/* Form */}
      <section className="rounded-3xl border border-cyan-400/20 bg-slate-900/90 p-6 shadow-2xl shadow-black/20 transition-colors duration-300 hover:border-cyan-400/30 sm:p-8">
        <form className="space-y-5" onSubmit={handleSubmit(handleRegister)}>
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-200"
            >
              Nombre completo
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Angelo Arévalo"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
              {...register('name', {
                  required:'El nombre es obligatorio'
                })}
           />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-200"
            >
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
               {...register("email", {
                  required: "El Email es Obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email No Válido'
                  }
                })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
   
          </div>

          {/* Custom URL */}
          <div className="space-y-2">
            <label
              htmlFor="handle"
              className="block text-sm font-medium text-slate-200"
            >
              Tu nombre de usuario
            </label>

            <div className="flex overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 transition hover:border-white/20 focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-400/10">
              <span className="flex shrink-0 items-center border-r border-white/10 px-3 text-xs text-cyan-400 sm:px-4 sm:text-sm">
                unilink.to/
              </span>

              <input
                id="handle"
                type="text"
                placeholder="angelo-arevalo"
                className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 sm:px-4"
                 {...register('handle', {
                  required:'Tu nombre de usuario es obligatorio'
                })}
              />
              
            </div>
            {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
            <p className="text-xs leading-5 text-slate-400">
              Tu enlace personalizado para compartir todas tus redes.
            </p>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-200"
            >
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="Mínimo 8 caracteres"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                 {...register('password', {
                  required:'Tu contraseña es obligatorio',
                  minLength:{
                    value: 8,
                    message:'La contraseña debe ser de mínimo 8 caracteres'
                  }
                })}
            />
              <PasswordStrengthChecklist  password={passwordValue} />
             {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-slate-200"
            >
              Confirmar contraseña
            </label>

            <input
              id="password_confirmation"
              type="password"
              autoComplete="new-password"
              placeholder="Repite tu contraseña"
              className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 hover:border-white/20 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
               {...register('password_confirmation', {
                  required:'Repetir contraseña es obligatorio',
                  validate: value => value === passwordValue || 'Las contraseñas no coinciden'
                })}
            />
             {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
          </div>

          {/* Primary CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-200 hover:bg-cyan-300 hover:shadow-cyan-400/20 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/30"
            >
              Crear mi cuenta

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>

          <p className="text-center text-xs leading-5 text-slate-400">
            Al registrarte, aceptas nuestros términos de servicio
            y política de privacidad.
          </p>
        </form>
      </section>

      {/* Login */}
      <div className="mt-7 border-t border-white/10 pt-6 text-center">
        <p className="text-sm text-slate-300">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:underline"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </>
  );
}
