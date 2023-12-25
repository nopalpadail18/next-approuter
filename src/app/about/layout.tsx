export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <nav className='fixed right-0 top-12  z-10 h-screen w-60 bg-gray-700'>
        <ul className='text-white px-5 py-5'>
            <li>home</li>
            <li>about</li>
            <li>profile</li>
        </ul>
    </nav>
    <div>{children}</div>
    </>
  )
}
