import React from 'react';
const data = {
    firstName: 'tom',
    lastName: 'sarp',
    email: 'tom@tom.com',
};

const capitalizeString = (string) => {
    //Just to make sure you are dealing with a string

    const transformed = String(string);
    return transformed.replace(transformed.charAt(0).toUpperCase());
};

const transformObjectToBooleans = (object, defaults = true) => {
    return Object.keys(object).reduce((prev, cur) => {
        prev[cur] = defaults;
        return prev;
    }, {});
};

const T = () => {
    const [values, setValues] = useState(data);
    const [buttonDisables, setButtonDisables] = useState(transformObjectToBooleans(data));
    const transformed = React.useMemo(() => Object.entries(values), [values]);
    const handleChange = (e) => {
        setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleButtonDisableChange = (e) => {
        setButtonDisables((prev) => ({ ...prev, [e.target.name]: true }));
    };
    return (
        <div>
            {transformed.map((field, index) => {
                <div key={index}>
                    <label>{capitalizeString(field[0])}</label>
                    <input
                        onFocus={handleButtonDisableChange}
                        value={values[field[0]]}
                        onChange={handleChange}
                        type={field[0] === 'email' ? 'email' : field[0] === 'password' ? 'password' : 'text'}
                        name={field[0]}
                    />
                    <button disabled={buttonDisables[field[0]]} name={field[0]}></button>
                </div>;
            })}
        </div>
    );
};

export default T;