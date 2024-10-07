import "../../index.css";

export function Selected({ options, id, placeholder, label, onChange }) {
  return (
    <>
      <div className="grid">
        <label>{label}</label>
        <div className="flex gap-2 rounded-xl my-3">
          <select onChange={onChange} id={id} className="w-full text-base shadow-md p-3 rounded-xl text-gray-500 border-none focus:outline-none focus:ring-0">
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}