import Header from "../components/authHeader.jsx";
import Signup from "../components/signup.jsx";

export default function SignupPage() {
  return (
    <div className="mt-20 select-none">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
        className="font-extralight"
      />
      <Header
        paragraph="Not Intrested in Registering?"
        linkName="Home"
        linkUrl="/"
      />
      <p className="mx-auto flex justify-center mt-5 mb-[-5vh] text-emerald-500 font-extralight">Create Your Account by filling the details below!</p>
      <Signup className="text-white"/>
    </div>
  );
}
