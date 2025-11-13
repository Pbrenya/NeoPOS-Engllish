import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';

const InventoryLayout = () => {
  const t = useLanguageStore(state => state.t);
  
  return (
    <div className="p-6 bg-white rounded-xl shadow min-h-screen">
      <h2 className="text-2xl font-bold mb-6">{t('inventory')}</h2>
      <nav className="flex gap-4 mb-8 border-b pb-2 flex-wrap">
        <NavLink to="faire" className={({isActive}) => isActive ? 'font-bold text-blue-600' : ''}>{t('doInventory') || 'Do Inventory'}</NavLink>
        <NavLink to="liste" className={({isActive}) => isActive ? 'font-bold text-blue-600' : ''}>{t('inventoryList') || 'Inventory List'}</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default InventoryLayout;
