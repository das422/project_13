import { useState } from "react";
import { useSelector } from "react-redux";
import Account from "../../components/account/Account";
import EditName from "../../components/EditName/EditName";

export default function Profile() {
    const [editName, setEditName] = useState(false);

    const { user } = useSelector((state) => state.user);

    const handleEditName = () => {
      setEditName(!editName);
    };
  return (
    <div className="p-6 bg-argent-dark">
      <header className="mb-4">
        {editName ? (
          <>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <EditName handleEditName={handleEditName} />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-white">
              Welcome back <br />
              <span className="text-lg">
                {user.firstName} {user.lastName}!
              </span>
            </h1>
            <button
              type="button"
              onClick={() => setEditName(!editName)}
              className="mt-2 py-2 px-4 bg-green-500 text-white font-bold rounded"
            >
              Edit Name
            </button>
          </>
        )}
      </header>
      <section>
        <Account />
      </section>
    </div>
  );
}
