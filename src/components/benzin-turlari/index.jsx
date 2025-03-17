import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { useAxios } from "../../hooks/axios";
import { data } from "react-router-dom";

function BenzinTurlari() {
  const axios = useAxios();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#f9fafb] min-h-screen">
      <div className="w-[90%] m-auto pt-[20px]">
        <div className="bg-blue-600 flex items-center justify-between p-5 rounded-md">
          <h2 className="text-[#FFF] text-[25px] font-bold">Benzin turlari</h2>
          <Button onClick={() => setIsModalOpen(true)}>Add benzin</Button>
        </div>
        <table className="w-full mt-7">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 w-1/5">Branch</th>
              <th className="border border-gray-300 px-4 py-2 w-1/5">Name</th>
              <th className="border border-gray-300 px-4 py-2 w-1/5">Price</th>
              <th className="border border-gray-300 px-4 py-2 w-1/5">Stock</th>
              <th className="border border-gray-300 px-4 py-2 w-1/5">
                Amallar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">
                OIL
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                AI-80
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                1200 so'm
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                122
              </td>
              <td className="border border-gray-300 px-4 py-2 text-end">
                <Button classNames="!w-[40px]" type="primary" className="mr-2">
                  Tahrirlash
                </Button>
                <Button classNames="!w-[40px]" danger>
                  O'chirish
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalOpen(false)}>
            Bekor qilish
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => setIsModalOpen(false)}
          >
            Saqlash
          </Button>,
        ]}
      >
        <div className="mt-5">
          <form className="flex flex-col gap-7">
            <div className="space-y-2">
              <label
                htmlFor="benzin"
                className="text-[17px] font-medium text-gray-700"
              >
                Benzin nomi
              </label>
              <Input
                id="benzin"
                required
                className="h-11 rounded-lg text-base"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Benzin nomini kiriting"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="text-[17px] font-medium text-gray-700"
              >
                Benzin nomi
              </label>
              <Input
                id="price"
                required
                className="h-11 rounded-lg text-base"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Benzin narxini kiriting"
              />
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
                className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Fillialni tanlang</option>
                <option value="2">Bo'lim 2</option>
                <option value="3">Bo'lim 3</option>
              </select>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
}

export default BenzinTurlari;
