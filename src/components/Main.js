import img1 from '../assets/Ab_images/img1.jpg';
import img2 from '../assets/WeDo_Images/img2.jpg'
import img3 from '../assets/HowWe_images/img3.jpg'
import { Button } from 'react-bootstrap'
import { FaHandPointUp } from 'react-icons/fa'

function Main() {
    return (
        <div className='main'>
            <div className='row'>
                <div className='col-lg-4 col-md-4'>

                    <div className='container-fluid'>
                        <img src={img1} className='img-fluid' alt='' width={500} height={400} />

                        <div className='overlay '>
                            <div className="phrase">
                                <h3> success is when reality catches up to your imagination </h3>
                            </div>

                            <div className='overlayButton'>
                                <Button variant="outline-secondary">
                                    <a href="" style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }}> About Us</a>
                                </Button>
                            </div>
                            <div className='handUp'>
                                <FaHandPointUp/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-4'>

                    <div className='container-fluid'>
                        <img src={img2} alt='' className='img-fluid' width={500} height={400}  />

                        <div className='overlay'>
                            <div className="phrase">
                                <h3>we build and manage solutions </h3>
                            </div>

                            <div className='overlayButton'>
                                <Button variant="outline-secondary">
                                    <a href="" style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }}> What We Do</a>
                                </Button>
                            </div>
                            <div className='handUp'>
                                <FaHandPointUp />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-4'>

                    <div className='container-fluid'>
                        <img src={img3} alt='' className='img-fluid' width={500} height={400}  />

                        <div className='overlay'>
                            <div className="phrase" >
                                <h3>relentless commitment to your needs so you can spend more time giving patients hope </h3>
                            </div>

                            <div className='overlayButton'>
                                <Button variant="outline-secondary">
                                    <a href="" style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }}> How We Do It</a>
                                </Button>
                            </div>
                            <div className='handUp'>
                                <FaHandPointUp/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main