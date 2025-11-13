import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';

const Reports = () => {
  const t = useLanguageStore(state => state.t);

  const navItems = [
    { to: 'sales', labelKey: 'salesReport' },
    { to: 'zone-transfer', labelKey: 'zoneTransferReport' },
    { to: 'inventory', labelKey: 'inventoryReport' },
    { to: 'crud-log', labelKey: 'modificationReport' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t('reports')}</h1>
      <nav className="flex gap-4 mb-6">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded ${isActive ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`
            }
            end
          >
            {t(item.labelKey)}
          </NavLink>
        ))}
      </nav>
      <div className="bg-white rounded-xl shadow p-4 min-h-[400px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Reports;