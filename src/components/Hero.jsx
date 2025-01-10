import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/developer.svg";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css';

export default function Hero()  {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [  "Full Stack Developer", "React Developer", "MERN Stack Developer"  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section id="home" className="banner md:pt-44 sm:px-10 sm:pt-28  py-16 lg:pt-60 h-full w-full lg:pb-40 " >
    <div>

    
      <>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline text-white">Welcome to my Portfolio</span>
                <h1 className="text-white ">{`Hi! I'm Venkateshwaran `} </h1>
               <h1 className="text-white"> <span className="txt-rotate " data-period="1000" data-rotate='[ "Full Stack Developer", "React Developer", "MERN Stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>A Dedicated proficient MERN stack developer with hands-on experience in building and deploying fullstack applications. My expertise includes developing scalable e-commerce platforms, employee management systems, and specialized websites using MongoDB, Express.js, React.js, and Node.js.</p>
                 <button ><a className="flex no-underline pl-10 text-white" href="/Resume-Full Stack Developer-Venkateshwaran.pdf" download onClick={() => console.log('connect')}>Download CV <ArrowDownCircle size={25} /></a></button> 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="h-[400px] w-[400px]" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </>
      </div>
    </section>
  )
}
