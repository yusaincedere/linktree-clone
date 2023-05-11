import { useState } from 'react';
import logo from '../../../public/images/icon.svg'
import background from '../../../public/images/login-bg.png'
import { useRouter } from 'next/router';
export default function LoginPage(props) {
  const [userName, setUserName] = useState();
  const [sesEmail, setSesEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();


  const sendForgotPaswordEmail = async (e) => {
    //aws ses operation ses(sesEmail);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      userName: userName,
      password: password,
    }
    try {
      const response = await fetch('/api/users/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        setUserName('');
        setPassword('');
        setErrorMessage('');
        props.handleLogin(user);
      } else {
        // handle error response
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      // handle network error
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="relative mb-4" data-te-input-wrapper-init>
            <label
              htmlFor="exampleFormControlInput1"
            >Email
            </label>
            <input
              type="text"
              onChange={(e) => setSesEmail(e.target.value)}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-2"
              id="exampleFormControlInput1"
              placeholder="email" />
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={sendForgotPaswordEmail}
            >
              Send
            </button>
          </div>
        </label>
      </label>
      <div className="h-full p-10">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div
              className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-6">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src={logo.src}
                        alt="logo" />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Log in to your Linktree
                      </h4>
                      {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                    </div>
                    <form onSubmit={handleSubmit}>

                      {/* User name input*/}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label
                          htmlFor="exampleFormControlInput1"
                        >Username
                        </label>
                        <input
                          type="text"
                          onChange={(e) => setUserName(e.target.value)}
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-2"
                          id="exampleFormControlInput1"
                          placeholder="Username" />

                      </div>

                      {/* password  input*/}
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label
                          htmlFor="exampleFormControlInput11"
                        >Password
                        </label>
                        <input
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border-2"
                          id="exampleFormControlInput11"
                          placeholder="Password" />

                      </div>
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="bg-white-500 rounded border-2 border-danger mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs  font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          style={{
                            background: "linear-gradient(toRight, #ee7724, #d8363a, #dd3675, #b44593)"
                          }}>
                          Log in
                        </button>

                        {/* Forgot password link*/}
                        <label htmlFor="my-modal-4" >Forgot password?</label>
                      </div>

                      {/* Register button*/}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          onClick={() => {
                            router.push('/register')
                          }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Right column container with background and description*/}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{ backgroundSize: "contain", backgroundImage: `url(${background.src})` }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
