import Link from '../../node_modules/next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
  <div className="w-full p-24 flex flex-col items-center justify-center flex-grow">
    <img src="/assets/images/Profile-min.jpg" alt="profile picture" className='rounded-full w-48'/>
    <h1 className='text-4xl md:text-6xl font-black text-center mt-5'>ADITYA JAYARAJAN</h1>
    <h2 className='text-2xl md:text-3xl font-medium text-center'>Application Developer 2</h2>
    <p className='mt-12'>
      Result-driven developer with a strong background in full stack
      web application development and core application development and maintainance. 
      Demonstrated success in
      streamlining processes, enhancing user experience, and driving
      efficiency. Proven expertise in leading code quality enhancements,
      optimizing workflows, and contributing to the seamless operation
      of critical tools. Seeking new challenges to leverage skills and
      deliver impactful solutions.
    </p>
  </div>
  <div className=''>
  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-4 mb-12 px-4 py-2 border border-gray-400 rounded shadow">
    Visit Portfolio
</button>
  </div>
</main>

  )
}
