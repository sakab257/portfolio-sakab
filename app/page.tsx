import Button from "@/components/ui/button";
import CompanyCard from "@/components/ui/company-cards";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-6">
      <p className="uppercase font-light tracking-[0.25rem]">ai, Software & data engineering</p>
      <h1 className="text-6xl font-bold text-center">Développeur <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">Full-Stack</span> passionné par l&apos;<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">IA</span> générative & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">l&apos;architecture</span> des <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">SI</span></h1>
      <Button label="Avec qui j&apos;ai Travaillé" />
      <div className="w-[350px] flex items-center justify-center gap-16">
        <CompanyCard imageUrl="/company/cdc.svg" />
        <CompanyCard imageUrl="/company/orange.svg" />
        <CompanyCard imageUrl="/company/orange.svg" />
      </div>
      <Button label="Voir mes Projets" />
    </div>
  );
}
