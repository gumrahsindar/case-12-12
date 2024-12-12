import type { TCat } from '~/lib/types'

export default defineEventHandler(async () => {
  try {
    const catApi = useRuntimeConfig().catApiKey
    const data: TCat[] = await $fetch(
      'https://api.thecatapi.com/v1/images/search?order=RAND',
      {
        headers: {
          'x-api-key': catApi,
        },
      }
    )

    return data[0].url
  } catch (error) {
    console.error('Error fetching cat image:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch cat image',
    })
  }
})
