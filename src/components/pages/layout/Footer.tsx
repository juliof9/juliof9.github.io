import { Col, Row } from "antd"
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

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
    <Row gutter={8} justify="center" align="middle" className="text-white font-semibold">
      <Col sm={24} md={8}>
        <Row justify="center">
          <label>
            ©2024 BeRadStudios
          </label>
        </Row>
      </Col>

      <Col sm={24} md={8}>
        <Row justify="space-around" gutter={8}>
          <Col>
            <label>
              PRIVACY POLICY
            </label>
          </Col>

          <Col>
            <Link to="/contact-us">
              <p className="cursor-pointer text-xs font-bold uppercase">
                j.flores@beradst.com
              </p>
            </Link>
          </Col>
        </Row>
      </Col>

      <Col sm={24} md={8}>
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

// type MailProps = {
//   email: string,
//   subject: string,
//   body: string,
// }

// const Mailto = ({ email, subject = '', body = '' }: MailProps) => {
//   let params = subject || body ? '?' : '';
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

//   return <a href={`mailto:${email}${params}`} />;
// };

export default Footer
