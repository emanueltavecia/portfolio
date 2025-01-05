export async function POST(req: Request) {
  try {
    const formData = await req.json()

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        access_key: process.env.CONTACT_FORM_KEY,
      }),
    })

    const result = await response.json()

    if (!result?.success) {
      throw new Error(result?.message)
    }

    return Response.json({ success: true })
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({
        message: 'Something went wrong',
        error: error instanceof Error ? error?.message : 'Unknown error',
      }),
      { status: 500 },
    )
  }
}
