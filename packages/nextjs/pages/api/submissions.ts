// pages/api/submissions.ts
import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? "";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      // Validate the request body
      const { title, description, githubURL, liveURL, telegramHandle, se2Feedback } = req.body;
      // Add data to the Notion table
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          title: { title: [{ type: "text", text: { content: title } }] },
          description: { rich_text: [{ type: "text", text: { content: description } }] },
          github: { url: githubURL },
          url: { url: liveURL },
          telegram: { rich_text: [{ type: "text", text: { content: telegramHandle } }] },
          feedback: { rich_text: se2Feedback ? [{ type: "text", text: { content: se2Feedback } }] : [] },
          date: { date: { start: new Date().toISOString() } },
        },
      });
      console.log(new Date().toISOString());

      res.status(200).json({ message: "Submission successfully saved to Notion" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong. Please try again" });
    }
  }
}
