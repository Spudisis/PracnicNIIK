import s from "./authorization.module.css";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import { NavLink,Link, Navigate } from "react-router-dom";
import {useState} from "react";
import {connect} from "react-redux";
import {login} from '../../auth.action'

const Authorization = ({login, isAuthenticated})=> {
    const[formData, setFormData]=useState({
      email: "",
      password: ""
    });
    const {email, password} = formData;
    const onChange = e => setFormData({... formData,[e.target.name]:e.target.value});
    const onSubmit = e =>{
      e.preventDefault();
      login(email,password);
    };

    if (isAuthenticated){
      return <Navigate to="/" />;
    }
  
=======
import { NavLink, Routes, Route } from "react-router-dom";
import Changepass from "./change_pass/change_pass";
function Authorization() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
>>>>>>> 36fda3d0c287e943d21eebb22098620819610cfd
  return (
    <div className={s.wrapper}>
      <div className={s.auth}>
        <img src="./img/loginImg.png" alt="niik" />
        <h3>Авторизация</h3>

        <form onSubmit={e=>onSubmit(e)} className={s.form}>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="email">
              E-mail
              <div
                className={`${s.text_field__icon} ${s.text_field__icon_email}`}
              >
                <input
                  className={s.text_field__input}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={e=>onChange(e)}
                  required
                />
              </div>
            </label>
          </div>
          <div className={s.block}>
            <label className={s.text_field__label} htmlFor="password">
              Пароль
            </label>
            <div
              className={`${s.text_field__icon} ${s.text_field__icon_password}`}
            >
              <input
                className={s.text_field__input}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={e=>onChange(e)}
                minLength='6'
                required
              />
            </div>
            <NavLink to="./change_password" className={s.changePass}>
              Забыли пароль?
            </NavLink>
          </div>
          <label htmlFor="buttonAuth" className={s.join}>
            Войти
          </label>

          <button type="submit" id="buttonAuth" className={s.hideButton}>

          </button>
          
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{login})(Authorization);
