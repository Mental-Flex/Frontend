export const validate = (values) => {
    let errors = {};
    
    if (!values.image) {
      errors.image = "Image URL is required";
    }
    return errors;
  };