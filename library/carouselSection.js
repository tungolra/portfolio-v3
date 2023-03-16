import styles from "@/styles/ProjectDetailPage.module.css";
import Link from "next/link";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export function carousel(obj) {
  return (
    <div key={obj.name} className={styles.carouselViewport}>
      {obj.pages?.map((page, idx) => (

          <div
            key={idx}
            id={`carouselSlide${idx + 1}`}
            tabindex="0"
            className={styles.carouselSlide}
          >
            <div className={styles.carouselBtns}>
              <Link
                className={styles.prev}
                href={`#carouselSlide${idx < 1 ? obj.pages.length : idx}`}
              >
                <BsArrowLeftCircle />
              </Link>
              <h3>{obj.name}</h3>
              <Link
                href={`#carouselSlide${
                  idx + 2 > obj.pages.length ? 1 : idx + 2
                }`}
              >
                <BsArrowRightCircle />
              </Link>
            </div>
            <div className={styles.carouselSnapper}>
              <img
                className={styles.img}
                src={!page ? "https://i.imgur.com/I9A7c4b.png" : page}
                alt="project"
              />
            </div>
          </div>

      ))}
    </div>
  );
}