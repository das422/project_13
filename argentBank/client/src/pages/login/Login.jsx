import LoginForm from "../../components/loginForm/LoginForm";

export default function Login() {
  return (
    <>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </>
  );
}