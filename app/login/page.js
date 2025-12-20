"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { generateLoginOtp } from "@/actions/useractions";
import { toast } from "react-toastify";
import isActive from "../hooks/isActive";

export default function Login() {
  const { data: session, status } = useSession();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();
  const { data } = isActive();

  useEffect(() => {
    if (status === "authenticated" || data) {
      router.push("/home");
    }
  }, [status, router]);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const sendData = await generateLoginOtp(credentials);
    if (sendData?.error) {
      toast(sendData.error, { type: "error" });
      return;
    }
    if (sendData?.email && sendData?.OTPid) {
      router.push(`/otp?email=${encodeURIComponent(sendData.email)}&id=${encodeURIComponent(sendData.OTPid)}`);
    } else {
      toast("Unexpected response. Please try again.");
    }
  };

  return (
    <div className="font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-lightdark:bg-[#191022]  group/design-root overflow-x-hidden">
        <div className="flex flex-1 w-full">
          <div className="flex flex-1 lg:grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="relative hidden lg:flex items-center justify-center bg-[#191022]">
              <div className="absolute inset-0 z-0">
                <img
                  className="h-full w-full object-cover"
                  alt="Abstract background with intersecting glowing lines in violet and blue, representing connectivity and speed."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATEwyGmV96NOkxR1TyXBzR7kgKMcPflwLxgmOoLtuGcskVDdvitLgjpK8dltuQkY5-L8O8OAeHTgywtJt7BmfSqJbFvVJIO0pgmwAQiMdrCip8FrohJsJr7VTHkRprX0EG6JG6pnG5RvV9RdJuOZOhkTH0ltIOD6pxStUNRSQx_lFVJpFHH2B5Nq2WzsNSdkgWZWpZp_rMa4Xq6_9uL2OTq69IGwd9VI3nxuGJLnrF1bOyJ__xMVVrEKz9-YxS9Li7MpFr75faR6A"
                />
                <div className="absolute inset-0 bg-linear-to-br from-[#7f13ec]/50 via-transparent to-blue-500/30"></div>
              </div>
              <div className="relative z-10 flex flex-col items-start p-16 text-white">
                <h2 className="text-4xl font-bold tracking-tighter text-white mb-2">
                  SwiftLink
                </h2>
                <p className="text-xl text-white/80 max-w-md">
                  Shorten, share, and track your links with unparalleled speed and precision.
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex w-full flex-1 items-center justify-center bg-background-lightdark:bg-[#191022]  p-4 sm:p-6 lg:p-8">
              <div className="flex w-full max-w-md flex-col items-center justify-center py-10">
                <div className="w-full">
                  <div className="text-center lg:text-left">
                    <h1 className="text-[#140d1b] dark:text-gray-100 tracking-tight text-3xl font-bold leading-tight">
                      Log In
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-base">
                      Welcome back to SwiftLink.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} method="POST">
                    <div className="mt-8 space-y-6">
                      {/* Email */}
                      <div>
                        <label className="flex flex-col">
                          <p className="text-[#140d1b] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                            Email Address
                          </p>
                          <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            autoComplete="email"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#140d1b] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-[#7f13ec]/50 border border-[#dbcfe7] dark:border-gray-700 bg-background-lightdark:bg-[#191022]  h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 text-base font-normal leading-normal"
                            placeholder="Enter your email address"
                            required
                            onChange={handleInputChange}
                          />
                        </label>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="flex flex-col">
                          <div className="flex items-center justify-between pb-2">
                            <p className="text-[#140d1b] dark:text-gray-200 text-base font-medium leading-normal">
                              Password
                            </p>
                            <Link className="text-[#7f13ec] hover:underline text-sm font-medium leading-normal" href="#">
                              Forgot Password?
                            </Link>
                          </div>

                          <div className="flex w-full flex-1 items-stretch rounded-lg">
                            <input
                              type="password"
                              name="password"
                              value={credentials.password}
                              autoComplete="password"
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-[#140d1b] dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-[#7f13ec]/50 border border-r-0 border-[#dbcfe7] dark:border-gray-700 bg-[#f7f6f8]  dark:bg-[#191022]  h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-3 pr-2 text-base font-normal leading-normal"
                              placeholder="Enter your password"
                              required
                              onChange={handleInputChange}
                            />
                            <div className="text-gray-500 dark:text-gray-400 flex border border-l-0 border-[#dbcfe7] dark:border-gray-700 bg-[#f7f6f8]  dark:bg-[#191022]  items-center justify-center px-3 rounded-r-lg"></div>
                          </div>
                        </label>
                      </div>

                      {/* Login button */}
                      <button type="submit" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-linear-to-r from-[#7f13ec] to-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                        <span className="truncate">Log In</span>
                      </button>
                    </div>
                  </form>
                  {/* Divider */}
                  <div className="relative my-8 flex items-center">
                    <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
                    <span className="mx-4 shrink text-sm text-gray-500 dark:text-gray-400">
                      OR
                    </span>
                    <div className="grow border-t border-gray-300 dark:border-gray-700"></div>
                  </div>

                  {/* Google Login */}
                  <button className="flex mb-5 w-full items-center justify-center gap-3 rounded-lg border border-[#dbcfe7] dark:border-gray-700 bg-[#f7f6f8]  dark:bg-[#191022]  px-4 py-3 text-base font-medium text-[#140d1b] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => signIn("google")}>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_17_80)">
                        <path
                          d="M47.532 24.5528C47.532 22.9214 47.3997 21.29 47.1117 19.7361H24.2661V28.705H37.3197C36.6872 31.7922 34.7571 34.3792 31.936 36.0106V42.02H40.092C44.8543 37.712 47.532 31.7522 47.532 24.5528Z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M24.2661 48.0001C30.4922 48.0001 35.7317 46.0142 40.092 42.0201L31.936 36.0106C29.778 37.5218 27.2034 38.3999 24.2661 38.3999C18.8875 38.3999 14.2058 34.8519 12.512 29.827H4.16211V35.9868C8.44831 43.1415 15.7995 48.0001 24.2661 48.0001Z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M12.512 29.8269C12.0239 28.3158 11.7358 26.7157 11.7358 25.04C11.7358 23.3643 12.0239 21.7642 12.512 20.2531V14.0932H4.16211C2.53151 17.3193 1.54102 21.0124 1.54102 25.04C1.54102 29.0676 2.53151 32.7607 4.16211 35.9868L12.512 29.8269Z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M24.2661 9.68001C27.6306 9.68001 30.686 10.817 33.0489 13.049L40.2458 5.85213C35.7317 1.94218 30.4922 0 24.2661 0C15.7995 0 8.44831 4.85851 4.16211 12.0132L12.512 18.1731C14.2058 13.1481 18.8875 9.68001 24.2661 9.68001Z"
                          fill="#EA4335"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_17_80">
                          <rect fill="white" height="48" width="46" transform="translate(1.54102)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#dbcfe7] dark:border-gray-700 bg-background-lightdark:bg-[#191022]  px-4 py-3 text-base font-medium text-[#140d1b] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => signIn("github")}>
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 73 73" version="1.1">
                      <g id="team-collaboration/version-control/github" stroke="none" strokeWidth="1" fill="none"
                        fillRule="evenodd">
                        <g id="container" transform="translate(2.000000, 2.000000)" fillRule="nonzero">
                          <rect id="mask" stroke="#000000" strokeWidth="2" fill="#000000" x="-1"
                            y="-1" width="71" height="71" rx="14">

                          </rect>
                          <path
                            d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z"
                            id="Shape" fill="#FFFFFF">
                          </path>
                        </g>
                      </g>
                    </svg>

                    <span>Continue with Github</span>
                  </button>

                  <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?
                    <a className="font-medium text-[#7f13ec] hover:underline" href="/sign-up">
                      {" "}
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* End right */}
          </div>
        </div>
      </div>
    </div>
  );
}