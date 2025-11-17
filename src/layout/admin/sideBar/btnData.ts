import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";

import  React from "react";
import { type IconBaseProps } from "react-icons";
export type IconType = React.ComponentType<IconBaseProps>;

export interface IBtnDataType {
  title: string;
  path: string;
  icon?: IconType;
  userPermission?: number;
}

export const btnData: IBtnDataType[] = [
  {
    title: 'Dashboard',
    path: '/',
      icon:LuLayoutDashboard,
  },
  {
    title: 'Stores',
    path: '/stores',
      icon:BsLayoutTextWindowReverse
  },
]
