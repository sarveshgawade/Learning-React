function GetImageOfDog(){
    return <img src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="dogImg"/>
}

function DogCard(){
    return (
        <div className = "dogContainer">
            <h2>Bruno</h2>
            <GetImageOfDog/>
        </div>     
    )
}

// returning fragments
export function BikeCard(){
    let title = "Kawasaki ZX10R"
    return (
        <>
            {/* JSX curlies used here */}
            <h1 style={{color:'red',fontSize:'50px'}}>{title}</h1>
            <img src="https://th.bing.com/th/id/R.0712df2ecf587fd6fb53f6f4fd80846c?rik=Ap90Bj8j5XTtAQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwc1738478.jpg&ehk=%2feJi%2fFOd9d%2f24rKdYT8Z6%2f3FvI8j%2feGYrFjKIqh5p74%3d&risl=&pid=ImgRaw&r=0" alt=""/>
        </>
    )
}

export default DogCard ;