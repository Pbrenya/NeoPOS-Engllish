import React from 'react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguageStore();
  
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border hover:bg-gray-100 transition-colors"
      title={`Current: ${language === 'en' ? 'English' : 'Français'}`}
    >
      <Languages className="w-5 h-5 text-zinc-500" />
      <span className="text-sm font-medium text-zinc-700 uppercase">
        {language}
      </span>
    </button>
  );
};

export default LanguageToggle;
