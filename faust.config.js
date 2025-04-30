import templates from "./src/wp-templates/index.js"; // Explicit .js extension
import possibleTypes from "./possibleTypes.json";
import { setConfig } from "@faustwp/core";

/**
 * @type {import('@faustwp/core').FaustConfig}
 **/
export default setConfig({
  templates,
  possibleTypes,
  wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL, // Add WordPress URL
  apiClientSecret: process.env.FAUSTWP_SECRET_KEY, // Optional, for previews
  revalidate: 900, // 15 minutes revalidation for ISR
});