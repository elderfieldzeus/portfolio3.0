import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const ToggleProjects: React.FC = () => {
  const [isSoftwareEngineer, setIsSoftwareEngineer] = useState(true)

  return (
    <div className="inline-flex rounded-full p-1 bg-muted">
      <button
        onClick={() => setIsSoftwareEngineer(true)}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-colors",
          isSoftwareEngineer
            ? "bg-white text-black"
            : "text-muted-foreground hover:bg-muted-foreground/10",
        )}
      >
        Software Engineering
      </button>
      <button
        onClick={() => setIsSoftwareEngineer(false)}
        className={cn(
          "px-3 py-1 text-xs font-medium rounded-full transition-colors",
          !isSoftwareEngineer
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