"use client"
import { useRef } from "react"

const page = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }
  return (
    <form onSubmit={handleSubmit} className="w-full h-[100vh] flex flex-col justify-center items-center gap-9">
        <div className="flex flex-col gap-3">
            <label htmlFor="name">Name:</label>
            <input ref={nameRef} type="text" name="name" className="w-[300px] px-3 py-1 text-black"/>
        </div>
        <div className="flex flex-col gap-3">
            <label htmlFor="email">Email:</label>
            <input ref={emailRef} type="email" name="email"className="w-[300px] px-3 py-1 text-black"/>
        </div>
        <button type="submit" className="bg-green-600 w-[300px] text-white py-2 px-4">Submit</button>
    </form>
  )
}

export default page