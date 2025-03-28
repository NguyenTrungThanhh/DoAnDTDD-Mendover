function BatDongSanItem(props) {
    return (
        <>
            <div className="flex flex-col">
                <img src={props.image} alt="" className="w-[270px] h-[204px]" />
                <div className="pt-8">
                    <h1>{props.name}</h1>
                    <p className="pt-3 text-[#f4304c]">{props.price}</p>
                </div>
            </div>
        </>
    );
}

export default BatDongSanItem;
