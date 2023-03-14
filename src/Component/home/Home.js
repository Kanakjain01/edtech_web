import React from "react";

const Home = () => {
  return (
    <div>
      <nav class="flex h-fit items-center justify-between bg-white p-4 lg:justify-around">
        <div class="logo font-serif text-xl font-bold tracking-widest text-sky-900">
          EdTech
        </div>
        <div class="hamburger flex cursor-pointer flex-col lg:hidden">
          <div class="line my-1 h-1 w-10 bg-sky-900"></div>
          <div class="line my-1 h-1 w-10 bg-sky-900"></div>
          <div class="line my-1 h-1 w-10 bg-sky-900"></div>
        </div>
        <div class="nav-items hidden w-1/2 items-center justify-between lg:flex">
          <div class="w-fit">
            <ul class="flex">
              <li class="mx-5">Home</li>
              <li class="mx-5">About</li>
              <li class="mx-5">Services</li>
              <li class="mx-5">Courses</li>
            </ul>
          </div>
          <div class="search w-fit">
            <div class="searchbar rounded border border-sky-900 py-2 px-5">
              <input
                type="search"
                name=""
                id=""
                class=""
                placeholder="Search.."
              />
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div class="head flex h-[80vh] items-center justify-center bg-[url('https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop')] bg-cover">
          {/* <!-- <div class="bigCard">
    <div class="h-full bg-black  duration-200 ease-linear"></div>
  </div> --> */}
          <div class="smallCard flex flex-col items-center">
            <p class="text-center text-6xl font-bold text-white">
              Better Education For A <br />
              Better World
            </p>
            <br />
            <button class="mt-5 rounded-lg bg-yellow-400 p-2 px-5 text-neutral-800">
              Read More
            </button>
          </div>
        </div>

        <div>
          <div class="relative bottom-14 flex flex-col items-center justify-center md:flex-row">
            <div class="mx-2 flex h-80 w-auto flex-col items-center justify-evenly border bg-white p-4 shadow-xl md:w-96">
              <div class="text-2xl font-medium">Lorem, ipsum dolor.</div>
              <p class="text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga, placeat expedita accusantium ea nam qui quis cum
                vitae adipisci.
              </p>
              <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-xs text-neutral-800">
                Read More
              </button>
            </div>
            <div class="mx-2 my-5 flex h-80 w-auto flex-col items-center justify-evenly border bg-white p-4 shadow-xl md:my-0 md:w-96">
              <div class="text-2xl font-medium">Lorem, ipsum dolor.</div>
              <p class="text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga, placeat expedita accusantium ea nam qui quis cum
                vitae adipisci.
              </p>
              <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-xs text-neutral-800">
                Read More
              </button>
            </div>
            <div class="mx-2 my-5 flex h-80 w-auto flex-col items-center justify-evenly border bg-white p-4 shadow-xl md:my-0 md:w-96">
              <div class="text-2xl font-medium">Lorem, ipsum dolor.</div>
              <p class="text-lg text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga, placeat expedita accusantium ea nam qui quis cum
                vitae adipisci.
              </p>
              <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-xs text-neutral-800">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
 
      <div class="first mx-auto flex w-11/12 flex-col items-center justify-center py-32 lg:w-4/6 lg:flex-row">
        <div class="left my-2">
          <div class="content my-5">
            <h1 class="campus my-6 text-4xl font-semibold">
              Welcome To Our Campus
            </h1>
            <p class="para text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aut
              nihil eveniet deleniti tempora, consectetur natus ipsa corrupti
              culpa eos amet incidunt optio aliquam distinctio pariatur aperiam!
              Quam, odit libero dolores debitis aperiam beatae cupiditate quos
              eos a fugiat corporis?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              higit p laborum?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Recusandae asperiores reprehenderit officia elig
              autem asperiores?
            </p>
            <button class="mt-4 w-fit rounded-md bg-yellow-400 p-1 px-8 py-3 text-sm text-neutral-800">
              Read More
            </button>
          </div>
        </div>
        <div class="right flex w-full justify-center">
          <div class="pic">
            <img
              src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="">
        <div class="parallax h-96 bg-[url('https://media.istockphoto.com/id/818087910/photo/multi-ethnic-group-of-students-studying-outdoors.jpg?s=612x612&w=0&k=20&c=cXO32DQmlBLvTsbqGaJDkaA90hfM-tVlejSDrKmTulY=')] bg-cover bg-fixed bg-no-repeat md:h-80">
          <div class="absolute flex h-96 w-full flex-col items-center justify-around bg-[#002147;] opacity-70 md:h-80 md:flex-row md:px-32">
            <div class="w-11/12 md:w-1/2">
              <div class="my-3 text-3xl font-bold text-white">
                Apply for Scholarship
              </div>
              <div class="my-2 text-xl font-medium text-white">
                Fall 2019 applications are now open
              </div>
              <div class="text-base text-white">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.
              </div>
            </div>
            <div>
              <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="my-20">
        <div class="find-your-course mx-auto flex flex-col items-center justify-evenly lg:flex-row">
          <div class="find mx-20 w-96 justify-evenly bg-slate-50 pb-5">
            <div class="form m-3 my-5">
              <h1 class="head my-6 pt-7 text-2xl font-bold">
                Find Your Course
              </h1>

              <p class="para my-6 text-lg">
                Fill in below form to find your courses
              </p>
            </div>
            <div class="form1 mx-6">
              <input
                type="text"
                class="input-form box-border h-11 w-72 rounded-md bg-slate-200 px-5 py-7"
                placeholder="Course name"
              />
              <br />
              <input
                type="text"
                class="input2 my-10 h-11 w-72 rounded-md bg-slate-200 py-7 px-5"
                placeholder="Category"
              />
              <br />
              <button class="btn w-72 rounded-md bg-yellow-600 py-4 text-center text-xl font-semibold">
                Submit
              </button>
            </div>
          </div>

          <div class="course mx-auto flex w-full flex-col items-center lg:w-fit">
            <div class="first-div mx-28 flex w-full flex-wrap justify-evenly">
              <div class="one my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">Social</h1>
              </div>
              <div class="one w my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">business</h1>
              </div>
              <div class="one my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">web dev</h1>
              </div>
              <div class="one my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">science</h1>
              </div>
            </div>

            <div class="second-div flex w-full flex-wrap justify-evenly">
              <div class="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">Social</h1>
              </div>
              <div class="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">business</h1>
              </div>
              <div class="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">web dev</h1>
              </div>
              <div class="two my-4 box-border h-52 w-5/12 rounded-md bg-blue-800 lg:h-36 lg:w-40">
                <img src="" alt="" />
                <h1 class="pros pt-20 text-center">science</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="student flex w-full flex-wrap justify-evenly bg-slate-400 p-10">
        <div class="count my-5 flex">
          <h1 class="num mx-4 text-5xl font-black">60</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
        <div class="count my-5 flex">
          <h1 class="num mx-4 text-5xl font-black">18</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
        <div class="count my-5 flex">
          <h1 class="num mx-4 text-5xl font-black">34</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
        <div class="count my-5 flex">
          <h1 class="num mx-4 text-5xl font-black">20</h1>
          <p>
            PROFESSIONAL <br />
            INSTRUCTORS
          </p>
        </div>
      </div>
      <div class="parallax h-96 bg-[url('https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ')] bg-fixed bg-top bg-no-repeat md:h-80">
        <div class="absolute flex h-96 w-full flex-col items-center justify-around bg-[#002147;] opacity-70 md:h-80 md:flex-row md:px-32">
          <div class="w-11/12 md:w-1/2">
            <div class="my-3 text-3xl font-bold text-white">
              Apply for Scholarship
            </div>
            <div class="my-2 text-xl font-medium text-white">
              Fall 2019 applications are now open
            </div>
            <div class="text-base text-white">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.
            </div>
          </div>
          <div>
            <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div class="my-10 justify-between bg-gray-100 p-5 lg:flex lg:px-56">
        <div class="posts p-5">
          <div class="text-3xl font-bold">Latest Posts</div>
          <div class="my-10 flex flex-col bg-white">
            <div class="post-card items-center border-b-2 py-10 lg:flex lg:w-2/3">
              <div class="post-image lg:mr-10">
                <img
                  src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g9.jpg"
                  alt=""
                />
              </div>
              <div class="post-desc text-base">
                <div class="text-lg font-semibold">Lorem, ipsum dolor.</div>
                <div class="mb-3 text-xl text-gray-700">April 25, 2020</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, in!
                </p>
              </div>
            </div>
            <div class="post-card items-center border-b-2 py-10 lg:flex lg:w-2/3">
              <div class="post-image lg:mr-10">
                <img
                  src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g9.jpg"
                  alt=""
                />
              </div>
              <div class="post-desc">
                <div class="text-2xl font-semibold">Lorem, ipsum dolor.</div>
                <div class="mb-3 text-xl text-gray-700">April 25, 2020</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, in!
                </p>
              </div>
            </div>
            <div class="post-card items-center py-10 lg:flex lg:w-2/3">
              <div class="post-image lg:mr-10">
                <img
                  src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g9.jpg"
                  alt=""
                />
              </div>
              <div class="post-desc">
                <div class="text-2xl font-semibold">Lorem, ipsum dolor.</div>
                <div class="mb-3 text-xl text-gray-700">April 25, 2020</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium, in!
                </p>
              </div>
            </div>
            <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
              Read More
            </button>
          </div>
        </div>

        <div class="upcoming-events my-5 lg:w-2/3">
          <div class="text-3xl font-bold">Upcoming Events</div>
          <div class="events my-10">
            <div class="event mb-10 bg-white lg:flex">
              <div class="time mb-6 flex flex-col justify-center lg:w-44">
                <div class="date flex h-24 w-36 items-center justify-center bg-yellow-400 text-center text-2xl font-bold text-white lg:w-28">
                  24 Jan
                </div>
                <div class="year flex h-14 w-36 items-center justify-center bg-sky-900 text-center text-2xl font-bold text-white lg:w-28">
                  2020
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="my-4 text-2xl font-medium lg:text-xl">
                  Lorem ipsum dolor sit.
                </div>
                <p class="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione accusantium maxime autem nihil ullam cum voluptates
                  vitae quam quasi quas commodi, porro saepe, sunt numquam
                  dignissimos eaque dolorum nobis atque?
                </p>
              </div>
            </div>

            <div class="event mb-10 bg-white lg:flex">
              <div class="time mb-6 flex flex-col justify-center lg:w-44">
                <div class="date flex h-24 w-36 items-center justify-center bg-yellow-400 text-center text-2xl font-bold text-white lg:w-28">
                  24 Jan
                </div>
                <div class="year flex h-14 w-36 items-center justify-center bg-sky-900 text-center text-2xl font-bold text-white lg:w-28">
                  2020
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="my-4 text-2xl font-medium lg:text-xl">
                  Lorem ipsum dolor sit.
                </div>
                <p class="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione accusantium maxime autem nihil ullam cum voluptates
                  vitae quam quasi quas commodi, porro saepe, sunt numquam
                  dignissimos eaque dolorum nobis atque?
                </p>
              </div>
            </div>
            <div class="event mb-10 bg-white lg:flex">
              <div class="time mb-6 flex flex-col justify-center lg:w-44">
                <div class="date flex h-24 w-36 items-center justify-center bg-yellow-400 text-center text-2xl font-bold text-white lg:w-28">
                  24 Jan
                </div>
                <div class="year flex h-14 w-36 items-center justify-center bg-sky-900 text-center text-2xl font-bold text-white lg:w-28">
                  2020
                </div>
              </div>
              <div class="md:w-3/4">
                <div class="my-4 text-2xl font-medium lg:text-xl">
                  Lorem ipsum dolor sit.
                </div>
                <p class="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione accusantium maxime autem nihil ullam cum voluptates
                  vitae quam quasi quas commodi, porro saepe, sunt numquam
                  dignissimos eaque dolorum nobis atque?
                </p>
              </div>
            </div>

            <button class="float-right mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
