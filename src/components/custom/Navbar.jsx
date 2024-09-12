import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const isAdmin = isSignedIn && user?.publicMetadata?.role === "admin";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderMenuItems = () => {
    if (isAdmin) {
      return (
        <>
          <li>
            <Link
              to="/admin/dashboard"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/manage"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Manage Users
            </Link>
          </li>
          <li>
            <a
              href="/admin/settings"
              aria-label="Admin Settings"
              title="Admin Settings"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Admin Settings
            </a>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <Link
            to="/"
           
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Trang chủ
          </Link>
        </li>

       

        <li>
          <Link
            to="/product"
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Tìm gia sư
          </Link>
        </li>

        <li>
          <a
            href="/"
            aria-label="Features"
            title="Features"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Tìm trung tâm
          </a>
        </li>

        <li>
          <a
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Gia sư
          </a>
        </li>

        <li>
          <Link
            to="/about"
         
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Về chúng tôi
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Liên hệ
          </Link>
        </li>
      </>
    );
  };

  return (
    <div
      className={`sticky top-0 z-50 py-4 bg-white mx-auto sm:px-6 md:px-8 lg:px-10 ${
        isScrolled ? "bg-[#091216]" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <img src="/logo2.png" className="h-14 w-14"/>
        </Link>

        <ul className="hidden space-x-8 lg:flex">{renderMenuItems()}</ul>

        <ul className="hidden space-x-8 lg:flex">
          <li>
            {isAdmin ? (
              <div className="">
                <UserButton />
                <div className="">isAdmin</div>
              </div>
            ) : isSignedIn ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal" forceRedirectUrl="/">
                <Button>Sign In</Button>
              </SignInButton>
            )}
          </li>
        </ul>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-white border rounded shadow-sm">
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    to="/"
                    
                    className="inline-flex items-center"
                  >
                   <img src="/logo2.png" className="h-14 w-14"/>
                  </Link>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
                <nav>
                  <ul className="space-y-4">{renderMenuItems()}</ul>
                  <ul>
                    <li>
                      {isAdmin ? (
                        <div className="">
                          <UserButton />
                          <div className="">isAdmin</div>
                        </div>
                      ) : isSignedIn ? (
                        <UserButton />
                      ) : (
                        <SignInButton mode="modal" forceRedirectUrl="/">
                          <Button>Sign In</Button>
                        </SignInButton>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
