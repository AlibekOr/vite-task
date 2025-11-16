export interface IBtnDataType {
  title: string;
  path: string;
  icon?: string;
  userPermission?: number;
}

export const btnData: IBtnDataType[] = [
  {
    title: 'Dashboard',
    path: '/'
  },
  {
    title: 'Stores',
    path: '/stores'
  },
]
