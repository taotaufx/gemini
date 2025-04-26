# Vercel Gemini Proxy API

A minimal Vercel Serverless function to securely call Google Gemini API.

## Setup

1. Fork or clone this repository.
2. Connect to Vercel via the dashboard.
3. Add an Environment Variable on Vercel:
   - **Key**: GEMINI_API_KEY
   - **Value**: Your real Gemini API key
4. Deploy (Vercel will auto-build and deploy the function).

## Usage

Send a POST request to:

```
https://<your-vercel-project>.vercel.app/api/gemini
```

with JSON body:
```json
{ "prompt": "Your question here" }
```

## No Static Files

This repository only contains a serverless function. There is no static output directory.
