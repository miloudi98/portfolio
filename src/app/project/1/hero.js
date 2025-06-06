import css from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={css.container}>
      <a href="/project/1/browse">
        <button className="btn btn-dark">
          Browse bikes
        </button>
      </a>

      <div className={css.hero}>

        <div className={css.description}>
          <span className={css.title}>
            We bring the bike shop to you!
          </span>

          <span className={css.details}>
            Interested in repairing, buying, selling or building your own bike?
            <br/>
            Come visit us at Bike-Shop!
          </span>

          <div className={css.direction}>
            <Image
              src="/map.png"
              width={24}
              height={24}
              alt="Map"
            />
            <span>64 elgon street, Gatineau, J2X 3J9, QC, Canada</span>
          </div>

          <div className={css.direction}>
            <Image
              src="/phone.png"
              width={24}
              height={24}
              alt="Phone"
            />
            <span>+1 (XXX)-XXX-XXXX</span>
          </div>

          <div className={css.direction}>
            <Image
              src="/clock.png"
              width={24}
              height={24}
              alt="Clock"
            />
            <span>
              <div className={css.opentimes}>
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
        
        <Image
          priority={false}
          src="/bike-hero-section.png"
          width={500}
          height={500}
          alt="Bike logo"
          style={{
            width: "40vw",
            height: "auto"
          }}
        />
      </div>
    </div>
  );
}
