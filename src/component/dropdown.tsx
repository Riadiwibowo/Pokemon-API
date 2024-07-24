interface DropdownProps {
  label: string;
  options: { name: string; url: string }[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ label, options, value, onChange }: DropdownProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-bold text-gray-700">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
