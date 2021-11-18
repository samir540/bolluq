import React from "react";
import { Container } from "reactstrap";
import HRMenu from "../components/menu/humanResurcesMenu";
// css
import "../assets/css/_vacanciesDetails.scss";
import Title from "../components/title/title";

const VacanciesDetails = () => {
  return (
    <>
      <Title title={"İNSAN RESURSLARI"} />
      <Container>
        <div className="vacancyDetails d-flex flex-row justify-content-between">
          <HRMenu />
          <div className="vacancyDetails__content d-flex flex-column">
            <div className="vacancyDetails__content__offers d-flex flex-row">
              <div className="vacancyDetails__content__offers__head">
                <h4>Tələblər:</h4>
              </div>
              <div className="vacancyDetails__content__offers__text">
                <p>Ali təhsil;</p>
                <p>Müvafiq sahədə ən azı 1 il iş təcrübəsi; </p>
                <p>Yüksək səviyyədə MS Office bilikləri;</p>
                <p>
                  Problem həll etmə, analitik düşüncə, hesabatlılıq
                  səriştəlikləri
                </p>
              </div>
            </div>
            <div className="vacancyDetails__content__responsibilities d-flex flex-row">
              <div className="vacancyDetails__content__responsibilities__head">
                <h4>Vəzifə öhdəlikləri:</h4>
              </div>
              <div className="vacancyDetails__content__responsibilities__text">
                <p>
                  Daxil olan müraciətləri təhlil etmək və səriştəsi, təcrübəsi,
                  bilikləri tələb edilən işçinin lazımi xüsusiyyətlərinə uyğun
                  hesab edilən namizədləri test və ya müsahibə mərhələsinə dəvət
                  etmək;.
                </p>
                <p>Namizədlərlə ilkin müsahibələri keçirmək;</p>
                <p>Müsahibə nəticələri barədə namizədlərə məlumatlar vermək;</p>
                <p>
                  Müvafiq vəzifələr üzrə işə qəbul edilmiş namizədlərə sənəd
                  siyahısı verərək sənədləşməyə yönləndirmək;
                </p>
                <p>
                  İşdən çıxış üçün müraciət edən, həmçinin sınaq müddətini
                  uğursuz başa vuran işçilərlə çıxış müsahibəsini aparmaq və
                  müvafiq struktur bölmələrə məlumat verərək işçini işdən çıxış
                  prosesinə yönləndirmək
                </p>
              </div>
            </div>
            <div className="vacancyDetails__content__services d-flex flex-row">
              <div className="vacancyDetails__content__services__head">
                <h4>Təminatlar:</h4>
              </div>
              <div className="vacancyDetails__content__services__text">
                <p>Servis xidməti; </p>
                <p>Nahar ilə təmin edilmə;</p>
                <p>Əmək bazarına uyğun rəqabətli əmək haqqı;</p>
                <p>5 günlük iş qrafiki.</p>
              </div>
            </div>
            <div className="vacancyDetails__btn-send d-flex flex-row justify-content-start">
              <button>CV göndər</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default VacanciesDetails;
