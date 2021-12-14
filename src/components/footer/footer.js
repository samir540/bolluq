import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { animateBody } from "../../helper/helper";
import swal from "sweetalert";
import { useQuery, useMutation } from "react-query";
import { settingApi } from "../../queries/queries";
import "../../assets/css/_footer.scss";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { chat } from "../../queries/queries";
import { useForm } from "react-hook-form";

const Footer = ({ dispatchSettings }) => {
  const btnTopRef = useRef();
  const { t } = useTranslation();

  const sendRef = useRef();
  const sendMessageBox = useRef();
  const closeRef = useRef();

  useEffect(() => {
    animateBody(btnTopRef.current);
    sendRef.current.onclick = () => {
      sendMessageBox.current.classList.remove("opacityNone");
    };

    closeRef.current.onclick = () => {
      sendMessageBox.current.classList.add("opacityNone");
    };
  });

  const { data, isLoading } = useQuery(["setting"], settingApi, {
    refetchOnWindowFocus: false,
    onSuccess: (succ) => {
      dispatchSettings(succ.data);
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { mutate } = useMutation((data) => chat(data), {
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
    for (const key in data) {
      formData.append(key, data[key]);
    }
    mutate(formData);
  };

  return (
    <footer className="footer">
      <div className="footer__sendMessage">
        <div
          ref={sendMessageBox}
          className="footer__sendMessageBox opacityNone"
        >
          <div className="footer__sendTitle">
            <h3>Formanı doldurun</h3>
            <button ref={closeRef}>
              <svg
                width={22}
                height={22}
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={11} cy={11} r={11} fill="white" />
                <path d="M6 11H16" stroke="#7D7D7D" strokeWidth={2} />
              </svg>
            </button>
          </div>
          <div className="footer__sendForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("firstname", { required: true })}
                type="text"
                placeholder="*Ad"
              />
              <input
                {...register("lastname", { required: true })}
                type="text"
                placeholder="*Soyad"
              />
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="*Email"
              />
              <textarea
                {...register("message", { required: true })}
                placeholder="*Mesaj yaz"
              ></textarea>
              <button className="sendBtnFormFooter" type="submit">
                <svg
                  width={18}
                  height={16}
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.15411 7.99983H2.5559L1.01824 1.88262C1.00839 1.84707 1.00239 1.81057 1.00035 1.77373C0.983237 1.21296 1.60079 0.82407 2.1359 1.08074L16.5559 7.99983L2.1359 14.9189C1.60701 15.1733 0.997237 14.7953 1.00035 14.2446C1.00192 14.1954 1.01057 14.1467 1.02601 14.0999L2.16701 10.3332"
                    fill="white"
                  />
                  <path
                    d="M7.15411 7.99983H2.5559L1.01824 1.88262C1.00839 1.84707 1.00239 1.81057 1.00035 1.77373C0.983237 1.21296 1.60079 0.82407 2.1359 1.08074L16.5559 7.99983L2.1359 14.9189C1.60701 15.1733 0.997237 14.7953 1.00035 14.2446C1.00192 14.1954 1.01057 14.1467 1.02601 14.0999L2.16701 10.3332"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Göndər
              </button>
            </form>
          </div>
        </div>
        <button ref={sendRef}>
          <svg
            width={20}
            height={16}
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V4L10 9L18 4V14ZM10 7L2 2H18L10 7Z"
              fill="black"
            />
          </svg>
          Bizə ismarıc göndər
        </button>
      </div>
      <Container>
        <div className="btnTop" ref={btnTopRef}>
          <svg
            width={41}
            height={41}
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.9421 27.1256C32.4951 27.5705 31.7971 27.6094 31.3062 27.2434L31.1656 27.1214L20.3554 16.2606L9.49404 27.0703C9.04703 27.5152 8.34908 27.5541 7.85818 27.188L7.71758 27.0661C7.27268 26.6191 7.23378 25.9211 7.59982 25.4302L7.72178 25.2896L19.4735 13.5933C19.9205 13.1484 20.6184 13.1095 21.1093 13.4755L21.2499 13.5975L32.9463 25.3491C33.4357 25.8409 33.4338 26.6362 32.9421 27.1256Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="d-flex flexBoxFooter justify-content-between">
          <div className="footer__items hide">
            <h3>Biz kimik</h3>

            <NavLink to={"/about"}>{t("haqqimizda")}</NavLink>
            <NavLink to={"/history"}>{t("tariximiz")}</NavLink>
            <NavLink to={"/structure"}>{t("struktur")}</NavLink>
            <NavLink to={"/productions"}>{t("istehsalat")}</NavLink>
          </div>
          <div className="footer__items hide">
            <h3>Məhsullar</h3>
            <NavLink to={"/our-products"}>{t("bizimmarkalar")}</NavLink>
            <NavLink to={"/external-products"}>{t("xaricimarkalar")}</NavLink>
          </div>
          <div className="footer__items hide">
            <h3>İnsan Resursları</h3>
            <NavLink to={"/internship"}>{t("tecrubeproqramlari")}</NavLink>
            <NavLink to={"/rules"}>{t("isemuracietqaydalari")}</NavLink>
            <NavLink to={"/vacancies"}>{t("vakansiyalar")}</NavLink>
          </div>
          <div className="footer__items">
            <h3>{t("elaqemelumatlari")}</h3>
            <div className="d-flex flex-column">
              <NavLink to={"/"}>
                <img
                  src={require("../../assets/images/phone.svg").default}
                  alt=""
                />
                {isLoading === false && data !== undefined && data.data.phone}
              </NavLink>
              <NavLink to={"/"}>
                <img
                  src={require("../../assets/images/office.svg").default}
                  alt=""
                />
                {isLoading === false && data !== undefined && data.data.email}
              </NavLink>
              <NavLink to={"/"}>
                <img
                  src={require("../../assets/images/location.svg").default}
                  alt=""
                />
                {isLoading === false && data !== undefined && data.data.address}
              </NavLink>
            </div>
          </div>
        </div>
        <div className="d-flex flexBoxFooter justify-content-between align-items-center footer__margin">
          <div className="footer__end">
            <p>Bütün hüquqlar qorunur © 2021 Bolluq MMC</p>
          </div>
          <div className="footer__end hide">
            <a href="#appstore">
              <img
                src={require("../../assets/images/appstore.svg").default}
                alt=""
              />
            </a>
            <a href="#playstore">
              <img
                src={require("../../assets/images/playstore.svg").default}
                alt=""
              />
            </a>
            <a href="#appstore">
              <img
                src={require("../../assets/images/appGalery.svg").default}
                alt=""
              />
            </a>
          </div>
          <div className="footer__end">
            <a href="2#">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.80563 2.65667H11.2663V0.112667C11.0143 0.078 10.1476 0 9.13829 0C7.03229 0 5.58963 1.32467 5.58963 3.75933V6H3.26562V8.844H5.58963V16H8.43896V8.84467H10.669L11.023 6.00067H8.43829V4.04133C8.43896 3.21933 8.66029 2.65667 9.80563 2.65667Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="2#">
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_702:1283)">
                  <path
                    d="M6.41874 10.1205L6.15408 13.8432C6.53274 13.8432 6.69674 13.6805 6.89341 13.4852L8.66874 11.7885L12.3474 14.4825C13.0221 14.8585 13.4974 14.6605 13.6794 13.8619L16.0941 2.54721C16.3081 1.54988 15.7341 1.15921 15.0767 1.40388L0.88341 6.83788C-0.0852564 7.21388 -0.0705897 7.75388 0.718744 7.99855L4.34741 9.12721L12.7761 3.85321C13.1727 3.59055 13.5334 3.73588 13.2367 3.99855L6.41874 10.1205Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_702:1283">
                    <rect
                      width="15.9448"
                      height={16}
                      fill="white"
                      transform="translate(0.861938)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="2#">
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_702:1262)">
                  <path
                    d="M16.4774 15.9507L16.4814 15.95V10.082C16.4814 7.21133 15.8634 5 12.5074 5C10.8941 5 9.81144 5.88533 9.36944 6.72467H9.32278V5.268H6.14078V15.95H9.45411V10.6607C9.45411 9.268 9.71811 7.92133 11.4428 7.92133C13.1421 7.92133 13.1674 9.51067 13.1674 10.75V15.9507H16.4774Z"
                    fill="white"
                  />
                  <path
                    d="M0.404694 5.31836H3.72203V16.0004H0.404694V5.31836Z"
                    fill="white"
                  />
                  <path
                    d="M2.06211 0C1.00144 0 0.140778 0.860667 0.140778 1.92133C0.140778 2.982 1.00144 3.86067 2.06211 3.86067C3.12278 3.86067 3.98344 2.982 3.98344 1.92133C3.98278 0.860667 3.12211 0 2.06211 0V0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_702:1262">
                    <rect
                      width="15.9448"
                      height={16}
                      fill="white"
                      transform="translate(0.723907)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="2#">
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_702:1268)">
                  <path
                    d="M8.14069 4C5.93169 4 4.14069 5.791 4.14069 8C4.14069 10.209 5.93169 12 8.14069 12C10.3497 12 12.1407 10.209 12.1407 8C12.1407 5.791 10.3497 4 8.14069 4ZM8.14069 10.5C6.76269 10.5 5.64069 9.378 5.64069 8C5.64069 6.621 6.76269 5.5 8.14069 5.5C9.51869 5.5 10.6407 6.621 10.6407 8C10.6407 9.378 9.51869 10.5 8.14069 10.5Z"
                    fill="white"
                  />
                  <path
                    d="M11.1407 0H5.14069C2.37969 0 0.140686 2.239 0.140686 5V11C0.140686 13.761 2.37969 16 5.14069 16H11.1407C13.9017 16 16.1407 13.761 16.1407 11V5C16.1407 2.239 13.9017 0 11.1407 0ZM14.6407 11C14.6407 12.93 13.0707 14.5 11.1407 14.5H5.14069C3.21069 14.5 1.64069 12.93 1.64069 11V5C1.64069 3.07 3.21069 1.5 5.14069 1.5H11.1407C13.0707 1.5 14.6407 3.07 14.6407 5V11Z"
                    fill="white"
                  />
                  <path
                    d="M12.4408 4.23298C12.7351 4.23298 12.9738 3.99435 12.9738 3.69999C12.9738 3.40562 12.7351 3.16699 12.4408 3.16699C12.1464 3.16699 11.9078 3.40562 11.9078 3.69999C11.9078 3.99435 12.1464 4.23298 12.4408 4.23298Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_702:1268">
                    <rect
                      width="15.9448"
                      height={16}
                      fill="white"
                      transform="translate(0.585876)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="2#">
              <svg
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_702:1281)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.4467 2.67206C12.0434 1.26709 10.1771 0.493011 8.18881 0.492188C4.09183 0.492188 0.757477 3.82645 0.755829 7.92453C0.75528 9.23456 1.0975 10.5134 1.74799 11.6406L0.693481 15.4922L4.63382 14.4586C5.71954 15.0508 6.94186 15.3629 8.18579 15.3633H8.1889C12.2854 15.3633 15.6201 12.0287 15.6217 7.93048C15.6225 5.94434 14.8501 4.07693 13.4467 2.67206ZM8.18881 14.108H8.18625C7.07773 14.1075 5.99054 13.8096 5.04187 13.2469L4.81638 13.1129L2.47812 13.7263L3.10223 11.4466L2.95529 11.2128C2.33685 10.2292 2.01028 9.09228 2.01083 7.92499C2.01212 4.51877 4.7836 1.74756 8.19128 1.74756C9.84143 1.74811 11.3926 2.39154 12.559 3.5593C13.7254 4.72705 14.3673 6.27923 14.3668 7.93002C14.3653 11.3365 11.594 14.108 8.18881 14.108ZM11.5775 9.48102C11.3919 9.388 10.4787 8.93884 10.3084 8.87677C10.1383 8.81479 10.0144 8.78393 9.89068 8.96979C9.76681 9.15564 9.41095 9.57403 9.30255 9.6979C9.19415 9.82187 9.08594 9.83743 8.90018 9.74441C8.71442 9.65149 8.11603 9.45529 7.40658 8.82257C6.85452 8.33011 6.48181 7.72192 6.37341 7.53607C6.2652 7.35004 6.3725 7.25922 6.45489 7.15704C6.65594 6.90738 6.85727 6.64563 6.91916 6.52176C6.98114 6.3978 6.9501 6.28931 6.90359 6.19638C6.85727 6.10345 6.48584 5.1893 6.33111 4.81732C6.18024 4.45532 6.02725 4.50421 5.91318 4.49853C5.80496 4.49313 5.68109 4.49203 5.55722 4.49203C5.43344 4.49203 5.23221 4.53845 5.06192 4.72449C4.89172 4.91043 4.41199 5.35968 4.41199 6.27383C4.41199 7.18799 5.07748 8.0711 5.17032 8.19507C5.26315 8.31903 6.47998 10.1949 8.34299 10.9993C8.7861 11.1909 9.13199 11.305 9.40179 11.3906C9.84674 11.532 10.2515 11.512 10.5716 11.4642C10.9284 11.4109 11.6703 11.0149 11.8252 10.5811C11.9799 10.1472 11.9799 9.77545 11.9334 9.6979C11.8871 9.62045 11.7632 9.57403 11.5775 9.48102Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_702:1281">
                    <rect
                      width="15.9448"
                      height={16}
                      fill="white"
                      transform="translate(0.447876)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default connect(
  (state) => ({
    settings: state.settings,
  }),
  (dispatch) => ({
    dispatchSettings: (e) => dispatch.settings.dispatchSettings(e),
  })
)(React.memo(Footer));
