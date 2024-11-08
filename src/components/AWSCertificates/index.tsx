import CertificateCard from "../../components/CertificateCard";
import Heading from "@theme/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
import styles from "./aws-certificates.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function AWSCertificates() {
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
        Amazon Web Service
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
          <CertificateCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
