

const Container = ({children, className=""}) => {
    return (
        <div className= {`max-w-[1102px] mx-auto w-full ${className}`}>
            {children}
        </div>
    );
};

export default Container;