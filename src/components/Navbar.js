import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../images/wizeline_logo.png';

const navigation = [
  { name: 'Work', href: '/#work', current: false },
  { name: 'Insights', href: '/#insights', current: false },
  { name: 'About', href: '/#about', current: false },
  // The logo item is removed from here and handled separately
  { name: 'Careers', href: '/#careers', current: false },
  { name: 'Academy', href: '/#academy', current: false },
  { name: 'Contact', href: '/#contact', current: false },
  { name: 'English', href: '/#english', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarW() {
  return (
    <Disclosure as="nav" className="bg-zinc-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                {/* Left side of the nav */}
                <div className="hidden sm:flex sm:space-x-4">
                  {navigation.slice(0, Math.ceil(navigation.length / 2)).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-lg font-bold'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Logo (centered for all screen sizes) */}
              <div className="flex-1 flex justify-center sm:hidden">
                <a href="/">
                  <img src={logo} alt="Logo" className="h-8 w-auto" />
                </a>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                <a href="/">
                  <img src={logo} alt="Logo" className="h-8 w-auto" />
                </a>
              </div>

              {/* Right side of the nav */}
              <div className="flex items-center">
                <div className="hidden sm:flex sm:space-x-4">
                  {navigation.slice(Math.ceil(navigation.length / 2)).map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-lg font-bold'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}