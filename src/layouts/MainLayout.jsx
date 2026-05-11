import { NavLink, Outlet } from 'react-router-dom';
import { Home, Wallet, LayoutGrid, ReceiptText, User } from 'lucide-react';

const links = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/wallets', icon: Wallet, label: 'Wallets' },
  { path: '/categories', icon: LayoutGrid, label: 'Categories' },
  { path: '/transactions', icon: ReceiptText, label: 'Transactions' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col fixed h-full z-10">
        <div className="p-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
             <Wallet className="text-white" size={24} />
          </div>
          <p className="mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Overview</p>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {links.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all ${
                isActive ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <link.icon size={20} />
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 ml-64 p-12">
        <Outlet />
      </main>
    </div>
  );
}