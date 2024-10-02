"use client";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { CiHome } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiAccountPinCircleLine } from "react-icons/ri";

import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <header className="bg-forestTeal text-white p-4 max-lg:hidden">
          <div className="max-content grid grid-cols-3 gap-4">
            <Image alt="logo" src="/logo.png" width={100} height={100} />

            <div className="w-full">
              <input
                type="text"
                className="text-black py-2 px-4 rounded-xl w-full"
                placeholder="Search"
              />
            </div>

            <div className="flex items-center space-x-4">
              <FaLocationDot size={25} />
              <div onClick={() => setModal(true)}>Sign In</div>
              <div>Help</div>
              <div>My Cart</div>
              <div className="bg-oceanMist/20 rounded-md">Bulk Buy</div>
            </div>
          </div>
        </header>

        <div className=" bg-aqua text-white py-4 max-lg:hidden ">
          <ul className="flex items-center space-x-4  max-content">
            <li>All Categories</li>
            <li>Cell Phones & Accessories</li>
            <li>Security & Protection</li>
            <li>Sports & Entertainment</li>
            <li>Toys & Hobbies</li>
            <li>Home & Garden</li>
            <li>Other Categories</li>
          </ul>
        </div>

        <div className="fixed top-0 left-0 right-0 lg:hidden">
          {/* MObile Header Screen */}
          <header className="bg-white p-4 text-black space-y-4">
            <div className="flex justify-center">
              <Image alt="logo" src="/logo2.png" width={100} height={100} />
            </div>

            <div className="flex space-x-4">
              <input
                type="text"
                className="text-black ring-1 ring-forestTeal py-2 px-4 rounded-xl w-full"
                placeholder="Search"
              />

              <div className="ring-1 ring-forestTeal text-forestTeal px-4 py-2 rounded-xl">
                <IoCartOutline size={25} />
              </div>
              <div className="ring-1 ring-forestTeal text-forestTeal px-4 py-2 rounded-xl">
                <SlOptionsVertical size={25} />
              </div>
            </div>
          </header>

          {/* Mobile Screen */}
          <div className=" bg-aqua text-white p-4 overflow-x-auto no-scrollbar">
            <ul className="flex items-center space-x-8 w-[80rem]">
              <li className="bg-forestTeal rounded-md">Bulk Buy</li>
              <li>All Categories</li>
              <li>Cell Phones & Accessories</li>
              <li>Security & Protection</li>
              <li>Sports & Entertainment</li>
              <li>Toys & Hobbies</li>
              <li>Home & Garden</li>
              <li>Other Categories</li>
            </ul>
          </div>
        </div>
      </div>

      <main className="flex-1 space-y-8 max-lg:mt-48 lg:py-8">
        <div className="grid grid-cols-7 gap-4 max-content max-lg:hidden">
          <div className="col-span-5 bg-[url('/banner.png')] bg-cover text-white flex items-center rounded-2xl px-10">
            <div className="w-96 space-y-4">
              <h1 className="text-4xl font-semibold">
                Let us put a smile on your face through our online store
              </h1>
              <p>
                Join thousands of people and enjoy the atoovis experience today
              </p>
              <button className="bg-aqua px-4 py-3 rounded-3xl font-semibold">
                Make a Purchase
              </button>
            </div>
          </div>
          <div className="bg-oceanMist col-span-2 grid grid-cols-2 p-6 gap-4 rounded-2xl">
            <div>
              <Image
                src="/1.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <Image
                src="/2.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <Image
                src="/3.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <Image
                src="/4.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Mobile HeroSection */}
        <div className="lg:hidden">
          <div className="col-span-5 bg-[url('/banner.png')] bg-cover text-white flex items-center rounded-2xl p-4 mb-8">
            <div className=" w-52 space-y-4">
              <h1 className="text-md font-semibold">
                Let us put a smile on your face through our online store
              </h1>
              <p className="text-xs">
                Join thousands of people and enjoy the atoovis experience today
              </p>
              <button className="bg-aqua px-2 py-1 rounded-3xl font-semibold">
                Make a Purchase
              </button>
            </div>
          </div>
          <div className="bg-oceanMist col-span-2 grid grid-cols-2 p-6 gap-4 rounded-2xl overflow-auto h-[15rem] no-scrollbar">
            <div>
              <Image
                src="/1.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <Image
                src="/2.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <Image
                src="/3.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <Image
                src="/4.svg"
                width={100}
                height={100}
                alt="1"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
        {/* Featured Products*/}
        <div className="bg-oceanMist/50 p-4 rounded-2xl">
          <div className="max-content">
            <h1 className=" text-forestTeal font-semibold text-2xl mb-4">
              Featured Products
            </h1>
            <div className="grid max-lg:grid-cols-2 lg:grid-cols-6 gap-4">
              <Product />
              <Product />
            </div>
          </div>
        </div>
        {/* Recently Added Products */}
        <div className="bg-oceanMist/50 p-4 rounded-2xl">
          <div className="max-content">
            <h1 className=" text-forestTeal font-semibold text-2xl mb-4">
              Recently Added Products
            </h1>
            <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-2 lg:grid-cols-6">
              <Product />
              <Product />
            </div>
          </div>
        </div>
        {/* More Products */}
        <div className="bg-oceanMist/50 p-4 rounded-2xl">
          <div className="max-content">
            <h1 className=" text-forestTeal font-semibold text-2xl mb-4">
              More Products
            </h1>
            <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-2 lg:grid-cols-6">
              <Product />
              <Product />
            </div>
          </div>
        </div>
        {/* Frequently Purchased Product */}
        <div className="bg-oceanMist/50 p-4 rounded-2xl">
          <div className="max-content">
            <h1 className=" text-forestTeal font-semibold text-2xl mb-4">
              Frequently Purchased Product
            </h1>
            <div className="grid grid-cols-6 gap-4 max-lg:grid-cols-2 lg:grid-cols-6">
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-forestTeal p-4 text-white max-lg:hidden">
        <div className="max-content grid grid-cols-7 gap-4 mb-12">
          <Image alt="logo" src="/logo.png" width={100} height={100} />
          <div className="col-span-2 space-y-6">
            <p>
              Subscribe now for the latest updates, special offers, and
              exclusive content. Join us to experience the best service!
            </p>
            <input
              type="email"
              className="text-black py-2 px-4 rounded-xl w-full"
              placeholder="Email"
            />
          </div>
          <div className="col-span-2 justify-self-center">
            <ul className="space-y-4">
              <li>Feedback</li>
              <li>About Us</li>
              <li>Sell on Atoovis</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="col-span-2 spac space-y-2">
            <span>Connect with us</span>
            <ul className="flex items-center space-x-4">
              <FaFacebook size={30} />
              <FaTwitter size={30} />
              <FaLinkedin size={30} />
              <FaInstagram size={30} />
            </ul>
          </div>
        </div>
        <p className="text-center">© 2024 Atoovis. All rights reserved.</p>
      </footer>

      {/* Mobile Screen */}
      <footer className="bg-forestTeal p-4 mb-[5rem] text-white lg:hidden">
        <div className="space-y-4 mb-4">
          <Image alt="logo" src="/logo.png" width={100} height={100} />
          <div className="col-span-2 spac space-y-2">
            <span>Connect with us</span>
            <ul className="flex items-center space-x-4">
              <FaFacebook size={30} />
              <FaTwitter size={30} />
              <FaLinkedin size={30} />
              <FaInstagram size={30} />
            </ul>
          </div>
          <div className="space-y-6">
            <p>
              Subscribe now for the latest updates, special offers, and
              exclusive content. Join us to experience the best service!
            </p>
            <input
              type="email"
              className="text-black py-2 px-4 rounded-xl w-full"
              placeholder="Email Address"
            />
          </div>
          <div className="">
            <ul className="space-y-4">
              <li>Feedback</li>
              <li>About Us</li>
              <li>Sell on Atoovis</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <p className="text-center">© 2024 Atoovis. All rights reserved.</p>
      </footer>
      {/* Login Container */}
      <div
        className={`bg-black/50 fixed h-screen w-full flex items-center justify-center ${
          modal === true ? "block" : "hidden"
        } `}
      >
        <div className="bg-white w-[350px] rounded-2xl p-4">
          <div className="flex justify-end">
            <div className="bg-yellow-500" onClick={() => setModal(false)}>
              <FaXmark size={25} />
            </div>
          </div>
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold">Welcome!</h1>
            <h1>sign in on atoovis to enjoy the best of our products.</h1>
            <input
              type="email"
              placeholder="Email"
              className="ring-1 ring-forestTeal rounded-full w-full bg-oceanMist/20 py-2 px-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="ring-1 ring-forestTeal rounded-full w-full bg-oceanMist/20 py-2 px-4"
            />

            <div className="flex items-center justify-between">
              <div className="space-x-1">
                <input
                  title="checkbox"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                />
                <span>Remember me</span>
              </div>

              <span>Forgot Password?</span>
            </div>

            <button className="py-2 px-4 text-center bg-aqua text-white w-full rounded-full">
              Sign In
            </button>
            <span>OR</span>
            <button className="py-2 px-4 text-center ring-1 ring-aqua text-aqua w-full rounded-full flex justify-center space-x-2">
              <FaGoogle size={25} />
              <span>Sign In With Google</span>
            </button>

            <span>Don&apos;t have an account? Sign Up</span>
          </div>
        </div>
      </div>

      <div className="bg-white fixed lg:hidden bottom-0 left-0 right-0 p-4">
        <ul className="flex justify-between *:text-xs">
          <li className="flex flex-col items-center space-y-1">
            <span>
              <CiHome size={25} />
            </span>
            <span>Home</span>
          </li>
          <li className="flex flex-col items-center space-y-1">
            <span>
              <BiCategoryAlt size={25} />
            </span>
            <span>Category</span>
          </li>
          <li className="flex flex-col items-center space-y-1">
            <span>
              <CiWallet size={25} />
            </span>
            <span>Wallet</span>
          </li>
          <li className="flex flex-col items-center space-y-1">
            <span>
              <CiShoppingCart size={25} />
            </span>
            <span>Cart</span>
          </li>
          <li
            className="flex flex-col items-center space-y-1"
            onClick={() => setModal(true)}
          >
            <span>
              <RiAccountPinCircleLine size={25} />
            </span>
            <span>Account</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="bg-white rounded-lg p-2">
      <div className="px-8 mb-4">
        <Image src="/prod1.jpg" width={500} height={500} alt="Prod 1" />
      </div>

      <div className="mb-2">
        <p>Apple Airpods Case</p>
        <p>N10,000</p>
      </div>

      <button className=" bg-aqua text-white w-full">Add to cart</button>
    </div>
  );
}
