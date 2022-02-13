import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { useMutation } from "react-query";
import { Controller, useForm } from "react-hook-form";
import Title from "../components/title/title";
import "../assets/css/_form.scss";
import { exportApi, resumeCv } from "../queries/queries";
import swal from "sweetalert";
import { useParams } from "react-router";
import { readURL } from "../helper/helper";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";


import { enGB, az, ru } from "date-fns/esm/locale";





if (localStorage.getItem("i18nextLng") === "az") {
  registerLocale("az", az);
} else if (localStorage.getItem("i18nextLng") === "en") {
  registerLocale("enGB", enGB);
} else {
  registerLocale("ru", ru);
}


const Form = () => {
  const [startDate, setStartDate] = useState(new Date());

  const {t}=useTranslation();
  const { slug } = useParams();

  const [img, setImg] = useState("");

  const [imgPath, setImgPath] = useState(null);

  const [forceUpdate, setForceUpdate] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm();

  const { mutate, isLoading } = useMutation((data) => resumeCv(data, slug), {
    onSuccess: (succ) => {
      if (succ.status === 200) {
      }

      swal({
        title: "Təbriklər!",
        text: "Mesajınız göndərildi",
        icon: "success",
      });

      reset();
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    for (const key in data) {
      if (data[key] !== undefined && key !== "file") {
        formData.append(key, data[key]);
      }
      if (key === "file") {
        formData.append(key, data.file[0]);
      }
    }

    mutate(formData);
  };

  useEffect(() => {
    if (img !== "") {
      readURL(img, setImgPath);
    }
  }, [img, forceUpdate]);

  return (
    <>
      <Title title={t("insanresurslari")} />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <div className="form__title">
              <h2>{t("formanidoldur")}</h2>
              <p>*{t("zehmetolmasadoldur")}</p>
            </div>
            <div className="form__body">
              <div className="form__personal-information d-flex flex-column">
                <div className="form__personal-information__header">
                  <h4>1.{t("shexsimelumatlar")}</h4>
                </div>
                <div className="form__personal-information__body d-flex justify-content-between flex-row">
                  <div className="form__personal-information__body__input-field">
                    <div className="form__personal-information__body__input-field__name--input d-flex flex-row flex-wrap justify-content-between">
                      <div className="form__personal-information__body__input-field__name--input__name d-flex flex-column">
                        <label htmlFor="name">*{t("ad")}</label>
                        <input
                          type="text"
                          id="name"
                          {...register("firstname", { required: true })}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__name--input__surname d-flex flex-column">
                        <label htmlFor="surname">*{t("soyad")}</label>
                        <input
                          type="text"
                          id="surname"
                          {...register("surname", { required: true })}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__name--input__patronymic d-flex flex-column">
                        <label htmlFor="patronymic">*{t("ataadi")}</label>
                        <input
                          type="text"
                          id="patronymic"
                          {...register("patronymic", { required: true })}
                        />
                      </div>
                    </div>

                    <div className="form__personal-information__body__input-field__birth--input d-flex flex-row flex-wrap justify-content-between">
                      <div className="form__personal-information__body__input-field__birth--input__b-place d-flex flex-column">
                        <label htmlFor="b-place">*{t("dogumyeri")}</label>
                        <input
                          type="text"
                          id="b-place"
                          {...register("bplace", { required: true })}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__birth--input__b-date d-flex flex-column">
                        <label htmlFor="b-date">*{t("dogumtarixi")}</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          locale={localStorage.getItem("i18nextLng")}
                        />
                        {/* <input
                          type="date"
                          id="b-date"
                          {...register("bdate", { required: true })}
                        /> */}
                      </div>
                      <div className="form__personal-information__body__input-field__birth--input__citizenship d-flex flex-column">
                        <label>*{t("vetendasliq")}</label>
                        <Controller
                          control={control}
                          rules={{ required: true }}
                          name="citizenship"
                          render={({ field }) => (
                            <select
                              {...field}
                              style={{ padding: "5px 10px 5px" }}
                            >
                              <option value=""></option>
                              <option value={t("azerbaycanli")}>
                                {t("azerbaycanli")}
                              </option>
                            </select>
                          )}
                        />
                      </div>
                    </div>

                    <div className="form__personal-information__body__input-field__address d-flex flex-wrap flex-column">
                      <label htmlFor="address">*{t("yasayisunvani")}</label>
                      <input
                        type="text"
                        id="address"
                        {...register("address", { required: true })}
                      />
                    </div>

                    <div className="form__personal-information__body__input-field__marital-other-status d-flex flex-row flex-wrap justify-content-between">
                      <div className="form__personal-information__content__input-field__marital-other-status__marital d-flex flex-column">
                        <label>*{t("aileveziyyeti")}</label>
                        <Controller
                          control={control}
                          name="familysituation"
                          rules={{ required: true }}
                          render={({ field }) => (
                            <select {...field}>
                              <option value=""></option>
                              <option value="subay">{t("subay")}</option>
                              <option value="evli">{t("evli")}</option>
                            </select>
                          )}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__marital-other-status__military d-flex flex-column">
                        <label>*{t("herbimukellifiyyet")}</label>
                        <Controller
                          control={control}
                          rules={{ required: true }}
                          name="army"
                          render={({ field }) => (
                            <select {...field}>
                              <option value=""></option>
                              <option value="var">{t("var")}</option>
                              <option value="var">{t("yox")}</option>
                            </select>
                          )}
                        />
                        <option value="Herbi mukellefiyyet"></option>
                      </div>
                      <div className="form__personal-information__body__input-field__marital-other-status__driver-license d-flex flex-column">
                        <label>*{t("suruculukvesiqesi")}</label>
                        <Controller
                          control={control}
                          rules={{ required: true }}
                          name="drivelisence"
                          render={({ field }) => (
                            <select {...field}>
                              <option value=""></option>
                              <option value="var">{t("var")}</option>
                              <option value="yox"> {t("yox")}</option>
                            </select>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form__personal-information__body__photo">
                    {img === "" && (
                      <div className="form__personal-information__photo__download">
                        <p>{t("sekliyukle")}</p>
                      </div>
                    )}
                    <p className="imgPath">
                      {imgPath !== null ? (
                        <img src={imgPath} />
                      ) : (
                        "JPEG,JPG,PNG, maks 10MB"
                      )}
                    </p>

                    <input
                      {...register("file")}
                      accept="image/png, image/jpg,image/jpeg"
                      type="file"
                      className="file"
                      onChange={(e) => {
                        setImg(e.target);
                        setForceUpdate(Math.floor(Math.random(1) * 10));
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form__contact-information d-flex flex-column ">
                <div className="form__contact-information__header">
                  <h4>2.{t("kontakt")}</h4>
                  <p>*{t("elaqenomresiazibir")}</p>
                </div>
                <div className="form__contact-information__input-field d-flex flex-row justify-content-between">
                  <div className="form__contact-information__input-field__phone">
                    <label>{t("seherdaxili")}</label>
                    <div>
                      <Controller
                        control={control}
                        name="phonecity"
                        rules={{ required: false }}
                        render={({ field }) => (
                          <select {...field}>
                            <option value=""></option>
                            <option value="012">012</option>
                          </select>
                        )}
                      />
                      <input
                        type="tel"
                        {...register("phonecitychildren", {
                          required: false,
                          minLength: 7,
                        })}
                      />
                    </div>
                  </div>
                  <div className="form__contact-information__input-field__mobile">
                    <label>{t("mobilnomre")}</label>
                    <div>
                      <Controller
                        control={control}
                        name="phonemobile"
                        render={({ field }) => (
                          <select {...field}>
                            <option value=""></option>
                            <option value="+994">+994</option>
                          </select>
                        )}
                      />
                      <input
                        type="tel"
                        {...register("phonemobilechildren", {
                          required: true,
                          minLength: 7,
                        })}
                      />
                    </div>
                  </div>
                  <div className="form__contact-information__input-field__email">
                    <label>*{t("email")}</label>
                    <div>
                      <input
                        type="email"
                        {...register("emailperson", { required: true })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__education d-flex flex-column">
                <div className="form__education__header">
                  <h4>3.{t("tehsil")}</h4>
                </div>
                <div className="form__education__input-field d-flex flex-column">
                  <div className="form__education__input-field__secondary d-flex flex-row justify-content-between">
                    <div className="form__education__input-field__secondary__name">
                      <label>*{t("ortatehsil")}</label>
                      <div>
                        <input
                          type="text"
                          {...register("education", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="form__education__input-field__secondary__city">
                      <label>*{t("rayonseher")}</label>
                      <div>
                        <input
                          type="text"
                          {...register("cityperson", { required: true })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form__education__input-field__high d-flex flex-column">
                    <div className="form__education__input-field__high__first-line d-flex flex-row justify-content-between w-100">
                      <div className="form__education__input-field__high__name">
                        <label>{t("alitehsilmuessesininadi")}</label>
                        <div>
                          <input
                            type="text"
                            {...register("educationname", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__faculty">
                        <label>{t("fakulte")}</label>
                        <div>
                          <input
                            type="text"
                            {...register("faculty", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__major">
                        <label>{t("ixtisas")}</label>
                        <div>
                          <input
                            type="text"
                            {...register("specialty", { required: false })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form__education__input-field__high__second-line d-flex flex-row justify-content-between w-100">
                      <div className="form__education__input-field__high__entrance-year">
                        <label>{t("qebulili")}</label>
                        <div>
                          <input
                            type="text"
                            {...register("eduationstart", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__graduate-year">
                        <label>{t("bitmeili")}</label>
                        <div>
                          <input
                            type="text"
                            {...register("educationend", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__degree">
                        <label>{t("derece")}</label>
                        <div>
                          <input
                            type="text"
                            {...register("degree", { required: false })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__it-skills d-flex flex-column">
                <div className="form__it-skills__header">
                  <h4>4.{t("komputerbiliyi")}</h4>
                </div>
                <div className="form__it-skills__input-field">
                  <input
                    type="text"
                    {...register("compeducation", { required: false })}
                  />
                </div>
              </div>

              <div className="form__language">
                <div className="form__language__header">
                  <h4>5. {t("dilbiliyi")}</h4>
                </div>
                <div className="form__language__input-field">
                  <input
                    type="text"
                    {...register("languageskills", { required: false })}
                  />
                </div>
              </div>
              <div className="form__experience d-flex flex-column ">
                <div className="form__experience__header">
                  <h4>6. {t("istecrubesi")}</h4>
                </div>
                <div className="form__experience__input-field d-flex flex-column">
                  <div className="form__experience__input-field__first-line d-flex flex-row justify-content-between">
                    <div className="form__experience__input-field__first-line__ex-job">
                      <label>{t("evvelkiishyeri")}</label>
                      <div>
                        <input
                          type="text"
                          {...register("workskills", { required: false })}
                        />
                      </div>
                    </div>
                    <div className="form__experience__input-field__first-line__ex-position">
                      <label>{t("vezife")}</label>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="form__experience__input-field__first-line__ex-boss">
                      <label>{t("rehberinadiElaqe")}</label>
                      <div>
                        <input
                          type="text"
                          {...register("workname", { required: false })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form__experience__input-field__second-line d-flex flex-row justify-content-between">
                    <div className="form__experience__input-field__second-line__ex-startEnd-date">
                      <label>{t("iseqebulcixma")}</label>
                      <div>
                        <input
                          type="text"
                          {...register("workdate", { required: false })}
                        />
                      </div>
                    </div>
                    <div className="form__experience__input-field__second-line__ex-resign-reason">
                      <label>{t("isdencixmasebebi")}</label>
                      <div>
                        <input
                          type="text"
                          {...register("workendreason", { required: false })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__reference-person d-flex flex-column ">
                <div className="form__reference-person__header">
                  <h4>7. {t("tovsiyeedebilecek")}</h4>
                </div>
                <div className="form__reference-person__input-field d-flex flex-row justify-content-between">
                  <div className="form__reference-person__input-field__name">
                    <label>*{t("ad")}</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencename", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="form__reference-person__input-field__surname">
                    <label>*{t("soyad")}</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencelastname", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="form__reference-person__input-field__acquaintance-degree">
                    <label>*{t("tanisliqderecesi")}</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencerelationsipdegree", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div className="form__reference-person__input-field__number">
                    <label>*{t("elaqenomresi")}</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencecontact", {
                          required: true,
                          minLength: 7,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__btn-send d-flex  justify-content-center align-items-center">
                <button type="submit">{t("gonder")}</button>
              </div>
            </div>
          </Container>
        </form>
      </div>
    </>
  );
};

export default Form;
