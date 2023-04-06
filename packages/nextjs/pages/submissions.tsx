import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { useAccount, useSignMessage } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

interface SubmissionData {
  title?: string;
  description?: string;
  githubURL?: string;
  liveURL?: string;
  videoURL?: string;
  telegramHandle?: string;
  se2Feedback?: string;
}

const emtpyData = {
  title: "",
  description: "",
  githubURL: "",
  liveURL: "",
  videoURL: "",
  telegramHandle: "",
  se2Feedback: "",
};

const messagetToSign = "I want to submit my SE-2 Hackathon project as ";

const Submissions: NextPage = () => {
  const [formData, setFormData] = useState(emtpyData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<SubmissionData>({});
  const { address, isConnected } = useAccount();

  const { signMessage } = useSignMessage({
    async onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      console.log("Signed!", data, variables);
      try {
        const payload = {
          ...formData,
          address,
          signature: data,
        };
        const response = await fetch("/api/submissions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.status === 200) {
          notification.success(<span className="font-bold">Submission received! 🎉</span>);
          setFormData(emtpyData);
          setIsSubmitted(true);
        } else {
          notification.error(
            <>
              <span className="font-bold">Server Error.</span>
              <br />
              Something went wrong. Please try again
            </>,
          );
        }
      } catch (error) {
        console.error(error);
        notification.error(
          <>
            <span className="font-bold">Server Error.</span>
            <br />
            Something went wrong. Please try again
          </>,
        );
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      signMessage({ message: `${messagetToSign}${address}` });
    } else {
      setErrors(validationErrors);
      setIsSubmitting(false);
    }
  };

  const validateForm = (formData: SubmissionData) => {
    const errors: SubmissionData = {};
    const urlRegex = /^(http|https):\/\/[^ "]+$/;

    if (!formData.title) errors.title = "Project title is required";
    if (!formData.description) errors.description = "Short description is required";
    if (!formData.githubURL || !urlRegex.test(formData.githubURL)) errors.githubURL = "Valid URL is required";
    if (!formData.liveURL || !urlRegex.test(formData.liveURL)) errors.liveURL = "Valid URL is required";
    if (!formData.videoURL || !urlRegex.test(formData.videoURL)) errors.videoURL = "Valid URL is required";
    if (!formData.telegramHandle) errors.telegramHandle = "Telegram handle is required";

    return errors;
  };

  return (
    <>
      <Head>
        <title>SE-2 Hackathon</title>
        <meta name="description" content="Submit your SE-2 Hackathon project." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet" />
        <meta property="og:title" content="SE-2 Hackathon" />
        <meta property="og:description" content="Submit your SE-2 Hackathon project." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://hackathon.buidlguidl.com/thumbnail.png" />
        <meta property="twitter:image" content="https://hackathon.buidlguidl.com/thumbnail.png" />
      </Head>

      <div className="flex items-center flex-col flex-grow z-10 mb-20">
        <div className="mt-10 px-8">
          <p className="text-lg md:text-3xl font-archivo-black mb-1">Scaffold-Eth-2</p>
          <Image src="/assets/hackathon.svg" alt="hackathon" width="500" height="60" />
          <p className="text-right text-lg md:text-xl font-archivo-black mt-1">March 27 - April 8, 2023</p>
        </div>

        <div className="md:max-w-lg mt-10 px-8">
          <div className="flex flex-col">
            <p className="m-0 text-center text-4xl font-archivo-black text-white drop-shadow-xl">Project Submission</p>
          </div>
        </div>

        <div className="card  max-w-[90%] md:max-w-lg w-full bg-base-100 shadow-xl mt-10">
          <div className="card-body">
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="flex flex-col relative">
                    <label className="font-bold" htmlFor="title">
                      Project title <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="input border-secondary mt-2 mb-6"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                    {errors.title && <div className="text-error absolute right-0 bottom-0 text-sm">{errors.title}</div>}
                  </div>

                  <div className="flex flex-col relative">
                    <label className="font-bold" htmlFor="description">
                      Short description <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="input border-secondary mt-2 mb-6 h-auto textarea"
                      rows={3}
                    />
                    {errors.description && (
                      <div className="text-error absolute right-0 bottom-0 text-sm">{errors.description}</div>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <label className="font-bold" htmlFor="githubURL">
                      Github URL <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="githubURL"
                      className="input border-secondary mt-2 mb-6"
                      name="githubURL"
                      value={formData.githubURL}
                      onChange={handleChange}
                    />
                    {errors.githubURL && (
                      <div className="text-error absolute right-0 bottom-0 text-sm">{errors.githubURL}</div>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <label className="font-bold" htmlFor="liveURL">
                      Live URL <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="liveURL"
                      name="liveURL"
                      className="input border-secondary mt-2 mb-6"
                      value={formData.liveURL}
                      onChange={handleChange}
                    />
                    {errors.liveURL && (
                      <div className="text-error absolute right-0 bottom-0 text-sm">{errors.liveURL}</div>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <label className="font-bold" htmlFor="videoURL">
                      Video URL <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="videoURL"
                      name="videoURL"
                      className="input border-secondary mt-2 mb-6"
                      value={formData.videoURL}
                      onChange={handleChange}
                    />
                    {errors.videoURL && (
                      <div className="text-error absolute right-0 bottom-0 text-sm">{errors.videoURL}</div>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <label className="font-bold" htmlFor="telegramHandle">
                      Telegram handle <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="telegramHandle"
                      name="telegramHandle"
                      className="input border-secondary mt-2 mb-6"
                      value={formData.telegramHandle}
                      onChange={handleChange}
                    />
                    {errors.telegramHandle && (
                      <div className="text-error absolute right-0 bottom-0 text-sm">{errors.telegramHandle}</div>
                    )}
                  </div>

                  <div className="flex flex-col relative">
                    <label className="font-bold" htmlFor="se2Feedback">
                      SE-2 Feedback:
                    </label>
                    <textarea
                      id="se2Feedback"
                      name="se2Feedback"
                      className="input border-secondary mt-2 mb-6 h-auto textarea"
                      onChange={handleChange}
                      rows={3}
                    />
                    {errors.se2Feedback && (
                      <div className="text-error absolute right-0 bottom-0 text-sm">{errors.se2Feedback}</div>
                    )}
                  </div>
                  {isConnected ? (
                    <button type="submit" className={`btn btn-primary ${isSubmitting ? "loading" : ""}`}>
                      Submit
                    </button>
                  ) : (
                    <RainbowKitCustomConnectButton />
                  )}
                </form>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <p className="text-2xl font-archivo-black">Thank you for submitting your project!</p>
                  <p className="text-xl">We will announce the results soon.</p>
                </div>
              )}
            </div>
          </div>
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

export default Submissions;
