export default function Wallets() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="grid grid-cols-4 gap-6">
        {/* The Dark Blue "Add" Card */}
        <div className="bg-indigo-950 p-8 rounded-[2rem] text-white flex flex-col justify-between h-56 shadow-2xl">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
            <Wallet size={20} />
          </div>
          <div>
            <h3 className="font-black text-xl">Add a wallet</h3>
            <p className="text-white/50 text-xs mt-1">Click to add a wallet for your transactions</p>
          </div>
        </div>

        {/* Regular Wallet Cards */}
        {['Monthly Bills', 'Recreation', 'Food Bills'].map((wallet) => (
          <div key={wallet} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between h-56">
             <div className="flex justify-between items-start">
               <p className="text-indigo-600 font-black text-sm">{wallet}</p>
             </div>
             <div>
               <h2 className="text-2xl font-black">KES 50,000</h2>
               <p className="text-slate-300 text-[10px] font-bold text-right mt-4 uppercase">today</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}