import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../../api/api-actions';
import { changeCity } from '../../../store/action';
import { AppRoute } from '../../../const';

import Header from '../../header/header';


function LoginPage() {
  const dispatch = useDispatch();
  const formNode = useRef('');

  const onSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = formNode.current;
    dispatch(login({
      email: email.value,
      password: password.value,
    }));
  };

  const onPasswordInput = (evt) => evt.target.value = evt.target.value.replace(/\s/g, '');

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" ref={formNode} onSubmit={onSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)+([a-z]{2,18})$" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" onInput={onPasswordInput} type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" onClick={({ target }) => dispatch(changeCity(target.textContent))} to={AppRoute.ROOT}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
