"use client";
import { setThemeCookie } from "@/app/actions";
import Image from "next/image";
export default function Header({ headerList, headerLogo, mode }: any) {

  const handelToggle = async (e: any) => {
    const checked = e.target.checked;
    if (checked === true) {
      await setThemeCookie('dark');
    } else {
      await setThemeCookie('light');
    }
  }

  return (
    <div>
      <div className="flex justify-between  fixed left-0 top-0 w-full z-10 bg-primary text-primary-content ">
        <div className="block lg:hidden">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </button>
            {
              headerList && headerList.map(({ id, home, fertilizers, seeds, food, tissueCulture }: any) => (
                <ul key={id} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-[16px] w-52">
                  <li><a href="/" >{home}</a></li>
                  <li><a href="/fertilizers">{fertilizers}</a></li>
                  <li><a href="/seeds">{seeds}</a></li>
                  <li><a href="/food">{food}</a></li>
                  <li><a href="/tissueculture">{tissueCulture}</a></li>
                </ul>
              ))
            }
          </div>
        </div>
        <div className="mt-3 md:mt-0 lg:mt-0">
          <a href="/">
            <div className="flex p-0 md:p-1 gap-0 px-0 md:px-2 shadow-2xl rounded-lg">
              <div className="flex items-center">
                {
                  headerLogo && headerLogo.map(({ id, logo }: any) => (
                    <Image key={id} src={logo} width={1000} height={1000} className="w-6 md:w-10 rounded-md " alt="Logo" />
                  ))
                }
              </div>
              <h2 className="font-bold text-[10px] md:text-base lg:text-lg mt-[6px] md:mt-[10px] ">PLPL Seeds</h2>
            </div>
          </a>
        </div>
        <div className="hidden lg:block">
          {
            headerList && headerList.map(({ id, home, fertilizers, seeds, food, tissueCulture }: any) => (
              <ul key={id} className="menu menu-horizontal px-1 text-sm md:text-base lg:text-base font-bold">
                <li><a href="/">{home}</a></li>
                <li><a href="/fertilizers">{fertilizers}</a></li>
                <li><a href="/seeds">{seeds}</a></li>
                <li><a href="/food">{food}</a></li>
                <li><a href="/tissueculture">{tissueCulture}</a></li>
              </ul>
            ))
          }
        </div>
        <div className="m-2 mt-3 md:mt-2 lg:mt-3">
          <label className="swap swap-rotate">
            <input type="checkbox" checked={mode === 'dark' ? true : false} onChange={(e) => handelToggle(e)} className="theme-controller" value="synthwave" />
            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
          </label>
          {/* <label className="cursor-pointer grid place-items-center">
            <input type="checkbox" checked={mode === 'dark' ? true : false} onChange={(e) => handelToggle(e)} className="toggle theme-controller  row-start-1 col-start-1 col-span-2" />
            <svg className="col-start-1 row-start-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
            <svg className="col-start-2 row-start-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label> */}
        </div>
      </div>
    </div>
  )
}