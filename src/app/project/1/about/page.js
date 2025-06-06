import Nav from "../nav.js";
import "./globals.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Nav />
      <div className="description">
        <span className="title">
          We are Bike-Shop, a bike repair and maintenance shop in Gatineau!
        </span>

        <span className="details">
          Interested in repairing, buying, selling or building your own bike?
          <br/>
          Come visit us at Bike-Shop!
        </span>

        <div className="direction">
          <Image
            src="/map.png"
            width={24}
            height={24}
            alt="Map"
          />
          <span>64 elgon street, Gatineau, J2X 3J9, QC, Canada</span>
        </div>

        <div className="direction">
          <Image
            src="/phone.png"
            width={24}
            height={24}
            alt="Phone"
          />
          <span>+1 (XXX)-XXX-XXXX</span>
        </div>

        <div className="direction">
          <Image
            src="/clock.png"
            width={24}
            height={24}
            alt="Clock"
          />
          <span>
            <div className="opentimes">
              <ul>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>

              <ul>
                <li>08:00 AM -- 09:00 PM</li>
                <li>08:00 AM -- 09:00 PM</li>
                <li>08:00 AM -- 07:00 PM</li>
                <li>10:00 AM -- 07:00 PM</li>
                <li>10:00 AM -- 07:00 PM</li>
                <li>11:30 AM -- 06:00 PM</li>
                <li>11:30 AM -- 06:00 PM</li>
              </ul>
            </div>
          </span>
        </div>
        </div>
    </>
  );
}
