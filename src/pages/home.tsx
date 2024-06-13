import { getAllWeapon, WeaponType } from "../api/weapon";
import LoadingCard from "../components/loading";
import WeaponCard from "../components/weapon-card";
import useApi from "../hooks/useApi";

const HomePage = () => {
  const { data, isLoading, isError } = useApi<WeaponType[]>(getAllWeapon);
  if (isLoading) return <LoadingCard />;
  if (isError) return <p>Error Occured</p>;

  return (
    <div>
      <section className="p-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data?.map((item) => {
          return <WeaponCard key={item.weapon_id} {...item} />;
        })}
      </section>
    </div>
  );
};

export default HomePage;
