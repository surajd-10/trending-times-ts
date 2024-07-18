import { ChangeEvent } from "react"

export interface ISelectProps {
    options: IOption[],
    value?: number | string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void 
}

export interface IOption {
    label: string,
    value: string | number
}