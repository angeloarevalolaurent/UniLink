type PasswordChecklistProps = {
    password: string;
};

export default function PasswordStrengthChecklist({ password }: PasswordChecklistProps) {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        <div className="grid grid-cols-2 gap-2.5 pt-2">
            <div className={`flex items-center gap-2 text-xs transition-all duration-300 ${hasMinLength ? 'text-emerald-400 font-medium' : 'text-slate-500'}`}>
                <span className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] transition-colors ${hasMinLength ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'bg-slate-800 text-slate-500'}`}>
                    {hasMinLength ? '✓' : '•'}
                </span>
                <span>Mínimo 8 caracteres</span>
            </div>

            <div className={`flex items-center gap-2 text-xs transition-all duration-300 ${hasUpperCase ? 'text-emerald-400 font-medium' : 'text-slate-500'}`}>
                <span className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] transition-colors ${hasUpperCase ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'bg-slate-800 text-slate-500'}`}>
                    {hasUpperCase ? '✓' : '•'}
                </span>
                <span>Una mayúscula</span>
            </div>

            <div className={`flex items-center gap-2 text-xs transition-all duration-300 ${hasLowerCase ? 'text-emerald-400 font-medium' : 'text-slate-500'}`}>
                <span className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] transition-colors ${hasLowerCase ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'bg-slate-800 text-slate-500'}`}>
                    {hasLowerCase ? '✓' : '•'}
                </span>
                <span>Una minúscula</span>
            </div>

            <div className={`flex items-center gap-2 text-xs transition-all duration-300 ${hasNumber ? 'text-emerald-400 font-medium' : 'text-slate-500'}`}>
                <span className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] transition-colors ${hasNumber ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'bg-slate-800 text-slate-500'}`}>
                    {hasNumber ? '✓' : '•'}
                </span>
                <span>Un número</span>
            </div>
        </div>
    );
}