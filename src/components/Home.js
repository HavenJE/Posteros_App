
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import NavbarComp from './NavbarComp';
import Main from './Main';
import Footer from './Footer';


function Home() {
    return (
        <div>
            <Logo />
            <NavbarComp />

            <section>
                <Main />
                <Footer />
            </section>
        </div>
    )
}

export default Home