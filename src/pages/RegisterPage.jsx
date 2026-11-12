import React from "react";
import { useAuth } from "../hooks/authHooks";


const Register = () => {
 let {navigate,register,errors,handleSubmit,registerForm} = useAuth()

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-slate-400 mt-2">
            Create your account to get started
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

          <form className="space-y-5" onSubmit={handleSubmit(registerForm)}>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>

              <input
              {...register('name',{
                required:"Name is required"
              })}
                type="text"
                placeholder="Enter your full name"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-slate-800 border border-slate-700
                  text-white placeholder-slate-500
                  outline-none
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/20
                  transition
                "
              />
              {errors.name && <p className="text-red-800">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>

              <input
              {...register('email',{
                required:"Email is required",
                
              })}              
                type="email"
                placeholder="Enter your email"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-slate-800 border border-slate-700
                  text-white placeholder-slate-500
                  outline-none
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/20
                  transition
                "
              />
               {errors.email && <p className="text-red-800">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>

              <input
              {...register('password',{
                required:"password is required",
                minLength:{
                  value:6,
                  message:"minimum 6 characters. "
                }
                
              })}                
                type="password"
                placeholder="Create a password"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-slate-800 border border-slate-700
                  text-white placeholder-slate-500
                  outline-none
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/20
                  transition
                "
              />
                {errors.password && <p className="text-red-800">{errors.password.message}</p>}
            </div>

            {/* Confirm Password
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="
                  w-full px-4 py-3 rounded-lg
                  bg-slate-800 border border-slate-700
                  text-white placeholder-slate-500
                  outline-none
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500/20
                  transition
                "
              />
            </div> */}

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-slate-400">

              <input
                type="checkbox"
                className="mt-1 accent-blue-500"
              />

              <span>
                I agree to the{" "}
                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Terms & Conditions
                </button>
              </span>

            </label>

            {/* Register Button */}
            <button
          
              type="submit"
              className="
                w-full py-3 rounded-lg
                bg-blue-600 hover:bg-blue-500
                text-white font-semibold
                transition duration-200
                shadow-lg shadow-blue-600/20
              "
            >
              Create Account
            </button>

          </form>

          {/* Bottom */}
          <div className="text-center mt-6">

            <p className="text-sm text-slate-400">
              Already have an account?
            </p>

            <button
            onClick={()=>navigate('/')}
            
              type="button"
              className="
              cursor-pointer
                mt-2 text-blue-400
                hover:text-blue-300
                font-medium transition
              "
            >
              Login
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Register;