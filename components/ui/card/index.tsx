interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

// Make sure it's a default export
export default function Card({ 
  children, 
  className = '', 
  padding = 'md' 
}: CardProps) {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7'
  };

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-md 
        ${paddingClasses[padding]} 
        ${className}
      `}
      role="article"
    >
      {children}
    </div>
  );
}