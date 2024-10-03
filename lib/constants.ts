import { NavMenuType } from "./types"

export type NavMenuItems = "Home" | "About" | "Contact" | "Products" | "Parts"

export enum AltNavMenuItems {
  CONTACT_US = "Contact Us",
  ESTIMATE = "Get Your Free Estimate",
}

export type NavMenuLinks =
  | "/"
  | "/exterior-cleaning"
  | "/holiday-lighting"
  | "/commercial-services"

export enum AltNavMenuLinks {
  CONTACT_US = "/contact-us",
  ESTIMATE = "/estimate",
}

export const NavMenu: NavMenuType[] = [
  {
    title: NavMenuItems.HOME,
    link: NavMenuLinks.HOME,
  },
  {
    title: NavMenuItems.EXTERIOR_CLEANING,
    link: NavMenuLinks.EXTERIOR_CLEANING,
  },
  {
    title: NavMenuItems.HOLIDAY_LIGHTING,
    link: NavMenuLinks.HOLIDAY_LIGHTING,
  },
  {
    title: NavMenuItems.COMMERCIAL_SERVICES,
    link: NavMenuLinks.COMMERCIAL_SERVICES,
  },
  // {
  //     title: NavMenuItems.FAQS,
  //     link: NavMenuLinks.FAQS,
  // },
  // {
  //     title: NavMenuItems.ABOUT_US,
  //     link: NavMenuLinks.ABOUT_US,
  // },
]
export const AltNavMenu: NavMenuType[] = [
  {
    title: AltNavMenuItems.CONTACT_US,
    link: AltNavMenuLinks.CONTACT_US,
  },
  {
    title: AltNavMenuItems.ESTIMATE,
    link: AltNavMenuLinks.ESTIMATE,
  },
]

export const ServicesList = [
  { name: "None" },
  { name: "Window Cleaning" },
  { name: "Pressure Washing" },
  { name: "House Wash" },
  { name: "Roof Wash" },
  { name: "Holiday Lighting" },
  { name: "Other" },
]

export const FrequencyList = [
  { name: "Once A Year" },
  { name: "Twice A Year" },
  { name: "Quarterly" },
  { name: "Monthly" },
  { name: "Other" },
]
