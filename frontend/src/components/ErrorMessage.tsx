import type { ReactNode } from "react";

export default function ErrorMessage({children} : {children: ReactNode}) {

  return (
    <>
       <div className="flex items-center gap-2.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 p-3.5 rounded-xl text-xs font-semibold tracking-wide animate-fade-in shadow-sm">
            <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-rose-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="9" />
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01"
                />
            </svg>
            <span>{children}</span>
        </div>
    </>
  )
}
