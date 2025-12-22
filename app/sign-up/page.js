"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { createUserAccount } from "@/actions/useractions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, router]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    setTimeout(async () => {
      const data = await createUserAccount(form);
      setIsSubmitting(false);

      if (data?.error) {
        toast(data.error);
        router.push("/login");
        return;
      }

      if (data?.email && data?.OTPid) {
        router.push(`/otp?email=${encodeURIComponent(data.email)}&id=${encodeURIComponent(data.OTPid)}`);
      } else {
        toast("Unexpected error. Please try again.");
      }
    }, 1000);
  };

  return (
    <div className="font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f7f6f8]  dark:bg-[#191022] group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 items-stretch">
            <div className="flex min-h-screen w-full flex-col lg:flex-row">
              {/* Left Pane: Abstract Visual */}
              <div className="relative hidden w-full flex-1 items-center justify-center bg-violet-600 p-8 lg:flex lg:w-1/2">
                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuz71CwtVO8F2-nqxafyuIjCZisv2tS-80jOS1zOal0mTps_ZAGRWZjKhOGM_8HoMQ5LApdss5-xHrH3Ld3SP1C1aATS_lU7Gvdxj6jiYvPWBfX0ZHwHuf7KPDTdGdcQFgZ_B8eKHFPvl22HnQ7OIgr5qBr8DuC7RzeQJNWgQfJeRnZLUDHYqv_8TJV8Xw1rJOiRi_bTyVT3oe5WkoRIaJCnCBOnr35x5ZCcUYbq9anfedaoOua7zv-io39JP2fFUbgZGQopGgg9s')" }}></div>
                <div className="absolute inset-0 z-10 bg-linear-to-br from-violet-600 to-blue-600 opacity-80"></div>
                <div className="relative z-20 flex flex-col items-center text-white">
                  <svg className="opacity-70" fill="none" height="400" viewBox="0 0 200 200" width="400" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <lineargradient id="glow-grad" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7"></stop>
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3"></stop>
                      </lineargradient>
                      <filter id="glow">
                        <fegaussianblur result="coloredBlur" stdDeviation="3.5"></fegaussianblur>
                        <femerge>
                          <femergenode in="coloredBlur"></femergenode>
                          <femergenode in="SourceGraphic"></femergenode>
                        </femerge>
                      </filter>
                    </defs>
                    {/*  Nodes  */}
                    <circle cx="50" cy="50" fill="url(#glow-grad)" filter="url(#glow)" r="5"></circle>
                    <circle cx="150" cy="50" fill="url(#glow-grad)" filter="url(#glow)" r="5"></circle>
                    <circle cx="100" cy="150" fill="url(#glow-grad)" filter="url(#glow)" r="5"></circle>
                    <circle cx="70" cy="120" fill="url(#glow-grad)" filter="url(#glow)" r="3"></circle>
                    <circle cx="130" cy="120" fill="url(#glow-grad)" filter="url(#glow)" r="3"></circle>
                    {/*  Lines */}
                    <path d="M50 50 L 150 50" filter="url(#glow)" stroke="url(#glow-grad)" strokeOpacity="0.5" strokeWidth="1"></path>
                    <path d="M150 50 L 100 150" filter="url(#glow)" stroke="url(#glow-grad)" strokeOpacity="0.5" strokeWidth="1"></path>
                    <path d="M100 150 L 50 50" filter="url(#glow)" stroke="url(#glow-grad)" strokeOpacity="0.5" strokeWidth="1"></path>
                    <path d="M70 120 L 130 120" filter="url(#glow)" stroke="url(#glow-grad)" strokeOpacity="0.3" strokeWidth="0.5"></path>
                    <path d="M50 50 L 130 120" filter="url(#glow)" stroke="url(#glow-grad)" strokeOpacity="0.3" strokeWidth="0.5"></path>
                    <path d="M150 50 L 70 120" filter="url(#glow)" stroke="url(#glow-grad)" strokeOpacity="0.3" strokeWidth="0.5"></path>
                  </svg>
                  <h1 className="mt-8 text-4xl font-black tracking-tight text-white">LinkShortly</h1>
                  <p className="mt-2 text-lg font-light text-gray-200">Shorten. Share. Succeed.</p>
                </div>
              </div>

              {/* Right Pane: Sign-up Form */}
              <div className="flex w-full flex-1 items-center justify-center bg-[#f7f6f8]  pb-0 py-12 px-4 dark:bg-[#191022] sm:px-6 lg:w-1/2 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                  <div>
                    <h2 className="text-center text-4xl font-black leading-tight tracking-[-0.033em] text-[#140d1b] dark:text-white">
                      Create an Account
                    </h2>
                    <p className="mt-2 text-center text-base font-normal leading-normal text-[#140d1b]/70 dark:text-white/70">
                      Get started with LinkShortly and shorten your first URL in seconds.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6" method="POST">
                    <div className="space-y-4">
                      <label className="flex flex-col">
                        <p className="text-base font-medium leading-normal pb-2 text-[#140d1b] dark:text-white">Full Name</p>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          autoComplete="name"
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#140d1b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-bg-[#7f13ec] /50 border border-[#dbcfe7] dark:border-[#3a2f44] bg-[#faf8fc] dark:bg-[#1f142b] focus:border-bg-[#7f13ec]  h-14 placeholder:text-[#734c9a] p-[15px] text-base font-normal leading-normal"
                          placeholder="Enter your full name"
                          required
                          onChange={handleInputChange}
                        />
                      </label>

                      <label className="flex flex-col">
                        <p className="text-base font-medium leading-normal pb-2 text-[#140d1b] dark:text-white">Email Address</p>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          autoComplete="email"
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#140d1b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-bg-[#7f13ec] /50 border border-[#dbcfe7] dark:border-[#3a2f44] bg-[#faf8fc] dark:bg-[#1f142b] focus:border-bg-[#7f13ec]  h-14 placeholder:text-[#734c9a] p-[15px] text-base font-normal leading-normal"
                          placeholder="Enter your email address"
                          required
                          onChange={handleInputChange}
                        />
                      </label>

                      <label className="flex flex-col">
                        <p className="text-base font-medium leading-normal pb-2 text-[#140d1b] dark:text-white">Password</p>
                        <div className="flex w-full flex-1 items-stretch rounded-lg border border-[#dbcfe7] dark:border-[#3a2f44] bg-[#faf8fc] dark:bg-[#1f142b] focus-within:border-bg-[#7f13ec]  focus-within:ring-2 focus-within:ring-bg-[#7f13ec] /50">
                          <input
                            type="password"
                            name="password"
                            autoComplete="password"
                            value={form.password}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#140d1b] dark:text-white focus:outline-0 border-none bg-transparent h-14 placeholder:text-[#734c9a] p-[15px] pr-2 text-base font-normal leading-normal"
                            placeholder="Create a password"
                            required
                            onChange={handleInputChange}
                          />
                        </div>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className={`flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-5 bg-linear-to-r from-violet-600 to-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : <span className="truncate">Create Your Free Account</span>}
                    </button>
                  </form>

                  <div className="relative flex items-center py-2">
                    <div className="grow border-t border-[#dbcfe7] dark:border-[#3a2f44]"></div>
                    <span className="mx-4 shrink text-sm text-[#734c9a] dark:text-[#a98bc6]">OR</span>
                    <div className="grow border-t border-[#dbcfe7] dark:border-[#3a2f44]"></div>
                  </div>

                  <button onClick={() => signIn("google")} className="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg border border-[#dbcfe7] dark:border-[#3a2f44] bg-white dark:bg-[#1f142b] h-14 px-5 text-[#140d1b] dark:text-white text-base font-medium leading-normal tracking-[0.015em] transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-[#2a1c3a] mb-5">
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
                    <span className="truncate">Continue with Google</span>
                  </button>

                  <button onClick={() => signIn("github")} className="flex w-full min-w-[84px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg border border-[#dbcfe7] dark:border-[#3a2f44] bg-white dark:bg-[#1f142b] h-14 px-5 text-[#140d1b] dark:text-white text-base font-medium leading-normal tracking-[0.015em] transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-[#2a1c3a] mb-5">
                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
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
                    <span className="truncate">Continue with Github</span>
                  </button>

                  <p className="text-center text-sm">
                    <span className="text-[#140d1b]/70 dark:text-white/70">Already have an account?</span>
                    <Link className="font-semibold text-bg-[#7f13ec]  hover:underline" href="/login">Log In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
