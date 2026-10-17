
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function AuthLayout() {
  return (
    <>
      <div className="min-h-screen bg-slate-800 px-5 text-white">
        <div className="mx-auto max-w-lg pt-8 sm:pt-10">

          {/* Brand */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <img
              src="/logo.png"
              alt="Logo UniLink"
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />

            <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Uni<span className="text-cyan-400">Link</span>
            </span>
          </div>

          {/* Auth Pages */}
          <div className="py-6 sm:py-8">
            <Outlet />

            <footer className="mt-8 border-t border-white/10 pt-5 text-center">
              <p className="text-xs tracking-wide text-slate-400">
                Tu presencia digital, en un solo lugar.
              </p>
            </footer>
          </div>

        </div>
      </div>

      <Toaster position="top-right"/>
    
    </>

  );
}
