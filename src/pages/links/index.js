import { Fragment, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router';
export default function HomePage({ pageProps }) {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [myLinkList, setMyLinkList] = useState([]);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [platform, setPlatform] = useState('');
  const userName = useRef("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const getMyLinks = async () => {
    let requestUser = {
      userName: userName.current
    }
    try {
      const userResponse = await fetch('/api/users/getUserByUserName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestUser)
      })
      if (userResponse) {
        let user = await userResponse.json();
        let requestLink = {
          userId: user.id
        }
        const linkResponse = await fetch('/api/links/getLinksByUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestLink)
        });
        if (linkResponse.ok) {
          let response = await linkResponse.json();
          setMyLinkList(response.links);
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorVisible(true);
      console.log(error);
    }
  }

  const saveLink = async (e) => {
    e.preventDefault();
    let requestUser = {
      userName: userName.current
    }
    let tempLink = {
      title: title,
      url: link,
      platform: platform
    }
    try {
      const userResponse = await fetch('/api/users/getUserByUserName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestUser)
      });
      if (userResponse) {
        let user = await userResponse.json();
        let requestCreateLink = {
          userId: user.id,
          linkData: tempLink
        }
        const createResponse = await fetch('/api/links/createLink', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestCreateLink)
        });
        if (createResponse.ok) {
          setMyLinkList((prevLinkList) => [...prevLinkList, tempLink]);
        } else {
          let data = await createResponse.json();
          setIsErrorVisible(true);
          setErrorMessage(data.message);
        }
      }
    } catch (error) {
      setIsErrorVisible(true);
      setErrorMessage(data.message);
      console.log(error)
    }

  }

  useEffect(() => {
    const storedUser = localStorage.getItem('userName');
    if (storedUser) {
      userName.current = localStorage.getItem('userName');
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      userName.current = localStorage.getItem('userName');
    };

    window.addEventListener('storage', handleStorageChange);
    router.events.on('routeChangeStart', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      router.events.off('routeChangeStart', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    getMyLinks();
  }, [])

  const selectPlatformElement = (
    <div>
      <label className="label ml-6">Select Platform</label>
      <select onChange={(e) => setPlatform(e.target.value)} className="select select-bordered mb-6 ml-6  w-60">
        <option>Twitter</option>
        <option>Facebook</option>
        <option>Youtube</option>
        <option>Tiktok</option>
        <option>Twitch</option>
        <option>Discord</option>
      </select></div>
  )



  const deleteLink = (link) => {
    const tempList = myLinkList.filter(item => link.url !== item.url);
    setMyLinkList(tempList);
  }
  const handleCheckboxChange = (event) => {
    setIsSelectVisible(event.target.checked);
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      {isErrorVisible && <div className="alert alert-error shadow-lg mt-10">
        <div>
          <svg
            onClick={() => {
              setIsErrorVisible(false)
            }}
            xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{errorMessage}</span>
        </div>
      </div>}
      <div className="h-full p-10">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div
              className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="overflow-x-auto">
                <form className="form-control w-full max-w-sm">
                  <label className="label ml-6">Title</label>
                  <input onChange={(e) => setTitle(e.target.value)} type="text" className="input w-full max-w-xs ml-6 mb-6 input-bordered" />
                  <label className="label ml-6">Your Link</label>
                  <input onChange={(e) => setLink(e.target.value)} type="text" className="input w-full max-w-xs ml-6 mb-2 input-bordered" />
                  <span className="label-text ml-6 text-right"></span>
                  <input onChange={handleCheckboxChange} type="checkbox" className="toggle toggle-secondary ml-6 mb-2" />
                  {isSelectVisible && selectPlatformElement}
                  <button onClick={saveLink} className="btn btn-secondary ml-6 mb-6 mr-6">Save</button>
                </form>
                <div className="overflow-auto h-96">
                  {myLinkList.length > 0 && <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Platform</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {myLinkList.map((link, index) => (
                        <tr key={link.url}>
                          <td>{index + 1}</td>
                          <td>{link.title}</td>
                          <td>{link.url}</td>
                          <td>{link.platform}</td>
                          <td>
                            <button
                              onClick={() => deleteLink(link)}
                              className="btn btn-ghost btn-square">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
