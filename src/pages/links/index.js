import { Fragment, useState } from 'react'
import { TrashIcon } from '@heroicons/react/solid'
export default function HomePage({ pageProps }) {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [myLinkList, setMyLinkList] = useState([]);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [platform, setPlatform] = useState('');

  const avatarPlaceHolder = (<div className="avatar placeholder">
    <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
      <span className="text-3xl">K</span>
    </div>
  </div>
  )

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

  const saveLink = (e) => {
    e.preventDefault();
    const tempLink = {
      title: title,
      url: link,
      platform: platform
    }
    // tempLink aws ye gönderilir başarılıysa tabloya ekler
    const tempLinkList = [...myLinkList, tempLink]
    setMyLinkList(tempLinkList);
  }

  const deleteLink = (link) =>{
    const tempList = myLinkList.filter(item => link.url!==item.url);
    setMyLinkList(tempList);
  }
  const handleCheckboxChange = (event) => {
    setIsSelectVisible(event.target.checked);
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
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
                <div className="overflow-x-auto">
                  <table className="table w-full">
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
                      {myLinkList.map((link) => (
                        <tr key={link.url}>
                          <td></td>
                          <td>{link.title}</td>
                          <td>{link.url}</td>
                          <td>{link.platform}</td>
                          <td>
                            <button 
                            onClick={()=>deleteLink(link)}
                            className="btn btn-ghost btn-square">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
