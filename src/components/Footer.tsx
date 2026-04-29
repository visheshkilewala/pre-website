export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Phytoroot Extracts
            </h4>
            <p className="text-xs text-gray-500 mb-3">Ayurvedic Cannabis Science</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Phytorootextracts Pvt Ltd<br />
              MM Kilewala Warehouse<br />
              Village Chauthkheda, Neemuch Bypass<br />
              Neemuch, MP 458441
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Contact</h4>
            <p className="text-xs mb-2">📞 +91 9244107423</p>
            <p className="text-xs mb-2">📧 vkilewala@aagya.co.in</p>
            <a
              href="https://wa.me/919244107423"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 hover:text-emerald-300"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Legal</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <p>Schedule E(1) Drug</p>
              <p>Prescription Required</p>
              <p>For Adults 18+ Only</p>
              <p>GST: 23AAOCP8493P1ZD</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-[11px] text-gray-600 leading-relaxed max-w-3xl mx-auto">
            © 2026 Phytorootextracts Pvt Ltd. All rights reserved. These products are Ayurvedic medicines containing
            Vijaya (Cannabis). Prescription from a registered Ayurvedic physician is mandatory. Not for recreational
            use. Subject to Neemuch, MP jurisdiction. Prices shown are GST exclusive (5%).
          </p>
        </div>
      </div>
    </footer>
  );
}
