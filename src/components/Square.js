const Square = ({handleClick, value}) => {
    return (
        <button 
            type = "button" 
            className="square"
            // onClick={props.handleClick}
            onClick={handleClick}
        >
            
            {/* {props.value} */}
            {value}
        </button>
        
        );
};
export default Square;