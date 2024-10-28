

const Container = ({children, className=""}) => {
    return (
        <div className= {`max-w-[1102px] mx-auto w-full overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

export default Container;