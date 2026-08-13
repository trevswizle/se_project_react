import Header from './Header.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'
import ModalWithForm from './ModalWithForm.jsx'
import ItemModal from './ItemModal.jsx'

function App() {
  return (
    <div className="page">
      <Header> 
        <h1>Hello world</h1>
      </Header>
      <Main />
      <Footer />
      <ModalWithForm />
      <ItemModal />
    </div>
  )
}

export default App