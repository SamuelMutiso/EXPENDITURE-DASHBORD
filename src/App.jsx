import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Wallets from './pages/Wallets';
import Transactions from './pages/Transactions';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="wallets" element={<Wallets />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="categories" element={<div className="p-10 text-3xl font-black uppercase text-slate-300">Categories Coming Soon</div>} />
        <Route path="profile" element={<div className="p-10 text-3xl font-black uppercase text-slate-300">Profile Coming Soon</div>} />
      </Route>
    </Routes>
  );
}