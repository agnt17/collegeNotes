import Header from "../components/authHeader.jsx";
import Signup from "../components/signup.jsx";

export default function SignupPage() {
  return (
    <div className="mt-20">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Header
        paragraph="Not Intrested in Registering?"
        linkName="Home"
        linkUrl="/"
      />
      <Signup />
    </div>
  );
}
