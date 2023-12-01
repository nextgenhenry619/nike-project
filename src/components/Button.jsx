const Button = ( { label, iconURL, backgroundColor, textColor, borderColor,fullWidth}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-5
      border font-montserrat text-lg leading-none 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}"}`}
    >{label}
    {iconURL && <img
        src={iconURL}
        alt="view more"
        className="ml-2 
        w-5 h-5"
    />}
    </button>
  )
}

export default Button