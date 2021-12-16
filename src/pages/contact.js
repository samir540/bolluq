import React, { useState } from "react";
import { Container } from "reactstrap";
import { useForm } from "react-hook-form";
import Title from "../components/title/title";
import { useMutation } from "react-query";
// css
import "../assets/css/_contact.scss";
import { contact } from "../queries/queries";
import swal from "sweetalert";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

const Contact = ({ settings }) => {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate, isLoading } = useMutation((data) => contact(data), {
    onSuccess: (succ) => {
      if (succ.status === 200) {
      }

      swal({
        title: "Təbriklər!",
        text: "Mesajınız göndərildi",
        icon: "success",
      });
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    formData.append("file", data.file[0]);

    mutate(formData);
  };

  const [name, setName] = useState("Choose File");

  return (
    <div className="contact">
      <Title title={t("elaqe")} />
      <Container>
        <div className="contact__wrapper">
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758.6679065560024!2d49.759150429238154!3d40.48252909870984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308f7becb217db%3A0xe0311625b34415d0!2sBolluq%20Ltd!5e0!3m2!1sru!2s!4v1639656058991!5m2!1sru!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="contact__form">
            <h2>{t("elaqeucun")}</h2>
            <div className="contact__form--in">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="contact__form--in__items">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                      fill="#C4C4C4"
                    />
                  </svg>

                  <input
                    placeholder={t("ad")}
                    type="text"
                    {...register("firstname", { required: true })}
                  />
                </div>
                <div className="contact__form--in__items">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                  <input
                    placeholder={t("soyad")}
                    type="text"
                    {...register("lastname", {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                </div>
                <div className="contact__form--in__items">
                  <svg
                    width={18}
                    height={14}
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2 0H1.8C0.81 0 0.00899999 0.7875 0.00899999 1.75L0 12.25C0 13.2125 0.81 14 1.8 14H16.2C17.19 14 18 13.2125 18 12.25V1.75C18 0.7875 17.19 0 16.2 0ZM16.2 12.25H1.8V3.5L9 7.875L16.2 3.5V12.25ZM9 6.125L1.8 1.75H16.2L9 6.125Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                  <input
                    placeholder={t("email")}
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                  />
                </div>
                <div className="contact__form--in__items">
                  <svg
                    width={17}
                    height={17}
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.27778 1.85185C3.33333 2.67593 3.47222 3.48148 3.69444 4.25L2.58333 5.36111C2.2037 4.25 1.96296 3.07407 1.87963 1.85185H3.27778ZM12.4074 12.9815C13.1944 13.2037 14 13.3426 14.8148 13.3981V14.7778C13.5926 14.6944 12.4167 14.4537 11.2963 14.0833L12.4074 12.9815ZM4.16667 0H0.925926C0.416667 0 0 0.416667 0 0.925926C0 9.62037 7.0463 16.6667 15.7407 16.6667C16.25 16.6667 16.6667 16.25 16.6667 15.7407V12.5093C16.6667 12 16.25 11.5833 15.7407 11.5833C14.5926 11.5833 13.4722 11.3981 12.4352 11.0556C12.3426 11.0185 12.2407 11.0093 12.1481 11.0093C11.9074 11.0093 11.6759 11.1019 11.4907 11.2778L9.4537 13.3148C6.83333 11.9722 4.68519 9.83333 3.35185 7.21296L5.38889 5.17593C5.64815 4.91667 5.72222 4.55556 5.62037 4.23148C5.27778 3.19444 5.09259 2.08333 5.09259 0.925926C5.09259 0.416667 4.67593 0 4.16667 0Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                  <input
                    placeholder={t("mobilnomre")}
                    type="text"
                    {...register("phone", { required: false })}
                  />
                </div>
                <textarea
                  {...register("message", { required: false })}
                  placeholder={t("metn")}
                ></textarea>
                <div className="width100Flex">
                  <div className="contact__form--in__file">
                    <p> {name}</p>
                    <input
                      type="file"
                      {...register("file")}
                      onChange={(e) => {
                        if (e.target.files.length !== 0) {
                          setName(e.target.files[0].name);
                        } else {
                          setName("Choose File");
                        }
                      }}
                    />
                  </div>
                </div>
                <button className="submitInput" type="submit">
                  {t("gonder")}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact__end">
          <div className="contact__end--items">
            <img
              src={require("../assets/images/tel.svg").default}
              alt={t("telefon")}
            />
            <p>
              <span>{t("telefon")}:</span>
              {settings !== null && (
                <a href={`tel:${settings.phone}`}>{settings.phone}</a>
              )}
            </p>
          </div>
          <div className="contact__end--items">
            <img
              src={require("../assets/images/mail.svg").default}
              alt={t("email")}
            />
            <p>
              <span>{t("email")}:</span>
              {settings !== null && (
                <a href={`mailto:${settings.email}`}>{settings.email}</a>
              )}
            </p>
          </div>
          <div className="contact__end--items">
            <img
              src={require("../assets/images/locate.svg").default}
              alt={t("unvan")}
            />
            <p>
              <span>{t("unvan")}:</span>
              {settings !== null && (
                <a target="_blank" href={settings.address.link}>
                  {settings.address.name}
                </a>
              )}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default connect((state) => ({
  settings: state.settings,
}))(Contact);
