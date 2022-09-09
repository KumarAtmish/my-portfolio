import React,{ useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg"

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeletion, setIsDeletion] = useState(false);
    const toRotate = ["React Developer","MERN Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticket = setInterval(() => {
            tick();
        },[delta])

        return () => { clearInterval(ticket)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeletion ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updateText);

        if(isDeletion){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeletion && updateText === fullText) {
            setIsDeletion(true);
            setDelta(period);
        } else if ( isDeletion && updateText === '') {
            setIsDeletion(false);
            setLoopNum(loopNum + 1)
            setDelta(500);
        }
    }

    console.log("text=>>",text)

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='aligne-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my portfolio</span>
                    <h1>Hi I'm Kumar Atmish <span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum is simple dummy test of the printing and typingsetting industry. Lorem </p>
                    <button onClick={() => console.log('connect') }>Let’s connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner