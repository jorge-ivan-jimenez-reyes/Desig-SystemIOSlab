interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  const baseStyle =
    "font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 transition";
  const styles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white focus:ring-blue-300",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white focus:ring-gray-300",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
