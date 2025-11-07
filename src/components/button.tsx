type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center w-[340px] h-[40px] bg-primary hover:bg-hover transition-colors py-2 px-4 rounded-[4px] delay-0 duration-150 text-text text-base font-normal"
      {...props}
    >
      {children}
    </button>
  );
}
