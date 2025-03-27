import Webform from "../../components/Web-Form/Webform";

function page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto mt-[5vh]">
      <header className="flex flex-row w-full justify-center mt-[5vh] mb-[6vh] text-7xl text-center">Inquiry Form</header>
      <Webform />
      <p className='text-white text-center mt-6 w-[80%]'>
        <strong><em>*Pssst!*</em></strong> If your looking to book a <strong className="text-indigo-400">tattoo appointment</strong>, please visit the booking form by clicking <a href="https://form.jotform.com/240391381273050" className="underline text-indigo-400">here</a> instead.
      </p>
    </div>
  )
}

export default page