import { Button, PasswordInput, Switch, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAdmin, registerUser } from "../../api/auth";

type postRegisterType = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const navigation = useNavigate();
  const form = useForm<postRegisterType>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: {
      name: (v) => (v ? null : "This field is required"),
      email: (v) => (v ? null : "This field is required"),
      password: (v) => (v ? null : "This field is required"),
    },
  });
  const submitHandler = async (d: postRegisterType) => {
    try {
      const response = isAdmin ? await registerAdmin(d) : await registerUser(d);
      if (response) {
        notifications.show({ message: "Register Successful", color: "green" });
        form.reset();
        navigation("/login");
      }
    } catch (err) {
      notifications.show({ message: "Register Failed!", color: "red" });
    }
  };
  return (
    <form className="grid gap-2" onSubmit={form.onSubmit(submitHandler)}>
      <TextInput
        label={<Text>Name:</Text>}
        type="text"
        placeholder="Your Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        label={<Text>Email:</Text>}
        type="text"
        placeholder="Your Email"
        {...form.getInputProps("email")}
      />
      <PasswordInput
        label={<Text>Password:</Text>}
        type="text"
        placeholder="Your Password"
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
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </form>
  );
};

export default RegisterForm;
