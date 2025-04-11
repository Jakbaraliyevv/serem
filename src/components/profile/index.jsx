import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { useAxios } from "../../hooks/axios";

function ProfileComponents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [balanceData, setBalanceData] = useState(0);
  const userData = JSON.parse(localStorage.getItem("user"));
  const axios = useAxios();
  // balanceni olish

  useEffect(() => {
    axios({
      url: "/orders/create/",
      method: "GET",
    })
      .then((data) => {
        console.log(data, "dataa");
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios({ url: "/user-data/", method: "GET" })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const findUser =
    data.find(
      (value) =>
        value.email === userData?.email || value.username === userData?.username
    ) || {};

  const [name, setName] = useState(findUser?.first_name || "");
  const [lastName, setLastName] = useState(findUser?.last_name || "");
  const [userName, setUsername] = useState(findUser?.username || "");
  const [email, setEmail] = useState(findUser?.email || "");

  useEffect(() => {
    setName(findUser?.first_name || "");
    setLastName(findUser?.last_name || "");
    setUsername(findUser?.username || "");
    setEmail(findUser?.email || "");
  }, [findUser]);

  if (loading) {
    return <p className="text-center text-gray-500">Yuklanmoqda...</p>;
  }

  const changeProfile = () => {
    const data = {
      first_name: name,
      last_name: lastName,
      username: userName,
      email,
    };
    axios({
      url: "/edit-profile/",
      method: "POST",
      data,
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  console.log(balanceData, "azizzzz");
  return (
    <section className="w-[90%] m-auto py-5">
      <div>
        <h1 className="text-[25px] font-bold mb-6">Mening profilim</h1>
      </div>
      <div className="flex items-start justify-between gap-7">
        <div className="w-[70%] bg-white rounded-lg shadow py-11 p-7">
          <h2 className="pb-9 text-[22px] font-semibold">
            Shaxsiy ma'lumotlar
          </h2>
          <div className="flex gap-5">
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 text-[17px] font-bold mb-2">
                  Ismi
                </label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 text-[17px] font-bold mb-2">
                  Familiya
                </label>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 text-[17px] font-bold mb-2">
                  Username
                </label>
                <Input
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-700 text-[17px] font-bold mb-2">
                  Email
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={changeProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Saqlash
            </button>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Hisobingiz</h2>
            <p className="text-3xl font-bold text-blue-600 mb-4">
              {Math.floor(balanceData)} so'm
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Xavfsizlik</h2>
            <button className="bg-red-100 hover:bg-red-200 text-red-800 font-bold py-2 px-4 rounded w-full">
              Hisobni o'chirish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileComponents;
