function ProductItem(props) {
    return (
        <>
            <div className="flex flex-col">
                <img src={props.image} alt="" className="w-[370px] h-[280px]" />
                <div className="pt-8">
                    <h1>{props.name}</h1>
                    <p className="pt-3 text-[#f4304c]">{props.price}</p>
                </div>
            </div>
        </>
    );
}

export default ProductItem;
