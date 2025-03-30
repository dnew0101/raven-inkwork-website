import Webform from "../../components/Web-Form/Webform";

function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <header className="flex flex-row w-full justify-center mt-[5vh] mb-[6vh]  text-center">
        <h1 className="text-5xl sm:text-7xl">Inquiry Form</h1>
      </header>
      <Webform />
      <p className='text-white text-center mt-6 w-[80%]'>
        <strong><em>*Pssst!*</em></strong> If your looking to book a <strong className="text-indigo-400">tattoo appointment</strong>, please visit the booking form by visiting <a href="https://form.jotform.com/240391381273050" className="underline text-indigo-400" aria-label="Link to Tattoo Booking Form; external link to JotForm">Tattoo Booking Form</a> instead.
      </p>
    </div>
  )
}

export default ContactPage;