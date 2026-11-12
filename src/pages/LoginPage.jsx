import React from "react";
import { useAuth } from "../hooks/authHooks";


const Login = () => {
    let {navigate,register,handleSubmit,errors,logInForm} = useAuth()
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-2">
            Login to continue to your account
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

          <form className="space-y-5" onSubmit={handleSubmit(logInForm)}>

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
                placeholder="Enter your password"
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

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-slate-400">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Forgot password?
              </button>

            </div>

            {/* Login Button */}
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
              Login
            </button>

          </form>

          {/* Bottom */}
          <div className="text-center mt-6">
            <p className="text-sm text-slate-400">
              Don't have an account?
            </p>

            <button
              onClick={()=>navigate('/register')}
              type="button"
              className="
              cursor-pointer
                mt-2 text-blue-400
                hover:text-blue-300
                font-medium transition
              "
            >
              Create account
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;