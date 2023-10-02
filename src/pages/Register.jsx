import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Navigate = useNavigate();

  const Register_Clicked = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    if (email && password === confirmPassword) {
      Axios.post("http://localhost:3000/register", {
        email: email,
        password: password,
      }).then(() => {
        alert("Successfull register");
      });

      Navigate("/welcome");
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const go_back_to_register = () => {
    Navigate("/");
  };

  return (
    <div>
      <div className="z-10 absolute bg-[#083F46] w-[1502px] h-[1502px] rounded-full left-[-716px] top-[-367px]"></div>
      <section className="z-20 relative w-[477px] h-[469px] top-[95px] left-[122px] ">
        <p className="text-white text-5xl font-bold pb-4">Register Now!</p>
        <form onSubmit={Register_Clicked}>
          <input
            type="email"
            placeholder="e-mail"
            id="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium my-7  "
          />

          <input
            type="password"
            placeholder="create password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium "
          />

          <input
            type="password"
            placeholder="confirm password"
            id="password-confirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium my-7"
          />

          <div className="flex text-[25px] text-white mt-12">
            <button
              type="submit"
              className="rounded-full border focus:shadow-outline w-[131px] h-[48px] hover:bg-white hover:text-[#083F46]"
            >
              register
            </button>
          </div>
        </form>
      </section>
      <a
        className="absolute text-white underline z-10 top-[608px] left-[122px] text-[25px] cursor-pointer"
        onClick={() => go_back_to_register()}
      >
        &lt; Back to login
      </a>

      <section className="absolute opacity-90 top-0 left-[677px] w-[989px] h-[768px] bg-[url('/src/assets/images/background-img.png')]">
        <div className="absolute top-[255px] right-[550px]">
          <img src="./src/assets/images/twc-black.svg" alt="" />
          <p className="text-[#083F46] text-6xl font-medium">
            <span className="font-bold">Contacts </span> <br /> portal
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
