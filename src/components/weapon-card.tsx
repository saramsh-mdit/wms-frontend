import { Button, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { WeaponType } from "../api/weapon";
import { fetchImage } from "../config/image";
import BuyWeaponForm from "./forms/buy";

const WeaponCard = (item: WeaponType) => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <div className="border border-solid border-gray-200 hover:shadow">
      <img
        className="w-full h-[180px] object-cover"
        src={fetchImage(item.image)}
        alt={item.name}
      />
      <div className="grid gap-2 p-4">
        <div>
          <Text className="text-lg leading-tight font-bold">{item.name}</Text>
          <Text className="text-sm">Sock: {item.quantity}</Text>
        </div>
        <Button onClick={open} variant="filled">
          Get Weapon
        </Button>
      </div>
      <BuyWeaponForm
        title={`Purchase "${item.name}"`}
        id={item.weapon_id}
        opened={opened}
        close={close}
      />
    </div>
  );
};

export default WeaponCard;
