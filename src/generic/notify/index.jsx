import { notification } from "antd";

const notificationApi = () => {
  const notify = ({ type }) => {
    switch (type) {
      case "fullData":
        return notification.error({
          message: "Iltimos, barcha maydonlarni to‘ldiring!",
        });
      case "login":
        return notification.success({
          message: "Tizimga muvaffaqiyatli kirdingiz",
        });
      case "register":
        return notification.success({
          message: "Register muvaffaqiyatli",
        });
      case "sucsess":
        return notification.success({
          message: "Buyurtma muvaffaqiyatli qilindi",
        });
      case "notFound":
        return notification.error({
          message: "Foydalanuvchi topilmadi!",
        });
      case "error":
        return notification.error({
          message: "Xatolik topildi!",
        });
      default:
        return notification.info({
          message: "Noma’lum holat yuz berdi!",
        });
    }
  };

  return notify;
};

export default notificationApi;
