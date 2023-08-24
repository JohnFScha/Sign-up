import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ListIcon from "../assets/icon-list.svg";
import "./SignUp.css";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const SignUp = () => {
  const formRef = useRef("");
  const emailRef = useRef("");
  const labelRef = useRef("");
  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{3,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!emailRegex.test(email)) {
      emailRef.current.className =
        "p-4 border-2 border-red-700 bg-red-300 bg-opacity-30 text-red-700";
      labelRef.current.innerText = "Provide a valid email";
      labelRef.current.className = "text-start text-red-700 font-bold";
      return;
    }

    emailjs.sendForm(
      "service_o9dm3ps",
      "template_ajibqbe",
      formRef.current,
      API_KEY
    );
    navigate(`/success?=${email}`);
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section
        className="laptop:grid laptop:grid-cols-12 
        mobile:flex mobile:flex-col-reverse mobile:justify-between
        laptop:justify-stretch laptop:items-stretch 
        laptop:rounded-3xl laptop:p-5 "
        id="form-section"
      >
        <div className="laptop:col-span-7 flex flex-col text-center justify-center gap-3 p-14">
          <h1 className="laptop:text-6xl mobile:text-4xl text-start font-bold">Stay Updated!</h1>
          <h2 className="laptop:text-lg mobile:text-md   text-start">
            Join 60.000+ product managers receiving monthly <br />
            updates on:
          </h2>
          <ul className="laptop:text-lg mobile:text-sm">
            <li className="flex gap-2 ">
              <img src={ListIcon} alt="list icon" />
              <p className="text-start">Product discovery and building what matters</p>
            </li>
            <li className="flex gap-2">
              <img src={ListIcon} alt="list icon" />
              <p className="text-start">Measuring to ensure updates are a success</p>
            </li>
            <li className="flex gap-2 ">
              <img src={ListIcon} alt="list icon" />
              <p className="text-start">And much more!</p>
            </li>
          </ul>
          <form
            className="flex flex-col items-stretch gap-4"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <label
              htmlFor="email"
              className="text-start font-bold"
              ref={labelRef}
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email@company.com"
              className="p-4 border-2 border-gray-400 rounded-lg"
            />
            <button
              type="submit"
              className="p-4 mobile:p-5 mobile:text-sm rounded-lg font-bold"
              id="submit"
            >
              Subscribe to a monthly newsletter
            </button>
          </form>
        </div>
        <div id="banner" className="laptop:col-span-5 mobile:rounded-b-3xl mobile:h-[17.7rem] laptop:h-[100%] laptop:rounded-3xl"></div>
      </section>
    </main>
  );
};

export default SignUp;
