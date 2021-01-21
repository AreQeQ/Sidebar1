import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoIosPaperPlane, IoMdPaper } from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Requests",
        path: "/requests",
        icon: <IoIosPaperPlane />,
        cName: 'nav-text'
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <IoMdPaper />,
        cName: 'nav-text'
    }
]