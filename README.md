## Pre-requisites

1. Add `REACT_APP_CHATBOT_API_URL={{your Haystack REST API server url}}` in the `.env` or environment variable. (See `.env.example`.)
2. Make sure your Haystack REST API server is running on the same url.

## How to run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the application:
   ```bash
   npm start
   ```
3. Go to `/upload` url and upload your knowledge-base in a .txt format file
4. Now you can go to `/chatbot-ui` and chat with the bot about your knowledge-base.