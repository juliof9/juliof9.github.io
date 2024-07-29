import Home from "./Home"
import AboutUs from "./AboutUs"
import { Col, Row } from "antd"
import Services from "./Services"
import Navbar from "../layout/Navbar"

const MainHome = () => {
  return (
    <Row>
      <Col span={24}>
        <Navbar />

        <Home />

        <AboutUs />

        <Services />
      </Col>
    </Row>
  )
}

export default MainHome