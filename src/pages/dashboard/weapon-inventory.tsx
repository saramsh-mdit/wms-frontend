import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const WeaponInventoryPage = () => {
  return (
    <div className="grid gap-4">
      <div className="flex gap-4">
        <Link to="/admin/form/add-weapon">
          <Button>Add Weapon</Button>
        </Link>
      </div>
    </div>
  );
};

export default WeaponInventoryPage;
