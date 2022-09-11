import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/*Navigation Bar*/}
      <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-880 bg-navBar'></div>
      </nav>

      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/BAM4-3qugMZFaT2a/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;
