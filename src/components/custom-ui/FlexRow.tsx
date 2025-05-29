import { cn } from '@/lib/utils';
import React from 'react'

interface FlexRowProps {
    className?: string;
    children?: React.ReactNode;
}

const FlexRow: React.FC<FlexRowProps> = ({className, children}) => {
  return (
    <div className={cn("flex", className)}>
        {children}
    </div>
  )
}

export default FlexRow