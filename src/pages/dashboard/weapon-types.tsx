import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

const WeaponTypesPage = () => {
  return (
    <div className="grid gap-4">
      <div className="flex gap-4">
        <Link to="/admin/form/add-weapon-type">
          <Button>Add Weapon Type</Button>
        </Link>
      </div>
    </div>
  );
};

export default WeaponTypesPage;
