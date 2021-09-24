import axios from 'axios'

export default function App({ message }) {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1>hello from client</h1>
      <h2>{message}</h2>
    </div>
  )
}

export async function getServerSideProps({ params, req, res }) {
  const { data } = await axios.get('http://localhost:3000/api/hi')
  const { message } = data
  return {
    props: { message },
  }
}
