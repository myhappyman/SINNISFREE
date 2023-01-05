import { atom } from "recoil";

export const SkinModalState = atom({
  key: "skinModalState",
  default: false,
});

export const SkinTypes = atom({
  key: "skinTypes",
  default: "건성피부",
});

export const SkinConcerns = atom({
  key: "SkinConcerns",
  default: ["모공", "주름", "탄력"],
});
