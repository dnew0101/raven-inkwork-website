import Link from 'next/link'
type ButtonProps = {
    innerText: string,
    route: string
    }

const Button = ({ innerText, route }: ButtonProps) => {
  return (
    <>
        <Link 
            href={route} 
            className='flex border-2 border-white bg-white text-black p-2 rounded-lg h-12 w-[70%] sm:w-[40%] md:w-[55%] lg:w-[50%] 
            items-center justify-center hover:bg-black hover:text-white hover:w-[75%] hover:sm:w-[45%] hover:md:w-[60%] hover:lg:w-[55%] 
            hover:rounded-xl transition-all duration-500'>
                {innerText}
        </Link>
    </>
  )
}

export default Button