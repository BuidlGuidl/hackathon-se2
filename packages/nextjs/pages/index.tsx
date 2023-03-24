import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SE-2 Hackathon</title>
        <meta name="description" content="Join the SE-2 Hackathon by the BuidlGuidl. April 3-8, 2023." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
        <meta property="og:title" content="SE-2 Hackathon" />
        <meta property="og:description" content="Join the SE-2 Hackathon by the BuidlGuidl. April 3-8, 2023." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="twitter:image" content="/thumbnail.png" />
      </Head>

      <div className="flex items-center flex-col flex-grow z-10 mb-20">
        <div className="mt-10 px-8">
          <p className="text-lg md:text-3xl font-archivo-black mb-1">Scaffold-Eth-2</p>
          <Image src="/assets/hackathon.svg" alt="hackathon" width="500" height="60" />
          <p className="text-right text-lg md:text-xl font-archivo-black mt-1">April 3-8, 2023</p>
        </div>

        <div className="md:max-w-lg mt-10 px-8">
          <div className="flex flex-col">
            <p className="m-0 text-center text-2xl font-archivo-black text-white drop-shadow-xl">TL;DR</p>
            <p className="m-0 text-center text-white drop-shadow-xl">
              Use{" "}
              <a className="link" href="https://github.com/scaffold-eth/se-2" target="_blank" rel="noopener noreferrer">
                SE2
              </a>{" "}
              to build something cool and win some ETH!
            </p>
          </div>
        </div>

        <div className="card  max-w-[90%] md:max-w-lg w-full bg-base-100 shadow-xl mt-10">
          <div className="card-body">
            <p>🧙 Anyone can participate!</p>
            <p>🔥 Get started whenever you want!</p>
            <p>🧑‍🔬 Focus in on the fullstack capabilties of 🏗 Scaffold-Eth-2!</p>
            <p>⚙️ This is a great opportunity to build a prototype that needs both smart contracts and a frontend.</p>
            <p>😎 No pressure, try to build a two-day prototype sometime throughout the week (April 3-8, 2023).</p>
            <p>🎥 Create a 2 minute video that shows off your app and put it at the top of the README.md.</p>
            <p>💡 Example idea: build a splitter app that works with all wallets and give it away for free!</p>
            <p>🧌 Hack solo, bring a crew, or find a friend in the telegram.</p>
            <p>
              📥 Project Submissions will open <b>April 8th</b>!
            </p>

            <a href="https://github.com/scaffold-eth/se-2" target="_blank" rel="noopener noreferrer">
              <button className="btn w-full">🚀 Fork the Repo</button>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary w-full">💬 Join the Telegram Group</button>
            </a>
            <button disabled={true} className="btn btn-primary">
              📦 Submit your Repo and Live App URL
            </button>
          </div>
        </div>

        <div>
          <Image src="/assets/prizes.svg" alt="prizes" width="200" height="45" className="my-10" />
        </div>

        <div className="card max-w-[90%] md:max-w-lg w-full bg-base-100 shadow-xl mt-10 ">
          <div className="card-body">
            <span className="flex justify-center text-xs opacity-70">minimum</span>
            <span className="flex justify-center text-3xl font-semibold "> 10 ETH </span>
            <span className="flex justify-center text-xs opacity-70">distributed by committee</span>
          </div>
        </div>

        <div className="max-w-lg mt-10">
          <p className="text-center text-base font-extrabold text-white">sponsored by</p>
        </div>

        <div className="content-center">
          <Image src="/assets/bg.svg" alt="hackathon" width="200" height="45" />
        </div>
      </div>
      <div className="fixed inset-0">
        <div className="bg-[url('/assets/clouds.svg')] w-full h-full bg-no-repeat bg-[length:500px] md:bg-[length:1200px] absolute bg-[top_9rem_center] z-0 opacity-40" />
        <div className="bg-[url('/assets/crane.svg')] w-full h-full bg-no-repeat bg-[length:130px] md:bg-[length:430px] absolute bg-[right_-1rem_bottom_-2rem] z-0" />
        <div className="bg-[url('/assets/eth.svg')] w-full h-full bg-no-repeat bg-[length:70px] md:bg-[length:250px] absolute bg-[left_1rem_bottom_2rem]" />
      </div>
    </>
  );
};

export default Home;
