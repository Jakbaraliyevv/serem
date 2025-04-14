import React from "react";

const ZapravkaList = () => {
  return (
    <div className="px-2">
      <h2 className="text-xl font-bold mb-4">Zapravkalar</h2>

      {/* Desktop table - hidden on small screens */}
      <div className="hidden sm:block bg-white rounded-lg shadow">
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
                  href="/hisobni-toldirish"
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
                  href="/hisobni-toldirish"
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

      {/* Mobile cards - visible only on small screens */}
      <div className="sm:hidden space-y-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Zapravka #1</h3>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Ochiq
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Toshkent sh., Yunusobod tumani
          </p>
          <a
            href="/hisobni-toldirish"
            className="block text-center w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
          >
            Zapravka qilish
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Zapravka #2</h3>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Ochiq
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Toshkent sh., Chilonzor tumani
          </p>
          <a
            href="/hisobni-toldirish"
            className="block text-center w-full py-2 px-4 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
          >
            Zapravka qilish
          </a>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Zapravka #3</h3>
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              Yopiq
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Toshkent sh., Sergeli tumani
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZapravkaList;
