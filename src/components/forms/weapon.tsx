import {
  Button,
  FileInput,
  NativeSelect,
  NumberInput,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { Link, useParams } from "react-router-dom";
import {
  getWeaponTypes,
  postWeapon,
  updateWeaponById,
  WeaponType,
} from "../../api/weapon";
import useApi from "../../hooks/useApi";
import FormWrapper from "../../layout/form";

type postWeaponType = {
  name: string;
  quantity: number;
  maintainable: boolean;
  description: string;
  weapon_type_id: string;
  image?: Blob;
};

const WeaponForm = () => {
  const { id } = useParams();

  const weaponTypeApi = useApi<WeaponType[]>(getWeaponTypes);

  const form = useForm<postWeaponType>({
    initialValues: {
      name: "",
      quantity: 0,
      maintainable: false,
      description: "",
      weapon_type_id: "",
      image: undefined,
    },
    validate: {
      name: (v) => (v ? null : "This field is required"),
      quantity: (v) => (v ? null : "This field is required"),
      maintainable: (v) => (v ? null : "This field is required"),
      description: (v) => (v ? null : "This field is required"),
      weapon_type_id: (v) => (v ? null : "This field is required"),
      image: (v) => (v ? null : "This field is required"),
    },
  });

  const submitHandler = async (d: postWeaponType) => {
    try {
      const response = id ? await updateWeaponById(id, d) : await postWeapon(d);
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
  console.log(weaponTypeApi);

  return (
    <FormWrapper title="Weapon Form">
      <form className="grid gap-2" onSubmit={form.onSubmit(submitHandler)}>
        <TextInput
          label={<Text>Name</Text>}
          type="text"
          placeholder="Weapon Name"
          {...form.getInputProps("name")}
        />
        <NumberInput
          label={<Text>Quantity</Text>}
          {...form.getInputProps("quantity")}
        />
        <NativeSelect
          label={<Text>Maintained</Text>}
          data={[
            { value: true as unknown as string, label: "Maintained" },
            { value: false as unknown as string, label: "Unmaintained" },
          ]}
          {...form.getInputProps("maintainable")}
        />
        <Select
          placeholder="Select a Weapon Type"
          data={
            !weaponTypeApi.isLoading &&
            !weaponTypeApi.isError &&
            weaponTypeApi?.data
              ? weaponTypeApi.data.map((item) => {
                  return { value: item.wtype_id, label: item.name };
                })
              : []
          }
          label={<Text>Weapon Type</Text>}
          type="text"
          {...form.getInputProps("weapon_type_id")}
        />
        <div className="text-sm">
          <span className="mr-2">Can't find weapon type?</span>
          <Link to="/admin/form/add-weapon-type">Add weapon type</Link>
        </div>
        {!id && (
          <FileInput
            label={<Text>Image</Text>}
            placeholder="Pick and Image"
            {...form.getInputProps("image")}
          />
        )}
        <Textarea
          placeholder="Description"
          rows={3}
          label={<Text>Description</Text>}
          {...form.getInputProps("description")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormWrapper>
  );
};

export default WeaponForm;
