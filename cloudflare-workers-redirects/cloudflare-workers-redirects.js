
// Copyright softwarerevs.com 2024
// Below is code for a video we made about how to make redirects with Cloudflare Workers.
// See the video below that references this code below:
// https://softwarerevs.com/video-cloudflare-workers-redirects

// NOTE: you only need to change the links inside of the section starting with const redirects = {
// Simply change /first-link/ to the url you like and change huggingface to the link you want to redirect to, and do similarly for the second link
// Then add on whatever links you want to have for the redirects on your site

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url);
    const path = url.pathname;
  
    // Define your redirects here
    const redirects = {

      // re-directing YOUR_DOMAIN/first-link to https://huggingface.co/chat/
      '/first-link': 'https://huggingface.co/chat/',
      
      // re-directing YOUR_DOMAIN/second-link to https://www.gutenberg.org/browse/scores/top
      '/second-link': 'https://www.gutenberg.org/browse/scores/top',
      
      // Add more redirects as needed

    };
  
    // Check if the path exists in the redirects object
    if (redirects[path]) {
      return Response.redirect(redirects[path], 301); // Permanent redirect
    } else {
      // If no redirect is needed, let the request proceed as normal
      return fetch(request);
    }
  }
  
