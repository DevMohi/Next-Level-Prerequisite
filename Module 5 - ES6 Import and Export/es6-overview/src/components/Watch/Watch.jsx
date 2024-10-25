const Watch = ({watch}) => {
    const {name,price} = watch;
    return (
        <div>
            <h3>Watch : {name}</h3>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;