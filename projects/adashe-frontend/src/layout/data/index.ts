
type IMenu = {
    id: number,
    title: string,
    path: string,
}

const menuData: IMenu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
  },
];

export default menuData;