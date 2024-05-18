"use client";
import { FormEvent, useState } from "react";
import { Card } from "./card";

interface Request {
    username: string,
    password: string
}

const LoginForm = () => {
    const [formType, setFormType] = useState<String>("Login");
    const [request, setRequest] = useState<Request>({
        username: "",
        password: ""
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(request);
    }

    return (
        <>
            <Card>
                <form
                    action=""
                    onSubmit={(e) => handleSubmit(e)}
                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-16 lg:pb-24 md:p-16"
                >
                    <div className="relative w-full h-10 border border-zinc-600 rounded-3xl bg-black/20 flex flex-row text-lg justify-evenly">
                        <button
                            type="button"
                            onClick={() => setFormType("Login")}
                            className={`${formType === "Login" && "bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text transition duration-0 hover:duration-300 ease-in-out"
                                }`}
                        >
                            Login
                        </button>
                        <button type="button" onClick={() => setFormType("Signup")} className={`${formType === "Signup" && "bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text transition duration-0 hover:duration-300 ease-in-out"
                            }`}>
                            Signup
                        </button>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="email"
                            className="relative border rounded-md bg-zinc-800/60 border-zinc-600 p-1"
                            required
                            onChange={(e) => setRequest({ ...request, username: e.target.value })}
                        />
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="relative border rounded-md bg-zinc-800/60 border-zinc-600 p-1"
                            required
                            onChange={(e) => setRequest({ ...request, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="w-1/3 py-2 rounded-md inline-block text-transparent bg-clip-text border border-zinc-600 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500">
                        {formType === "Login" ? "Login" : "Signup"}
                    </button>
                </form>
            </Card>
        </>
    );
};

export default LoginForm;
