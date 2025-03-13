import { Button, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import notificationApi from "../../../generic/notify";
import { useState } from "react";
import "@ant-design/v5-patch-for-react-19";

function Login() {
  const notify = notificationApi();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const getValue = async () => {
    const data = {
      username_or_email: userName,
      password,
    };

    if (!userName || !password) {
      notify({
        type: "fullData",
        message: "Barcha maydonlarni to'ldiring!",
      });
      return;
    }

    try {
      const response = await fetch("https://bcrm.uz/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        notify({
          type: "login",
        });

        localStorage.setItem("access_token", result.access_token);

        navigate("/dashboard");
      } else {
        notify({
          type: "notFound",
        });
      }
    } catch (error) {
      console.error("Login Xatosi:", error);
      notify({
        type: "error",
        message: "Server bilan bog'lanishda xatolik yuz berdi!",
      });
    }
  };

  return (
    <section className="bg-blue-600">
      <div className="w-[90%] h-screen m-auto flex items-center justify-center">
        <div className="w-[30%] bg-[#FFF] h-[400px] rounded-lg flex flex-col gap-7 justify-center items-center">
          <h1 className="text-center text-[22px] font-medium">Login</h1>
          <form className="flex flex-col gap-7 w-[70%]">
            <Input
              required
              classNames="text-[17px]"
              onChange={(e) => setUserName(e.target.value)}
              className="h-[45px] rounded-[30px]"
              placeholder="Username yoki Email"
            />
            <Input
              required
              type="password"
              classNames="text-[17px]"
              onChange={(e) => setPassword(e.target.value)}
              className="h-[45px] rounded-[30px]"
              placeholder="Parol"
            />
            <Button
              onClick={getValue}
              type="primary"
              className="w-full h-[45px] rounded-[30px]"
            >
              Kirish
            </Button>
          </form>

          <Link
            className="text-[17px] font-normal text-[#8c8e9c]"
            to={"/register"}
          >
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
