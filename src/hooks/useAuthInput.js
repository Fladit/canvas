import {useState} from "react";

const validationEnum = {
    MIN_LENGTH: "minLength",
    MAX_LENGTH: "maxLength",
}


const useAuthInput = (initialValue, validationRules) => {
    const [value, setValue] = useState(initialValue)
    const [errorMessage, setErrorMessage] = useState("")

    const onChange = (e) => {
        const targetValue = e.target.value
        setValue(targetValue)
        for (const rule in validationRules) {
            if (!validate(rule, targetValue)) {
                break;
            }
            setErrorMessage("")
        }
    }

    const validate = (rule, value) => {

        switch (rule) {
            case validationEnum.MIN_LENGTH: {
                if (value.length < validationRules[validationEnum.MIN_LENGTH])
                {
                    if (value.length === 0) {
                        setErrorMessage('Поле не должно быть пустым!')
                        return false;
                    }
                    setErrorMessage(`Поле должно содержать не менее ${validationRules[validationEnum.MIN_LENGTH]} символов`)
                    return false;
                }
                return true;
            }
            case validationEnum.MAX_LENGTH: {
                if (value.length > validationRules[validationEnum.MAX_LENGTH]) {
                    setErrorMessage(`Поле должно содержать не более ${validationRules[validationEnum.MAX_LENGTH]} символов`)
                    return false;
                }
                return true;
            }

            default: {
                return true;
            }

        }


    }
    return {value, onChange, errorMessage}
}

export {validationEnum, useAuthInput}
