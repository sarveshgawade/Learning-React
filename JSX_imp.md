
# JSX important points to be noted

1) React diffrentiates normal html elements in a way that , HTML elements start with small letter always (eg: <p>,<img>,<h1>) ; But JSX elements (user-defined components) should always start with Capital letters only , otherwise it throws errors.
eg: function ImageCard(){
        return (

        )
    }
Also file name should be written in capital letters 

2) If it is a single liner return in JSX elements then there is no need to bind the return statement in brackets ; if the return statement proceeds more than one line then it should be enclosed in round brackets

3) JSX elements to be returned should always have a single parent only
    eg:     function ImageCard(){
                return (
                        <div>
                            <img />
                            <h1>
                        </div>
                )
            } 

4) FRAGMENTS : If we dont want to add the parent wrapper as shown in above eg:<div> then we can add fragment as shoen below. This fragment does not get added to the DOM tree , thus only <img> and <h1> are only added in the DOM tree

