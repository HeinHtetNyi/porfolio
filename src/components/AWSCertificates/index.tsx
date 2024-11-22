import CertificateCard from "../../components/CertificateCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Mousewheel } from "swiper/modules";
import styles from "./aws-certificates.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Text } from "rsuite";

export default function AWSCertificates() {
  return (
    <div
      style={{
        padding: "10px 20px",
      }}
    >
      <Text size="2rem" weight="bold" className="primary-text-color">
        Amazon Web Service
      </Text>
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
            imageUrl={"certificates/aws_cloud_practitioner_essential.png"}
            title="AWS Cloud Practitioner Essential"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <CertificateCard
            imageUrl={"certificates/aws_job_roles.png"}
            title="AWS Job Roles"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
