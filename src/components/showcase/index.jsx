import React, { useEffect, useState } from "react";
import { Button, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import Zaprafkalar from "../zaprafkalar";
import { useAxios } from "../../hooks/axios";
import notificationApi from "../../generic/notify";

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
        <div className="bg-[#FFF] shadow p-6 rounded-lg flex flex-col gap-4">
          <h2 className="text-[24px] font-bold">
            Xush kelibsiz, {findUser ? findUser?.username : "User"}
          </h2>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-3 text-[19px]">
              <h3 className="font-medium">Balans:</h3>
              <h3 className="font-bold text-blue-600">
                {Math.floor(balanceData)} so'm
              </h3>
            </span>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Hisobni to'ldirish
            </Button>
          </div>
        </div>
        <Modal
          title="Hisobni to'ldirish"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <Button key="cancel" onClick={() => setIsModalOpen(false)}>
              Bekor qilish
            </Button>,
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                setIsModalOpen(false);
                postData();
              }}
            >
              To'ldirish
            </Button>,
          ]}
        >
          <form className="flex flex-col gap-7">
            <div className="space-y-2">
              <label
                htmlFor="benzin"
                className="text-[17px] font-medium text-gray-700"
              >
                Balance
              </label>
              <Input
                id="balance"
                required
                className="h-11 rounded-lg text-base"
                onChange={(e) => setBalance(e.target.value)}
                placeholder="Balansingizni  kiriting"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="user"
                className="text-[17px] font-medium text-gray-700"
              >
                Foydalanuvchi
              </label>
              <select
                id="user"
                onChange={(e) => setUser(e.target.value)}
                className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Foydalanuvchi tanlang</option>
                {data?.map((value) => (
                  <option key={value.id} value={console.log(value.id, "idd")}>
                    {value.username}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="branch"
                className="text-[17px] font-medium text-gray-700"
              >
                Fillial
              </label>
              <select
                id="branch"
                onChange={(e) => setBranch2(e.target.value)}
                className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Fillialni tanlang</option>
                {branch?.map((value) => (
                  <option value={value.id}>{value.name}</option>
                ))}
              </select>
            </div>
          </form>
        </Modal>
        <div className="grid grid-cols-3 gap-5">
          <Link
            to={"/hisobni-toldirish"}
            className="bg-white rounded-lg shadow p-7 cursor-pointer gap-2 hover:shadow-lg transition flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold">Zapravka qilish</h3>
            <p className="text-gray-600">
              Tez va oson zapravka buyurtma qiling
            </p>
          </Link>
          <Link
            to={"buyurtmalar"}
            className="bg-white cursor-pointer rounded-lg shadow p-6 gap-2 hover:shadow-lg transition flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-semibold">Buyurtmalar tarixi</h3>
            <p className="text-gray-600">Barcha buyurtmalaringizni ko'ring</p>
          </Link>
          <div className="bg-white cursor-pointer rounded-lg shadow p-6 gap-2 hover:shadow-lg transition flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold">Mening avtomobillarim</h3>
            <p className="text-gray-600">Avtomobillaringizni boshqaring</p>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h2 className="text-[21px] font-bold">Joriy narxlar</h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-white rounded-lg shadow p-7 gap-2 flex flex-col">
              <h3 className="text-xl font-semibold">AI-80 </h3>
              <p className="text-[21px] font-bold text-blue-600">
                6,500 so'm/litr
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-7 gap-2 flex flex-col">
              <h3 className="text-xl font-semibold">AI-91 </h3>
              <p className="text-[21px] font-bold text-blue-600">
                7,800 so'm/litr
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-7 gap-2 flex flex-col">
              <h3 className="text-xl font-semibold">AI-95 </h3>
              <p className="text-[21px] font-bold text-blue-600">
                9,200 so'm/litr
              </p>
            </div>
          </div>
        </div>

        <Zaprafkalar />
      </div>
    </section>
  );
}

export default Showcase;
