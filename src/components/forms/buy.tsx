import { Button, Modal, NumberInput, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { postBuyWeapons } from "../../api/weapon";

const BuyWeaponForm = ({
  id,
  opened,
  close,
  title,
}: {
  id: string;
  opened: boolean;
  close: () => void;
  title: string;
}) => {
  const [quantity, setQuantity] = useState(1);
  async function purchaseHandler() {
    try {
      const response = await postBuyWeapons(id, quantity);
      if (response) {
        notifications.show({ message: "Purchase Registered", color: "green" });
      }
    } catch (err) {
      notifications.show({ message: "Purchase Failed!", color: "red" });
    }
  }
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={<Text className="text-lg font-semibold">{title}</Text>}
    >
      <div className="grid gap-4">
        <NumberInput
          min={1}
          label={"Purchase Quantity"}
          value={quantity}
          onChange={(v) => setQuantity(v as number)}
        />

        <div className="flex gap-4">
          <Button onClick={purchaseHandler}>Purchase</Button>
          <Button color="red" onClick={close}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BuyWeaponForm;
