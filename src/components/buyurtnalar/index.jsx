import { Button } from "antd";
import React from "react";

function BuyurtmalarComponents() {
  return (
    <section className="w-[90%] m-auto pt-7">
      <div className="mb-7">
        <h1 className="text-[24px] font-bold">Buyurtmalar tarixi</h1>
      </div>
      <div className="flex bg-white rounded-lg shadow flex-col ">
        <div className="p-4 border-b  border-gray-500 w-full pt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-bold">#1234 - Zapravka #1</h3>
            <p className="text-green-500">11-29-2020</p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">
                Yoqilg'i turi
              </p>
              <h3 className="text-[19px] font-medium">AI-95</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">Miqdori</p>
              <h3 className="text-[19px] font-medim">20 litr</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">Narxixi</p>
              <h3 className="text-[19px] font-medium">184,000 so'm</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">Status</p>
              <h3 className="text-[19px] text-green-600 font-medium">
                Yakunlangan
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button>Batafsil</Button>
              <Button danger>o'chirish</Button>
            </div>
          </div>
        </div>
        <div className="p-4 border-b  border-gray-500 w-full pt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-bold">#1234 - Zapravka #1</h3>
            <p className="text-green-500">11-29-2020</p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">
                Yoqilg'i turi
              </p>
              <h3 className="text-[19px] font-medium">AI-95</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">Miqdori</p>
              <h3 className="text-[19px] font-medim">20 litr</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">Narxixi</p>
              <h3 className="text-[19px] font-medium">184,000 so'm</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[17px] text-gray-500 font-medium">Status</p>
              <h3 className="text-[19px] text-green-600 font-medium">
                Yakunlangan
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Button>Batafsil</Button>
              <Button danger>o'chirish</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuyurtmalarComponents;
