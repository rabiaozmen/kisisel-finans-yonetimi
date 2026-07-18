import React, { useState, useEffect } from 'react';
import { Coins } from 'lucide-react';
import DashboardSummary from './components/DashboardSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import CategoryBreakdown from './components/CategoryBreakdown';
import QuickStats from './components/QuickStats';

const SAMPLE_TRANSACTIONS = [
  { id: '1', description: 'Maaş Ödemesi', amount: 32000, type: 'income', category: 'Maaş', date: '2026-07-01' },
  { id: '2', description: 'Ev Kirası', amount: 12000, type: 'expense', category: 'Kira & Konut', date: '2026-07-02' },
  { id: '3', description: 'Haftalık Market Alışverişi', amount: 2450.50, type: 'expense', category: 'Market & Gıda', date: '2026-07-10' },
  { id: '4', description: 'Freelance Web Tasarım', amount: 8500, type: 'income', category: 'Freelance & Ek Gelir', date: '2026-07-12' },
  { id: '5', description: 'Elektrik & İnternet Faturası', amount: 1850, type: 'expense', category: 'Fatura & Aidat', date: '2026-07-15' },
];

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('kurus_transactions');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing local storage transactions:', e);
      }
    }
    return SAMPLE_TRANSACTIONS;
  });

  const [editingTransaction, setEditingTransaction] = useState(null);

  // Verileri LocalStorage ile senkronize et
  useEffect(() => {
    localStorage.setItem('kurus_transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Ekleme ve Güncelleme işlemi (CRUD - Create & Update)
  const handleSaveTransaction = (transactionData) => {
    if (editingTransaction) {
      // Güncelleme
      setTransactions((prev) =>
        prev.map((t) => (t.id === transactionData.id ? transactionData : t))
      );
      setEditingTransaction(null);
    } else {
      // Ekleme (en başa ekle)
      setTransactions((prev) => [transactionData, ...prev]);
    }
  };

  // Düzenleme modunu açma
  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    // Mobilde formu görünür kılmak için yukarı kaydır
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Düzenleme modundan çıkma
  const handleCancelEdit = () => {
    setEditingTransaction(null);
  };

  // Silme işlemi (CRUD - Delete)
  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    if (editingTransaction && editingTransaction.id === id) {
      setEditingTransaction(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Üst Başlık (Header) */}
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-900">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600/20 p-2.5 rounded-2xl border border-indigo-500/30 text-indigo-400">
            <Coins size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white m-0">Bütçem</h1>
            <p className="text-slate-400 text-sm mt-0.5">Kişisel Finans ve Gider Takipçisi</p>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300">
            LocalStorage Modu Etkin
          </span>
        </div>
      </header>

      {/* Dashboard Özet Kartları */}
      <DashboardSummary transactions={transactions} />

      {/* Grid Yapısı */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sol Kolon: Form ve Kategori Dağılımı */}
        <div className="lg:col-span-4 space-y-8">
          <ExpenseForm
            onSave={handleSaveTransaction}
            editingTransaction={editingTransaction}
            onCancelEdit={handleCancelEdit}
          />
          <CategoryBreakdown transactions={transactions} />
        </div>

        {/* Sağ Kolon: Gider Listesi ve İstatistikler */}
        <div className="lg:col-span-8 space-y-8">
          <ExpenseList
            transactions={transactions}
            onEdit={handleEditTransaction}
            onDelete={handleDeleteTransaction}
          />
          <QuickStats transactions={transactions} />
        </div>
      </div>

      {/* Alt Bilgi (Footer) */}
      <footer className="mt-16 pt-8 border-t border-slate-900/60 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Bütçem Finance App. Tüm Hakları Saklıdır.</p>
        <p className="mt-1.5">Modern React & Tailwind CSS ile geliştirilmiştir.</p>
      </footer>
    </div>
  );
}

export default App;
