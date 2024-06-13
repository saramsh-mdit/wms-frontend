import { axiosInstance } from "../config/axiosInstance";

/*
    Weapons Type
*/

export interface WeaponType {
  wtype_id: string;
  name: string;
  created_date: Date;
}

export const getWeaponTypes = () =>
  axiosInstance.get<{ data: WeaponType[] }>("/weapon-types");

export const getWeaponTypesById = (id: string) =>
  axiosInstance.get<{ data: WeaponType }>(`/weapon-types/${id}`);

export const postWeaponTypes = (data: unknown) =>
  axiosInstance.post<{ data: WeaponType }>(`/weapon-types/`, data);

export const updateWeaponTypes = (id: string, data: unknown) =>
  axiosInstance.patch<{ data: WeaponType }>(`/weapon-types/${id}`, data);

export const deleteWeaponTypesById = (id: string) =>
  axiosInstance.delete<{ data: WeaponType }>(`/weapon-types/${id}`);

/*
    Weapons
*/

export interface WeaponType {
  weapon_id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  maintainable: boolean;
  created_date: Date;
  wtype_id_fk: string;
}

export const getAllWeapon = () =>
  axiosInstance.get<{ data: WeaponType[] }>("/weapons");

export const getWeaponById = (id: string) =>
  axiosInstance.get<{ data: WeaponType }>(`/weapons/${id}`);

export const postWeapon = (data: unknown) => {
  const dataToUpload = new FormData();
  Object.getOwnPropertyNames(data).map((item) => {
    // @ts-ignore
    dataToUpload.append(item, data[item]);
  });
  return axiosInstance.post(`/weapons`, dataToUpload);
};

export const updateWeaponById = (id: string, data: unknown) => {
  const dataToUpload = new FormData();
  Object.getOwnPropertyNames(data).map((item) => {
    // @ts-ignore
    dataToUpload.append(item, data[item]);
  });
  return axiosInstance.patch(`/weapons/${id}`, dataToUpload);
};

export const deleteWeaponById = (id: string) =>
  axiosInstance.delete(`/weapons/${id}`);

/*
    Buy Weapons
*/

export const postBuyWeapons = (id: string, quantity: number) =>
  axiosInstance.post(`/buy/${id}?quantity=${quantity}`);
