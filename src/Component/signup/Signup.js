import React from "react";

const Signup = () => {
  return (
    
    //   <section className="sign-in border-white-900 mx-9 mt-9 box-border rounded-xl border-x-2 border-y-2 bg-white">
    //     <div className="container">
    //       <div className="signin-content justify-evenly lg:flex">
    //         <div className="signin-form">
    //           <h2 className="form-title mt-20 text-center text-4xl font-bold lg:mr-40">
    //             Sign up
    //           </h2>
    //           <form className="register-form py-24" id="login-form">
    //             <div className="form-group mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
    //               <img
    //                 className="w-7"
    //                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc9VDs02ZrmIC7pS3WzBTvXl8UrI3jwAOVQ&usqp=CAU"
    //                 alt=""
    //               />
    //               <input
    //                 className="mx-5"
    //                 type="text"
    //                 name="your_name"
    //                 id="your_name"
    //                 placeholder="Your Name"
    //               />
    //             </div>
    //             <div className="form-group m-5 mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
    //               <img
    //                 className="w-7"
    //                 src="https://media.istockphoto.com/id/936681148/vector/lock-icon.jpg?s=1024x1024&w=is&k=20&c=T396EUPHYuKRQDtX8esiGOdrLQaSAyUvMlgyL48ibic="
    //                 alt=""
    //               />
    //               <input
    //                 className="mx-5"
    //                 type="password"
    //                 name="your_pass"
    //                 id="your_pass"
    //                 placeholder="Password"
    //               />
    //             </div>
    //             <div className="form-group mx-8 p-5 text-xl">
    //               <input
    //                 className="h-5 w-11"
    //                 type="checkbox"
    //                 name="remember-me"
    //                 id="remember-me"
    //                 class="agree-term"
    //               />
    //               <label htmlFor="remember-me" class="label-agree-term">
    //                 Remember me
    //               </label>
    //             </div>
    //             <div className="form-group form-button m-14 text-center lg:flex">
    //               <input
    //                 className="box-border h-14 w-36 cursor-pointer rounded bg-amber-400 p-2 text-white"
    //                 type="submit"
    //                 name="signin"
    //                 id="signin"
    //                 class="form-submit"
    //                 value="Log in"
    //               />
    //             </div>
    //           </form>
    //           <div className="social-login m-7 mx-14 justify-between text-center lg:flex">
    //             <span className="social-label text-lg">Or login with</span>
    //             <div className="social-acc m-4 flex justify-center lg:m-0">
    //               <img
    //                 className="h-8"
    //                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Facebook_Home_logo_old.svg/1200px-Facebook_Home_logo_old.svg.png"
    //                 alt=""
    //               />
    //               <img
    //                 className="mx-3 h-8"
    //                 src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
    //                 alt=""
    //               />
    //               <img
    //                 className="h-8"
    //                 src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="signin-image py-3 text-center">
    //           <img
    //             className="m-8 mx-16 mb-44 pt-6 lg:h-2/3"
    //             src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
    //             alt="sing up image"
    //           />
    //           <a href="#" className="signup-image-link text-xl">
    //             <u>Create an account</u>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    
<section class="sign-in border-white-900 mx-9 mt-9 box-border rounded-xl border-x-2 border-y-2 bg-white">
  <div class="container">
    <div class="signin-content justify-evenly lg:flex">
      <div class="signin-form">
        <h2 class="form-title mt-20 text-center text-5xl font-serif  lg:mr-40">Login</h2>
        <form class="register-form py-24" id="login-form">
          <div class="form-group mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
            <img class="w-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc9VDs02ZrmIC7pS3WzBTvXl8UrI3jwAOVQ&usqp=CAU" alt="" />
            <input class="mx-5 focus:outline-none" type="text" name="your_name" id="your_name" placeholder="Your Name" />
          </div>
          <div class="form-group m-5 mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
            <img class="w-7" src="https://media.istockphoto.com/id/936681148/vector/lock-icon.jpg?s=1024x1024&w=is&k=20&c=T396EUPHYuKRQDtX8esiGOdrLQaSAyUvMlgyL48ibic=" alt="" />
            <input class="mx-5 focus:outline-none" type="password" name="your_pass" id="your_pass" placeholder="Password" />
          </div>
          <div class="form-group mx-8 p-5 text-xl">
            <input class="h-5 w-11" type="checkbox" name="remember-me" id="remember-me"  />
            <label for="remember-me" class="label-agree-term">Remember me</label>
          </div>
          <div class="form-group form-button m-14 text-center lg:flex">
            <input class="box-border h-14 w-36 cursor-pointer rounded bg-amber-400 p-2 text-white" type="submit" name="signin" id="signin" value="Log in" />
          </div>
        </form>
        <div class="social-login m-7 mx-14 justify-between text-center lg:flex">
          <span class="social-label text-lg">Or login with</span>
          <div class="social-acc m-4 flex justify-center lg:m-0">
            <img class="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Facebook_Home_logo_old.svg/1200px-Facebook_Home_logo_old.svg.png" alt="" />
            <img class="mx-3 h-8" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
            <img class="h-8" src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="" />
          </div>
        </div>
      </div>
      <div class="signin-image py-3 text-center">
        <img class="m-8 mx-16 mb-44 pt-6 lg:h-2/3" src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" alt="sing up image" />
        <a href="#" class="signup-image-link text-xl"><u>Create an account</u></a>
      </div>
    </div>
  </div>
</section>



  );
};

export default Signup;
