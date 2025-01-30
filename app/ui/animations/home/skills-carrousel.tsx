"use client";
import Image from "next/image";
import { habilities } from "@/app/lib/data";

export default function SkillsCarrousel() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* 
        El contenedor que se anima. 
        - 'whitespace-nowrap' para que el contenido no rompa línea.
        - 'animate-scroll' es la clase que definiremos con keyframes CSS. 
      */}
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Bloque 1 */}
        {habilities.map((item, i) => (
          <MarqueeItem key={`original-${i}`} item={item} />
        ))}
        {/* Bloque 2 (idéntico) */}
        {habilities.map((item, i) => (
          <MarqueeItem key={`clone-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function MarqueeItem({ item }: { item: (typeof habilities)[0] }) {
  const IconSVG = item.iconSvg;
  return (
    <div className="flex-shrink-0 gap-4 px-6 transition-transform duration-100 ease-in-out hover:scale-110">
        <a href={item.webUrl} target="_blank" rel="noopener noreferrer">
          {IconSVG ? (
            <IconSVG width={80} height={80} />
          ) : (
            <Image
                src={item.iconUrl || ""}
                alt={item.name}
                width={80}
                height={80}
            />
          )}
        </a>
    </div>
  );
}