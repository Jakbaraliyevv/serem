import React from "react";

function Zaprafkalar() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Zapravkalar</h2>
      <div className="bg-white rounded-lg shadow ">
        <table className="min-w-full">
          <thead className="bg-gray-50 ">
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
                <a href="/hisobni-toldirish" className="text-blue-600 hover:text-blue-900">
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
                <a href="/hisobni-toldirish" className="text-blue-600 hover:text-blue-900">
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
  );
}

export default Zaprafkalar;
