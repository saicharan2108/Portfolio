import {React, Component } from 'react'
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import "./index.css"

class Header extends Component {

    state = {scrolled:false, isIcon : false}

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
    

    render() {
        const { scrolled, isIcon } = this.state 
        const classContainer = scrolled ? "header-bg-container" : "header-container"
        const classElement = scrolled ? "header-bg-com" : "header-bg"
        const headerInfo = scrolled ? "header-bg-info"  : "header-info"
        return (
            <div className={ classContainer}>
                <div className={ classElement}>
                    <ul className='header-responsive'>
                        <Link to="/" className='list-style'>
                            <li className={ headerInfo}>
                                <h1 className='header-title'> {isIcon? <FaHome /> : "Home"} </h1>
                            </li>
                        </Link>
                        <Link to="/projects" className='list-style'>
                            <li className={ headerInfo}>
                                <h1 className='header-title'> Projects </h1>
                            </li>
                        </Link>
                        <Link to="/certifications" className='list-style'>
                            <li className={ headerInfo}>
                                <h1 className='header-title'> Certifications </h1>
                            </li>
                        </Link>
                        <Link to="/experience" className='list-style'>
                            <li className={ headerInfo}>
                                <h1 className='header-title'> Experience </h1>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header