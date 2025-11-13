// languageStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Translations object
const translations = {
  en: {
    // Sidebar navigation
    home: "Home",
    cashier: "Cashier",
    sales: "Sales",
    stocks: "Stocks",
    inventory: "Inventory",
    statistics: "Statistics",
    suppliers: "Suppliers",
    reports: "Reports",
    settings: "Settings",
    logout: "Logout",
    
    // Common terms
    articles: "Articles",
    article: "Article",
    actions: "Actions",
    add: "Add",
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    cancel: "Cancel",
    search: "Search",
    filter: "Filter",
    export: "Export",
    import: "Import",
    print: "Print",
    download: "Download",
    confirm: "Confirm",
    close: "Close",
    yes: "Yes",
    no: "No",
    
    // Navbar
    lowStockAlert: "low on Stock",
    lowStockAlerts: "low on Stocks",
    noLowStock: "No items low on Stock",
    connectedUser: "Connected User",
    notConnected: "Not Connected",
    role: "Role",
    closeModal: "Close modal",
    
    // Cart
    cart: "Cart",
    noArticles: "No articles",
    total: "Total",
    checkout: "Checkout",
    
    // Alerts
    stockDepleted: "Stock depleted for this item!",
    
    // Login
    connection: "Login",
    email: "Email",
    password: "Password",
    rememberMe: "Remember me",
    login: "Log in",
    invalidCredentials: "Invalid credentials",
    
    // Reports
    salesReport: "Sales Report",
    zoneTransferReport: "Zone Transfer Report",
    inventoryReport: "Inventory Report",
    modificationReport: "Modification Report",
    
    // Export
    todaySales: "Today's sales",
    lastWeekSales: "Last week's sales",
    lastMonthSales: "Last month's sales",
    currentMonthSales: "Current month's sales",
    totalSold: "Total articles sold",
    bestSeller: "Best seller",
    none: "None",
    salesStatistics: "Sales Statistics",
    
    // Suppliers
    noSupplier: "No supplier",
    
    // Sales
    saleStatistics: "Sales Statistics",
    bestArticle: "Best article",
    noSales: "No sales to print",
    salesList: "Sales list",
    salesGroupedByArticle: "Sales list (grouped by article)",
    errorLoadingSales: "Error loading sales",
    
    // Inventory
    noInventory: "No inventory",
    modifyStock: "Modify Stock",
    noStockLineToModify: "No stock line to modify",
    noStockLineToDelete: "No stock line to delete",
    
    // Statistics
    
    // Filters
    noArticleFound: "No article found.",
    
    // PDF/Excel exports
    salesReportPdf: "sales-report.pdf",
    salesReportExcel: "sales-report.xlsx",
    salesPdf: "sales.pdf",
    salesExcel: "sales.xlsx",
    
    // Logout
    disconnection: "Logout",
    confirmLogout: "Do you really want to log out?",
    
    // Error messages
    errorFetchingReport: "Error fetching report",
    noDataForFilters: "No data for selected filters",
    noData: "No data",
  },
  fr: {
    // Sidebar navigation
    home: "Accueil",
    cashier: "Caisse",
    sales: "Ventes",
    stocks: "Stocks",
    inventory: "Inventaire",
    statistics: "Statistiques",
    suppliers: "Fournisseurs",
    reports: "Rapports",
    settings: "Reglages",
    logout: "Déconnexion",
    
    // Common terms
    articles: "Articles",
    article: "Article",
    actions: "Actions",
    add: "Ajouter",
    edit: "Modifier",
    delete: "Supprimer",
    save: "Enregistrer",
    cancel: "Annuler",
    search: "Rechercher",
    filter: "Filtrer",
    export: "Exporter",
    import: "Importer",
    print: "Imprimer",
    download: "Télécharger",
    confirm: "Confirmer",
    close: "Fermer",
    yes: "Oui",
    no: "Non",
    
    // Navbar
    lowStockAlert: "à court de Stocks",
    lowStockAlerts: "à court de Stocks",
    noLowStock: "Aucun article à court de Stocks",
    connectedUser: "Utilisateur connecté",
    notConnected: "Non connecté",
    role: "Rôle",
    closeModal: "Fermer le modal",
    
    // Cart
    cart: "Panier",
    noArticles: "Aucun article",
    total: "Total",
    checkout: "Valider",
    
    // Alerts
    stockDepleted: "Stock épuisé pour cet article !",
    
    // Login
    connection: "Connexion",
    email: "Email",
    password: "Mot de passe",
    rememberMe: "Se souvenir de moi",
    login: "Se connecter",
    invalidCredentials: "Identifiants invalides",
    
    // Reports
    salesReport: "Rapport de ventes",
    zoneTransferReport: "Rapport de transfert de zone",
    inventoryReport: "Rapport d'inventaire",
    modificationReport: "Rapport de modifications",
    
    // Export
    todaySales: "Ventes aujourd'hui",
    lastWeekSales: "Ventes semaine dernière",
    lastMonthSales: "Ventes mois précédent",
    currentMonthSales: "Ventes ce mois",
    totalSold: "Total articles vendus",
    bestSeller: "Meilleur article",
    none: "Aucun",
    salesStatistics: "Statistiques des ventes",
    
    // Suppliers
    noSupplier: "Aucun fournisseur",
    
    // Sales
    saleStatistics: "Statistiques des ventes",
    bestArticle: "Meilleur article",
    noSales: "Aucune vente à imprimer.",
    salesList: "Liste des ventes",
    salesGroupedByArticle: "Liste des ventes (regroupées par article)",
    errorLoadingSales: "Erreur lors du chargement des ventes",
    
    // Inventory
    noInventory: "Aucun inventaire",
    modifyStock: "Modifier Stock",
    noStockLineToModify: "Aucune ligne de stock à modifier",
    noStockLineToDelete: "Aucune ligne de stock à supprimer",
    
    // Statistics
    
    // Filters
    noArticleFound: "Aucun article trouvé.",
    
    // PDF/Excel exports
    salesReportPdf: "rapport-ventes.pdf",
    salesReportExcel: "rapport-ventes.xlsx",
    salesPdf: "ventes.pdf",
    salesExcel: "ventes.xlsx",
    
    // Logout
    disconnection: "Déconnexion",
    confirmLogout: "Voulez-vous vraiment vous déconnecter ?",
    
    // Error messages
    errorFetchingReport: "Erreur lors de la récupération du rapport",
    noDataForFilters: "Aucune donnée pour les filtres sélectionnés.",
    noData: "Aucune donnée",
  }
};

export const useLanguageStore = create(
  persist(
    (set, get) => ({
      language: 'en', // default language
      translations: translations,
      
      setLanguage: (lang) => {
        set({ language: lang });
        // Update HTML lang attribute
        document.documentElement.lang = lang;
      },
      
      toggleLanguage: () => {
        const currentLang = get().language;
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        get().setLanguage(newLang);
      },
      
      t: (key) => {
        const lang = get().language;
        return translations[lang]?.[key] || key;
      }
    }),
    {
      name: 'language-storage',
    }
  )
);
