import cardsData from "../data/cardData";


const Cards = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
        {
            cardsData.map((card, index)=> 
            <div key={index} className="flex justify-evenly items-center w-[256px] shadow-md p-4">

                <div className="bg-[#A1045A] px-3 py-4 rounded-md">
                    <img src={card.image} alt={card.text} className="h-8 " />
                </div>
                <div>
                <h3 className="text-2xl md:text-3xl font-bold">{card.number}</h3>
                <p className="text-sm text-[#757D85]">{card.text}</p>
                </div>
                 </div>
                 )
        }

    </div>
  )
};

export default Cards;
