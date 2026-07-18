import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';

export default function DashboardSummary({ transactions = [] }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

  const netBalance = totalIncome - totalExpense;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
    }).format(val);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Toplam Bakiye */}
      <div className="glass-card p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Wallet size={80} className="text-indigo-400" />
        </div>
        <div className="flex items-center gap-3 mb-2 text-slate-400 text-sm font-medium">
          <Wallet size={18} className="text-indigo-400" />
          <span>Toplam Bakiye</span>
        </div>
        <h3 className={`text-3xl font-bold tracking-tight ${netBalance >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
          {formatCurrency(netBalance)}
        </h3>
        <p className="text-slate-500 text-xs mt-2">Gelirleriniz ile giderlerinizin farkı</p>
      </div>

      {/* Toplam Gelir */}
      <div className="glass-card p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <TrendingUp size={80} className="text-emerald-400" />
        </div>
        <div className="flex items-center gap-3 mb-2 text-slate-400 text-sm font-medium">
          <TrendingUp size={18} className="text-emerald-400" />
          <span>Toplam Gelir</span>
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-emerald-400">
          {formatCurrency(totalIncome)}
        </h3>
        <p className="text-slate-500 text-xs mt-2">Kasanıza giren toplam tutar</p>
      </div>

      {/* Toplam Gider */}
      <div className="glass-card p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <TrendingDown size={80} className="text-rose-400" />
        </div>
        <div className="flex items-center gap-3 mb-2 text-slate-400 text-sm font-medium">
          <TrendingDown size={18} className="text-rose-400" />
          <span>Toplam Gider</span>
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-rose-400">
          {formatCurrency(totalExpense)}
        </h3>
        <p className="text-slate-500 text-xs mt-2">Kasanızdan çıkan toplam tutar</p>
      </div>
    </div>
  );
}
