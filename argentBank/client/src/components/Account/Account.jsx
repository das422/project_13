const accounts = [
  {
    id: 'x6712',
    title: 'Argent Bank Savings',
    amount: '$10,928.42',
    description: 'Available Balance',
  },
  {
    id: 'x8349',
    title: 'Argent Bank Credit Card',
    amount: '$184.30',
    description: 'Current Balance',
  },
];

export default function Account() {
  return (
    <>
      {accounts.map((account) => (
        <section key={account.id} className="flex flex-col justify-between border border-black bg-white w-4/5 mx-auto p-6 box-border mb-8">
          <div className="w-full flex-1">
            <h3 className="text-base font-normal">{account.title} ({account.id})</h3>
            <p className="text-5xl font-bold">{account.amount}</p>
            <p className="m-0">{account.description}</p>
          </div>
          <div className="flex justify-center">
            <button className="block w-full py-2 text-lg font-bold mt-4 border-2 border-green-500 bg-green-500 text-white">View transactions</button>
          </div>
        </section>
      ))}
    </>
  );
}
