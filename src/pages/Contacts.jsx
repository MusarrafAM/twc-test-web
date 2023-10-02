import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import { data } from "../constants";

const Contacts = () => {
  const Navigate = useNavigate();

  const [contentEditable, setContentEditable] = useState(false);
  const [textBgColour, setTextBgColour] = useState("white");
  const [gender, setgender] = useState("Male");

  // To Create the Popup Message.
  const [modelEdit, setEditModel] = useState(false);
  const [modelDelete, setDeleteModel] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const [isBlurred, setIsBlurred] = useState(false);

  const toggle_Edit_Modal = () => {
    setEditModel(!modelEdit);
    setIsBlurred(false);
  };

  const toggle_Delete_Modal = () => {
    setDeleteModel(!modelDelete);
    setIsBlurred(!isBlurred);
  };

  const final_succees_yes = () => {
    setDeleteSuccess(!deleteSuccess);
    setIsBlurred(false);
  };

  const toggle_Delete_Success_Message_Modal = () => {
    toggle_Delete_Modal();
    setDeleteSuccess(!deleteSuccess);
    setIsBlurred(true);
  };

  const edit_clicked = () => {
    setContentEditable(true);
    setTextBgColour("#E7ECED");
  };

  const edit_saved = () => {
    setContentEditable(false);
    setTextBgColour("white");
    toggle_Edit_Modal();
    setIsBlurred(true);
  };

  const toggle_Clicked = () => {
    if (gender === "Male") {
      setgender("Female");
    } else {
      setgender("Male");
    }
    console.log(gender);
  };

  const go_T0_Login = () => {
    Navigate("/");
  };

  const got_To_Add_Contacts = () => {
    Navigate("/add_contact");
  };

  const blurStyle = {
    filter: isBlurred ? "blur(5px)" : "none",
  };

  return (
    <div className="w-full h-full bg-[url('/src/assets/images/background-img.png')]">
      <div
        style={blurStyle}
        className="absolute left-[-122px] top-[-189px] bg-[#083F46] w-[1763px] h-[1107px] rounded-[50%] rotate-[25deg]"
      ></div>
      <div
        style={blurStyle}
        className="relative text-white top-[102px] left-[205px] w-[138px] h-[91px]"
      >
        <img
          className="w-[72px] h-[24px]"
          src="./src/assets/images/twc-white.svg"
          alt="TWC logo"
        />
        <p className="text-3xl font-medium">
          <span className="font-bold">Contacts </span> <br /> portal
        </p>
      </div>

      <div
        style={blurStyle}
        className="absolute text-white w-[994px] h-[73px] top-[230px] left-[204px]"
      >
        <p className=" inline-flex text-4xl font-bold mb-[60px] pt-2">
          Contacts
        </p>

        <button
          onClick={() => got_To_Add_Contacts()}
          className=" ml-[520px] rounded-full border focus:shadow-outline w-[255px] h-[48px] hover:bg-white hover:text-[#083F46]"
        >
          Add new contact
        </button>
      </div>

      <section
        style={blurStyle}
        className="contact-details overflow-y-auto absolute w-[955px] h-[316px] bg-white mt-[220px] ml-[200px] rounded-[30px]"
      >
        <div className="table-heading flex space-x-[100px] pl-[144px] pt-4 text-[18px] text-[#083F46] font-bold">
          <p>full name</p>
          <p>gender</p>
          <p>email</p>
          <p className="pl-[80px]">phone number</p>
        </div>

        {data.map((item, index) => (
          <div
            className="each-contact-row flex gap-[30px] items-center my-3 text-[20px] text-[#083F46]"
            key={index}
          >
            {item.gender === "Male" ? (
              <img
                className="pl-8"
                src="./src/assets/images/male.png"
                alt="user Image"
              />
            ) : (
              <img
                className="pl-8"
                src="./src/assets/images/female.png"
                alt="user Image"
              />
            )}
            <p
              contentEditable={contentEditable}
              className="max-w-[200px]"
              style={{ background: textBgColour }}
            >
              {item.name}
            </p>
            <p
              className="absolute flex gap-3 left-[330px]"
              style={{ background: textBgColour }}
            >
              {item.gender}
              {contentEditable && (
                <img
                  onClick={toggle_Clicked}
                  className="cursor-pointer"
                  src="./src/assets/images/toggle.svg"
                  alt="toggle pic"
                />
              )}
            </p>
            <p
              contentEditable={contentEditable}
              style={{ background: textBgColour }}
              className="absolute left-[470px]"
            >
              {item.mail}
            </p>
            <p
              contentEditable={contentEditable}
              style={{ background: textBgColour }}
              className="absolute left-[710px]"
            >
              {item.phone}
            </p>
            <img
              onClick={edit_clicked}
              className="cursor-pointer absolute left-[860px] "
              src="./src/assets/images/pencil.svg"
              alt="edit-icon"
              style={{ display: contentEditable ? "none" : "inline-block" }}
            />
            <img
              onClick={toggle_Delete_Modal}
              className="cursor-pointer absolute left-[900px]"
              src="./src/assets/images/delete.svg"
              alt="delete-icon "
              style={{ display: contentEditable ? "none" : "inline-block" }}
            />
            <button
              onClick={edit_saved}
              className="pb-3 w-[72px] h-[35px] rounded-[20px] bg-[#083F46] text-white absolute left-[850px]"
              style={{ display: !contentEditable ? "none" : "inline-block" }}
            >
              save
            </button>
          </div>
        ))}
      </section>

      <a
        style={blurStyle}
        onClick={() => go_T0_Login()}
        className="absolute underline text-white left-[1180px] top-[640px] flex gap-3 cursor-pointer"
      >
        <img src="./src/assets/images/logout.svg" alt="" />
        <p className="pt-[8px]">logout</p>
      </a>

      {/*Below Code For Popups to Update.*/}
      {modelEdit && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-[]">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div className="absolute text-[30px] text-[#083F46] top-[277px] left-[370px] w-[809px] h-[215px] bg-white rounded-[30px] ">
              <h1 className="py-[40px] px-[25px] text-center">
                Your Contacts has been saved succesfully!
              </h1>
              <button
                onClick={toggle_Edit_Modal}
                className="ml-[300px] px-[25px] bg-white border border-[#083F46]  text-[#083F46] rounded-full w-[131px] h-[48px]  hover:bg-[#083F46] hover:text-white"
              >
                Okey
              </button>
            </div>
          </div>
        </div>
      )}

      {/*Below Code For Popups to Delete.*/}
      {modelDelete && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div className="absolute text-[30px] text-[#083F46] top-[277px] left-[370px] w-[809px] h-[215px] bg-white rounded-[30px] ">
              <h1 className="py-[40px] px-[25px] text-center">
                Do you want to delete the contact “Dion Fernando”?
              </h1>
              <div className="flex gap-8  ">
                <button
                  onClick={toggle_Delete_Success_Message_Modal}
                  className="ml-[250px] px-[25px] bg-white border border-[#083F46]  text-[#083F46] rounded-full w-[131px] h-[48px]  hover:bg-[#083F46] hover:text-white"
                >
                  Yes
                </button>
                <button
                  onClick={toggle_Delete_Modal}
                  className=" px-[25px] bg-white border border-[#083F46]  text-[#083F46] rounded-full w-[131px] h-[48px]  hover:bg-[#083F46] hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Below Code For Popups to Delete Succesfully Mesasage.*/}
      {deleteSuccess && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
            <div className="absolute text-[30px] text-[#083F46] top-[277px] left-[370px] w-[809px] h-[215px] bg-white rounded-[30px] ">
              <h1 className="py-[40px] px-[25px] text-center">
                Your contact has been deleted succefully!
              </h1>
              <div className="flex gap-8  ">
                <button
                  onClick={final_succees_yes}
                  className="ml-[300px] px-[25px] bg-white border border-[#083F46]  text-[#083F46] rounded-full w-[131px] h-[48px]  hover:bg-[#083F46] hover:text-white"
                >
                  Okey
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
