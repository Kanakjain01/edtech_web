import React from "react";

const Navbar = () => {
  return (
    <>
      <div class="border-1 flex items-center justify-between bg-slate-50 px-4">
        <div class="logo m-5 flex justify-evenly text-2xl font-medium">
          <h1>Ed.tech</h1>
        </div>

        <div class="hamburger md:hidden">
          {/* <!--hamerger md m nhi dikhe  --> */}
          <div class="line my-2 h-2 w-7 bg-black"></div>
          <div class="line my-2 h-2 w-7 bg-black"></div>
          <div class="line my-2 h-2 w-7 bg-black"></div>
        </div>
        {/* <!-- small device m nav items nhi dikhe md: m dikhe  --> */}
        <div class="first-heading hidden md:flex">
          <ul class="flex">
            <li class="head mx-8 text-lg text-gray-800">Home</li>
            <li class="head mx-8 text-lg text-gray-800">About</li>
            <li class="head mx-8 text-lg text-gray-800">Services</li>
            <li class="head mx-8 text-lg text-gray-800">Courses</li>
            <li class="head mx-8 text-lg text-gray-800">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
