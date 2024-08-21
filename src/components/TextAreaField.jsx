function TextAreaField({ name, htmlfor, label, placeholder, value, setValue }) {
    return (
        <div className="mx-5 mt-4">
            <div className="flex items-center justify-start">
                <label htmlFor={htmlfor} className="block text-sm font-bold mb-2 text-gray-700">{label}:</label>
            </div>
            <textarea
                id={htmlfor}
                name={name}
                className="w-full px-3 py-2 border rounded-md focus:outline-none resize-none"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows="5"
            />
        </div>
    );
};

export default TextAreaField;