import Image from "next/image";

export default function HeroVideoBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Image
        src="/brand_assets/herobg.png"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />
    </div>
  );
}
