import { Col, Row } from "antd"
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <section className="w-full px-10 md:px-5 md:py-20 bg-black">
        <ExtraFooter />
      </section>
    </footer>
  )
}

const ExtraFooter = () => {
  return (
    <Row gutter={8} align="middle" className="text-white font-semibold">
      <Col span={8}>
        <Row justify="center">
          <label>
            ©2024 BeRadStudios
          </label>
        </Row>
      </Col>

      <Col span={8}>
        <Row justify="space-around" gutter={8}>
          <Col>
            <label>
              PRIVACY POLICY
            </label>
          </Col>

          <Col>
            <label>
              GIRONFLORES26@GMAIL.COM
            </label>
          </Col>
        </Row>
      </Col>

      <Col span={8}>
        <Row justify="center" gutter={16}>
          <Col>
            <FaInstagram className="w-6 h-6 hover:cursor-pointer" />
          </Col>

          <Col>
            <FaFacebookSquare className="w-6 h-6 hover:cursor-pointer"/>
          </Col>

          <Col>
            <FaGithub className="w-6 h-6 hover:cursor-pointer"/>
          </Col>

          <Col>
            <FaLinkedin className="w-6 h-6 hover:cursor-pointer"/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer
