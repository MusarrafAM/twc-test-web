import { useNavigate } from "react-router-dom";

const Error = () => {
  const Navigation = useNavigate();

  const got_T0_Login = () => {
    Navigation("/");
  };
  return (
    <div className="bg-[#083F46] text-white text-center h-full pt-[300px]">
      <section className="">
        404 <br />
        It seems you got lost...
      </section>
      <button
        onClick={() => got_T0_Login()}
        className=" rounded-full border focus:shadow-outline w-[131px] h-[48px] hover:bg-white hover:text-[#083F46]"
      >
        Go back Home
      </button>
    </div>
  );
};

export default Error;
