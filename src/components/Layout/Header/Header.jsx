import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import "./Header.scss";

const Header = ({ userData }) => {
  const [openSearch, setOpenSearch] = useState(false);

  const closeSearch = () => {
      setOpenSearch(false)
  }
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <img src={userData?.img} alt="" />
            <p>{userData?.name}</p>
          </div>

          <div className="header__right">
            <FaRegTrashCan />
            <FaSearch onClick={setOpenSearch}/>
          </div>
        </div>
      </header>

      {openSearch && (
          <div onClick={closeSearch}>Search</div>
      )}
    </>
  );
};

export default Header;
