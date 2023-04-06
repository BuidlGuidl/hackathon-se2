// pages/api/submissions.ts
import { Client } from "@notionhq/client";
import { verifyMessage } from "ethers/lib/utils";
import { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

const messagetToSign = "I want to submit my SE-2 Hackathon project as ";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Validate the request body
      const { title, description, githubURL, liveURL, videoURL, telegramHandle, se2Feedback, address, signature } =
        req.body;

      const verifiedAddress = verifyMessage(messagetToSign + address, signature);

      if (verifiedAddress !== address) {
        console.error("verifiedAddress error", verifiedAddress, address);
        res.status(401).json({ message: "Invalid signature" });
      }

      // Add data to the Notion table
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          title: { title: [{ type: "text", text: { content: title } }] },
          description: { rich_text: [{ type: "text", text: { content: description } }] },
          github: { url: githubURL },
          url: { url: liveURL },
          video: { url: videoURL },
          telegram: { rich_text: [{ type: "text", text: { content: telegramHandle } }] },
          signerAddress: { rich_text: [{ type: "text", text: { content: verifiedAddress } }] },
          feedback: { rich_text: se2Feedback ? [{ type: "text", text: { content: se2Feedback } }] : [] },
          date: { date: { start: new Date().toISOString() } },
        },
      });

      res.status(200).json({ message: "Submission successfully saved" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong. Please try again" });
    }
  }
}
