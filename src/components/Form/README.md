## Form
A react component for login/register forms.

## Props
- `title`: The title of the form. This is what will appear on the top of the form.
  - Type: `string`
- `fields`: This are the input fields of the form. The form will expand dynamically.
  - `id`: The `id` of the input to be used when retrieving.
  - `label`: Label of the field. (Can be omitted)
  - `placeholder`: The text to appear when the field is empty. (Can be omitted)
  - `type`: Type of input.
  - `showPasswordText`: The text to appear next to the checkbox on password types. (If empty, no checkbox will appear)
- `submitButton`: The submit button of the form.
  - `label`: The text inside the button.
  - `onSubmit`: A callback function to retrieve input values.
- `extra`: Extra text to appear under the submit button.
- `styles`: The style of the component. 

### Prop Layout
```
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
            
        },
        inputContainer: {
            
        },
        inputBox: {
            
        },
        inputLabel: {
            
        },
        checkbox: {
            
        },
        submitButtonContainer: {
            
        },
        submitButton: {
            
        },
        extra: {
            
        }
    }
};
```