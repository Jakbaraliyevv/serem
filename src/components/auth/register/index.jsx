import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import notificationApi from "../../../generic/notify";
import { useState } from "react";
import "@ant-design/v5-patch-for-react-19";

function Register() {
  const notify = notificationApi();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const getValue = async () => {
    if (!userName || !password || !email || !selectValue) {
      notify({ type: "fullData" });
      return;
    }

    const data = {
      username: userName,
      first_name: name,
      last_name: lastname,
      email,
      password,
      branch: selectValue,
    };

    try {
      const response = await fetch("https://bcrm.uz/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        notify({
          type: "success",
          message: "Ro‘yxatdan o‘tish muvaffaqiyatli!",
        });
        navigate("/");
      } else {
        notify({
          type: "error",
          message: result.message || "Xatolik yuz berdi!",
        });
      }
    } catch (error) {
      console.error("Xatolik:", error);
      notify({ type: "error", message: "Tarmoq xatosi yuz berdi!" });
    }
  };

  return (
    <section className="bg-blue-600">
      <div className="w-[90%] h-screen m-auto flex items-center justify-center">
        <div className="w-[50%] bg-[#FFF] h-auto rounded-lg p-5 flex flex-col gap-7 justify-center items-center">
          <h1 className="text-center text-[22px] font-medium">Register</h1>
          <form
            className="flex flex-col gap-7 w-[90%]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-start justify-between gap-5">
              <div className="flex flex-col gap-7 w-full">
                <Input
                  required
                  className="h-[45px] rounded-[30px] text-[17px]"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Inter your firstname"
                />
                <Input
                  required
                  className="h-[45px] rounded-[30px] text-[17px]"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Inter your lastname"
                />
                <Input
                  required
                  className="h-[45px] rounded-[30px] text-[17px]"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Inter your username"
                />
              </div>
              <div className="flex flex-col gap-7 w-full">
                <Input
                  required
                  type="email"
                  className="h-[45px] rounded-[30px] text-[17px]"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Inter your email"
                />
                <Input
                  required
                  type="password"
                  className="h-[45px] rounded-[30px] text-[17px]"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Inter your password"
                />
                <select
                  onChange={(e) => setSelectValue(e.target.value)}
                  className="w-[150px] h-[40px] px-3 border border-gray-300 rounded-[30px] bg-white shadow-sm focus:outline-none text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>

            <Button
              onClick={getValue}
              type="primary"
              className="w-full h-[45px] rounded-[30px]"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
