import React, { useState, useRef, Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import emailjs from '@emailjs/browser'

import Fox from '../models/Fox.jsx'
import useAlert from '../hooks/useAlert.js'
import Alert from '../components/Alert.jsx'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const [currentAnimation, setCurrentAnimation] = useState("idle")

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({
      ...form,//spread across the form
      [e.target.name]: e.target.value,//takes a specific field and updates it
    })
  }

  const handleFocus = (e) => {setCurrentAnimation("walk")};
  const handleBlur = (e) => {setCurrentAnimation("idle") };

  const handleSubmit = (e) => {
    e.preventDefault();//do not reload
    setIsLoading(true);//iniiate the loading
    setCurrentAnimation("hit");
    //servuce name, template ID
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ashutosh",
        from_email: form.email,
        to_email: "ashutosh.pandey29a@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message Sent Successfully",
          type: "success",
        });

        setTimeout(() => {
        setCurrentAnimation("idle");
        //clear the form
        setForm({
          name: "",
          email: "",
          message: "",
        });
        formRef.current.reset();
        hideAlert({
          show: false,
          text: "",
          type: "danger",
        });
        }, [3000]);
        
    }).catch((error) => {
       setCurrentAnimation("idle");
        setIsLoading(false);
        console.log(error);
        showAlert({
          show: true,
          text: "Failed to send message",
          type: "danger",
        });
      })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert}/>}
     
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>

        <form
          ref={formRef}
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit = {handleSubmit}
        >
          <label className = "text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
              value={form.name}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className = "text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your email"
              value={form.email}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className = "text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows = {4}
              className = "textarea"
              placeholder="Enter your message"
              value={form.message}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled = {isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...': 'Send Message'}
          </button> 
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
      <Canvas camera={
        {
          position: [0,0,5],
          fov:75,
          near: 0.1,
          far: 1000,
        }
      }>  
       <directionalLight intensity = {2.5} position={[0,0,1]}/>
       <ambientLight intensity = {0.5}/>
       <Suspense fallback={null}>
        <Fox 
          currentAnimation = {currentAnimation}
          position={[0.5,0.35,0]}
          rotation={[12.6,-0.6,0]}
          scale={[0.5,0.5,0.5]}
        />
       </Suspense>
      </Canvas>
      </div>
    </section>
  )
}

export default Contact