export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-8">
        {[
          { label: 'Balance', amount: '25,000', color: 'text-indigo-600', sub: 'You current balance' },
          { label: 'Income', amount: '25,000', color: 'text-indigo-600', sub: 'You total income' },
          { label: 'Expenditure', amount: '25,000', color: 'text-indigo-600', sub: 'You total expenditure' }
        ].map((card, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <p className={`${card.color} font-black text-xl`}>{card.label}</p>
            <p className="text-slate-400 text-xs font-medium mt-1">{card.sub}</p>
            <h2 className="text-3xl font-black mt-4 uppercase">KES {card.amount}</h2>
          </div>
        ))}
      </div>

      {/* Transactions Section */}
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-black text-slate-800">Transactions</h3>
            <p className="text-slate-400 text-sm font-medium">List of your recent transactions</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:-translate-y-0.5 transition-all text-sm">
            Add Transaction
          </button>
        </div>

        {/* Simple Table Mockup */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-8 py-5">Id</th>
                <th className="px-8 py-5">Amount</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Wallet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[1, 2, 3].map((row) => (
                <tr key={row} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-8 py-5 font-bold text-slate-600">{row}</td>
                  <td className="px-8 py-5 font-black">20,000</td>
                  <td className="px-8 py-5 text-slate-500 font-medium italic">Bills</td>
                  <td className="px-8 py-5 text-slate-500 font-medium uppercase text-xs tracking-tighter">Monthly</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}