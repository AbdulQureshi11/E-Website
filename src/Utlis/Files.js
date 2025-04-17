import { IoMdArrowDropdown } from "react-icons/io";
import { FaShippingFast } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export const MenuList = [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'About Us', path: '/Aboutus'},
    {id: 3, name: 'Services', path: '/Services'},
    {id: 4, name: 'Store', path: '/Store'},
    {id: 5, name: 'Client', path: '/Client'},
    {id: 6, name: 'Dashboard', path: '/Dashboard'},
]

export const topheader1 = [
    {id:1, name: 'EN', icon: <IoMdArrowDropdown /> },
    {id:2, name: 'USD', icon: <IoMdArrowDropdown /> },
]
export const topheader2 = [
    {id:1, name: 'Track Order', icon: <FaShippingFast /> },
    {id:2, name: 'Wishlisht', icon: <IoMdHeartEmpty /> },
]

export const Allcategories = [
    {id:1, name: "All Categories", icon: <MdOutlineKeyboardArrowDown /> }
]

