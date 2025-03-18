import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import notificationApi from "../../generic/notify";
import { useAxios } from "../../hooks/axios";

function OrderPost() {
  const [data, setData] = useState([]);
  const [benzinData, setBenzinData] = useState([]);
  const [formData, setFormData] = useState({
    balance: "",
    benzin_brand: "",
    quantity: "",
    payment_method: "",
    total_price: "",
    status: "",
    branch: "",
  });

  const notify = notificationApi();
  const axios = useAxios();

  // Branch olish
  useEffect(() => {
    axios({
      url: "/register/",
      method: "GET",
    })
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);

  // Benzin turini olish
  useEffect(() => {
    axios({
      url: "/orders/create/",
      method: "GET",
    })
      .then((data) => {
        setBenzinData(data);
        setFormData((prev) => ({
          ...prev,
          balance: data?.user_balance || 0, // Yangilangan balance qiymati
        }));
      })
      .catch((error) => console.log(error));
  }, []);

  const benzinChoise = benzinData?.fuel_stock || [];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yuborilgan data:", formData);
    axios({
      url: "/orders/create/",
      method: "POST",
      data: formData,
    })
      .then((data) => {
        notify({ type: "sucsess" });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        notify({ type: "error" });
      });
  };

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="w-[90%] m-auto">
        <h1 className="py-9 text-[22px] font-semibold">Buyurtma qilish</h1>

        <form
          className="p-11 bg-[#FFF] shadow rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="flex items-start justify-between m-auto gap-5">
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-[17px] mb-2">Miqdori</label>
                <Input
                  onChange={handleChange}
                  name="quantity"
                  type="number"
                  min="1"
                  step="1"
                  className="w-full h-11 px-3 border text-[15px] font-medium border-gray-300 rounded-lg bg-white shadow-sm"
                  placeholder="Miqdorini kiriting"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[17px] font-medium text-gray-700">
                  Benzin turi
                </label>
                <select
                  onChange={handleChange}
                  name="benzin_brand"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <option value="">Benzin tanlang</option>
                  {benzinChoise?.map((value) => (
                    <option key={value.benzin_id} value={value.benzin_id}>
                      {value.benzin_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[17px] font-medium text-gray-700">
                  Fillial
                </label>
                <select
                  onChange={handleChange}
                  name="branch"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <option value="">Fillialni tanlang</option>
                  {data?.map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="w-full flex flex-col gap-5">
              <div className="space-y-2">
                <label className="text-[17px] font-medium text-gray-700">
                  Tolov turi
                </label>
                <select
                  onChange={handleChange}
                  name="payment_method"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <option value="">To'lov turini tanlang</option>
                  <option value="cash">Naqd pul</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[17px] mb-2">Jami narxi</label>
                <Input
                  onChange={handleChange}
                  name="total_price"
                  min="1"
                  type="number"
                  step="1"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm text-[15px] font-medium"
                  placeholder="Jami narxini kiriting"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[17px] font-medium text-gray-700">
                  Status
                </label>
                <select
                  onChange={handleChange}
                  name="status"
                  className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <option value="">Status tanlang</option>
                  <option value="pending">Kutilyatgan</option>
                  <option value="completed">Bajarilgan</option>
                  <option value="cancelled">Bekor qilingan</option>
                </select>
              </div>

              <div className="flex justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-[40%] h-11 mt-5 px-3"
                >
                  Yuborish
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default OrderPost;
