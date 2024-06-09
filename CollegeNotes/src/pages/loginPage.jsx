import Header from "../components/authHeader.jsx";
import Login from "../components/login.jsx";

export default function LoginPage() {
  return (
    <div className="mt-20">
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login/>
    </div>
  );
}
