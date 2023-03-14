import React from "react";

const Register = () => {
  return (
    <section class="register-in border-white-900 mx-9 mt-9 box-border rounded-xl border-x-2 border-y-2 bg-white">
      <div class="container">
        <div class="registerin-content justify-evenly lg:flex">
          <div class="registerin-form lg:mx-48">
            <h2 class="form-title mt-20 text-center font-serif text-5xl lg:mr-20">
              Register
            </h2>
            <form class="register-form py-24" id="login-form">
              <div class="form-group mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
                <img
                  class="w-7"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc9VDs02ZrmIC7pS3WzBTvXl8UrI3jwAOVQ&usqp=CAU"
                  alt=""
                />
                <input
                  class="mx-5 focus:outline-none "
                  type="text"
                  name="your_name"
                  id="your_name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-group m-5 mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
                <img
                  class="w-7"
                  src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png"
                  alt=""
                />
                <input
                  class="mx-5 focus:outline-none"
                  type="e-mail"
                  name="your_e-mail"
                  id="your_e-mail"
                  placeholder="Email"
                />
              </div>
              <div class="form-group m-5 mx-12 flex w-auto border-b-2 border-black p-3 text-lg">
                <img
                  class="w-7"
                  src="https://static.vecteezy.com/system/resources/thumbnails/003/720/476/small/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg"
                  alt=""
                />
                <input
                  class="mx-5 focus:outline-none"
                  type="phone"
                  name="your_phone"
                  id="your_phone"
                  placeholder="Phone"
                />
              </div>
              <div class="form-group mx-8 p-5 text-xl">
                <input
                  class="h-5 w-11 focus:outline-none"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <label for="remember-me" class="label-agree-term">
                  Remember me
                </label>
              </div>
              <div class="form-group form-button m-14 text-center lg:flex">
                <input
                  class="box-border h-14 w-36 cursor-pointer rounded bg-amber-400 p-2 text-white"
                  type="submit"
                  name="signin"
                  id="signin"
                  value="Get Started"
                />
              </div>
            </form>
            <div class="social-login m-7 mx-14 justify-between text-center lg:flex">
              <span class="social-label text-lg">Or login with</span>
              <div class="social-acc m-4 flex justify-center lg:m-0">
                <img
                  class="h-8"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Facebook_Home_logo_old.svg/1200px-Facebook_Home_logo_old.svg.png"
                  alt=""
                />
                <img
                  class="mx-3 h-8"
                  src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw"
                  alt=""
                />
                <img
                  class="h-8"
                  src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="signin-image py-3 text-center">
            <img
              class="mb-32 pt-6 lg:h-4/5"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              alt="sing up image"
            />
            <a href="#" class="signup-image-link text-xl">
              <u>Create an account</u>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
