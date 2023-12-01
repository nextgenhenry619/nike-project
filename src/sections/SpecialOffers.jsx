import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight, shopNow } from "../assets/icons"


const SpecialOffers = () => {
  return (
    <section className="flex max-xl:flex-col-reverse gap-10 max-container justify-center">
      <div className="flex-1 ">
        <img src={offer} width={770} height={680}
          className="object-contain w-full ml-[15px]"
        />
      </div>
      <div className='flex  flex-col justify-center'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-center'>
          <span className='text-coral-red'> Special  </span>
           Offers
        </h2>
        <p className='mt-4 lg:max-w-lg info-text text-center'>
          Embark on a shopping journey that redifines your 
          experience with unbeatable deals. From perimer 
          selection to incredible savings, we offer unparallel 
          value that sets us apart.

        </p>
        <p className='mt-6 lg:max-w-lg info-text text-center'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us, 
          is nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap w-full gap-4 max-sm:justify-center justify-center'>
          <Button label='Shop Now'
          iconURL={shopNow} />
          <Button label='Learn More'
          backgroundColor="bg-black"
          borderColor="border-blue-300"
          textColor="text-white"
          iconURL={arrowRight} 
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers