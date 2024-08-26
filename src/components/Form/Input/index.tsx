import { InputComponent } from "./styles";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type?: 'text' | 'password' | 'email' | 'number';
  disabled?: boolean;
}


export function Input({ value, onChange, placeholder, type = 'text', disabled = false }: InputProps) {
  return (
    <InputComponent
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    >
    </InputComponent>
  )
}
