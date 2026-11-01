import { ExternalLink, Shield } from "lucide-react";
import { FOOTER_COLUMNS, STAGE_STATUS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/[0.06] bg-[#07090e]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer grid */}
      <div className="section-container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                aria-hidden="true"
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-900/40"
              >
                <span className="text-white font-black text-sm select-none">M</span>
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">MEMORA</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              An ethical, privacy-conscious AI platform for digital memory and legacy preservation.
            </p>
            {/* Stage badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" aria-hidden="true" />
              <span>{STAGE_STATUS.current}</span>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-slate-200 transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {year} Memora. Research demonstration platform. Not a production service.
          </p>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              <span>AI Transparency Enabled</span>
            </div>
            <a
              href="https://github.com/MohamedNaseem-M/memora"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Memora on GitHub"
              className="text-slate-600 hover:text-slate-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
