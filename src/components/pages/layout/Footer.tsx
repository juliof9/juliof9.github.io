import { Col, Row } from "antd"
import { FiPhone } from "react-icons/fi"
import { FaInstagram, FaWhatsapp, FaFacebookSquare } from "react-icons/fa"
import { Link } from "react-router-dom"

import './styles.css'

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
          <a href={`tel:${+50377859602}`}>
            <label className="flex hover:cursor-pointer">
              <FiPhone className="w-4 h-4 hover:cursor-pointer" />
              
              <span>
                (+503) 7785-9602
              </span>
            </label>
          </a>
          </Col>

          <Col>
            <Link to="/contact-us">
              <p className="cursor-pointer text-xs font-bold uppercase">
                CONTÁCTANOS
              </p>
            </Link>
          </Col>
        </Row>
      </Col>

      <Col sm={24} md={8}>
        <Row justify="center" gutter={16}>
          <Col>
            <a
              rel="alternate"
              target="_blank"
              href="https://www.instagram.com/berad.studios?igsh=amh2Zm9zeXhpMzZ1"
            >
              <FaInstagram
                className="w-6 h-6 hover:cursor-pointer icon-hover transition duration-300 ease-in-out hover:scale-125"
              />
            </a>
          </Col>

          <Col>
            {/* Falta agregar el link de chat con berad studios chat */}
            <a
              href="https://web.whatsapp.com/"
              rel="alternate"
              target="_blank"
            >
              <FaWhatsapp
                className="w-6 h-6 hover:cursor-pointer icon-hover transition duration-300 ease-in-out hover:scale-125"
              />
            </a>
          </Col>

          <Col>
            <FaFacebookSquare className="w-6 h-6 hover:cursor-pointer icon-hover transition duration-300 ease-in-out hover:scale-125" />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer
