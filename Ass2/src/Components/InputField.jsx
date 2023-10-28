function InputField({typeofField,place_holder}){
    return(
        <>
                <input
                    type={typeofField}
                    className="w-full mt-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 mb-4"
                    placeholder={place_holder}
                />
        </>
    )
}

export default InputField