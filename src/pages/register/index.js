import { useRouter } from 'next/router';
import { useState } from 'react';
import logo from '../../../public/images/icon.svg'
import background from '../../../public/images/register-bg.png'
export default function LoginPage({ pageProps }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [photoUrl, setPhotoUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName,
          password,
          photoUrl,
        })
      });
      if (response.ok) {
        // post created successfully
        setUserName('');
        setPassword('');
        setPhotoUrl('')
        setErrorMessage('');
        router.push('/');
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
                      <h4 className="mb-2 mt-1 pb-1 text-xl font-semibold">
                        Create your account
                      </h4>
                      <p className="mb-4">Choose your Linktree username. You can always change it later.</p>
                      {errorMessage && <p className='text-danger'>{errorMessage}</p>}
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
                      {/* Register button*/}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="submit"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          data-te-ripple-init
                          data-te-ripple-color="light">
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
