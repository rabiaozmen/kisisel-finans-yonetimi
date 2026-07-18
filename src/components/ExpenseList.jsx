import React, { useState } from 'react';
import { Search, Filter, Edit2, Trash2, Calendar, Tag, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function ExpenseList({ transactions = [], onEdit, onDelete }) {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Para birimi formatlama
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(val);
  };

  // Tarih formatlama
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const dateObj = new Date(dateStr);
    return dateObj.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filtreler için mevcut benzersiz kategorileri al
  const availableCategories = Array.from(
    new Set(transactions.map((t) => t.category))
  );

  // Filtrelenmiş işlemler listesi
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.description.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'all' || t.type === typeFilter;
    const matchesCategory = categoryFilter === 'all' || t.category === categoryFilter;
    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-indigo-400">
          <Filter size={20} />
          İşlem Geçmişi
        </h2>

        {/* Filtreleme ve Arama Paneli */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
          {/* Arama Kutusu */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="İşlem ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full glass-input pl-9 pr-4 py-2 text-sm"
            />
          </div>

          {/* Tür Filtresi */}
          <select
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              setCategoryFilter('all');
            }}
            className="glass-input px-3 py-2 text-sm cursor-pointer"
          >
            <option value="all" className="bg-slate-900 text-slate-100">Tüm Türler</option>
            <option value="expense" className="bg-slate-900 text-slate-100">Giderler</option>
            <option value="income" className="bg-slate-900 text-slate-100">Gelirler</option>
          </select>

          {/* Kategori Filtresi */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="glass-input px-3 py-2 text-sm cursor-pointer"
          >
            <option value="all" className="bg-slate-900 text-slate-100">Tüm Kategoriler</option>
            {availableCategories.map((cat) => (
              <option key={cat} value={cat} className="bg-slate-900 text-slate-100">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tablo Listesi */}
      {filteredTransactions.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl bg-slate-900/10">
          <p className="text-slate-500 text-sm">Hiçbir işlem kaydı bulunamadı.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                <th className="pb-3 pl-2">Açıklama</th>
                <th className="pb-3">Kategori</th>
                <th className="pb-3">Tarih</th>
                <th className="pb-3 text-right">Tutar</th>
                <th className="pb-3 text-right pr-2">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {filteredTransactions.map((t) => (
                <tr
                  key={t.id}
                  className="group hover:bg-slate-900/30 transition-colors duration-150"
                >
                  {/* Açıklama ve İkon */}
                  <td className="py-4 pl-2 font-medium text-slate-100">
                    <div className="flex items-center gap-3">
                      <span
                        className={`p-2 rounded-lg ${
                          t.type === 'income'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-rose-500/10 text-rose-400'
                        }`}
                      >
                        {t.type === 'income' ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                      </span>
                      <span className="truncate max-w-[150px] sm:max-w-[200px]" title={t.description}>
                        {t.description}
                      </span>
                    </div>
                  </td>

                  {/* Kategori */}
                  <td className="py-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Tag size={14} className="text-slate-500" />
                      <span>{t.category}</span>
                    </div>
                  </td>

                  {/* Tarih */}
                  <td className="py-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-slate-500" />
                      <span>{formatDate(t.date)}</span>
                    </div>
                  </td>

                  {/* Tutar */}
                  <td
                    className={`py-4 text-right font-semibold ${
                      t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
                  </td>

                  {/* Düzenle & Sil */}
                  <td className="py-4 text-right pr-2">
                    <div className="flex items-center justify-end gap-1 sm:gap-2">
                      <button
                        onClick={() => onEdit(t)}
                        title="Düzenle"
                        className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800/50 rounded-lg transition-all duration-150"
                      >
                        <Edit2 size={15} />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Bu işlemi silmek istediğinize emin misiniz?')) {
                            onDelete(t.id);
                          }
                        }}
                        title="Sil"
                        className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800/50 rounded-lg transition-all duration-150"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
