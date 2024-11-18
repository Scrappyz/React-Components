import React, { useState, memo } from "react";
import PropTypes from "prop-types";

// Password Field Component
const PasswordField = memo(({ field, inputStyle, inputTextStyle, inputBoxStyle }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div style={inputStyle}>
            {field.label !== null && (
                <label htmlFor={field.id} style={inputTextStyle}>
                    {field.label}
                </label>
            )}
            <input
                id={field.id}
                type={showPassword ? "text" : "password"}
                placeholder={field.placeholder}
                style={inputBoxStyle}
            />
            <div>
                <input type="checkbox" onClick={togglePasswordVisibility} />
                <label>{field.showPasswordText || "Show Password"}</label>
            </div>
        </div>
    );
});

// Main Form Component
function Form(props) {
    const formStyle = {
        ...props.styles.form,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
    };

    const inputContainerStyle = {
        ...props.styles.inputContainer,
        display: "flex",
        flexDirection: "column",
    };

    const inputStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "0px",
        padding: "0px",
    };

    const inputTextStyle = {
        ...props.styles.inputText,
        margin: "0",
        marginBottom: "3px",
    };

    return (
        <div style={formStyle}>
            {props.title !== null && <p>{props.title}</p>}
            <div style={inputContainerStyle}>
                {props.fields.map((field) =>
                    field.type === "password" ? (
                        <PasswordField
                            key={field.id}
                            field={field}
                            inputStyle={inputStyle}
                            inputTextStyle={inputTextStyle}
                            inputBoxStyle={props.styles.inputBox}
                        />
                    ) : (
                        <div style={inputStyle} key={field.id}>
                            {field.label !== null && (
                                <label htmlFor={field.id} style={inputTextStyle}>
                                    {field.label}
                                </label>
                            )}
                            <input
                                id={field.id}
                                type={field.type}
                                placeholder={field.placeholder}
                                style={props.styles.inputBox}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

Form.propTypes = {
    title: PropTypes.string,
    fields: PropTypes.array,
    onSubmit: PropTypes.func,
    styles: PropTypes.object,
};

Form.defaultProps = {
    title: null,
    fields: [
        {
            id: "user",
            label: "Username",
            placeholder: "Username",
            type: "text",
        },
        {
            id: "pw",
            label: "Password",
            placeholder: "Password",
            type: "password",
            showPasswordText: "Show Password",
        },
    ],
    onSubmit: null,
    styles: {
        form: {
            boxShadow: "0px 0px 5px 2px lightgray",
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "black",
            width: "250px",
            fontFamily: "Inter, Consolas",
        },
        inputContainer: {
            width: "80%",
            gap: "10px",
        },
        inputBox: {
            height: "20px",
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "1px",
            borderRadius: "5px",
            width: "97%",
        },
        inputText: {
            textAlign: "left",
        },
    },
};

export default Form;
