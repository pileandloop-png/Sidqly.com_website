import React from 'react';

interface CheckboxGroupProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  error?: string;
  required?: boolean;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selectedValues,
  onChange,
  error,
  required,
}) => {
  const handleToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="w-full space-y-2">
      <p className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-sidqly-primary focus:ring-sidqly-primary cursor-pointer"
              checked={selectedValues.includes(opt.value)}
              onChange={() => handleToggle(opt.value)}
            />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
