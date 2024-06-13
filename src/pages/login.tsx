import LoginForm from "../components/forms/login";
import FormWrapper from "../layout/form";

const LoginPage = () => {
  return (
    <div className="grid gap-4 mt-8">
      <FormWrapper title="Login" hideBack>
        <LoginForm />
      </FormWrapper>
    </div>
  );
};

export default LoginPage;
