import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SE-2 Hackathon</title>
        <meta name="description" content="Come and join the SE-2 Hackathon by the BuidlGuidl" />
      </Head>

      <div className="flex items-center flex-col flex-grow z-10 mb-20">
        <Image src="/assets/bg.svg" alt="hackathon" width="200" height="45" className="my-10" />
        <div>
          <p className="text-xl">Scaffold-Eth-2</p>
          <Image src="/assets/hackathon.svg" alt="hackathon" width="500" height="60" />
          <p className="text-right text-xl">April 3-8, 2023</p>
        </div>

        <div className="max-w-lg">
          <p className="text-center text-lg">
            Some lead text. Some lead text. Some lead text. Some lead text. Some lead text. Some lead text. Some lead
            text. Some lead text. Some lead text. Some lead text.
          </p>
        </div>

        <div className="card max-w-lg w-full bg-base-100 shadow-xl mt-10">
          <div className="card-body">
            <h2 className="card-title justify-center">Hackathon details</h2>
            <p>The description of the hackathon, sponsors, prices, rules whatever</p>
            <ul className="list-disc list-inside">
              <li>
                Item n1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien et dapibus
                laoreet.
              </li>
              <li>
                Item n2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien et dapibus
                laoreet.
              </li>
              <li>
                Item n3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien et dapibus
                laoreet.
              </li>
              <li>
                Item n4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere sapien et dapibus
                laoreet.
              </li>
            </ul>
            <p>More stuff here.</p>
            <button className="btn btn-primary">Join the Telegram Group</button>
          </div>
        </div>
        <div>
          <Image src="/assets/prizes.svg" alt="prizes" width="200" height="45" className="my-10" />
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
