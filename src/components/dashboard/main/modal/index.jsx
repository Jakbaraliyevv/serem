import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "../../../../hooks/axios";
import { toggleModal, triggerRefresh } from "../../../../redux/modal-clise";

const MyModal = () => {
  const [form] = Form.useForm();
  const axios = useAxios();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);

  const handleCancel = () => {
    dispatch(toggleModal());
  };

  const onFinish = (values) => {
    console.log("Ma'lumotlar:", values);

    axios({
      url: "/branch/create/",
      method: "POST",
      data: values,
    })
      .then((data) => {
        console.log(data);
        dispatch(toggleModal()); // Modalni yopamiz
        dispatch(triggerRefresh(true)); // Ma'lumotlarni yangilash triggerini ishga tushiramiz
        form.resetFields(); // Formani tozalaymiz
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal
      title="Ma'lumot kiritish"
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Branch name"
          name="name"
          rules={[
            { required: true, message: "Iltimos, branch namini kiriting!" },
          ]}
        >
          <Input placeholder="Branch nomini kiriting" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Iltimos, manzilni kiriting!" }]}
        >
          <Input placeholder="Manzilni kiriting" />
        </Form.Item>

        <Form.Item
          label="Manager"
          name="manager"
          rules={[
            { required: true, message: "Iltimos, manager nomini kiriting!" },
          ]}
        >
          <Input placeholder="Manager ismini kiriting" />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contact_number"
          rules={[
            { required: true, message: "Iltimos, aloqa raqamini kiriting!" },
          ]}
        >
          <Input placeholder="Aloqa raqamini kiriting" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Saqlash
          </Button>
          <Button onClick={handleCancel} style={{ marginLeft: 8 }}>
            Bekor qilish
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MyModal;
