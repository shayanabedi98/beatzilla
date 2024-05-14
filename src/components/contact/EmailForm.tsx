"use client";
import { useState } from "react";

export default function EmailForm() {
  const [result, setResult] = useState("");
  const [honeyPot, setHoneyPot] = useState("")

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
      <h2 className="container-header">If you are interested in working together, feel free to send me an email</h2>
      <h3 className="mb-10">Responses are made within 48 hours.</h3>
      <form onSubmit={onSubmit} className="flex flex-col w-1/3 min-w-[300px] gap-4 mx-auto">
        <input value={honeyPot} onChange={(e) => setHoneyPot(e.target.value)} type="text" placeholder="subject" name="subject" className="hidden"/>
        <input type="text" name="name" required placeholder="Name" className="px-1 h-8 border-2"/>
        <input type="email" name="email" required placeholder="Email" className="px-1 h-8 border-2" />
        <textarea name="message" required placeholder="Message" className="px-1 border-2"></textarea>
        <button type="submit" className="bg-base-100 text-primary text-xl font-semibold h-8 w-28 mx-auto">Send</button>
      </form>
      <span className="flex justify-center my-5">{result}</span>
    </div>
  );
}
