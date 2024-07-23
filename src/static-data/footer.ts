import { FooterLink } from "@/types/footer";
import { v4 as uuid } from "uuid";

export const footerLinks: FooterLink[] = [
  {
    id: uuid(),
    title: "home",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "services",
    href: "/",
    external: false,
  },
  // {
  //   id: uuid(),
  //   title: "Careers",
  //   href: "/",
  //   external: false,
  //   badge: {
  //     text: "Hiring",
  //   },
  // },
  {
    id: uuid(),
    title: "about",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "pricing",
    href: "/",
    external: false,
  },
];

export const footerLinksTwo: FooterLink[] = [
  {
    id: uuid(),
    title: "company",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "pressMedia",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "ourBlog",
    href: "/blog",
    external: false,
  },
  {
    id: uuid(),
    title: "contactUs",
    href: "/contact",
    external: false,
  },
];
