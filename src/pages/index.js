
export default function HomePage({ pageProps }) {

  const avatarPlaceHolder = (<div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
    <span className="text-3xl">K</span>
  </div>
</div>
)




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
                  <div className="md:mx-6 md:p-12">

                  </div>
                </div>
                {/* Right column container */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none p-12">

                  <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                      {/* Phone content*/}
                      <div className="artboard artboard-demo phone-1">
                        {avatarPlaceHolder}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
