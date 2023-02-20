export default function Input({placeholder, value, onChange}) {
    const handleChange = (event) => {
        const value = event.target.value;
        onChange(value);
    }
    // Using line 3 means we dont have to redefine value as an event property in all our handleChange functions for inputs

    return(
        <input
            placeholder={placeholder}
            className="bg-gray-200 py-3 px-6 w-96 rounded"
            value={value}
            onChange={handleChange}
        />
    )


}
