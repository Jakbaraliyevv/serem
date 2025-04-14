import React, { useEffect, useState } from "react";
import { Button, Input, Modal } from "antd";
import { Link } from "react-router-dom";
// import Zaprafkalar from "../zaprafkalar";
import { useAxios } from "../../hooks/axios";
import notificationApi from "../../generic/notify";
import Zaprafkalar from "../zaprafkalar";

function Showcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user"));
  const axios = useAxios();
  const notify = notificationApi();
  const [branch, setBranch] = useState([]);
  const [branch2, setBranch2] = useState([]);
  const [user, setUser] = useState("");
  const [balance, setBalance] = useState("");
  const [balanceData, setBalanceData] = useState(0);

  //   Balanse >>>>>>>>>>>>>>>>

  useEffect(() => {
    axios({
      url: "/orders/create/",
      method: "GET",
    })
      .then((data) => {
        setBalanceData(data?.user_balance);
      })
      .catch((error) => console.log(error));
  }, []);
  // >>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    axios({
      url: "/user-data/",
      method: "GET",
    })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const findUser = data.find(
    (value) =>
      value.email === userData.email || value.username === userData.username
  );

  useEffect(() => {
    axios({
      url: "/register/",
      method: "GET",
    })
      .then((data) => setBranch(data.data))
      .catch((error) => console.log(error));
  }, []);

  //   UserBalanse

  const postData = () => {
    const data = {
      user_id: user,
      branch: branch2,
      balance,
    };

    if (!user || !branch2 || !balance) {
      notify({ type: "fullData" });
      return;
    }

    console.log(data, "data");
    axios({
      url: "/userbalance/create/",
      method: "POST",
      data,
    })
      .then((data) => {
        console.log(data);
        notify({ type: "Saved" });
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="bg-[#f3f4f6] min-h-screen pt-6">
      <div className="w-[90%] m-auto flex flex-col gap-7">
        <div className="bg-[#FFF] shadow p-6 rounded-lg flex flex-col gap-4 max-[768px]:text-[0.8em] max-[450px]:text-[0.7em]">
          <h2 className="text-[1.4em] font-bold">
            Xush kelibsiz, {findUser ? findUser?.username : "User"}
          </h2>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-3 text-[1.1em]">
              <h3 className="font-medium">Balans:</h3>
              <h3 className="font-bold text-blue-600">
                {Math.floor(balanceData)} so'm
              </h3>
            </span>
          </div>
        </div>

        <div className="flex gap-5 w-full max-[768px]:text-[0.8em] max-[490px]:flex-col">
          <Link
            to={"/hisobni-toldirish"}
            className="bg-white w-full rounded-lg shadow p-7 cursor-pointer gap-2 hover:shadow-lg transition flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[1.2em] font-semibold">Zapravka qilish</h3>
            <p className="text-gray-600 text-[1em]">
              Tez va oson zapravka buyurtma qiling
            </p>
          </Link>
          <Link
            to={"buyurtmalar"}
            className="bg-white w-full cursor-pointer rounded-lg shadow p-6 gap-2 hover:shadow-lg transition flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-[1.2em] font-semibold">Buyurtmalar tarixi</h3>
            <p className="text-gray-600 text-[1em]">
              Barcha buyurtmalaringizni ko'ring
            </p>
          </Link>
        </div>

        <div className="max-[768px]:text-[0.8em] max-[600px]:text-[0.7em]">
          <div className="mb-4">
            <h2 className="text-[1.5em] font-bold">Joriy narxlar</h2>
          </div>
          <div className="grid grid-cols-3 gap-5 max-[490px]:grid-cols-2 max-[400px]:grid-cols-1">
            <div className="bg-white rounded-lg shadow p-7 gap-2 flex flex-col">
              <h3 className="text-[1.2em] font-semibold">AI-80 </h3>
              <p className="text-[1em] font-bold text-blue-600">
                6,500 so'm/litr
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-7 gap-2 flex flex-col">
              <h3 className="text-[1.2em] font-semibold">AI-91 </h3>
              <p className="text-[1em] font-bold text-blue-600">
                7,800 so'm/litr
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-7 gap-2 flex flex-col">
              <h3 className="text-[1.2em] font-semibold">AI-95 </h3>
              <p className="text-[1em] font-bold text-blue-600">
                9,200 so'm/litr
              </p>
            </div>
          </div>
        </div>

        {/* <Zaprafkalar /> */}
      </div>
    </section>
  );
}

export default Showcase;
