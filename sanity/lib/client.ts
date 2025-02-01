import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // token: 'skyfh5u6RWlMCHwckQKbql5pnrw3BXoHDhwBEbHjSszQtUMyg1RjvlyFZJMXfIkwPfkOwQKEV1Jk55OcA7LAUF28yL8WoP8xyQRkEqb8F4d0TH93a2TIThOvoTLc0dTT4IIuzHhiv1DxrpP4lgTSpK4ehGOtDH5AU05vparqyZwI53ossnL5',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
