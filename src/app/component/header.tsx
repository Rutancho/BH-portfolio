import Link from 'next/link'
import DarkModeToggleButton from './dark-mode';


export default function Header() {
    return (
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <Link href = "/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Brian</span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-end">
            <Link href = "/" className="mr-5 hover:text-gray-900">Home
            </Link>
           
            <Link href = "/about-me" className="mr-5 hover:text-gray-900">About me
            </Link>
            <Link href="/project1" className="mr-5 hover:text-gray-900">Project</Link>
          <Link href = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="mr-5 hover:text-gray-900">Contact Information
          </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    );
  }