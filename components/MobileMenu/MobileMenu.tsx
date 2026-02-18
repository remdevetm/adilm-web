"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import "./style.css";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "AI Chatbot",
    link: "/ai-chatbot",
  },
  {
    id: 2,
    title: "Rag as a Service",
    link: "#",
    submenu: [
      { id: 21, title: "Rag as a Service", link: "/service-details" },
    ],
  },
  {
    id: 3,
    title: "Our AI agents",
    link: "/project",
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

export default function MobileMenu() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ul className="responsivemenu">
      {menus.map((menu) => (
        <li key={menu.id} className={openId === menu.id ? "active" : ""}>
          {menu.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(menu.id)}>
                {menu.title}
                <i
                  className={
                    openId === menu.id ? "fa fa-angle-up" : "fa fa-angle-down"
                  }
                ></i>
              </p>

              {/* MUI Collapse */}
              <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                <ul className="subMenu">
                  {menu.submenu.map((sub) => (
                    <li key={sub.id}>
                      <Link href={sub.link} onClick={handleClick}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </Fragment>
          ) : (
            <Link href={menu.link} onClick={handleClick}>
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};