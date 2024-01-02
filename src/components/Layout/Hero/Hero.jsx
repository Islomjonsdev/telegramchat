import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmptyChat from "../EmptyChat/EmptyChat";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Hero = () => {
  const [checkUser, setCheckUser] = useState(false);
  const [sidebarUserId, setSidebarUserId] = useState(null)
  const { id } = useParams()

  useEffect(() => {
      axios.get(`https://658efbfd2871a9866e7a1bb4.mockapi.io/work/${id}`)
        .then((response) => {
            setSidebarUserId(response?.data);
            setCheckUser(true)
        })
        .catch((err) => {
            console.log(err);
        })
  }, [id])
  return (
    <div className="hero">
      {checkUser && <Header userData={sidebarUserId}/>}
      <EmptyChat userData={sidebarUserId}/>
      {checkUser && <Footer userData={sidebarUserId}/>}
    </div>
  );
};

export default Hero;
