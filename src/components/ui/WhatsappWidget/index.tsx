import { IoLogoWhatsapp } from "react-icons/io";


export default function WhatsappWidget() {

  return (
    <div className='fixed z-20 bottom-3 right-3 lg:bottom-5 lg:right-5 p-1 backdrop-blur-sm bg-white/90 text-bluePrimary rounded-3xl shadow-xl'>
      <a href='https://wa.me/62811301031?text=Hi%20Sightsea%20Expeditions!%20I%20would%20like%20to%20make%20an%20enquiry' target='_blank' className='block font-semibold overflow-hidden border border-slate-200 rounded-3xl px-2 md:px-4 py-1 md:py-2'>
        <div className='flex gap-2 items-center'>
          <IoLogoWhatsapp color='#25D366' className='text-lg md:text-2xl' />
          <span className='text-sm md:text-base'>chat with us</span>
        </div>
      </a>
    </div>
  )
};
