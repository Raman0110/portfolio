import Image from "next/image"

const Footer = () => {
  return (
    <div className="py-16 bg-[#0f0715]">
      <div>
        <Image src="/images/logo.png" alt="logo" width={100} height={100} className="mx-auto" />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home</div>
        <div>Services</div>
        <div>Project</div>
        <div>Reviews</div>
        <div>Contact</div>
      </div>
      <p className="text-gray-400 text-opacity-60 mt-6 text-center">© 2024 All Rights Reserved by Raman Tamang</p>
    </div>
  )
}

export default Footer