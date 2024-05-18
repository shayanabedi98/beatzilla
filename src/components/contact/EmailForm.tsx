"use client";
import { useState } from "react";

export default function EmailForm() {
  const [result, setResult] = useState("");
  const [honeyPot, setHoneyPot] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (!honeyPot) {
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "c3cd9d5f-aa96-47ca-9e1f-abc7ef7ca1b1");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  };

  return (
    <div className="container flex flex-col items-center">
      <h2 className="container-header w-[95%] text-center">
        If you are interested in working together, feel free to send me an email
      </h2>
      <h3 className="mb-10 text-lg">Responses are made within 48 hours.</h3>
      <form
        onSubmit={onSubmit}
        className="mx-auto flex w-1/3 min-w-[300px] flex-col gap-4"
      >
        <input
          value={honeyPot}
          onChange={(e) => setHoneyPot(e.target.value)}
          type="text"
          placeholder="subject"
          name="subject"
          className="hidden"
        />
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="h-8 border-2 px-1"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="h-8 border-2 px-1"
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          className="border-2 px-1"
        ></textarea>
        <button
          type="submit"
          className="mx-auto h-8 w-28 bg-base-100 text-xl font-semibold text-primary"
        >
          Send
        </button>
      </form>
      <span className="my-5 flex justify-center">{result}</span>
    </div>
  );
}
