import React, { useState } from 'react'

const useFormInput = (initialValue = "") => {

    const [value, setValue] = useState(initialValue)

    const handleChange = (text) => {
        setValue(text)
    };

    return {
        value,
        change: handleChange
    };

};

export default useFormInput


