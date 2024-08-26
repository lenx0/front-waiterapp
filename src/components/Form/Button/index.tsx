import { ButtonComponent } from './styles'

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label: string;
}

export function Button({ onClick, disabled = false, type, label }: ButtonProps) {
  return (
    <ButtonComponent
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </ButtonComponent>
  )
}
