import React, { useState, memo } from "react";
import PropTypes from "prop-types";

// Password Field Component
const PasswordField = memo(({ field, inputStyle, inputLabelStyle, inputBoxStyle }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div style={inputStyle}>
            {field.label !== null && (
                <label htmlFor={field.id} style={inputLabelStyle}>
                    {field.label}
                </label>
            )}
            <input
                id={field.id}
                type={showPassword ? "text" : "password"}
                placeholder={field.placeholder}
                style={inputBoxStyle}
            />
            {(field.showPasswordText !== null && "showPasswordText" in field) && field.showPasswordText.length  && (
                <div>
                    <input type="checkbox" onClick={togglePasswordVisibility} />
                    <label>{field.showPasswordText}</label>
                </div>
            )}
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

    const inputLabelStyle = {
        ...props.styles.inputLabel,
        margin: "0",
        marginBottom: "3px",
    };

    const inputBoxStyle = {
        ...props.styles.inputBox,
        height: "20px",
        width: "97%"
    }

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
                            inputLabelStyle={inputLabelStyle}
                            inputBoxStyle={inputBoxStyle}
                        />
                    ) : (
                        <div style={inputStyle} key={field.id}>
                            {field.label !== null && (
                                <label htmlFor={field.id} style={inputLabelStyle}>
                                    {field.label}
                                </label>
                            )}
                            <input
                                id={field.id}
                                type={field.type}
                                placeholder={field.placeholder}
                                style={inputBoxStyle}
                            />
                        </div>
                    )
                )}
            </div>
            <div style={props.styles.submitButtonContainer}>
                <input type="submit" value={props.submitButton.label} style={props.styles.submitButton} />
            </div>
            <div dangerouslySetInnerHTML={{__html: props.extra}} style={props.styles.extra} />
        </div>
    );
}

Form.propTypes = {
    title: PropTypes.string,
    fields: PropTypes.array,
    submitButton: PropTypes.object,
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
        }
    ],
    submitButton: {
        label: "Submit",
        onSubmit: null
    },
    extra: "<p>Not registered yet? Register <a href=''>here.</a></p>",
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
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "1px",
            borderRadius: "5px"
        },
        inputLabel: {
            textAlign: "left",
        },
        submitButtonContainer: {
            width: "80%",
            display: "flex",
            justifyContent: "center"
        },
        submitButton: {
            backgroundColor: "#f2f3f3",
            borderWidth: "0"
        },
        extra: {
            textAlign: "center",
            width: "80%"
        }
    },
};

export default Form;
