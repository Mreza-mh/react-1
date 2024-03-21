import Footerr from './maincomponents/Footerr'
import Pitems from './subcomponent/Pitems'

function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-sky-950 via-[#02180d] to-gray-800  ">
      <Pitems />
      <Footerr />
      </div>
    </>
  )
}


export default App