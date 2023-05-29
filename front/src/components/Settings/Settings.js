/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleForm, setConnectedUser } from 'src/actions/actions';

import settingsIcon from 'src/assets/icons/settingsIcon.svg';
import axios from 'axios';

function Settings() {
  const isOpen = useSelector((state) => state.isOpen);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handelSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/login', {
      email: email,
      password: password,
    })
      .then((res) => {
        dispatch(setConnectedUser(res.data));
        dispatch(toggleForm());
      })
      .catch(() => {
        alert('Mauvais email/password');
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center sm:py-12 absolute top-0 ">
      <div className={`relative py-3 sm:max-w-xl sm:mx-auto max-h-screen ${!isOpen ? 'hidden' : ''}`}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        />
        <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <button
            type="button"
            className="absolute top-5 right-5 w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center "
            onClick={() => dispatch(toggleForm())}
          >
            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handelSubmit}
                className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                </div>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Mot de passe"
                  />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mot de passe</label>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                  >Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`absolute top-2 w-32 rounded bg-blue-500 text-white flex justify-center items-center
          ${isOpen ? 'hidden' : ''}
        `}
        onClick={() => dispatch(toggleForm())}
      >Connexion
        <img className="w-7 h-7 ml-1" src={settingsIcon} alt="Icone des paramètres" />
      </button>

    </div>
  );
}

export default Settings;
