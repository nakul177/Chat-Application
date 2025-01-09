
interface FormInputProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    labelText: string;
    labelFor: string;
    id: string;
    name: string;
    type?: string;
    isRequired?: boolean;
    placeholder?: string;
    customClass?: string;
}

export default function Input({
                                  handleChange,
                                  value,
                                  labelText,
                                  labelFor,
                                  id,
                                  name,
                                  type,
                                  isRequired=false,
                                  placeholder,
                                  customClass
                              } : FormInputProps){
    return(
        <div className="my-5">
            <label className="block text-text mb-1" htmlFor={labelFor}>
                {labelText}
            </label>
            <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={'input-custom'+ " " + customClass }
                placeholder={placeholder}
            />
        </div>
    )
}