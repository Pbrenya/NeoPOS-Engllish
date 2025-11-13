import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLanguageStore } from "../stores/useLanguageStore";

function Suppliers() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const t = useLanguageStore(state => state.t);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/pamoja/api/suppliers");
      if (Array.isArray(res.data)) {
        setSuppliers(res.data);
      } else {
        setSuppliers([]);
      }
    } catch (e) {
      console.error(t('errorFetchingSuppliers'), e);
      setSuppliers([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pamoja/api/suppliers", {
        name,
        contact,
        address,
      });
      setMessage(t('supplierCreatedSuccess'));
      setName("");
      setContact("");
      setAddress("");
      fetchSuppliers();
    } catch (err) {
      console.error(t('errorCreatingSupplier'), err);
      setMessage(t('errorCreatingSupplier'));
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow min-h-screen">
      <h2 className="text-2xl font-bold mb-6">{t('suppliers')}</h2>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 rounded-xl shadow-lg mb-8 border border-rose-200"
      >
        <div className="mb-5">
          <label
            className="block mb-2 font-semibold tracking-wide"
            htmlFor="name"
          >
            {t('supplierName') || t('name')}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border-2 border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white transition"
            placeholder={t('enterName') || 'Enter name...'}
            required
          />
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 font-semibold tracking-wide"
            htmlFor="contact"
          >
            {t('contact')}
          </label>
          <input
            id="contact"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-4 py-2 border-2 border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white transition"
            placeholder={t('phoneOrEmail') || 'Phone or email...'}
          />
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 font-semibold tracking-wide"
            htmlFor="address"
          >
            {t('address')}
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border-2 border-rose-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white transition"
            placeholder={t('supplierAddress') || 'Supplier address...'}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-rose-400 to-rose-600 text-white font-bold shadow hover:from-rose-500 hover:to-rose-700 transition"
        >
          {t('save')}
        </button>

        {message && (
          <div className="mt-3 text-center text-green-600 font-semibold animate-pulse">
            {message}
          </div>
        )}
      </form>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="table w-full border border-rose-200">
          <thead className="bg-rose-50">
            <tr>
              <th className="border border-rose-200">{t('name')}</th>
              <th className="border border-rose-200">{t('contact')}</th>
              <th className="border border-rose-200">{t('address')}</th>
              <th className="border border-rose-200">{t('creationDate') || 'Creation Date'}</th>
            </tr>
          </thead>
          <tbody>
            {suppliers && suppliers.length > 0 ? (
              suppliers.map((s) => (
                <tr key={s.id} className="hover:bg-rose-50">
                  <td className="border border-rose-100">{s.name}</td>
                  <td className="border border-rose-100">{s.contact}</td>
                  <td className="border border-rose-100">{s.address}</td>
                  <td className="border border-rose-100">
                    {s.createdAt
                      ? new Date(s.createdAt).toLocaleDateString()
                      : ""}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  {t('noSupplier')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Suppliers;
