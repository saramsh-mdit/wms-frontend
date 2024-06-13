import { Button, Text } from "@mantine/core";
import { WeaponType } from "../api/weapon";
import { fetchImage } from "../config/image";

const WeaponCard = (item: WeaponType) => {
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
        <Button variant="filled">Get Weapon</Button>
      </div>
    </div>
  );
};

export default WeaponCard;
