import Webform from "../../components/Web-Form/Webform";

function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <header className="flex flex-row w-full justify-center mt-[5vh] mb-[6vh]  text-center">
        <h1 className="text-5xl sm:text-7xl">Inquiry Form</h1>
      </header>
      <Webform />
      <p className='text-white text-center mt-6 w-[80%]'>
        <strong className="px-2 flex items-center justify-center">
          <span className="absolute bg-gradient-to-r from-purple-600 to-pink-500 w-[120px] h-[8px] blur-md" />
          <em className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent font-semibold">*Pssst!*</em>
        </strong> 
        
        <br />
        If your looking to book a <span className="text-purple-400">tattoo appointment</span>, please visit the <a href="https://form.jotform.com/240391381273050" className="underline text-purple-400 font-medium hover:text-purple-200 hover:tracking-wide transition-all ease-in-out duration-300" aria-label="Link to Tattoo Booking Form; external link to JotForm">tattoo booking form</a> instead.
      </p>
    </div>
  )
}

export default ContactPage;