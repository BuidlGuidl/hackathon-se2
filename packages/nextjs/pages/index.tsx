import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SE-2 Hackathon</title>
        <meta name="description" content="Join the SE-2 Hackathon by the BuidlGuidl" />
      </Head>

      <div className="flex items-center flex-col flex-grow z-10 mb-20">
        <div>
          <p className="text-xl font-extrabold">Scaffold-Eth-2</p>
          <Image src="/assets/hackathon.svg" alt="hackathon" width="500" height="60" />
          <p className="text-right text-xl font-extrabold">April 3-8, 2023</p>
        </div>

        <div className="max-w-lg">
          <p className="text-center text-base font-extrabold text-white">
            TL;DR: Use <a href="https://github.com/scaffold-eth/se-2">SE2</a> to build something cool and win some ETH!
          </p>
        </div>

        <div className="card max-w-lg w-full bg-base-100 shadow-xl mt-10">
          <div className="card-body">
            <p>🧙 Anyone can participate!</p>
            <p>🔥 Get started whenever you want!</p>
            <p>🧑‍🔬 Focus in on the fullstack capabilties of 🏗 Scaffold-Eth-2</p>
            <p>⚙️ This is a great opportunity to build a prototype that needs both smart contracts and a frontend.</p>

            <p>😎 No pressure, try to build a two-day prototype sometime throughout the week.</p>
            <p>🎥 Create a 2 minute video that shows off your app and put it at the top of the README.md</p>
            <p>
              📥 Project Submissions will open <b>April 8th</b>!
            </p>

            <button
              className="btn"
              onClick={() => {
                window.location.href = "https://github.com/scaffold-eth/se-2";
              }}
            >
              🚀 Fork the repo
            </button>
            <button className="btn btn-primary">💬 Join the Telegram Group</button>
            <button disabled={true} className="btn btn-primary">
              📦 Submit your Repo
            </button>
          </div>
        </div>

        <div>
          <Image src="/assets/prizes.svg" alt="prizes" width="200" height="45" className="my-10" />
        </div>

        <div className="card max-w-lg w-full bg-base-100 shadow-xl mt-10 ">
          <div className="card-body">
            <h1 className="flex justify-center text-3xl font-semibold "> 10 ETH </h1>
          </div>
        </div>

        <div className="max-w-lg">
          <p className="text-center text-base font-extrabold text-white">sponsored by</p>
        </div>

        <div className="content-center my-9">
          <Image src="/assets/bg.svg" alt="hackathon" width="200" height="45" className="my-10" />
        </div>
      </div>
      <div className="fixed inset-0">
        <div className="bg-[url('/assets/crane.svg')] w-full h-full bg-no-repeat bg-[length:130px] md:bg-[length:430px] absolute bg-[right_-1rem_bottom_-2rem] bg-right-bottom z-0" />
        <div className="bg-[url('/assets/eth.svg')] w-full h-full bg-no-repeat bg-[length:70px] md:bg-[length:250px] absolute bg-[left_1rem_bottom_2rem]" />
      </div>
    </>
  );
};

export default Home;
