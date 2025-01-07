const fs = require("fs");
const path = require("path");
const multer = require("multer");
const express = require("express");
const Tesseract = require("tesseract.js");
const axios = require("axios");
const router = express.Router();

// OpenAI API Key and Base URL
const OPENAI_API_KEY = "";

const OPENAI_BASE_URL = "https://api.openai.com/v1";

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../uploads/");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single("expenseImage");

router.post("/upload", async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const filePath = req.file.path;

      // Perform OCR on the uploaded image
      console.log("Performing OCR...");
      const {
        data: { text },
      } = await Tesseract.recognize(filePath, "eng", {
        logger: (info) => console.log(info),
      });

      console.log("OCR Text Extracted:", text);

      // Use Axios to call OpenAI API directly
      console.log("Parsing text with OpenAI...");
      const response = await axios.post(
        `${OPENAI_BASE_URL}/chat/completions`,
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: `You are an intelligent system that reads text and convert information. Given the content of a receipt, perform the following tasks:
                    
                    1. Identify the name of the receipt, choosing a suitable name based on the parsed information. For example, use the store name or a descriptive term.
                    2. Provide a short, suitable description of the receipt, summarizing its context or the main purchase.
                    3. Extract the total amount from the receipt and display it as a numerical value.
                    4. Categorize the receipt into one of the following categories based on the items or context: "Food & Drink", "Shopping", "Entertainment", "Home", or "Transportation".
                    If you think, none of these fits well, then consider "Others" as an option.
                    6. Read the date from the bill, if it exist else return empty string.
                    5. Ensure the output is in JSON format with the following structure, STRICLTY:

                        {
                          "Name": "string",
                          "Description": "string",
                          "Total Amount": "number",
                          "Category": "string",
                          "Date": "string"
                        }
                    
                      If any information is unavailable, use "Unavailable".
`,
            },
            {
              role: "user",
              content: `:\n\n${text}`,
            },
          ],
          temperature: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const parsedData = response.data.choices[0].message.content.trim();

      // Return extracted and parsed data
      res.status(200).json({
        message: "File uploaded and processed successfully",
        extractedText: text,
        parsedData: JSON.parse(parsedData),
      });
    } catch (error) {
      console.error(
        "Error processing image:",
        error.response?.data || error.message
      );
      res.status(500).json({ error: "Error processing the image" });
    }
  });
});

module.exports = router;
