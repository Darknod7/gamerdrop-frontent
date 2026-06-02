"use client"

import { cn } from "@/lib/utils"
import { blocks, type BlockId } from "@/lib/marketplace-data"

const accentActive: Record<string, string> = {
  blue: "bg-neon-blue text-primary-foreground glow-blue",
  gold: "bg-gold text-accent-foreground glow-gold",
  red: "bg-destructive text-destructive-foreground",
}

const accentIcon: Record<string, string> = {
  blue: "text-neon-blue",
  gold: "text-gold",
  red: "text-destructive",
}

export function BlockSwitcher({
  active,
  onChange,
}: {
  active: BlockId
  onChange: (id: BlockId) => void
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {blocks.map((block) => {
        const Icon = block.icon
        const isActive = block.id === active
        return (
          <button
            key={block.id}
            type="button"
            onClick={() => onChange(block.id)}
            aria-pressed={isActive}
            className={cn(
              "flex flex-col items-center gap-2 rounded-2xl border p-3 text-center transition-all active:scale-[0.97]",
              isActive
                ? cn("border-transparent", accentActive[block.accent])
                : "border-border bg-card text-card-foreground hover:border-primary/40",
            )}
          >
            <Icon
              className={cn("size-6", isActive ? "" : accentIcon[block.accent])}
              aria-hidden="true"
            />
            <span className="text-xs font-bold leading-tight">{block.name}</span>
          </button>
        )
      })}
    </div>
  )
}
