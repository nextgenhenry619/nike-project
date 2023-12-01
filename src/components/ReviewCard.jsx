import { star } from "../assets/icons"

const ReviewCard = ( { imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
        <img 
            src={imgURL}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="mt-5 text-center text-lg text-slate-gray mb-2">
        {feedback}</p>
        <div className="w-full flex justify-center items-center">
        <p className="mr-2 text-lg mt-1 ">({rating})</p>
            <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0 mr-2"
            /> 
            <h5 className="text-[9px] absolute ml-[120px] mt-[4px] text-slate-gray">out of 5 stars </h5>
        </div>
        <h3 className="w-full text-end font-semibold">-{customerName}</h3>
    </div>
  )
}

export default ReviewCard