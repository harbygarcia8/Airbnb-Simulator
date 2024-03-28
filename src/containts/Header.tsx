import Navbar from '../components/navbar/Navbar'
import airbnb from '../assets/logo-airbnb.png'
import '../styles/Header.scss'
function Header() {
  return (
    <>
    <section>
    <img src={airbnb} className='img-logo' />    

    </section>
    <Navbar />
    </>
    
  )
}

export default Header