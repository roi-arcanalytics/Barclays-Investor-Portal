# Deployment Guide

## Overview

This document provides instructions for deploying the Structured Finance Portfolio Monitoring Dashboard to various hosting platforms.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Environment Variables

Copy the `.env.example` file to `.env` and configure the following variables:

```
# Set to "false" for production deployments
VITE_TEMPO=false

# Supabase configuration (if using Supabase)
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Base path for deployment (if not at root)
# VITE_BASE_PATH=/your-base-path
```

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Create a new project in Vercel and connect it to your repository
3. Configure the following settings:
   - Build Command: `npm run build:vercel`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Add your environment variables in the Vercel project settings
5. Deploy

The included `vercel.json` file configures proper routing for the SPA.

## Deployment to Netlify

1. Push your code to a Git repository
2. Create a new site in Netlify and connect it to your repository
3. Configure the following settings:
   - Build Command: `npm run build:vercel`
   - Publish Directory: `dist`
4. Add your environment variables in the Netlify site settings
5. Create a `_redirects` file in the `public` directory with the following content:
   ```
   /* /index.html 200
   ```

## Deployment to GitHub Pages

1. Set the `VITE_BASE_PATH` environment variable to your repository name (e.g., `/your-repo-name`)
2. Run `npm run build:vercel`
3. Deploy the `dist` directory to GitHub Pages

## Troubleshooting

### Common Issues

1. **Routing Issues**: If you encounter 404 errors on page refresh, ensure your hosting platform is configured to serve the `index.html` file for all routes.

2. **Environment Variables**: Make sure all required environment variables are properly set in your hosting platform's configuration.

3. **Build Failures**: If the build fails, check the build logs for specific errors. You may need to adjust the Node.js version or install additional dependencies.

### Support

For additional help, please refer to the project documentation or contact the development team.
