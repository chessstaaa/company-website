import { SignupForm } from "./components/SignUpForm";

export default function Page() {
  return (
    <div className="bg-[#00162b] flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm ">
        <SignupForm />
      </div>
    </div>
  )
}
