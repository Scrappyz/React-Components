import React from "react";
import PropTypes from "prop-types";

function Form(props) {

    const formStyle = {
        ...props.styles.form,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "auto"
    }

    const inputContainerStyle = {
        ...props.styles.inputContainer,
        display: "flex",
        flexDirection: "column"
    }

    const inputStyle = {
        display: "flex",
        flexDirection: "column",
        margin: "0px",
        padding: "0px"
    }

    const inputTextStyle = {
        ...props.styles.inputText,
        margin: "0",
        marginBottom: "3px"
    }

    return (
        <div style={formStyle}>
            {props.title === null ? null : <p>{props.title}</p>}
            <div style={inputContainerStyle}>
                {props.fields.map((field) => {
                    return (
                        <div style={inputStyle}>
                            {field.label !== null && <p style={inputTextStyle}>{field.label}</p>}
                            <input id={field.id} type={field.type} placeholder={field.placeholder} style={props.styles.inputBox}></input>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    
}

Form.propTypes = {
    title: PropTypes.string,
    fields: PropTypes.array,
    onSubmit: PropTypes.func,
    styles: PropTypes.object
}

Form.defaultProps = {
    title: null,
    fields: [
        {
            id: "usr",
            label: "wasup",
            placeholder: "Username",
            type: "text"
        },
        {
            id: "usr",
            label: "pagong",
            placeholder: "Password",
            type: "text"
        }
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
            gap: "10px"
        },
        inputBox: {
            height: "20px",
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "1px",
            borderRadius: "5px",
            width: "97%"
        },
        inputText: {
            textAlign: "left"
        }
    }
}

export default Form;