import { Button, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useParams } from "react-router-dom";
import { postWeaponTypes, updateWeaponTypes } from "../../api/weapon";
import FormWrapper from "../../layout/form";

type postWeaponType = {
  name: string;
};

const WeaponTypeForm = () => {
  const { id } = useParams();
  const form = useForm<postWeaponType>({
    initialValues: {
      name: "",
    },
    validate: {
      name: (v) => (v ? null : "This Field is Required"),
    },
  });

  const submitHandler = async (d: postWeaponType) => {
    try {
      const response = id
        ? await updateWeaponTypes(id, d)
        : await postWeaponTypes(d);
      if (response) {
        notifications.show({
          message: "Successfully Created!",
          color: "green",
        });
        form.reset();
      }
    } catch (err) {
      notifications.show({ message: "Submit Failed!", color: "red" });
    }
  };
  return (
    <FormWrapper title="Weapon Type">
      <form className="grid gap-2" onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          label={<Text>Type:</Text>}
          type="text"
          placeholder="Weapon Type"
          {...form.getInputProps("name")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default WeaponTypeForm;
