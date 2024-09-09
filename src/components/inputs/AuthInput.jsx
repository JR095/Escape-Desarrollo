import "../../index.css";

export function AuthInput({ name, placeholder, type, className }) {
    return (
      <div className={`flex gap-2 my-10 lg:my-8 rounded-xl ${className}`}>
        <input
          className="w-full text-base shadow-md p-3 rounded-xl border-none focus:outline-none focus:ring-0"
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  }
  