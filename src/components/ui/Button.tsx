import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";



//allows you to have different variants of the button
//first arguments - styles/props that are always applied to the button
const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants:{
      variant:{
        defualt:'bg-slate-900 text-white hover:bg-slate-800',
        ghost:'bg-transparent hover:text-slate-900 hover:bg-slate-200'
      },
      size:{
        default:'h-10 py-2 px-4',
        sm:'h-9 px-2',
        lg:'h-11 px-8'
      },
    },
    defaultVariants:{
      variant:'defualt',
      size:'default'
    }
  }
  );

//lets you define what can be passed in as props for this component -  it ensures 
//that the button component can accept all standard HTML attributes that are valid for a <button> element,
  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    isLoading?:boolean
  }

  //children refers to anything that gets passed within the component
const Button: FC<ButtonProps> = ({className,children,variant,isLoading,size,...props}) => {
  //by using cn function it allows for freedom to change any classname or add more classnames
  return <button className={cn(buttonVariants({variant,size,className}))} disabled={isLoading}>
    {isLoading?<Loader2 className="mr-2 h-4 w-4 animate-spin"/>:null}
    {children}
  </button>;
};

export default Button;
