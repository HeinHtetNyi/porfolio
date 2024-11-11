import CertificateCard from "../../components/CertificateCard";
import Heading from "@theme/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
import styles from "./hackerrank-certificates.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function HackerRankCertificates() {
  return (
    <div
      style={{
        padding: "10px 20px",
      }}
    >
      <Heading
        as="h2"
        className="primary-text-color"
        style={{ marginBottom: 0 }}
      >
        HackerRank
      </Heading>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1, // 1 slide on very small screens
          },
          640: {
            slidesPerView: 2, // 2 slides on small screens
          },
          768: {
            slidesPerView: 3, // 3 slides on tablets
          },
          1024: {
            slidesPerView: 4, // 4 slides on medium screens
          },
          1280: {
            slidesPerView: 5, // 5 slides on large screens
          },
        }}
        spaceBetween={1}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[FreeMode, Pagination, Mousewheel]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard
            imageUrl={"certificates/python_basic.png"}
            title="Python Basic"
            link="https://www.hackerrank.com/certificates/iframe/171c175e6412"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard
            imageUrl={"certificates/sql_basic.png"}
            title="SQL Basic"
            link="https://www.hackerrank.com/certificates/iframe/c1c4196745ed"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard
            imageUrl={"certificates/sql_intermediate.png"}
            title="SQL Intermediate"
            link="https://www.hackerrank.com/certificates/iframe/69b7c2f54499"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard
            imageUrl={"certificates/sql_advanced.png"}
            title="SQL Advanced"
            link="https://www.hackerrank.com/certificates/iframe/827d2ac6148c"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
