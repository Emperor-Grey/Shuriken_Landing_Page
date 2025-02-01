type ButtonVariant = 'primary' | 'secondary' | 'outline';

export const Button = ({ 
  children, 
  variant = 'primary' as ButtonVariant,
  className = '',
  ...props 
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105";
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/25",
    secondary: "border border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10 text-white",
    outline: "border border-primary-500/20 hover:border-primary-500 text-primary-500 hover:bg-primary-500/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 