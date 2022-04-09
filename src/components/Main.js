import img1 from '../assets/Ab_images/img1.jpg';
import img2 from '../assets/WeDo_Images/img2.jpg'
import img3 from '../assets/HowWe_images/img3.jpg'

function Main() {
    return (
        <div className='main'>
            <span>
                <p>
                    <h3> success is when reality catches up to your imagination </h3>
                </p>

                <img src={img1} alt='' width={500} height={400} />

                <div className="button1">
                    <button>
                        <a href=""> About Us</a>
                    </button>
                </div>
            </span>



            <span className='span2'>
                <p>
                    <h3>we build and manage solutions </h3>
                </p>

                <img src={img2} alt='' width={500} height={400} />

                <div className="button2">
                    <button>
                        <a href=""> What We Do</a>
                    </button>
                </div>
            </span>

            <span>
                <p>
                    <h3>relentless commitment to your needs so you can spend more time giving patients hope </h3>
                </p>

                <img src={img3} alt='' width={500} height={400} />

                <div className="button3">
                    <button>
                        <a href=""> How We Do It</a>
                    </button>
                </div>
            </span>


        </div>
    )
}

export default Main