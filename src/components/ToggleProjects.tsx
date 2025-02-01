import { cn } from '@/lib/utils'
import React from 'react'

interface ToggleProjectsProps {
  isSWE: boolean;
  showSWE : () => void
  showDS: () => void
}

const ToggleProjects: React.FC<ToggleProjectsProps> = ({isSWE, showSWE, showDS}) => {
  

  return (
    <div className="inline-flex rounded-full p-1 bg-muted">
      <button
        onClick={() => showSWE()}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200",
          isSWE
            ? "bg-white text-black"
            : "text-muted-foreground hover:bg-muted-foreground/10",
        )}
      >
        Software Engineering
      </button>
      <button
        onClick={() => showDS()}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200",
          !isSWE
            ? "bg-white text-black"
            : "text-muted-foreground hover:bg-muted-foreground/10",
        )}
      >
        Data Science
      </button>
    </div>
  )
}

export default ToggleProjects