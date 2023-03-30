import { React, Component } from "react"
import "animate.css/animate.min.css";
import "./index.css"
import Header from "../../components/Header/index"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import { ImQuotesRight } from "react-icons/im"
import { RiArrowRightCircleFill } from "react-icons/ri"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import emailjs from "@emailjs/browser"

class Home extends Component { 
    state = {scrolled:false, name:"", email:"",message:"", success:false,failure:false}

    handle = () => {
        const scrolled = window.scrollY;
        if (scrolled >= 10) {
            this.setState({ scrolled: true })
        } else {
            this.setState({ scrolled: false })
        }

    }

    componentDidMount() {
        window.addEventListener("scroll", this.handle)
    }        

    getsuccess = (response) => {
        console.log(response);
        this.setState({ success: true })
    }

    getfailure = (error) => {
        console.log(error);
        this.setState({failure : true})
    }
    
    formSubmitted =  (e) => {
        e.preventDefault()
        const { name, email, message } = this.state
        const newMessage = {
            name,
            email,
            message
        }
        console.log(newMessage)
        emailjs.send("service_0eqdjai", "template_u012juy", newMessage , "Ax659_AY0KotGnhDu")
        .then(function(response) {
             this.getsuccess(response);
         }, function(error) {
            this.getfailure(error);
         });
        this.setState({name:"",email:"",message:"",success:true});
    }

    name = (e) => {
        this.setState({ name: e.target.value })
    }

    email = (e) => {
        this.setState({ email: e.target.value })
    }

    message = (e) => { 
        this.setState({ message: e.target.value })
    }


    render() {
        const { scrolled,name, email, message,success, failure } = this.state
        console.log(success);
        return (
            <div className="home-container">    
            <div className="home-content">    
                    { scrolled ? "" : <img className="img" src="https://pca-backend-media-static.s3.ap-south-1.amazonaws.com/frontend/webflow/ta-user-public-profile/square_badge.jpg" alt="img" />        }
                    <Header />   
            </div>
                <div className="content">
                    <div className="home-responsive">
                        <motion.div className="naming-container" initial={{ y: "50%", opacity: 0, scale: 0.5 }} animate={{y: 0, opacity: 1, scale: 1 }} transition={{ delay: 0.7}}>
                            <h1 className="heading"> Sai Vara Prasad Degala </h1><span className="symbol"> < ImQuotesRight /> </span>
                      <div className="type">
                     <Typewriter options={{strings: ['Web Developer', 'Programmer','Designer'],autoStart: true,loop: true, cursorClassName:'add' }}/>
                       </div>
                            <div className="name-info">
                                <  RiArrowRightCircleFill className="info" /> <span className="info"> A Consistency Learner </span>
                            </div>
                            </motion.div>
                        <motion.div className="img-container" drag dragConstraints={{left:200, right:100}} initial={{ x: -1220, opacity: 0.2 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, type: "spring", stiffness: 30 }} >
                           <img src="https://media-content.ccbp.in/ccbp_prod/media/profile_pic/09e1c1cd-8c8b-4af3-b716-862ad847c666.jpeg" alt="pro-img" className="pro-img" />
                        </motion.div>
                    </div>
                    <div className="about-me-section">
                    <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce={true}>              
                        
                                    <hr className="left-hr" />
                            </AnimationOnScroll>        
                            <span className="about-me-info"> About Me </span>
                                   
                                 
                          
                        <div className="about-me-flex">
                        <AnimationOnScroll animateIn="animate__bounceInRight" animateOut="animate__zoomOutLeft">              
                        <div className="img-container" >
                           <img src="https://media-content.ccbp.in/ccbp_prod/media/profile_pic/09e1c1cd-8c8b-4af3-b716-862ad847c666.jpeg" alt="pro-img" className="pro-img" />
                        </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__zoomInLeft" animateOut="animate__zoomOutRight">
                        <div className="about-info-container">
                                <h1 className="about-info-text"><b className="color-cyan"> <u>Hello There !</u><br/> </b>
                                Am a Tech 4.0 Enthusiast with industry experience in web Development as past two years, I love to explore things related to Artificial Intelligence and Internet of Things and Block Chain.
                                </h1>
                                </div>
                                </AnimationOnScroll>
                        </div>
                        <div className="skills-section">
                        <AnimationOnScroll animateIn="animate__bounceInLeft" animateOnce={true} >              
                    
                                <hr className="right-hr" />
                                </AnimationOnScroll>
                            <span className="skills-info"> Skills </span>
                            <div className="skills-icons-container">
                             <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png" alt="skill-img" className="skill-img" />
                                <p className="skill-info-card"> HTML </p>
                                    </div>
                                    </AnimationOnScroll>
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> CSS </p>
                                </div>
                                </AnimationOnScroll>
                             
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt="skill-img" className="skill-img wd" />
                                <p className="skill-info-card"> JavaScript </p>
                                </div>
                                </AnimationOnScroll>
                             
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> React JS </p>
                                </div>
                                </AnimationOnScroll>
                             
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://www.pngfind.com/pngs/m/487-4871694_p-python-logo-hd-png-download.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> Python </p>
                                </div>
                                </AnimationOnScroll>
                             
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://img.icons8.com/color/480/redux.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> Redux </p>
                                </div>
                                </AnimationOnScroll>
                             
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> MySQL </p>
                                </div>
                                </AnimationOnScroll>
                             
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> Bootstrap </p>
                                </div>
                                </AnimationOnScroll>
                             
                                
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> Node JS </p>
                                </div>
                                </AnimationOnScroll>
                             
                                
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card"> Express JS </p>
                                </div>
                                </AnimationOnScroll>
                             
                                
                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card">  MongoDB </p>
                                </div>
                                </AnimationOnScroll>

                                <AnimationOnScroll animateIn="animate__flipInY">
                                <div className="skill-card">
                                <img src="https://brandlogos.net/wp-content/uploads/2022/05/figma-logo_brandlogos.net_6n1pb.png" alt="skill-img" className="skill-img sm" />
                                <p className="skill-info-card">  Figma </p>
                                </div>
                                </AnimationOnScroll>
  
                            </div>

                           <p className="info-more"> many more...</p>
                        </div>
                        <div className="contact-form">
                        <AnimationOnScroll animateIn="animate__bounceInRight" animateOnce={true}>              
                        
                        <hr className="left-hr" />
    </AnimationOnScroll>        
                            <span className="about-me-info"> Ping Me </span>
                            <AnimationOnScroll animateIn="animate__flipInX" >
                            <form className="form-container" onSubmit={this.formSubmitted}>
                                <label htmlFor="name" className="label"> Name </label>
                                <input type="text" id="name" className="input" onChange={this.name} value={name} placeholder="Enter Name" required/>
                               <label htmlFor="email" className="label"> Email </label> 
                                <input type="email" className="input" onChange={this.email} value={ email} placeholder="Enter Email" id="email" required/>
                                <label htmlFor="msg" className="label"> Message </label>
                                <textarea cols={25} id="msg" type="text" className="input" required value={ message} onChange={this.message} placeholder="Enter Message here..." rows={10}>

                                    </textarea>
                                    {success && <p className="success"> Message Sent ✅, Thank for your valuable Feedback  </p>}
                                    {failure && <p className="failure"> Failed  </p>}
                                <button className="submit-btn" type="submit"> Submit </button>
                                </form>
                                </AnimationOnScroll>

                        </div>
                        <h3 className="end-info"> Thanks for visiting our website & Make sure to travel around all sections. </h3>
                    </div>
                </div>
                
            </div>
       )
   }

}

export default Home;
