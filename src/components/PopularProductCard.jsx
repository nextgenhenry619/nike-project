import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1  flex-col w-full max-sm:w-full place-items-center"
    >
    <img src={imgURL}
    alt={name}
    className="w-[280px] h-[280px]"
    >
    </img>
    <div className="mt-5 flex justify-start gap-2.5 items-center">
    <img src={star} alt="rating" width={25} height={25} />
    <p className="font-montserrat text-lg text-slate-gray font-medium">(4.5)</p>
    </div>
    <h3 className="text-lg mt-3 text-start leading-normal font-semibold font-palanquin">{name}</h3>
    <p className="text-coral-red font-medium leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard