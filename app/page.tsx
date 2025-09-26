import CompanyCards from "@/components/cards/company-cards";
import CurvedLoop from "@/components/CurvedLoop";
import ButtonStyled from "@/components/ui/button-styled";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full items-center justify-center gap-8">
        <Image src="/hero-image.svg" alt="Hero Image" width={350} height={350} className="lg:w-[500px] lg:h-[500px] pt-4 flex items-center justify-center animate-jump-in animate-once" />
        <div className="w-fit hidden lg:flex h-fit p-4 gap-8 flex-col">
          <div className="w-fit flex gap-8 justify-between mx-auto">
            <CompanyCards />
          </div>
          <div className="w-fit flex flex-col gap-2 justify-between mx-auto">
            <ButtonStyled href="/project" color="#E24430" text="Mes projets" px="px-36"/>
            <ButtonStyled href="/cv.pdf" target="_blank" color="#FFD7BF" text="Telecharger mon cv" px="px-24.5"/>
          </div>
        </div>
      </div>
      <CurvedLoop marqueeText="Next.js  ✦  Python  ✦  Php  ✦  Java  ✦  Docker  ✦  Aws ✦" />
      <div className="w-full lg:hidden h-fit p-4 gap-8 flex flex-col">
        <div className="w-fit flex gap-8 justify-between mx-auto">
          <CompanyCards />
        </div>
        <div className="w-fit flex flex-col gap-2 justify-between mx-auto">
          <ButtonStyled href="/project" color="#E24430" text="Mes projets" px="px-35.5"/>
          <ButtonStyled href="/cv.pdf" target="_blank" color="#FFD7BF" text="Telecharger mon cv" px="px-26"/>
        </div>
      </div>
    </div>
  );
}
