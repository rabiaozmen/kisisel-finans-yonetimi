import React from 'react';
import { PieChart, AlertCircle } from 'lucide-react';

export default function CategoryBreakdown({ transactions = [] }) {
  // Sadece giderleri filtrele
  const expenses = transactions.filter((t) => t.type === 'expense');

  // Toplam gider tutarını hesapla
  const totalExpense = expenses.reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);

  // Kategorilere göre harcamaları topla
  const categorySums = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + parseFloat(t.amount);
    return acc;
  }, {});

  // Dizi formatına çevir ve tutara göre büyükten küçüğe sırala
  const breakdown = Object.entries(categorySums)
    .map(([category, amount]) => {
      const percentage = totalExpense > 0 ? (amount / totalExpense) * 100 : 0;
      return { category, amount, percentage };
    })
    .sort((a, b) => b.amount - a.amount);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY'
    }).format(val);
  };

  return (
    <div className="glass-card p-6 h-full flex flex-col justify-between animate-fade-in">
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-indigo-400">
          <PieChart size={20} />
          Kategori Dağılımı (Giderler)
        </h2>

        {breakdown.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl bg-slate-900/10">
            <p className="text-slate-500 text-sm">Grafik için gider eklemeniz gerekmektedir.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {breakdown.map((item) => (
              <div key={item.category} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{item.category}</span>
                  <div className="space-x-2">
                    <span className="text-slate-400 text-xs">({item.percentage.toFixed(0)}%)</span>
                    <span className="text-slate-200 font-semibold">{formatCurrency(item.amount)}</span>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-950 rounded-full h-2 border border-slate-900 overflow-hidden">
                  <div
                    className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {breakdown.length > 0 && (
        <div className="mt-6 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-start gap-3">
          <AlertCircle size={18} className="text-indigo-400 mt-0.5 shrink-0" />
          <p className="text-xs text-slate-400 leading-relaxed">
            En çok harcama yaptığınız kategori <strong className="text-indigo-300">{breakdown[0].category}</strong>. 
            Bu kategori toplam giderlerinizin <strong className="text-indigo-300">%{breakdown[0].percentage.toFixed(0)}</strong>'ini oluşturuyor.
          </p>
        </div>
      )}
    </div>
  );
}
