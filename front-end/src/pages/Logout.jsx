import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import { useLanguageStore } from '../stores/useLanguageStore';

function Logout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const t = useLanguageStore(state => state.t);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <form onSubmit={handleLogout} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-rose-700 mb-4">{t('disconnection')}</h2>
        <p className="text-center text-gray-700 mb-4">{t('confirmLogout') || 'Do you really want to log out?'}</p>
        <button type="submit" className="w-full py-2 rounded-lg bg-gradient-to-r from-rose-400 to-rose-600 text-white font-bold shadow hover:from-rose-500 hover:to-rose-700 transition">
          {t('logout')}
        </button>
      </form>
    </div>
  );
}

export default Logout;