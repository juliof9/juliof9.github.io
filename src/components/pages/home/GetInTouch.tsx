import { useState } from "react"
import { Link } from "react-router-dom"
import { config } from "../../../config"
import useMessages from "../../hooks/useMessages"
import { Button, Col, Form, Input, Row } from "antd"
import useRedirectTo from "../../hooks/useRedirectTo"

const { TextArea } = Input

import { MdHomeFilled } from "react-icons/md"

interface formProps {
  name: string,
  lastname: string,
  description: string,
  email: string,
  phoneNumber: string,
}

const GetInTouch = () => {
  const [form] = Form.useForm()

  const [loading, setLoading] = useState(false)

  const { sendNewEmail } = useMessages()
  const { handleRedirectTo } = useRedirectTo()

  const onFinish = (isSuccess: boolean) => {
    if (isSuccess) {
      form.resetFields()
      handleRedirectTo('/')
    }
  }

  const onSubmit = async (formData: formProps) => {
    setLoading(true)

    const response = await sendNewEmail(formData)

    onFinish(response)

    setLoading(false)
  }

  return (
    <>
      <nav className="block fixed top-0 left-0 right-0 text-white bg-black px-10 py-2 z-10">
        <Row align="middle" className="flex justify-center lg:justify-start">
          <Col>
            <Link to='/'>
              <MdHomeFilled style={{ fontSize: 35 }} />
            </Link>
          </Col>
        </Row>
      </nav>

      <section className="py-20 font-semibold bg-home-background">
        <Form
          form={form}
          layout="vertical"
          name="contactForm"
          disabled={loading}
          onFinish={onSubmit}
        >
          <Row justify="center">
            <Col span={20} lg={12}>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white sm:text-justify">
                Se un partner, conviértete en Be Rad Studios
              </h2>
            </Col>
          </Row>

          <Row justify="center" className="mt-12">
            <Col span={20} md={10} lg={6} className="px-2">
              <label className="text-white">Nombres</label>

              <Form.Item name="name" {...config}>
                <Input className="h-10" />
              </Form.Item>
            </Col>

            <Col span={20} md={10} lg={6} className="px-2">
              <label className="text-white">Apellidos</label>
  
              <Form.Item name="lastname" {...config}>
                <Input className="h-10" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
          <Col span={20} md={10} lg={6} className="px-2">
            <label className="text-white">Correo</label>
              <Form.Item name="email" {...config}>
                <Input className="h-10" />
              </Form.Item>
            </Col>

            <Col span={20} md={10} lg={6} className="px-2">
              <label className="text-white">Número de contacto</label>
              <Form.Item name="phoneNumber" {...config}>
                <Input className="h-10" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={20} lg={12} className="px-2">
              <label className="text-white">¿Qué quieres mejorar?</label>
              
              <Form.Item name="description" {...config}>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center" className="pb-8">
            <Col span={6}>
              <Row justify="center">
                <Button
                  type="text"
                  htmlType="submit"
                  loading={loading}
                  disabled={loading}
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <span className="cursor-pointer font-semibold px-4 py-2">ENVIAR</span>
                </Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  )
}

export default GetInTouch