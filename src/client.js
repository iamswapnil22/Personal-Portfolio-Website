import {createClient} from '@sanity/client'

import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
  projectId: 'glmjum66',
  dataset: 'pportfolio',
  apiVersion: '2023-08-05',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);