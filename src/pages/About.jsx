import React from "react";
import { Shield, Target, Lock, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-surface text-text-primary pt-16">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 border border-primary/30 rounded-3xl mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display text-6xl tracking-wider text-text-primary mb-4">
            ABOUT <span className="text-primary">US</span>
          </h1>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Traxelon is a specialized intelligence platform built for law enforcement agencies
            to conduct covert digital surveillance operations with precision and legality.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Target className="w-6 h-6" />, title: "Our Mission", desc: "Empower law enforcement with cutting-edge tracking technology to reduce investigation time and improve case closure rates across India." },
            { icon: <Lock className="w-6 h-6" />, title: "Our Commitment", desc: "Every tool we build adheres to the IT Act 2000 and CrPC guidelines. Access is strictly limited to verified government officers with valid badge IDs." },
            { icon: <Users className="w-6 h-6" />, title: "Our Users", desc: "We serve over 2,400 verified police officers across 18 states, from cyber crime cells to organized crime units." },
          ].map((item, i) => (
            <div key={i} className="bg-surface-elevated border border-surface-border rounded-2xl p-6">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-xl text-text-primary tracking-wide mb-2">{item.title}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Legal Notice */}
        <div className="bg-surface-elevated border border-accent/20 rounded-2xl p-6 mb-16">
          <h3 className="font-display text-xl text-accent tracking-wide mb-3">⚠️ Legal Notice</h3>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            Traxelon is intended solely for use by authorized law enforcement personnel in the
            performance of official duties. Unauthorized use of this tool to track individuals
            without proper legal authorization constitutes a violation of the IT Act 2000,
            Section 66 (Computer Related Offences) and may result in criminal prosecution.
            All activity on this platform is logged and auditable by senior officials.
          </p>
        </div>

        {/* Curator / Sir Section */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl tracking-wider text-text-primary">
            OUR <span className="text-primary">CURATOR</span>
          </h2>
          <p className="font-body text-sm text-text-muted mt-2">The vision behind Traxelon</p>
        </div>

        <div className="bg-surface-elevated border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-glow">
                <img
                  src="/sir.jpg"
                  alt="Dr. Ananth Prabhu G"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("flex", "items-center", "justify-center", "bg-primary/10");
                    e.target.parentElement.innerHTML = `<span class="font-display text-4xl text-primary">A</span>`;
                  }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-xs text-primary font-mono mb-3">
                🎓 Resource Person & Curator
              </div>
              <h3 className="font-display text-2xl text-text-primary tracking-wide">
                Dr. Ananth Prabhu G
              </h3>
              <p className="font-body text-sm text-primary mt-1 font-semibold">PhD, PDF</p>
              <p className="font-body text-sm text-text-muted mt-1">Cyber Security & Cyber Crime Expert</p>

              <div className="mt-4 h-px bg-surface-border" />

              <p className="font-body text-sm text-text-secondary leading-relaxed mt-4">
                A group of young professionals with in-depth knowledge into Cyber Security and
                Cyber Crimes. It all started with the penchant desire of Dr. Ananth Prabhu G
                to help young girls and women engage with responsible browsing on the internet.
                The idea was given shape by building InfoToons to help students and women easily
                understand various cyber crimes committed on a daily basis.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Cyber Security", "Digital Forensics", "Cyber Law", "InfoToons"].map((tag) => (
                  <span key={tag} className="bg-surface border border-surface-border text-text-muted font-mono text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Built by section */}
        <div className="text-center mt-16">
          <p className="font-body text-xs text-text-muted">
            Built with ❤️ by the Traxelon team under the guidance of{" "}
            <span className="text-primary">Dr. Ananth Prabhu G</span>
          </p>
        </div>

      </div>
    </div>
  );
}