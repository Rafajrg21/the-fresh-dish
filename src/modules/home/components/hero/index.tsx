import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 h-[80vh] bg-teal-100">
      <div className="text-gray-800 relative z-10 flex flex-col justify-center items-center text-center small:p-32">
        <h1 className="text-emerald-500 text-2xl-semi mb-4">
          Make a new recipe today
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6">
          New recipes every week to impress your guests and family with exciting new dishes, 
          discover the chef within you and of course, get all the necessary ingredients 
          here in <strong>The Fresh Dish</strong>.
        </p>
        <UnderlineLink href="/recipes">Explore recipes</UnderlineLink>
      </div>
      <div className="hidden mt-24 md:block">
        <Image
          src="/hero.jpg"
          width={600}
          height={350}
          loading="eager"
          priority={true}
          quality={90}
          objectFit="cover"
          alt="Photo by @socialcut on unsplash"
          className="relative"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default Hero
