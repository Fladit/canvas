import React from 'react';
import "../../styles/templateForm.css"

const TemplateForm = ({children}) => {
    return (
        <div className={"template-form"}>
            {children}
        </div>
    );
};

export default TemplateForm;
