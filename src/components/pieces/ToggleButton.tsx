type ToggleButtonProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const ToggleButton = ({
  checked,
  onChange,
}: ToggleButtonProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <div
        className="
          relative h-6 w-11 rounded-full
          bg-gray-300
          transition-colors
          duration-300
          peer-checked:bg-blue-600
        "
      >
        <span
          className={`
            absolute left-0.5 top-0.5
            h-5 w-5 rounded-full bg-white shadow
            transition-transform duration-300
            ${checked ? "translate-x-5" : ""}
          `}
        />
      </div>
    </label>
  );
};

export default ToggleButton;