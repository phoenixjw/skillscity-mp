export default function Input({placeholder, value, onChange}) {
    return(
        <input
            placeholder={placeholder}
            className="bg-gray-200 py-3 px-6 w-96 rounded"
            value={value}
            onChange={onChange}
        />
    )


}
