import { notification } from "antd";
notification.config({
  top: 80, // notification ekrandan pastroqda ochilishi uchun
  duration: 3, // notification 3 soniyadan keyin o‘chishi
  style: { zIndex: 999999 }, // z-index qo‘shildi
});
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
