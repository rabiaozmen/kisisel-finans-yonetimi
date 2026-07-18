import React, { useState, useEffect } from 'react';
import { PlusCircle, Save, X, CreditCard } from 'lucide-react';

const CATEGORIES = {
  expense: [
    { value: 'Fatura & Aidat', label: '⚡ Fatura & Aidat' },
    { value: 'Market & Gıda', label: '🛒 Market & Gıda' },
    { value: 'Kira & Konut', label: '🏠 Kira & Konut' },
    { value: 'Ulaşım & Seyahat', label: '🚗 Ulaşım & Seyahat' },
    { value: 'Eğlence & Sosyal', label: '🎉 Eğlence & Sosyal' },
    { value: 'Sağlık & Kişisel Bakım', label: '❤️ Sağlık & Kişisel Bakım' },
    { value: 'Eğitim', label: '📚 Eğitim' },
    { value: 'Diğer (Gider)', label: '🏷️ Diğer (Gider)' }
  ],
  income: [
    { value: 'Maaş', label: '💼 Maaş' },
    { value: 'Freelance & Ek Gelir', label: '💻 Freelance & Ek Gelir' },
    { value: 'Yatırım', label: '📈 Yatırım' },
    { value: 'Burs & Hibe', label: '🎓 Burs & Hibe' },
    { value: 'Diğer (Gelir)', label: '🪙 Diğer (Gelir)' }
  ]
};

export default function ExpenseForm({ onSave, editingTransaction, onCancelEdit }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState(CATEGORIES.expense[0].value);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  // Düzenleme moduna geçildiğinde formu doldur
  useEffect(() => {
    if (editingTransaction) {
      setDescription(editingTransaction.description);
      setAmount(editingTransaction.amount);
      setType(editingTransaction.type);
      setCategory(editingTransaction.category);
      setDate(editingTransaction.date);
    } else {
      resetForm();
    }
  }, [editingTransaction]);

  // İşlem türü değiştiğinde varsayılan kategoriyi güncelle
  useEffect(() => {
    if (!editingTransaction) {
      setCategory(CATEGORIES[type][0].value);
    }
  }, [type, editingTransaction]);

  const resetForm = () => {
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory(CATEGORIES.expense[0].value);
    setDate(new Date().toISOString().split('T')[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount || parseFloat(amount) <= 0) return;

    const data = {
      description: description.trim(),
      amount: parseFloat(amount),
      type,
      category,
      date,
      id: editingTransaction ? editingTransaction.id : Date.now().toString()
    };

    onSave(data);
    resetForm();
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-indigo-400">
        <CreditCard size={20} />
        {editingTransaction ? 'İşlemi Düzenle' : 'Yeni İşlem Ekle'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* İşlem Türü Toggle */}
        <div>
          <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">İşlem Türü</label>
          <div className="grid grid-cols-2 gap-2 bg-slate-950/60 p-1 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                type === 'expense'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              Gider
            </button>
            <button
              type="button"
              onClick={() => setType('income')}
              className={`py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                type === 'income'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              Gelir
            </button>
          </div>
        </div>

        {/* Açıklama */}
        <div>
          <label htmlFor="description" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Açıklama</label>
          <input
            id="description"
            type="text"
            required
            placeholder="Örn: Market Alışverişi, Maaş Ödemesi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full glass-input px-4 py-2.5 text-sm"
          />
        </div>

        {/* Tutar ve Tarih */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="amount" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Tutar (TL)</label>
            <input
              id="amount"
              type="number"
              required
              min="0.01"
              step="any"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full glass-input px-4 py-2.5 text-sm"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Tarih</label>
            <input
              id="date"
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full glass-input px-4 py-2.5 text-sm"
            />
          </div>
        </div>

        {/* Kategori */}
        <div>
          <label htmlFor="category" className="block text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">Kategori</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full glass-input px-4 py-2.5 text-sm appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.2em'
            }}
          >
            {CATEGORIES[type].map((cat) => (
              <option key={cat.value} value={cat.value} className="bg-slate-900 text-slate-100">
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Butonlar */}
        <div className="flex gap-3 pt-2">
          {editingTransaction && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="flex-1 py-2.5 px-4 border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900 text-slate-300 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <X size={16} />
              İptal
            </button>
          )}
          <button
            type="submit"
            className="flex-1 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-600/10 transition-all duration-200 flex items-center justify-center gap-2"
          >
            {editingTransaction ? <Save size={16} /> : <PlusCircle size={16} />}
            {editingTransaction ? 'Güncelle' : 'Ekle'}
          </button>
        </div>
      </form>
    </div>
  );
}
