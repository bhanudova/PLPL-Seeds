import { themes } from "@/constraints/global";

export const getTheme = (name: any) => {
    return themes[`${name}`];
}