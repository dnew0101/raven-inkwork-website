import Link from 'next/link'
import { Url } from 'url'
type ButtonProps = {
    innerText: string,
    route: string
    }

const Button = ({ innerText, route }: ButtonProps) => {
  return (
    <>
        <Link 
            href={route} 
            className='flex border-2 border-white bg-white text-black p-2 rounded-lg h-12 w-[70%] sm:w-[40%] md:w-[70%] lg:w-[50%] 
            items-center justify-center hover:bg-black hover:text-white transition-all duration-500'>
                {innerText}
        </Link>
    </>
  )
}

export default Button