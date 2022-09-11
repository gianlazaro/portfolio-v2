import Navbar from './Navbar';
import Footer from './Footer';
function Layout({children}) {
  // move common styles here
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout