import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const AddContact = () => {
  const Navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setgender] = useState("");

  const Submit_Clicked = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3000/add_contacts", {
      fullname: fullName,
      email: email,
      phone: phoneNumber,
      gender: gender,
    })
      .then((response) => {
        if (response.data) {
          Navigate("/contacts");
        }
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  };

  const go_T0_Login = () => {
    Navigate("/");
  };

  return (
    <div className="w-full h-full bg-[url('/src/assets/images/background-img.png')]">
      <div className=" absolute left-[-122px] top-[-189px] bg-[#083F46] w-[1763px] h-[1107px] rounded-[50%] rotate-[25deg]"></div>
      <div className="relative text-white top-[102px] left-[205px] w-[138px] h-[91px]">
        <img
          className="w-[72px] h-[24px]"
          src="./src/assets/images/twc-white.svg"
          alt="TWC logo"
        />
        <p className="text-3xl font-medium">
          <span className="font-bold">Contacts </span> <br /> portal
        </p>
      </div>

      <div className="absolute text-white w-[1151px] h-[304px] top-[278px] left-[204px]">
        <p className="text-4xl font-bold mb-[60px]">New Contact</p>

        <form onSubmit={Submit_Clicked}>
          <input
            type="text"
            placeholder="full name"
            id="full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className=" text-[#083F46] rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] mr-[40px] text-[25px] font-medium"
          />

          <input
            type="e-mail"
            placeholder="e-mail"
            id="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-[#083F46] rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium"
          />

          <input
            type="tel"
            placeholder="phone number"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="absolute right-[674px] bottom-[50px] text-[#083F46] rounded-[50px] w-[477px] h-[55px] placeholder:text-[#083F46] pl-[41px] text-[25px] font-medium"
          />

          <div className="radio-options flex gap-[60px] absolute left-[522px] top-[207px] text-[25px]">
            <p className="mr-[55px]">gender</p>
            <label>
              {/* name should be same inorder to add requir to radiobox 1 required enough.*/}
              <input
                className="mr-3 accent-[#083F46]"
                type="radio"
                value="Male"
                checked={gender === "Male"}
                name="gender"
                id="male"
                onChange={(e) => setgender(e.target.value)}
                required
              />
              male
            </label>
            <br />
            <label>
              <input
                className="mr-3 accent-[#083F46]"
                type="radio"
                value="Female"
                checked={gender === "Female"}
                id="female"
                name="gender"
                onChange={(e) => setgender(e.target.value)}
              />
              female
            </label>
          </div>

          <button
            type="submit"
            className="mt-[140px] rounded-full border focus:shadow-outline w-[323px] h-[48px] hover:bg-white hover:text-[#083F46]"
          >
            Add your first contact
          </button>
        </form>
      </div>

      <a
        onClick={() => go_T0_Login()}
        className="absolute underline text-white left-[1180px] top-[640px] flex gap-3 cursor-pointer"
      >
        <img src="./src/assets/images/logout.svg" alt="" />
        <p className="pt-[8px]">logout</p>
      </a>

      {/* <LogoutButton /> */}
    </div>
  );
};

export default AddContact;
