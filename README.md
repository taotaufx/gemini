# Gemini Proxy API

This is a simple Vercel Serverless function to call Google Gemini API.

## How to use

1. Fork this repo to your GitHub account.
2. Connect it to Vercel (Import Project).
3. Set Environment Variable `GEMINI_API_KEY`.
4. Deploy.

POST to `/api/gemini` with JSON body:
```json
{ "prompt": "your question here" }
```

You will get Gemini's response back.
