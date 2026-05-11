export default function Transactions() {
  const transactions = [
    { id: 1, amount: "20,000", category: "Rent", wallet: "Monthly" },
    { id: 2, amount: "5,000", category: "Food", wallet: "Monthly" },
    { id: 3, amount: "2,500", category: "Internet", wallet: "Monthly" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-800">History</h1>
        <p className="text-slate-400 font-medium">All your logged transactions</p>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <tr>
              <th className="px-10 py-6">Id</th>
              <th className="px-10 py-6">Amount</th>
              <th className="px-10 py-6">Category</th>
              <th className="px-10 py-6">Wallet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-10 py-6 font-bold text-slate-500">{t.id}</td>
                <td className="px-10 py-6 font-black text-slate-900">KES {t.amount}</td>
                <td className="px-10 py-6 text-slate-500 italic">{t.category}</td>
                <td className="px-10 py-6 font-bold text-indigo-600 text-xs uppercase tracking-tighter">{t.wallet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}