/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}

// FIX: This function tells Next.js which paths to generate for the dynamic route.
// Without it, the build process fails.
export async function generateStaticParams() {
  // In a real application, you would typically fetch a list of slugs from your Sanity API.
  // For this fix, we are hardcoding a path that is likely used for the Studio.
  const paths = [
    { tool: ['studio'] }
  ];

  return paths;
}