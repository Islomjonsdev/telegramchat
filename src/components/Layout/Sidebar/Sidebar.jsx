import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "./Sidebar.scss";

const Sidebar = () => {
  const [sidebarUser, setSidebarUser] = useState([]);
  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(true)
  useEffect(() => {
    axios
      .get("https://658efbfd2871a9866e7a1bb4.mockapi.io/work")
      .then((response) => {
        setSidebarUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const smsTime = (data) => {
    const date = new Date(data);
    const time = date.toLocaleTimeString();
    const newTime = time.slice(0, 5);
    return newTime;
  };

  const searchUser = (e) => {
    setSearch(e.target.value);
    setSearchIcon(e.target.value.length > 0 ? false : true)
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__top">
          <RxHamburgerMenu />
          <input type="search" placeholder="search" onChange={searchUser} />
           {searchIcon && <IoSearch className="icon"/>}
        </div>

        <div className="sidebar__list">
          {sidebarUser && sidebarUser.length > 0
            ? sidebarUser
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, index) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activechatuser" : ""
                    }
                    to={`/main/${item?.id}`}
                    key={index}
                  >
                    <div className="sidebar__user__wrapper">
                      <img src={item?.img} alt="" />
                      <p>{item?.name}</p>
                    </div>

                    <div className="sidebar__user__time">
                      <span>{smsTime(item?.createdAt)}</span>
                    </div>
                  </NavLink>
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
