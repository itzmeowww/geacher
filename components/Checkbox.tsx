type CheckboxType = {
  label: string,
  isSelected: boolean,
  onCheckboxChange: any
}
const Checkbox = ({ label, isSelected, onCheckboxChange }: CheckboxType) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="mr-2"
      />
      {label}
    </label>
  </div>
);


export default Checkbox
