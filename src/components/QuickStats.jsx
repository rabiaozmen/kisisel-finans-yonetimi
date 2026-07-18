import React from 'react';
import { BarChart2, PiggyBank, Flame, Hash } from 'lucide-react';

export default function QuickStats({ transactions = [] }) {
  const expenses = transactions.filter((t) => t.type === 'expense');
  const incomes = transactions.filter((t) => t.type === 'income');
  
  const totalIncome = incomes.reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
  const totalExpense = expenses.reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
  const netBalance = totalIncome - totalExpense;

  // 1. Tasarruf Oranı (%)
  const savingsRate = totalIncome > 0 ? Math.max(0, (netBalance / totalIncome) * 100) : 0;

  // 2. Günlük Ortalama Harcama
  const uniqueExpenseDays = Array.from(new Set(expenses.map(t => t.date)));
  const dailyAverageExpense = uniqueExpenseDays.length > 0 
    ? totalExpense / uniqueExpenseDays.length 
    : 0;

  // 3. En Yüksek Harcama
  const highestExpenseItem = expenses.length > 0 
    ? expenses.reduce((max, t) => parseFloat(t.amount) > parseFloat(max.amount) ? t : max, expenses[0])
    : null;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(val);
  };

  return (
    <div className="glass-card p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-indigo-400">
        <BarChart2 size={20} />
        Hızlı İstatistikler
      </h2>

      {transactions.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-slate-800 rounded-xl bg-slate-900/10">
          <p className="text-slate-500 text-sm">İstatistikler için işlem eklemeniz gerekmektedir.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 text-left">
          {/* Tasarruf Oranı */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider">Tasarruf Oranı</span>
              <PiggyBank size={16} className="text-emerald-400" />
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-100">%{savingsRate.toFixed(0)}</span>
              <p className="text-[9px] text-slate-500 mt-1 leading-normal">Kalan gelirin toplam gelire oranı</p>
            </div>
          </div>

          {/* Günlük Ortalama Harcama */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider">Günlük Ort. Gider</span>
              <Hash size={16} className="text-indigo-400" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-100 truncate block">{formatCurrency(dailyAverageExpense)}</span>
              <p className="text-[9px] text-slate-500 mt-1 leading-normal">Gider yapılan günlerin ortalaması</p>
            </div>
          </div>

          {/* En Yüksek Harcama */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 col-span-2 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider">En Yüksek Harcama</span>
              <Flame size={16} className="text-rose-400" />
            </div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-lg font-bold text-slate-100">
                  {highestExpenseItem ? formatCurrency(highestExpenseItem.amount) : '0,00 ₺'}
                </span>
                <p className="text-xs text-slate-400 mt-0.5 truncate max-w-[150px]" title={highestExpenseItem ? highestExpenseItem.description : ''}>
                  {highestExpenseItem ? highestExpenseItem.description : '-'}
                </p>
              </div>
              <span className="text-[9px] text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-0.5 rounded-full shrink-0 mb-0.5">
                {highestExpenseItem ? highestExpenseItem.category : 'Yok'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
