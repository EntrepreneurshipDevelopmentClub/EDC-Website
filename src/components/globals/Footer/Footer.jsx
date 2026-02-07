import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer id="Contact">
        <div className="logo">
          <div className="flex">
            <Image
              className="img"
              src="/assets/brand-logo/logo2.png"
              alt="Logo"
              width="40"
              height="40"
            />
            <h4>
              EDC
              <br /> CIT Kokrajhar
            </h4>
          </div>

          <div className="copy">
            &#169; Enterpreneurship Development Club - All Rights Reserved
          </div>
        </div>
        <ul className="Links">
          <li>
            <b>Page</b>
          </li>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
        <ul className="initiatives">
          <li>
            <b>Useful Links</b>
          </li>
          <li>
            <Link href="https://cit.ac.in/" target="_blank">
              CIT Kokrajhar
            </Link>
          </li>
          <li>
            <Link href="http://centrallibrary.cit.ac.in/" target="_blank">
              Central Library
            </Link>
          </li>
          <li>
            <Link href="https://placements.cit.ac.in" target="_blank">
              Training and placement cell
            </Link>
          </li>
        </ul>
        <div className="contact" id="reach-us">
          <h6>Reach Us</h6>
          <p>
            <Image
              src="/assets/Icons/phone-call.png"
              alt="Phone-Number"
              width="30"
              height="30"
            />
            +91-863-234-5678
          </p>
          <br />
          <p>
            <Image
              src="/assets/Icons/email.png"
              alt="Email"
              width="30"
              height="30"
            />
            <Link href="ecell@cit.ac.in">ecell@cit.ac.in</Link>
          </p>
          <br />
          <p>
            <Image
              src="/assets/Icons/pin.png"
              alt="Location"
              width="30"
              height="30"
            />
            <Link
              href="https://maps.app.goo.gl/P7fJWA84zRoDdpwa9:"
              target="_blank"
            >
              Click here
            </Link>
          </p>
        </div>
        <div className="design">
          Reboot by &nbsp; <span>Jonak</span> &nbsp;,&nbsp;<span>Kinjal</span>{" "}
          &nbsp;and &nbsp; <span>Dibyojit</span>
        </div>

        <div className="social">
          {/* <!-- <h6>Follow us </h6>  --> */}
          <Link
            href="https://www.instagram.com/ecell_citk?igsh=MXE3dXR5Ym8wbzRmbA=="
            target="_blank"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <defs>
                <linearGradient
                  id="instaGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F58529" />
                  <stop offset="50%" stopColor="#DD2A7B" />
                  <stop offset="100%" stopColor="#515BD4" />
                </linearGradient>
              </defs>

              <path
                fill="url(#instaGradient)"
                d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.9 4.9 0 0 1 1.78 1.03 4.9 4.9 0 0 1 1.03 1.78c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.9 4.9 0 0 1-1.03 1.78 4.9 4.9 0 0 1-1.78 1.03c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.9 4.9 0 0 1-1.78-1.03 4.9 4.9 0 0 1-1.03-1.78c-.17-.46-.354-1.26-.41-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43A4.9 4.9 0 0 1 3.71 3.71a4.9 4.9 0 0 1 1.78-1.03c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.506 5.506 0 0 0 12 6.5Zm0 9.1A3.6 3.6 0 1 1 15.6 12 3.604 3.604 0 0 1 12 15.6Zm5.75-9.8a1.28 1.28 0 1 1-1.28-1.28 1.28 1.28 0 0 1 1.28 1.28Z"
              />
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/company/e-cell-citk/"
            target="_blank"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#0A66C2"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.773 1.77-1.727V1.727C24 .774 23.21 0 22.23 0ZM7.09 20.452H3.56V9h3.53v11.452ZM5.32 7.433c-1.13 0-2.05-.93-2.05-2.07 0-1.14.92-2.07 2.05-2.07 1.14 0 2.05.93 2.05 2.07 0 1.14-.91 2.07-2.05 2.07ZM20.45 20.452h-3.53v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.41V9h3.39v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31Z" />
            </svg>
          </Link>

          <Link
            href="https://youtube.com/@edc-citk?si=X6Wfkgfi8X9_MyE4"
            target="_blank"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#FF0000"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <path d="M23.498 6.186a2.996 2.996 0 0 0-2.108-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.39.566a2.996 2.996 0 0 0-2.108 2.12C0 8.07 0 12 0 12s0 3.93.502 5.814a2.996 2.996 0 0 0 2.108 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.39-.566a2.996 2.996 0 0 0 2.108-2.12C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z" />
            </svg>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
