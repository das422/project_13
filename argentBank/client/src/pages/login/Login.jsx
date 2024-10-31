import LoginForm from "../../components/loginForm/LoginForm";

export default function Login() {
  return (
    <>
      <section className="flex flex-col  bg-white p-8 rounded shadow-md w-96 mx-auto mt-12 ">
        <i className="fa fa-user-circle text-5xl mb-4"></i>
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <LoginForm />
      </section>
    </>
  );
}
