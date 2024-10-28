import Account from "../../components/account/Account";

export default function Profile() {
  return (
    <>
      <div className="text-white mb-8">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="border-2 border-green-500 bg-green-500 text-white font-bold py-2 px-4">
          Edit Name
        </button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="flex flex-col justify-between border border-black bg-white w-4/5 mx-auto p-6 box-border mb-8">
        <div className="w-full flex-1">
          <h3 className="text-base font-normal">
            Argent Bank Checking (x8349)
          </h3>
          <p className="text-5xl font-bold">$2,082.79</p>
          <p className="m-0">Available Balance</p>
        </div>
        <div className="flex justify-center">
          <button className="block w-full py-2 text-lg font-bold mt-4 border-2 border-green-500 bg-green-500 text-white">
            View transactions
          </button>
        </div>
      </section>
      <Account />
    </>
  );
}
