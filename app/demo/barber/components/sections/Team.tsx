import { shopInfo } from "../../data/shop-info";
import SectionHeader from "../ui/SectionHeader";
import FadeIn from "../ui/FadeIn";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Crew"
          title="Meet the Barbers"
          subtitle="Three chairs. Three craftsmen. Every one of them obsessed with getting it right."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shopInfo.team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 150}>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden bg-[#111] mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-[#C8A960] mt-1">{member.role}</p>
                <p className="text-sm text-[#6A6560] mt-3 leading-relaxed">{member.specialty}</p>
                <p className="text-xs text-[#4A4540] mt-2">{member.yearsExperience} years experience</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
