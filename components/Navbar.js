import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";


const navigation = [
  { name: "Services", id: "services" },
  { name: "Tech Stack", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "recommendations" },
  { name: "Contact", id: "contact" },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <div className="sticky top-0 z-10">
      <nav
        className="flex items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 p-3 drop-shadow-2xl lg:px-8"
        aria-label="Global"
      >
        {/* appears in md-mobile screen - start */}
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        {/* appears in md-mobile screen - end */}
        <div className="flex lg:flex-1"></div> {/*  */}
        {/* desktop view - start */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              activeClass="active"
              smooth
              spy
              to={item.id}
              duration={500}
              onClick={() => setActive(item.id)}
            >
              <div
                className={`cursor-pointer text-lg font-semibold leading-6 tracking-wider hover:text-blue-500 ${
                  active === item.id ? "text-blue-700" : "text-white"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/cv"
            target="_blank"
            className="rounded-full border px-4 py-1 text-lg font-semibold tracking-wider text-white hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            View CV
          </a>
        </div>
        {/* desktop view - end */}
      </nav>
      {/* Mobile menu modal - start */}
      <Transition
        appear
        show={mobileMenuOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-hidden lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >

            <Dialog.Panel className="flex h-full flex-col place-content-center bg-gradient-to-r from-green-400 to-blue-500">
              <button
                type="button"
                className="fixed top-0 rounded-md p-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <div
                    key={item.name}
                    onClick={() => setActive(item.id)}
                    className="my-4"
                  >
                    <Link
                      activeClass="active"
                      smooth
                      spy
                      to={item.id}
                      duration={500}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActive(item.id);
                      }}
                    >
                      <div
                        className={`text-center text-3xl  font-semibold hover:text-blue-500 ${
                          active === item.id ? "text-blue-500" : "text-white"
                        }`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
      {/* Mobile menu modal - start */}
    </div>
  );
}
