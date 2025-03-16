import React, { useState } from "react";

const BenzinZapravkaVisual = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-gas-pump text-2xl"></i>
            <span className="text-xl font-bold">BenzinServis</span>
          </div>

          {/* Desktop menyu */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className={`hover:text-blue-200 transition-colors flex items-center ${
                activeView === "dashboard"
                  ? "text-white font-bold"
                  : "text-blue-100"
              }`}
              onClick={() => setActiveView("dashboard")}
            >
              <i className="fas fa-home mr-1"></i> Bosh Sahifa
            </a>
            <a
              href="#"
              className={`hover:text-blue-200 transition-colors flex items-center ${
                activeView === "profile"
                  ? "text-white font-bold"
                  : "text-blue-100"
              }`}
              onClick={() => setActiveView("profile")}
            >
              <i className="fas fa-user-circle mr-1"></i> Profil
            </a>
            <a
              href="#"
              className={`hover:text-blue-200 transition-colors flex items-center ${
                activeView === "orders"
                  ? "text-white font-bold"
                  : "text-blue-100"
              }`}
              onClick={() => setActiveView("orders")}
            >
              <i className="fas fa-list-alt mr-1"></i> Buyurtmalar
            </a>
            <a
              href="#"
              className="hover:text-blue-200 transition-colors flex items-center"
            >
              <i className="fas fa-sign-out-alt mr-1"></i> Chiqish
            </a>
          </nav>

          {/* Mobile menyu tugmasi */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile menyu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-700 pb-3 px-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className={`text-white hover:text-blue-200 transition-colors py-2 flex items-center ${
                  activeView === "dashboard" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setActiveView("dashboard");
                  setMobileMenuOpen(false);
                }}
              >
                <i className="fas fa-home mr-2"></i> Bosh Sahifa
              </a>
              <a
                href="#"
                className={`text-white hover:text-blue-200 transition-colors py-2 flex items-center ${
                  activeView === "profile" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setActiveView("profile");
                  setMobileMenuOpen(false);
                }}
              >
                <i className="fas fa-user-circle mr-2"></i> Profil
              </a>
              <a
                href="#"
                className={`text-white hover:text-blue-200 transition-colors py-2 flex items-center ${
                  activeView === "orders" ? "font-bold" : ""
                }`}
                onClick={() => {
                  setActiveView("orders");
                  setMobileMenuOpen(false);
                }}
              >
                <i className="fas fa-list-alt mr-2"></i> Buyurtmalar
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors py-2 flex items-center"
              >
                <i className="fas fa-sign-out-alt mr-2"></i> Chiqish
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-6">
        {activeView === "dashboard" && (
          <>
            {/* Xush kelibsiz xabari */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Xush kelibsiz, Akbar Karimov!
              </h2>
              <div className="flex items-center text-lg flex-wrap">
                <span className="font-medium">Balans:</span>
                <span className="ml-2 font-bold text-blue-600">
                  150,000 so'm
                </span>
                <button className="ml-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition">
                  <i className="fas fa-credit-card mr-1"></i> Hisobni to'ldirish
                </button>
              </div>
            </div>

            {/* Asosiy funksiyalar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center justify-center text-center">
                <i className="fas fa-gas-pump text-4xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-semibold mb-2">Zapravka qilish</h3>
                <p className="text-gray-600">
                  Tez va oson zapravka buyurtma qiling
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center justify-center text-center">
                <i className="fas fa-history text-4xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-semibold mb-2">
                  Buyurtmalar tarixi
                </h3>
                <p className="text-gray-600">
                  Barcha buyurtmalaringizni ko'ring
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col items-center justify-center text-center">
                <i className="fas fa-car text-4xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-semibold mb-2">
                  Mening avtomobillarim
                </h3>
                <p className="text-gray-600">Avtomobillaringizni boshqaring</p>
              </div>
            </div>

            {/* Yoqilg'i narxlari */}
            <h2 className="text-xl font-bold mb-4">Joriy narxlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">AI-80</h3>
                <p className="text-2xl font-bold text-blue-600">
                  6,500 so'm/litr
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">AI-91</h3>
                <p className="text-2xl font-bold text-blue-600">
                  7,800 so'm/litr
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-semibold mb-2">AI-95</h3>
                <p className="text-2xl font-bold text-blue-600">
                  9,200 so'm/litr
                </p>
              </div>
            </div>

            {/* Zapravkalar ro'yxati */}
            <h2 className="text-xl font-bold mb-4">Zapravkalar</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nomi
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Manzil
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Holati
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amallar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 whitespace-nowrap font-medium">
                        Zapravka #1
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        Toshkent sh., Yunusobod tumani
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ochiq
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Zapravka qilish
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 whitespace-nowrap font-medium">
                        Zapravka #2
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        Toshkent sh., Chilonzor tumani
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ochiq
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Zapravka qilish
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 whitespace-nowrap font-medium">
                        Zapravka #3
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        Toshkent sh., Sergeli tumani
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Yopiq
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeView === "orders" && (
          <>
            <h1 className="text-2xl font-bold mb-6">Buyurtmalar tarixi</h1>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Buyurtmalar ro'yxati */}
              <div className="p-4 border-b">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">#1234 - Zapravka #1</h3>
                  <span className="text-gray-500">12-03-2025</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                  <div>
                    <span className="text-gray-500 text-sm">Yoqilg'i turi</span>
                    <p className="font-semibold">AI-95</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Miqdori</span>
                    <p className="font-semibold">20 litr</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Narxi</span>
                    <p className="font-semibold">184,000 so'm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Status</span>
                    <p className="text-green-600 font-semibold">Yakunlangan</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-2">
                  <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">
                    Batafsil
                  </button>
                  <button className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">
                    O'chirish
                  </button>
                </div>
              </div>

              <div className="p-4 border-b">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">#1233 - Zapravka #2</h3>
                  <span className="text-gray-500">10-03-2025</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                  <div>
                    <span className="text-gray-500 text-sm">Yoqilg'i turi</span>
                    <p className="font-semibold">AI-91</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Miqdori</span>
                    <p className="font-semibold">15 litr</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Narxi</span>
                    <p className="font-semibold">117,000 so'm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Status</span>
                    <p className="text-green-600 font-semibold">Yakunlangan</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-2">
                  <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">
                    Batafsil
                  </button>
                  <button className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">
                    O'chirish
                  </button>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">#1232 - Zapravka #1</h3>
                  <span className="text-gray-500">05-03-2025</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                  <div>
                    <span className="text-gray-500 text-sm">Yoqilg'i turi</span>
                    <p className="font-semibold">AI-80</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Miqdori</span>
                    <p className="font-semibold">30 litr</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Narxi</span>
                    <p className="font-semibold">195,000 so'm</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Status</span>
                    <p className="text-green-600 font-semibold">Yakunlangan</p>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 mt-2">
                  <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm">
                    Batafsil
                  </button>
                  <button className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">
                    O'chirish
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeView === "profile" && (
          <>
            <h1 className="text-2xl font-bold mb-6">Mening profilim</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Profil ma'lumotlari */}
              <div className="col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <i className="fas fa-user-edit mr-2 text-blue-600"></i>{" "}
                    Shaxsiy ma'lumotlar
                  </h2>
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="fullname"
                        >
                          To'liq ism
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="fullname"
                          type="text"
                          defaultValue="Akbar Karimov"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="phone"
                        >
                          Telefon raqami
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="phone"
                          type="text"
                          defaultValue="+998901234567"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          defaultValue="akbar@example.com"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="balance"
                        >
                          Hisobingiz
                        </label>
                        <div className="flex">
                          <input
                            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                            id="balance"
                            type="text"
                            readOnly
                            defaultValue="150,000 so'm"
                          />
                          <button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-r"
                          >
                            To'ldirish
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Saqlash
                      </button>
                    </div>
                  </form>
                </div>

                {/* Avtomobillar */}
                <div className="bg-white rounded-lg shadow p-6 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold flex items-center">
                      <i className="fas fa-car mr-2 text-blue-600"></i> Mening
                      avtomobillarim
                    </h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
                      <i className="fas fa-plus mr-1"></i> Qo'shish
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <p className="font-bold">01A123BB</p>
                        <p className="text-gray-600">Chevrolet Cobalt, Oq</p>
                      </div>
                      <div>
                        <button className="text-red-600 hover:text-red-800">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <p className="font-bold">01A456CC</p>
                        <p className="text-gray-600">Chevrolet Nexia 3, Qora</p>
                      </div>
                      <div>
                        <button className="text-red-600 hover:text-red-800">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hisobni boshqarish */}
              <div>
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
          </>
        )}
      </main>
    </div>
  );
};

export default BenzinZapravkaVisual;
