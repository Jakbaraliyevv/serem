import { Button, Input } from "antd";
import React from "react";

function ProfileComponents() {
  return (
    <section className="w-[90%] m-auto py-5 ">
      <div>
        <h1 className="text-[25px] font-bold mb-6">Mening profilim</h1>
      </div>
      <div className="flex items-start justify-between gap-7">
        <div className="w-[70%] bg-white rounded-lg shadow py-11 p-7">
          <h2 className="pb-9 text-[22px] font-semibold  flex items-center">
            Shaxsiy ma'lumotlar
          </h2>

          <div className=" flex gap-5">
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label
                  className=" text-gray-700 text-[17px] font-bold mb-2"
                  htmlFor="fullname"
                >
                  Ismi
                </label>
                <Input
                  className=" border rounded w-full p-2 text-gray-700  "
                  id="name"
                  type="text"
                  defaultValue="Aziz"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className=" text-gray-700 text-[17px] font-bold mb-2"
                  htmlFor="fullname"
                >
                  Familiya
                </label>
                <Input
                  className=" border rounded w-full p-2 text-gray-700  "
                  id="lastName"
                  type="text"
                  defaultValue="Jakbaraliyev"
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label
                  className=" text-gray-700 text-[17px] font-bold mb-2"
                  htmlFor="fullname"
                >
                  Telefon raqami
                </label>
                <Input
                  className=" border rounded w-full p-2 text-gray-700  "
                  id="phone"
                  type="text"
                  defaultValue="+9982006469"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className=" text-gray-700 text-[17px] font-bold mb-2"
                  htmlFor="fullname"
                >
                  Email
                </label>
                <Input
                  className=" border rounded w-full p-2 text-gray-700  "
                  id="email"
                  type="text"
                  defaultValue="azizjakbaraliyev17@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Saqlash
            </button>
          </div>
        </div>

        <div className="w-[30%]">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Hisobingiz</h2>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 mb-4">
                150,000 so'm
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Hisobni to'ldirish
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Xavfsizlik</h2>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full mb-2">
              Parolni o'zgartirish
            </button>
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
