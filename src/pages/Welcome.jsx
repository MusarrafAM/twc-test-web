import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const Navigate = useNavigate();

  const go_T0_Login = () => {
    Navigate("/");
  };

  const go_T0_Add_Contact = () => {
    Navigate("/add_contact");
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
      <div className="absolute text-white w-[951px] h-[304px] top-[278px] left-[204px]">
        <p className="text-3xl">
          <span className="text-4xl font-bold">Welcome,</span>
          <br />
          This is where your contacts will live. Click the button below <br />{" "}
          to add a new contact.
        </p>
        <button
          onClick={() => go_T0_Add_Contact()}
          className="mt-[140px] rounded-full border focus:shadow-outline w-[323px] h-[48px] hover:bg-white hover:text-[#083F46]"
        >
          Add your first contact
        </button>
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

export default Welcome;
