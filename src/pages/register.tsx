import RegisterForm from "../components/forms/register";
import FormWrapper from "../layout/form";

const RegisterPage = () => {
  return (
    <div className="grid gap-4 mt-8">
      <FormWrapper title="Register" hideBack>
        <RegisterForm />
      </FormWrapper>
    </div>
  );
};

export default RegisterPage;
