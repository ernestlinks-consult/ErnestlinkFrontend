"use client";
import Header from "@/app/components/Header";
import "./globals.css";
import Image from "next/image";
// import hero_img from "@/app/Images/Website_Design/hero-img-v2.png";
export default function Home() {
  return (
    <>
      <div>
        <Header />
        {/* <div className="mainContainer container-fluid landing ">
          <div
            className=" relative d-flex align-items-center justify-content-center"
            style={{ height: "92vh" }}>
           
            <div className="container">
              <div className="row d-flex align-items-center flex-md-row flex-column imageandtext">
                
                <div className="col-lg-6 col-12">
                  <h4 className="text-intro pt-3 my-3 text-xl">
                    WE ARE YOUR TRUSTED PARTNER
                  </h4>
                  <p className="intro-top fw-bold font-bold text-xs sm:text-xs leading-tight">
                    Making{" "}
                    <span
                      className="block sm:inline"
                      style={{ color: "rgba(5, 5, 198, 1)" }}>
                      Opportunities
                    </span>{" "}
                    <span className="block sm:inline">Accessible</span>
                  </p>
                  <p className="my-3 intro-p text-xl sm:text-[10px]">
                    We empower our clients with personalized support for study{" "}
                    <span className="block sm:inline">
                      abroad programs, visa assistance, travel solutions and
                      more.
                    </span>{" "}
                    <span className="block sm:inline">
                      Explore global possibilities with our expertise.
                    </span>
                  </p>
                  <div className="anchor my-5">
                    <a
                      className="p-3 mt-4 text-white rounded text-decoration-none"
                      href="#">
                      Explore Now
                    </a>
                  </div>
                </div>
                
                <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center hero_container">
                  <Image
                    className="hero_img"
                    src="/Images/hero-img-v2.png"
                    alt="hero_img"
                    width={1200}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
