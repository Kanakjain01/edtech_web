import React from 'react'

const About = () => {
  return (
    <div><nav class="flex h-fit items-center justify-between bg-white p-4 lg:justify-around">
    <div class="logo font-serif text-xl font-bold tracking-widest text-sky-900">EdTech</div>
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
          <input type="search" name="" id="" class="" placeholder="Search.." />
        </div>
      </div>
    </div>
  </nav>
  
  <div class="parallax h-96 bg-[url('https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ')] bg-fixed bg-top bg-no-repeat md:h-80">
    <div class="absolute flex h-96 w-full flex-col items-center justify-around bg-[#002147;] opacity-70 md:h-80 md:flex-row md:px-32">
      <div class="w-11/12 md:w-1/2">
        <div class="my-3 text-3xl font-bold text-white">Apply for Scholarship</div>
        <div class="my-2 text-xl font-medium text-white">Fall 2019 applications are now open</div>
        <div class="text-base text-white">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</div>
      </div>
      <div>
        <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">Read More</button>
      </div>
    </div>
  </div>
  <div class="about-heading p-8">
    <div class="about-our-institution justify-evenly lg:flex">
      <div class="data max-w-lg">
        <h1 class="text text-4xl font-bold">About Our Institution</h1>
        <p class="pros my-10 items-center whitespace-pre-line font-serif text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, excepturi cum repellat quibusdam impedit suscipit aliquam ducimus ipsa repellendus animi repudiandae vero optio illum libero eligendi! Iure omnis et facilis odio minus? Quasi, distinctio est recusandae pariatur in voluptates dignissimos?</p>
        <ul class="stud mx-10 font-serif leading-10 text-neutral-600">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing el.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
        </ul>
      </div>
      <div class="pic mx-auto max-w-lg pt-16 lg:m-0 lg:pt-8">
        <img src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
      </div>
    </div>
  
    <div class="info mx-auto w-full pt-11 lg:flex">
      <div class="info-tech lg:ml-36">
        <h1 class="subtitle text-4xl font-bold">Our History 1222</h1>
        <p class="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
      </div>
      <div class="info-tech">
        <h1 class="subtitle text-4xl font-bold">Our History 1222</h1>
        <p class="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
      </div>
      <div class="info-tech lg:mr-28">
        <h1 class="subtitle text-4xl font-bold">Our History 1222</h1>
        <p class="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
      </div>
    </div>
  </div>
  
  <div class="choosing-institution bg-slate-100">
    <div class="institution text-center">
      <h1 class="head md: p-11 text-4xl font-semibold">Why Choose Our Institution</h1>
      <p class="tail px-5 text-xl font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed et necessitatibus ipsam sunt temporibus aspernatur voluptatem ad, <br />
        recusandae perspiciatis, consectetur dolorem possimus quaerat ab architecto deleniti, est vel aut.
      </p>
    </div>
    <div class="icon flex flex-col items-center lg:mx-24 lg:flex-row">
      <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
        <div class="rounded-full bg-yellow-400 p-5">
          <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
        </div>
        <div class="item my-10">
          <h2 class="one text-2xl font-bold">lorem 1</h2>
          <br />
          <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
        </div>
      </div>
      <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
        <div class="rounded-full bg-yellow-400 p-5">
          <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
        </div>
        <div class="item my-10">
          <h2 class="one text-2xl font-bold">lorem 1</h2>
          <br />
          <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
        </div>
      </div>
      <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
        <div class="rounded-full bg-yellow-400 p-5">
          <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
        </div>
        <div class="item my-10">
          <h2 class="one text-2xl font-bold">lorem 1</h2>
          <br />
          <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
        </div>
      </div>
      <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
        <div class="rounded-full bg-yellow-400 p-5">
          <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
        </div>
        <div class="item my-10">
          <h2 class="one text-2xl font-bold">lorem 1</h2>
          <br />
          <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About


// <div class="parallax h-96 bg-[url('https://www.cityu.edu.hk/csci/sites/g/files/asqsls3421/files/styles/crop_freeform/public/media-image/shutterstock_526892083.jpg?h=d4467ebe&itok=AAlOO5fQ')] bg-fixed bg-top bg-no-repeat md:h-80">
//   <div class="absolute flex h-96 w-full flex-col items-center justify-around bg-[#002147;] opacity-70 md:h-80 md:flex-row md:px-32">
//     <div class="w-11/12 md:w-1/2">
//       <div class="my-3 text-3xl font-bold text-white">Apply for Scholarship</div>
//       <div class="my-2 text-xl font-medium text-white">Fall 2019 applications are now open</div>
//       <div class="text-base text-white">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</div>
//     </div>
//     <div>
//       <button class="mt-4 w-fit rounded-lg bg-yellow-400 p-1 px-8 py-3 text-base font-bold text-[#002147;]">Read More</button>
//     </div>
//   </div>
// </div>
// <div class="about-heading p-8">
//   <div class="about-our-institution justify-evenly lg:flex">
//     <div class="data max-w-lg">
//       <h1 class="text text-4xl font-bold">About Our Institution</h1>
//       <p class="pros my-10 items-center whitespace-pre-line font-serif text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, excepturi cum repellat quibusdam impedit suscipit aliquam ducimus ipsa repellendus animi repudiandae vero optio illum libero eligendi! Iure omnis et facilis odio minus? Quasi, distinctio est recusandae pariatur in voluptates dignissimos?</p>
//       <ul class="stud mx-10 font-serif leading-10 text-neutral-600">
//         <li>Lorem ipsum dolor sit amet consectetur adipisicing el.</li>
//         <li>Lorem ipsum dolor sit.</li>
//         <li>Lorem ipsum dolor sit amet consectetur.</li>
//         <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
//       </ul>
//     </div>
//     <div class="pic mx-auto max-w-lg pt-16 lg:m-0 lg:pt-8">
//       <img src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/master-liberty-demo_Free/389771183/web/assets/images/g4.jpg" alt="" />
//     </div>
//   </div>

//   <div class="info mx-auto w-full pt-11 lg:flex">
//     <div class="info-tech lg:ml-36">
//       <h1 class="subtitle text-4xl font-bold">Our History 1222</h1>
//       <p class="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
//     </div>
//     <div class="info-tech">
//       <h1 class="subtitle text-4xl font-bold">Our History 1222</h1>
//       <p class="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
//     </div>
//     <div class="info-tech lg:mr-28">
//       <h1 class="subtitle text-4xl font-bold">Our History 1222</h1>
//       <p class="sub py-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium doloremque quasi animi quas molestiae illum quos cum recusandae aperiam neque aspernatur, atque minus reprehenderit doloribus ad optio veritatis praesentium aut?</p>
//     </div>
//   </div>
// </div>

// <div class="choosing-institution bg-slate-100">
//   <div class="institution text-center">
//     <h1 class="head md: p-11 text-4xl font-semibold">Why Choose Our Institution</h1>
//     <p class="tail px-5 text-xl font-normal">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed et necessitatibus ipsam sunt temporibus aspernatur voluptatem ad, <br />
//       recusandae perspiciatis, consectetur dolorem possimus quaerat ab architecto deleniti, est vel aut.
//     </p>
//   </div>
//   <div class="icon flex flex-col items-center lg:mx-24 lg:flex-row">
//     <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
//       <div class="rounded-full bg-yellow-400 p-5">
//         <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
//       </div>
//       <div class="item my-10">
//         <h2 class="one text-2xl font-bold">lorem 1</h2>
//         <br />
//         <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
//       </div>
//     </div>
//     <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
//       <div class="rounded-full bg-yellow-400 p-5">
//         <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
//       </div>
//       <div class="item my-10">
//         <h2 class="one text-2xl font-bold">lorem 1</h2>
//         <br />
//         <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
//       </div>
//     </div>
//     <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
//       <div class="rounded-full bg-yellow-400 p-5">
//         <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
//       </div>
//       <div class="item my-10">
//         <h2 class="one text-2xl font-bold">lorem 1</h2>
//         <br />
//         <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
//       </div>
//     </div>
//     <div class="icon-item flex w-11/12 flex-col items-center py-16 text-center">
//       <div class="rounded-full bg-yellow-400 p-5">
//         <img class="h-28 w-fit" src="https://www.freeiconspng.com/thumbs/graduation-cap/high-resolution-graduation-cap-png-icon-17.png" alt="" />
//       </div>
//       <div class="item my-10">
//         <h2 class="one text-2xl font-bold">lorem 1</h2>
//         <br />
//         <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ratione!</p>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="instructors w-full p-20 px-5 text-center">
//   <div class="container">
//     <h1 class="py-9 text-4xl font-bold">Our Skilled Instructors</h1>
//     <p class="mx-8 text-lg lg:mx-40">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam inventore dolore dicta, doloribus ea perspiciatis blanditiis dolores ad ducimus animi autem sit voluptatem eos placeat ut! Dolor natus ipsum ratione?</p>
//   </div>
//   <div class="images w-full justify-evenly py-9 lg:flex">
//     <div class="image my-20 h-96 lg:w-80">
//       <div class="team-info">
//         <h1>jonny</h1>
//         <span></span>
//       </div>
//     </div>

//     <div class="image my-20 mt-48 h-96 lg:w-80">
//       <div class="team-info">
//         <h1>jonny</h1>
//         <span></span>
//       </div>
//     </div>
//     <div class="image my-20 h-96 lg:w-80">
//       <div class="team-info">
//         <h1>jonny</h1>
//         <span></span>
//       </div>
//     </div>
//     <div class="image my-20 mt-48 h-96 lg:w-80">
//       <div class="team-info">
//         <h1>jonny</h1>
//         <span></span>
//       </div>
//     </div>
//   </div>
// </div>