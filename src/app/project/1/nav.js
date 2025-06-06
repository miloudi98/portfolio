import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./nav.module.css";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className={css.navbar}>
        <a href="/project/1" className={css.mainlogo}>
          <div className={css.logo}>
            <Image
              priority={false}
              src="/bike-logo.png"
              width={64}
              height={64}
              alt="Bike logo"
            />

            <span>
              Bike-Shop
            </span>
          </div>
        </a>

      </nav>

      <div className={css.menu}>
        <ul>
          <a href="#">
            <li>
            </li>
          </a>

          <a href="/project/1/browse">
            <li>
              <Image
                src="/cart.png"
                width={24}
                height={24}
                alt="Shopping cart"
              />
              Browse bikes
            </li>
          </a>

          <a href="/project/1/book">
            <li>
              <Image
                src="/human_icon.png"
                width={24}
                height={24}
                alt="Human icon"
              />
              Book an appointment
            </li>
          </a>

          <a href="/project/1/about">
            <li>
              <Image
                src="/faq.png"
                width={24}
                height={24}
                alt="FAQ"
              />
              About us
            </li>
          </a>

        </ul>
      </div>
    </>
  );
}
