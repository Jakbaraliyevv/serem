import { Button } from "antd";
import { useAxios } from "../../../hooks/axios";
import { useEffect, useState } from "react";

const BranchStats = () => {
  const [selectedBranch, setSelectedBranch] = useState("Challenge");
  const [data, setData] = useState({});

  const axios = useAxios();

  useEffect(() => {
    axios({
      url: "/dashboard/",
      method: "GET",
    })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  const selectedData = data?.branch_stats?.[selectedBranch] || {};
  console.log(selectedData, "select");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-3xl font-bold">Filiallar boshqaruv paneli</h1>
          <p className="opacity-80 mt-2">
            Barcha filiallar statistikasi va ma'lumotlarini ko'rish
          </p>
        </div>

        <div className="mb-6 bg-white p-4 rounded-lg shadow flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold mb-3 text-gray-700">
              Filial tanlang
            </h2>
            <Button>Add new branch</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {data?.branches?.map((branch) => (
              <button
                key={branch}
                className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                  selectedBranch === branch
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => {
                  setSelectedBranch(branch);
                }}
              >
                {branch}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
            {selectedBranch} filiali
          </h2>
          <div className="grid grid-cols-3 gap-[20px]">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">💰</span>
                <div className="text-sm text-gray-600 font-medium">Foyda</div>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {selectedData?.profit}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">💸</span>
                <div className="text-sm text-gray-600 font-medium">Xarajat</div>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {selectedData?.expense}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">📦</span>
                <div className="text-sm text-gray-600 font-medium">
                  Kiruvchi miqdor
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {selectedData?.debt}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">📊</span>
                <div className="text-sm text-gray-600 font-medium">Qoldiq</div>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {selectedData?.astatka}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">💳</span>
                <div className="text-sm text-gray-600 font-medium">Qarz</div>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {selectedData?.incoming_quantity}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">💵</span>
                <div className="text-sm text-gray-600 font-medium">Kassa</div>
              </div>
              <div className="text-2xl font-bold text-blue-700">
                {selectedData?.kassa}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchStats;
