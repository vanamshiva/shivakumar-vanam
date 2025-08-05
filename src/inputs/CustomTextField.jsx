import { TextField } from "@mui/material";

const CustomTextField = (props) => {
    const {
        name,
        label,
        value,
        onChange,
        multiline = false,
        rows = 1,
        className,
    } = props

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
        />
    );
};

export default CustomTextField;
