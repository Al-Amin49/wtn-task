
import dateIcon from "../assets/Icon.png";
const MonthDate = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <div className="w-[332px] border flex justify-between items-center px-4 py-1 rounded-md shadow-sm">
            <p className="border-r pr-4">12 Months</p>
            <p className="border-r pr-4">30 days</p>
            <p className="border-r pr-4">7 days</p>
            <p className="">24 hours</p>
            </div>

            <div className=" flex justify-between items-center mt-4 lg:mt-0 border rounded-md px-3 py-1 shadow-sm">
                <img src={dateIcon} alt="" className="h-5 w-5 mr-2"/>
                <button className="">Custom Date</button>
            </div>
        </div>
    );
};

export default MonthDate;