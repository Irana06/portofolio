import './App.css'
import avatarHead from './assets/avatarHead.png'
import caveBackground from './assets/cavewallpaper.png'

function App() {

  return (
    <>

      {/* Navbar */}
      <header
        className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <div className="flex items-center">
                <img className="h-10 w-auto" src={avatarHead} alt="" />
                <p className="font-minecraft2 inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 pointer-events-none">Yusufnova</p>
              </div>
            </div>
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 md:items-center md:gap-5 font-minecraft2">
              <a aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Profile</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">About Me</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Certificate</a>
              <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#">Contact</a>
            </div>
            {/* <div className="flex items-center justify-end gap-3">
              <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/login">Sign in</a>
              <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login">Login</a>
            </div> */}
          </div>
        </div>
      </header>

      <main className="mt-24">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img src={caveBackground} alt="Cave Background" className="h-full w-full object-cover opacity-20" />
        </div>
        <div className="px-4">
          <h1 className="font-minecraft2 text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-2 text-gray-600">This is a showcase of my work and projects.</p>
        </div>
      </main>

      {/* <p classNameName="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
