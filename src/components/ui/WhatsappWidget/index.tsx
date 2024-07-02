import { IoLogoWhatsapp } from "react-icons/io";


export default function WhatsappWidget() {

  return (
    <div className='fixed z-20 bottom-3 right-3 lg:bottom-5 lg:right-5 p-1 bg-white text-bluePrimary rounded-2xl shadow-lg'>
      <a href='https://wa.me/62811301031?text=Hi%20Sightsea%20Expeditions!%20I%20would%20like%20to%20make%20an%20enquiry' target='_blank' className='block font-semibold overflow-hidden border border-slate-200 rounded-2xl px-4 py-2'>
        <div className='flex gap-2 items-center'>
          <IoLogoWhatsapp size={25} color='#25D366' />
          <span className='text-base'>chat with us</span>
        </div>
      </a>
    </div>
  )
};
