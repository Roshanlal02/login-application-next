import { Card } from "@/components/card";
import LoginForm from "@/components/loginForm";
import Particles from "@/components/particles";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl">Login / Signup Application</h1>
        <LoginForm />
      </div>
    </main>
  );
}
