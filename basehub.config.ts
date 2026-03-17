import { setGlobalConfig } from 'basehub';

// Configure BaseHub CMS for blog content management
// Ensure BASEHUB_API_KEY is set in your .env.local file
setGlobalConfig({
  // API key is automatically picked up from environment variables
  // BASEHUB_API_KEY should be set in .env.local
});
