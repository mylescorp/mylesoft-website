import Link from 'next/link'

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/254743993715?text=Hi%20MylesCorp!%20I%20found%20you%20on%20your%20website%20and%20would%20like%20to%20learn%20more."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MylesCorp on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
                 group flex items-center gap-3
                 bg-[#C79639] text-[#1A395B]
                 pl-4 pr-5 py-3 rounded-full font-bold
                 shadow-[0_8px_32px_rgba(199,150,57,0.4)]
                 hover:bg-[#e0b055] hover:-translate-y-1
                 hover:shadow-[0_12px_40px_rgba(199,150,57,0.5)]
                 transition-all duration-200 ease-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 flex-shrink-0"
        fill="#1A395B"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.03a.75.75 0 00.914.914l5.185-1.469A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.51-5.18-1.402l-.36-.213-3.733 1.058 1.058-3.733-.213-.36A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
      <span className="hidden sm:inline text-[13px] font-bold tracking-wide">
        WhatsApp Us
      </span>
    </Link>
  )
}
