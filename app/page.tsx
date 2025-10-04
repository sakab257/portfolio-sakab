import Button from "@/components/ui/button";
import CompanyCard from "@/components/ui/company-cards";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react"

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-6">
      <p className="uppercase font-light tracking-[0.2rem] text-xs">ai, Software & data engineering</p>
      <h1 className="text-5xl font-bold text-center w-[300px]">Développeur <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">Full-Stack</span> passionné par l&apos;<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">IA</span> générative & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">l&apos;architecture</span> des <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CBACF9] to-[#D4B7FF]">SI</span></h1>
      <Button label="Avec qui j&apos;ai travaillé" />
      <div className="w-[300px] flex items-center justify-center gap-16">
        <CompanyCard imageUrl="/company/dauphine.svg" />
        <CompanyCard imageUrl="/company/cdc.svg" />
        <CompanyCard imageUrl="/company/orange.svg" />
      </div>
    <Link href="/projets"><Button label="Voir mes Projets" icon={<ArrowUpRight />}/></Link>
    </div>
  );
}
