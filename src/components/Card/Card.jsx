import solar_panel from "../../assets/solar_panel.png"

const Card = () => {
    return ( 
    <div className="card h-8 bg-base-100 shadow-xl">
        <img src={solar_panel} alt="Shoes" className="h-2 w-2"/>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <input type="checkbox" className="toggle toggle-warning"  />
            </div>
        </div>
    </div>
     );
}
 
export default Card;