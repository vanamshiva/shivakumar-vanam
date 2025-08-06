import { TextField } from "@mui/material";

const CustomTextField = ({
    name,
    label,
    value,
    onChange,
    multiline = false,
    rows = 1,
    className,
    error,
    helperText,
    style,
    inputPropsStyle = {},
    inputProps = {},
}) => {
    return (
        <TextField
            fullWidth
            variant="outlined"
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            multiline={multiline}
            rows={rows}
            className={className}
            error={error}
            helperText={helperText}
            style={style}
            inputProps={inputProps}
            InputProps={{
                style: {
                    ...inputPropsStyle
                },
            }}
        />
    );
};

export default CustomTextField;
