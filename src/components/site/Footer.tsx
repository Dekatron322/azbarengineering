import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import azbarLogo from "@/assets/azbar-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 mt-24">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={azbarLogo.url} alt="Azbar Engineering Services Limited" className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            MEPF consulting — design powered by BIM technology, delivered with rigorous site
            supervision. Buildings that work, from drawing to commissioning.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-ember">About</Link></li>
            <li><Link to="/services" className="hover:text-ember">Services</Link></li>
            <li><Link to="/projects" className="hover:text-ember">Projects</Link></li>
            <li><Link to="/team" className="hover:text-ember">Team</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-ember" /><span>info@azbarengineering.com</span></li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-ember" /><span>+2348103173481</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-ember" /><span>No. 4. Victor A. Morris Street, Mabushi Abuja, FCT, Nig.</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Azbar Engineering Services Limited. All rights reserved.</span>
          <span>MEPF · BIM · Supervision</span>
        </div>
      </div>
    </footer>
  );
}
