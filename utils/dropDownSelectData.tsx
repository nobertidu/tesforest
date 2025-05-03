export interface IOptions {
    value: string;
    label: string;
    color: string;
    size: string;
    boxShadow: string;
}

export const options:IOptions[] = [
    { value: `option1`, label: `Option 1`, color: `#9F9F9F`, size: `1rem`, boxShadow: `none` },
    { value: `option2`, label: `Option 2`, color: `#9F9F9F`, size: `1rem`, boxShadow: `none` },
    { value: `option3`, label: `Option 3`, color: `#9F9F9F`, size: `1rem`, boxShadow: `none` }
]

export const dropDownStyles = {
    control: (styles: any) => ({
        ...styles,
        background: '#EFEFEF',
        borderRadius: 67,
        padding: `.6rem 0 .6rem .8rem`,
        boxShadow: `none`,
    }),
    option: (styles: any, {data, isDisabled, isFocused, isSelected}: any) => {
        console.log(data, isDisabled, isFocused, isSelected)
        return {
            ...styles, 
            color: data.color,
            fontSize: data.size,
            boxShadow: isFocused.boxShadow
        }
    }
}

export const getValue = (value: String) => {
    let newValue = value ? options.find((option) => option.value === value) : ``;
    return newValue;
}
console.log(`getValue`, getValue)