import React, { useState } from "react";

function OrderPost() {
  const [formData, setFormData] = useState({
    username_or_email: "",
    password: "",
    branch: "",
    user: "",
    balance: "",
    benzin_brand: "",
    quantity: "",
    payment_method: "",
    total_price: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yuborilgan ma'lumotlar:", formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Buyurtma berish</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="username_or_email"
          placeholder="Username yoki Email"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Parol"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="branch"
          placeholder="Filial ID"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="number"
          name="user"
          placeholder="Foydalanuvchi ID"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="number"
          name="balance"
          placeholder="Balans"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="benzin_brand"
          placeholder="Benzin brendi"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Miqdor (litr)"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="payment_method"
          placeholder="To'lov turi"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="number"
          name="total_price"
          placeholder="Umumiy narx"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          className="border p-2 rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
}

export default OrderPost;
