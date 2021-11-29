import React, { useState } from "react";
import { Container } from "reactstrap";
import { useMutation } from "react-query";
import { Controller, useForm } from "react-hook-form";
import Title from "../components/title/title";
import "../assets/css/_form.scss";
import { exportApi, resumeCv } from "../queries/queries";
import swal from "sweetalert";
import { useParams } from "react-router";

const Form = () => {
  const { slug } = useParams();

  const [img, setImg] = useState("");

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
      if (data[key] !== undefined) {
        formData.append(key, data[key]);
      }
      if (key === "file") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, "");
      }
    }

    mutate(formData);
  };

  return (
    <>
      <Title title="İNSAN RESURSLARI" />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <div className="form__title">
              <h2>Formanı doldurun</h2>
              <p>*Zəhmət olmasa aşağıdakı formanı doldurun</p>
            </div>
            <div className="form__body">
              <div className="form__personal-information d-flex flex-column">
                <div className="form__personal-information__header">
                  <h4>1. Şəxsi Məlumatlar</h4>
                </div>
                <div className="form__personal-information__body d-flex justify-content-between flex-row">
                  <div className="form__personal-information__body__input-field">
                    <div className="form__personal-information__body__input-field__name--input d-flex flex-row flex-wrap justify-content-between">
                      <div className="form__personal-information__body__input-field__name--input__name d-flex flex-column">
                        <label htmlFor="name">*Ad</label>
                        <input
                          type="text"
                          id="name"
                          {...register("firstname", { required: false })}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__name--input__surname d-flex flex-column">
                        <label htmlFor="surname">*Soyad</label>
                        <input
                          type="text"
                          id="surname"
                          {...register("surname", { required: false })}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__name--input__patronymic d-flex flex-column">
                        <label htmlFor="patronymic">*Ata adı</label>
                        <input
                          type="text"
                          id="patronymic"
                          {...register("patronymic", { required: false })}
                        />
                      </div>
                    </div>

                    <div className="form__personal-information__body__input-field__birth--input d-flex flex-row flex-wrap justify-content-between">
                      <div className="form__personal-information__body__input-field__birth--input__b-place d-flex flex-column">
                        <label htmlFor="b-place">*Doğum yeri</label>
                        <input
                          type="date"
                          id="b-place"
                          {...register("bplace", { required: false })}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__birth--input__b-date d-flex flex-column">
                        <label htmlFor="b-date">*Doğum tarixi</label>
                        <input
                          type="text"
                          id="b-date"
                          {...register("bdate", { required: false })}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__birth--input__citizenship d-flex flex-column">
                        <label>*Vətəndaşlıq</label>
                        <Controller
                          control={control}
                          name="citizenship"
                          render={({ field }) => (
                            <select
                              {...field}
                              style={{ padding: "5px 10px 5px" }}
                            >
                              <option value="azerbaycanli">Azerbaycanli</option>
                            </select>
                          )}
                        />
                      </div>
                    </div>

                    <div className="form__personal-information__body__input-field__address d-flex flex-wrap flex-column">
                      <label htmlFor="address">*Yaşayış ünvanı</label>
                      <input
                        type="text"
                        id="address"
                        {...register("address", { required: false })}
                      />
                    </div>

                    <div className="form__personal-information__body__input-field__marital-other-status d-flex flex-row flex-wrap justify-content-between">
                      <div className="form__personal-information__content__input-field__marital-other-status__marital d-flex flex-column">
                        <label>*Ailə vəziyyəti</label>
                        <Controller
                          control={control}
                          name="familysituation"
                          render={({ field }) => (
                            <select {...field}>
                              <option value=""></option>
                              <option value="subay">Subay</option>
                              <option value="evli">Evli</option>
                            </select>
                          )}
                        />
                      </div>
                      <div className="form__personal-information__body__input-field__marital-other-status__military d-flex flex-column">
                        <label>*Hərbi mükəlləfiyyət</label>
                        <Controller
                          control={control}
                          name="army"
                          render={({ field }) => (
                            <select {...field}>
                              <option value=""></option>
                              <option value="var">Var</option>
                            </select>
                          )}
                        />
                        <option value="Herbi mukellefiyyet"></option>
                      </div>
                      <div className="form__personal-information__body__input-field__marital-other-status__driver-license d-flex flex-column">
                        <label>*Sürücülük vəsiqəsi</label>
                        <Controller
                          control={control}
                          name="drivelisence"
                          render={({ field }) => (
                            <select {...field}>
                              <option value="">Sururculuk vesiqesi</option>
                              <option value="var">Var</option>
                              <option value="yox"></option>
                            </select>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form__personal-information__body__photo">
                    <div className="form__personal-information__photo__download">
                      <p>{img === "" && "Sekili yukle"}</p>
                    </div>
                    <p>{img !== "" ? img : "JPEG,JPG,PNG, maks 10MB"}</p>
                    <input
                      {...register("file", { required: false })}
                      type="file"
                      className="file"
                      onChange={(e) => {
                        setImg(e.target.files[0].name);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form__contact-information d-flex flex-column ">
                <div className="form__contact-information__header">
                  <h4>2. Əlaqə</h4>
                  <p>*Əlaqə nömrəsi ən azı birini göstər</p>
                </div>
                <div className="form__contact-information__input-field d-flex flex-row justify-content-between">
                  <div className="form__contact-information__input-field__phone">
                    <label>Şəhərdaxili nömrə</label>
                    <div>
                      <Controller
                        control={control}
                        name="phonecity"
                        render={({ field }) => (
                          <select {...field}>
                            <option value="012"></option>
                            <option value="012">012</option>
                          </select>
                        )}
                      />
                      <input
                        type="text"
                        {...register("phonecitychildren", { required: false })}
                      />
                    </div>
                  </div>
                  <div className="form__contact-information__input-field__mobile">
                    <label>Mobil nömrə</label>
                    <div>
                      <Controller
                        control={control}
                        name="phonemobile"
                        render={({ field }) => (
                          <select {...field}>
                            <option value="+994"></option>
                            <option value="+994">+994</option>
                          </select>
                        )}
                      />
                      <input
                        type="text"
                        {...register("phonemobilechildren", {
                          required: false,
                        })}
                      />
                    </div>
                  </div>
                  <div className="form__contact-information__input-field__email">
                    <label>*E-mail</label>
                    <div>
                      <input
                        type="email"
                        {...register("emailperson", { required: false })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__education d-flex flex-column">
                <div className="form__education__header">
                  <h4>3. Təhsil</h4>
                </div>
                <div className="form__education__input-field d-flex flex-column">
                  <div className="form__education__input-field__secondary d-flex flex-row justify-content-between">
                    <div className="form__education__input-field__secondary__name">
                      <label>*Orta təhsil məktəbi / Gimnaziya / Lisey N</label>
                      <div>
                        <input
                          type="text"
                          {...register("education", { required: false })}
                        />
                      </div>
                    </div>
                    <div className="form__education__input-field__secondary__city">
                      <label>*Rayon \ Şəhər</label>
                      <div>
                        <input
                          type="text"
                          {...register("cityperson", { required: false })}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form__education__input-field__high d-flex flex-column">
                    <div className="form__education__input-field__high__first-line d-flex flex-row justify-content-between w-100">
                      <div className="form__education__input-field__high__name">
                        <label>*Ali təhsil müəssisəsinin adı</label>
                        <div>
                          <input
                            type="text"
                            {...register("educationname", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__faculty">
                        <label>*Fakültə</label>
                        <div>
                          <input
                            type="text"
                            {...register("faculty", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__major">
                        <label>*İxtisas</label>
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
                        <label>*Qəbul olunduğu il</label>
                        <div>
                          <input
                            type="text"
                            {...register("eduationstart", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__graduate-year">
                        <label>*Bitmə ili</label>
                        <div>
                          <input
                            type="text"
                            {...register("educationend", { required: false })}
                          />
                        </div>
                      </div>
                      <div className="form__education__input-field__high__degree">
                        <label>*Dərəcə</label>
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
                  <h4>4. Kompüter biliyi</h4>
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
                  <h4>5. Dil biliyi</h4>
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
                  <h4>6. İş təcrübəsi</h4>
                </div>
                <div className="form__experience__input-field d-flex flex-column">
                  <div className="form__experience__input-field__first-line d-flex flex-row justify-content-between">
                    <div className="form__experience__input-field__first-line__ex-job">
                      <label>Əvvəlki iş yeri</label>
                      <div>
                        <input
                          type="text"
                          {...register("workskills", { required: false })}
                        />
                      </div>
                    </div>
                    <div className="form__experience__input-field__first-line__ex-position">
                      <label>Vəzifə</label>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="form__experience__input-field__first-line__ex-boss">
                      <label>Rəhbərin adı və əlaqə vasitəsi</label>
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
                      <label>İşə qəbul \ çıxma tarixi</label>
                      <div>
                        <input
                          type="text"
                          {...register("workdate", { required: false })}
                        />
                      </div>
                    </div>
                    <div className="form__experience__input-field__second-line__ex-resign-reason">
                      <label>İşdən çıxma səbəbi</label>
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
                  <h4>7. Sizi tövsiyyə edə biləcək şəxs</h4>
                </div>
                <div className="form__reference-person__input-field d-flex flex-row justify-content-between">
                  <div className="form__reference-person__input-field__name">
                    <label>*Ad</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencename", { required: false })}
                      />
                    </div>
                  </div>
                  <div className="form__reference-person__input-field__surname">
                    <label>*Soyad</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencelastname", { required: false })}
                      />
                    </div>
                  </div>
                  <div className="form__reference-person__input-field__acquaintance-degree">
                    <label>*Tanışlıq dərəcəsi</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencerelationsipdegree", {
                          required: false,
                        })}
                      />
                    </div>
                  </div>
                  <div className="form__reference-person__input-field__number">
                    <label>*Əlaqə nömrəsi</label>
                    <div>
                      <input
                        type="text"
                        {...register("referencecontact", {
                          required: false,
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form__btn-send d-flex  justify-content-center align-items-center">
                <button type="submit">Göndər</button>
              </div>
            </div>
          </Container>
        </form>
      </div>
    </>
  );
};

export default Form;
