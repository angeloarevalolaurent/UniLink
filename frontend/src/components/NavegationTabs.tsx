import { BookmarkSquareIcon, UserIcon } from '@heroicons/react/20/solid'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const tabs = [
    { name: 'Links', href: '/admin', icon: BookmarkSquareIcon },
    { name: 'Mi Perfil', href: '/admin/profile', icon: UserIcon },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavigationTabs() {
    const location = useLocation()
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(e.target.value)
    }

    return (
        <div className='mb-8'>
            {/* Vista Mobile */}
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Seleccionar pestaña
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-xl border border-slate-200 bg-white p-3 font-semibold text-slate-700 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    onChange={ handleChange }
                    value={ location.pathname }
                >
                    {tabs.map((tab) => (
                        <option 
                            value={tab.href}
                            key={tab.name}
                        >
                            {tab.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Vista Desktop */}
            <div className="hidden sm:block">
                <div className="border-b border-slate-200/80">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => {
                            const isActive = location.pathname === tab.href
                            
                            return (
                                <Link
                                    key={tab.name}
                                    to={tab.href}
                                    className={classNames(
                                        isActive
                                            ? 'border-cyan-500 text-cyan-600 font-extrabold'
                                            : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800 font-semibold',
                                        'group inline-flex items-center border-b-2 py-3 px-1 text-base transition-all duration-150'
                                    )}
                                >
                                    <tab.icon
                                        className={classNames(
                                            isActive 
                                                ? 'text-cyan-500' 
                                                : 'text-slate-400 group-hover:text-slate-600',
                                            '-ml-0.5 mr-2.5 h-5 w-5 transition-colors'
                                        )}
                                        aria-hidden="true"
                                    />
                                    <span>{tab.name}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </div>
    )
}