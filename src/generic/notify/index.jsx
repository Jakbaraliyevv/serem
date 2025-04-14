import { notification } from "antd";

notification.config({
  duration: 3, // notification 3 soniyadan keyin o‘chishi
  style: { zIndex: 999999 }, // z-index qo‘shildi
});

const notificationApi = () => {
  const notify = ({ type }) => {
    switch (type) {
      case "fullData":
        return notification.error({
          message: "Iltimos, barcha maydonlarni to‘ldiring!",
          className: "custom-notification", // CSS classni qo‘shdik
        });
      case "login":
        return notification.success({
          message: "Tizimga muvaffaqiyatli kirdingiz",
          className: "custom-notification", // CSS classni qo‘shdik
        });
      case "register":
        return notification.success({
          message: "Register muvaffaqiyatli",
          className: "custom-notification", // CSS classni qo‘shdik
        });
      case "sucsess":
        return notification.success({
          message: "Buyurtma muvaffaqiyatli qilindi",
          className: "custom-notification", // CSS classni qo‘shdik
        });
      case "notFound":
        return notification.error({
          message: "Foydalanuvchi topilmadi!",
          className: "custom-notification", // CSS classni qo‘shdik
        });
      case "error":
        return notification.error({
          message: "Xatolik topildi!",
          className: "custom-notification", // CSS classni qo‘shdik
        });
      default:
        return notification.info({
          message: "Noma’lum holat yuz berdi!",
          className: "custom-notification", // CSS classni qo‘shdik
        });
    }
  };

  return notify;
};

export default notificationApi;
