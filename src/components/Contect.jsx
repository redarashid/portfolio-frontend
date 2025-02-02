import { createElement, useRef } from "react";
import { content } from "../Content";
import { Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contect = () => {
  const { Contact } = content;
  const layout = {
    labelCol: {
      span: 15, // 8
    },
    wrapperCol: {
      span: 28, // 16
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4xxr703", "template_tb8w1qp", form.current, {
        publicKey: "ROeYUqTLokqMJNRYO",
      })
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input fields values
          form.current.result.clear();
          // Success message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className=" bg-[#06223F] " id="contact">
      <Toaster />
      <div className=" fixed z-[9999] inset-[16] pointer-events-none"></div>
      <div className=" md:container px-5 py-14">
        <h2 data-aos="fade-down" className="title text-white">
          {Contact.title}
        </h2>
        <h4 data-aos="fade-down" className="subtitle">
          {Contact.subtitle}
        </h4>
        <br />
        <div className=" flex md:flex-row flex-col gap-10">
          <Form
            data-aos="fade-up"
            onSubmit={sendEmail}
            ref={Form}
            className=" flex flex-1 flex-col gap-1 "
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}>
            <Form.Item
              className=" hover:border-none"
              name={["user", "name"]}
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input
                name="from_name"
                placeholder="Name"
                className=" p-3 "
                required
              />
            </Form.Item>

            <Form.Item
              name={["user", "email"]}
              rules={[
                {
                  type: "email",
                },
              ]}>
              <Input
                name="user_email"
                placeholder="Email"
                className=" hover:border-none p-3"
                required
              />
            </Form.Item>

            <Form.Item name={["user", "introduction"]}>
              <Input.TextArea
                name="message"
                placeholder="Massage"
                className=" p-3 border-slate-600 !h-44"
              />
            </Form.Item>

            <button className="btn-2 self-start">Submit</button>
          </Form>

          <div data-aos="fade-down" className=" flex flex-1 flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div key={i} className=" flex items-center gap-5">
                <h4 className=" text-white">{createElement(content.icon)}</h4>
                <a
                  className=" text-white font-Poppins"
                  href={content.link}
                  target=" _blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-5 flex-1"></div>
      </div>
    </section>
  );
};

export default Contect;

// import { Form, Input } from "antd";
// const Contect = () => {
//   const layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   const validateMessages = {
//     required: "${label} is required!",
//     types: {
//       email: "${label} is not a valid email!",
//       number: "${label} is not a valid number!",
//     },
//     number: {
//       range: "${label} must be between ${min} and ${max}",
//     },
//   };
//   const onFinish = (values) => {
//     console.log(values);
//   };

//   return (
//     <Form
//       className=" py-14 "
//       {...layout}
//       name="nest-messages"
//       onFinish={onFinish}
//       style={{
//         maxWidth: 600,
//       }}
//       validateMessages={validateMessages}>
//       <Form.Item
//         className=" hover:border-none"
//         name={["user", "name"]}
//         rules={[
//           {
//             required: true,
//           },
//         ]}>
//         <Input
//           placeholder="Name"
//           style={{
//             outline: "none",
//             boxShadow: "none",
//             borderColor: "rgb(226 232 240 / var(--tw-border-opacity, 1))",
//           }}
//         />
//       </Form.Item>
//     </Form>
//   );
// };

// export default Contect;
