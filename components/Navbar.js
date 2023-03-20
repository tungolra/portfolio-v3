import { useState } from "react";
import { Dialog } from "@headlessui/react";
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
    <div className="sticky top-0 z-10 bg-white">
      <nav
        className="flex items-center justify-between p-3 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="flex lg:hidden ">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Mobile menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              activeClass="active"
              smooth
              spy
              to={item.id}
              duration={500}
              className={`cursor-pointer text-sm font-semibold leading-6 hover:text-blue-500 ${
                active === item.id ? "text-blue-500" : "text-gray-900"
              }`}
              onClick={() => setActive(item.id)}
            >
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-full border px-4 py-1 text-sm font-semibold hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Download CV <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item) => (
                  <div
                    className={`text-sm font-semibold leading-6 text-gray-900 `}
                    onClick={() => setActive(item.id)}
                  >
                    <Link
                      key={item.name}
                      activeClass="active"
                      smooth
                      spy
                      to={item.id}
                      duration={500}
                      className={`text-lg font-semibold  hover:text-blue-500 ${
                        active === item.id ? "text-blue-500" : "text-gray-900"
                      }`}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActive(item.id);
                      }}
                    >
                      <div>{item.name}</div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Connect with me!
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
