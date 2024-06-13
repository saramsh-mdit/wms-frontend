import { Button, PasswordInput, Switch, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { loginAdmin, loginUser } from "../../api/auth";
import { AuthContext } from "../../context/authContext";

type postLoginType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const authContext = useContext(AuthContext);
  const form = useForm<postLoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (v) => (v ? null : "This field is required"),
      password: (v) => (v ? null : "This field is required"),
    },
  });

  const submitHandler = async (d: postLoginType) => {
    try {
      const response = isAdmin ? await loginAdmin(d) : await loginUser(d);
      console.log(response);
      if (response) {
        authContext?.loginHandler &&
          authContext.loginHandler(response.data.token, response.data.isAdmin);
        notifications.show({ message: "Login Successful", color: "green" });
        location.pathname = "/";
        form.reset();
      }
    } catch (err) {
      notifications.show({ message: "Login Failed!", color: "red" });
    }
  };

  return (
    <form className="grid gap-2" onSubmit={form.onSubmit(submitHandler)}>
      <TextInput
        label={<Text>Email:</Text>}
        type="email"
        placeholder="Your Email"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label={<Text>Password:</Text>}
        type="text"
        placeholder="Your Email"
        {...form.getInputProps("password")}
      />
      <div className="flex">
        <Switch
          className="my-2"
          defaultChecked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
          label={"Admin"}
        />
      </div>
      <Button type="submit">Submit</Button>
      <span className="text-center">
        Haven't Created account? <Link to="/register">Register</Link>
      </span>
    </form>
  );
};

export default LoginForm;
