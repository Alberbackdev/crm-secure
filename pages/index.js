import { Inter } from 'next/font/google'
import ButonSession from '../components/login'
import Nav from '../components/Nav'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //const { data: session } = useSession()

  return (
    <div className='bg-blue-900 min-h-screen flex'>
      <Nav />
      <ButonSession />
    </div>
    
  )
}
