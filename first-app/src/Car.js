import GetCarImage from "./CarImage";

function AssignCar(props){
    return (
        <div id="carContainer">
            <h1>{props.h1_name}</h1>
            <GetCarImage img_source={props.img_source} alt_name={props.alt_txt}/>
        </div>
    )
}

export default AssignCar