function GetImageOfDog(){
    return <img src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="dogImg"/>
}

function DogCard(){
    return (
        <div ClassName = "dogContainer">
            <h2>Bruno</h2>
            <GetImageOfDog/>
            <GetImageOfDog/>
        </div>     
    )
}

export default DogCard ;