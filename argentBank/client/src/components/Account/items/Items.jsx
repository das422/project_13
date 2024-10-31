

const Items = () => {
  const accounts = [
    {
      id: 1,
      name: "checking (x8349)",
      balance: 2082.79,
      type: "available",
    },
    {
      id: 2,
      name: "savings (x6712)",
      balance: 10928.42,
      type: "available",
    },
    {
      id: 3,
      name: "credit card (x8349)",
      balance: 184.3,
      type: "current",
    },
  ];
return (
  <>
    {accounts.map((account) => (
      <section
        key={account.id}
        className="flex flex-col justify-between border border-black bg-white w-4/5 mx-auto p-6 box-border mb-8"
      >
        <div className="w-full flex-1">
          <h3 className="text-base font-normal">
            argent bank {account.name}
          </h3>
          <p className="font-bold text-3xl">{account.balance.toLocaleString("en")}</p>
          <p className="m-0">{account.type}</p>
        </div>
        <div className="flex justify-center">
          <button className="block w-full py-2 text-lg font-bold mt-4 border-2 border-green-500 bg-green-500 text-white">
            View transactions
          </button>
        </div>
      </section>
      ))}
    </>
  );
};

export default Items;
