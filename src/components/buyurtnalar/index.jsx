import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useAxios } from "../../hooks/axios";

function BuyurtmalarComponents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState();
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: "/orders/history/",
      method: "GET",
    })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(data, "data");

  const getId = (id) => {
    const findData = data.find((value) => value.id === id);
    setSelectedData(findData);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Oy indeksini 1 dan boshlash
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year}, ${hours}:${minutes}`;
  };
  return (
    <section className="w-[90%] m-auto pt-7">
      <div className="mb-7">
        <h1 className="text-[24px] font-bold">Buyurtmalar tarixi</h1>
      </div>
      <div className="flex bg-white rounded-lg shadow flex-col">
        {data?.map((value) => (
          <div
            key={value.id}
            className="p-4 border-b border-gray-500 w-full pt-5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[17px] font-bold">{value?.branch}</h3>
              <p className="text-green-500">
                <p className="text-green-500">
                  {value?.created_at
                    ? formatDate(value.created_at)
                    : "Ma'lumot yo'q"}
                </p>
              </p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex flex-col gap-2">
                <p className="text-[17px] text-gray-500 font-medium">
                  Yoqilg'i turi
                </p>
                <h3 className="text-[19px] font-medium">
                  {value?.benzin_brand?.name}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[17px] text-gray-500 font-medium">Miqdori</p>
                <h3 className="text-[19px] font-medium">
                  {value.quantity} litr
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[17px] text-gray-500 font-medium">
                  Jami narxi
                </p>
                <h3 className="text-[19px] font-medium">
                  {Math.floor(value?.total_price)} so'm
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[17px] text-gray-500 font-medium">Status</p>
                <h3 className="text-[19px] text-green-600 font-medium">
                  {value?.status}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => {
                    getId(value?.id);
                    setIsModalOpen(true);
                  }}
                >
                  Batafsil
                </Button>
                <Button danger>O'chirish</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={
          <Button onClick={() => setIsModalOpen(false)} danger>
            Bekor qilish
          </Button>
        }
        closable={false}
      >
        {selectedData && (
          <div className="p-4 bg-white">
            <div className="flex items-end justify-between mb-5">
              <div className="flex flex-col gap-4">
                <h2 className="text-[19px] font-medium">Buyurtma: </h2>
                <h2 className="text-[15px] font-medium">
                  {selectedData?.branch}
                </h2>
              </div>
              <button className="bg-yellow-300 w-[100px] h-[30px] rounded-md text-[#333] font-medium">
                {selectedData?.status === "pending"
                  ? "Kutilmoqda..."
                  : "Bajarilgan"}
              </button>
            </div>
            <div className="flex items-center justify-between border-b py-2 mt-3">
              <h3 className="text-[15px] font-medium">Filial:</h3>
              <p className="text-[15px]">{selectedData?.branch}</p>
            </div>
            <div className="flex items-center justify-between border-b py-2 mt-3">
              <h3 className="text-[15px] font-medium">Foydalanuvchi nomi:</h3>
              <p className="text-[15px]">{selectedData?.user}</p>
            </div>
            <div className="flex items-center justify-between border-b py-2 mt-3">
              <h3 className="text-[15px] font-medium">Benzin turi:</h3>
              <p className="text-[15px]">{selectedData?.benzin_brand?.name}</p>
            </div>
            <div className="flex items-center justify-between border-b py-2 mt-3">
              <h3 className="text-[15px] font-medium">Miqdor:</h3>
              <p className="text-[15px]">{selectedData?.quantity} litr</p>
            </div>
            <div className="flex items-center justify-between border-b py-2 mt-3">
              <h3 className="text-[15px] font-medium">To'lov usuli:</h3>
              <p className="text-[15px]">{selectedData?.payment_method}</p>
            </div>
            <div className="flex items-center justify-between border-b py-2 mt-3">
              <h3 className="text-[15px] font-medium">Jami hisob:</h3>
              <p className="text-[15px]">{selectedData?.total_price} so'm</p>
            </div>
            <p className="text-center mt-3">
              Buyurtma vaqti:{" "}
              {selectedData?.created_at
                ? formatDate(selectedData.created_at)
                : "Ma'lumot yo'q"}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default BuyurtmalarComponents;
