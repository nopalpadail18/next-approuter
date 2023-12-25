import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <nav className="flex bg-gray-600 py-2 px-5 justify-between">
        <h1 className="text-2xl text-white">profile</h1>
        <div className="flex">
          <ul className="flex ml-5">
            <Link href={'/'}>
              <li className={`mr-2 ${pathname === '/' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>home</li>
            </Link>
            <Link href={'/about'}>
              <li className={`mr-2 ${pathname === '/about' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>about</li>
            </Link>
            <Link href={'/about/profile'}>
              <li className={`mr-2 ${pathname === '/about/profile' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>profile</li>
            </Link>
          </ul>
        </div>
        <div className="ml-auto">
          <button className="text-white bg-indigo-800 rounded-md px-6 text-sm cursor-pointer" onClick={() => router.push('/login')}>Login</button>
        </div>
      </nav>
    </>
  );
}
