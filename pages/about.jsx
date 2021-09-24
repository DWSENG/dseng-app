import { getSession } from 'next-auth/react'

export default function About() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1>about</h1>
    </div>
  )
}

export async function getServerSideProps({ params, req, res }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/landing',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
