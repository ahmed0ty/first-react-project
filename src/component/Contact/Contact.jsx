
export default function Contact() {
  return <>
    <div className="pb-10">

     
      <div className="pt-10 cont">
        <h1 className="text-center text-5xl font-bold">CONTACT SECTION</h1>
        <div className="flex items-center justify-center p-3 "><i className="fas fa-minus "></i><i class="fa-solid fa-star  "></i><i className="fas fa-minus"></i></div>
        <div className="flex items-center justify-center pt-16">
          <div className="flex flex-col items-center pt-16 space-y-8">
            <div className="space-y-8">
              <input
                type="text"
                placeholder="userName"
                className="block p-2 border-b border-gray-300 rounded-none focus:border-b-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="userAge"
                className="block p-2 border-b border-gray-300 rounded-none focus:border-b-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="userEmail"
                className="block p-2 border-b border-gray-300 rounded-none focus:border-b-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="userPassword"
                className="block p-2 border-b border-gray-300 rounded-none focus:border-b-2 focus:outline-none"
              />
            </div>
            <button className="bg-custom-green text-white p-2 rounded">
              Send Message
            </button>
          </div>
          

        </div>




      </div>



    </div>

  </>
}
