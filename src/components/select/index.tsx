import { IOption, ISelectProps } from "./index.types";

const Select=({options, value, onChange}: ISelectProps)=>{
    return (
        <select data-testid="select-element" value={value} onChange={onChange}>
            {
                options.map((opt: IOption)=>{
                    return (
                        <option key={opt.value} data-testid={`option-${opt.value}`} value={opt.value}>{opt.label}</option>
                    )
                })
            }   
        </select>
    )
}

export default Select;