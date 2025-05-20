import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import useMessages from "../../hooks/useMessages";
import { Button, Carousel, Col, Form, Input, InputNumber, Row } from "antd";
import useRedirectTo from "../../hooks/useRedirectTo";
import { MdHomeFilled, MdPerson, MdEmail, MdPhone, MdMessage } from "react-icons/md";

import image1 from '../../../assets/images/slider/ux-ui-one.jpg';
import image2 from '../../../assets/images/slider/ux-ui-two.jpg';
import image3 from '../../../assets/images/slider/ux-ui-three.jpg';

const { TextArea } = Input;

interface FormProps {
  name: string;
  lastname: string;
  description: string;
  email: string;
  phoneNumber: string;
}

const GetInTouch = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { sendNewEmail } = useMessages();
  const { handleRedirectTo } = useRedirectTo();

  const onFinish = (isSuccess: boolean) => {
    if (isSuccess) {
      form.resetFields();
      handleRedirectTo('/');
    }
  };

  const onSubmit = async (formData: FormProps) => {
    setLoading(true);
    const response = await sendNewEmail(formData);
    onFinish(response);
    setLoading(false);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 bg-black px-10 py-2 z-10">
        <Row align="middle" className="justify-center lg:justify-start">
          <Col>
            <Link to="/">
              <MdHomeFilled className="text-white text-3xl hover:text-gray-300 transition-colors duration-300" />
            </Link>
          </Col>
        </Row>
      </nav>

      <section className="relative h-screen overflow-hidden bg-black">
        <Carousel dotPosition="left" autoplay autoplaySpeed={3000} effect="fade" className="h-full">
          {[image1, image2, image3].map((img, index) => (
            <div key={index} className="h-full w-full">
              <div
                className="h-screen w-full bg-center bg-cover"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </Carousel>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 overflow-auto">
          <Form
            form={form}
            layout="vertical"
            name="contactForm"
            disabled={loading}
            onFinish={onSubmit}
            className="max-w-4xl mx-auto px-4"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl  xl:text-8xl font-extrabold text-white text-center mb-6 animate-fade-in-down">
              Sé un partner, conviértete en Be Rad Studios
            </h2>

            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="name"
                  label={<span className="text-white">Nombres</span>}
                  {...config}
                >
                  <Input
                    prefix={<MdPerson className="text-gray-400 mr-2" />}
                    className="h-10"
                    placeholder="Ingresa tus nombres"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  name="lastname"
                  label={<span className="text-white">Apellidos</span>}
                  {...config}
                >
                  <Input
                    prefix={<MdPerson className="text-gray-400 mr-2" />}
                    className="h-10"
                    placeholder="Ingresa tus apellidos"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  name="email"
                  label={<span className="text-white">Correo</span>}
                  {...config}
                >
                  <Input
                    prefix={<MdEmail className="text-gray-400 mr-2" />}
                    className="h-10"
                    placeholder="Ingresa tu correo electrónico"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  name="phoneNumber"
                  label={<span className="text-white">Número de contacto</span>}
                  {...config}
                >
                  <InputNumber
                    prefix={<MdPhone className="text-gray-400 mr-2" />}
                    className="h-10 w-full"
                    placeholder="Ingresa tu número de contacto"
                    maxLength={9}
                    min={0}
                  />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  name="description"
                  label={<div className="flex items-center">
                      <MdMessage className="text-gray-400 mr-2" />
                      <span className="text-white">¿Qué quieres mejorar?</span>
                    </div>
                  }
                  {...config}
                >
                  <TextArea
                    rows={4}
                    placeholder="Describe tus necesidades o inquietudes"
                  />
                </Form.Item>
              </Col>

              <Col xs={24} className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  disabled={loading}
                  className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
                >
                  ENVIAR
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
