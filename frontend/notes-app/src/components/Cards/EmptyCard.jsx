/* eslint-disable react/prop-types */

const EmptyCard = ({imgSrc, message}) => {
  return (
    <div className="flex flex-col items-center justity-center mt-20 pt-40">
        <img src={imgSrc} alt="No notes" className="w-60" />

        <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5">
        {message}</p>
    </div>
  )
}

export default EmptyCard