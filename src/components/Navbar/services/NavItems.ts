import { FaHome } from "react-icons/fa";
import { MdContacts, MdEmojiEvents } from "react-icons/md";

export const NavItems = [
    {
        text: "Home",
        link: "/",
        icon: FaHome,
        index: 1,
    },
    {
        text: "Events",
        link: "/events",
        icon: MdEmojiEvents,
        index: 2,
    },
    {
        text: "Contacts",
        link: "/contacts",
        icon: MdContacts,
        index: 3,
    },
];