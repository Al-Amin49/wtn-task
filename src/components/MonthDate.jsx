

const MonthDate = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center mt-8">
            <div className="w-[332px] border flex">
            <p>12 Months</p>
            <p>30 days</p>
            <p>7 days</p>
            <p>24 hours</p>
            </div>

            <div>
                <button>Custome Date</button>
            </div>
        </div>
    );
};

export default MonthDate;