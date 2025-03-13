import { Button, Input } from "antd";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="bg-blue-600">
      <div className="w-[90%] h-screen m-auto flex items-center justify-center ">
        <div className="w-[30%] bg-[#FFF] h-[400px] rounded-lg flex flex-col gap-7 justify-center items-center ">
          <h1 className="text-center text-[29px] font-medium">Login</h1>
          <form className="flex flex-col gap-7 w-[70%]">
            <Input
              type="email"
              onChange={(e) => setUserName(e.target.value)}
              className="h-[45px] rounded-[30px]"
              placeholder="Inter your username"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              className="h-[45px] rounded-[30px]"
              placeholder="Inter your password"
            />
            <Button
              onClick={(e) => getValue()}
              type="primary"
              className="w-full  h-[45px] rounded-[30px]"
            >
              Send
            </Button>
          </form>

          <Link className="text-[17px] text-[#8c8e9c]" to={"/changeAuth"}>
            Chanage profile
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
