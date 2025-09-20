import Image from "next/image";

export default function HeaderBanner() {
  return (
    <div className="relative w-full bg-[#F5F5DC] h-[150px] flex items-center justify-center pt-8 pb-8">
      {/* Logo image - centered */}
      <div className="flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="EVEN after logo"
          width={400}
          height={30}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
