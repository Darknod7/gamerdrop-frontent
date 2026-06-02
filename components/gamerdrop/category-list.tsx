"use client"

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Category } from "@/lib/marketplace-data"

export function CategoryList({
  categories,
  activeId,
  onSelect,
  counts,
}: {
  categories: Category[]
  activeId: string | null
  onSelect: (id: string) => void
  counts: Record<string, number>
}) {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category) => {
        const Icon = category.icon
        const isActive = category.id === activeId
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelect(category.id)}
            aria-expanded={isActive}
            className={cn(
              "flex items-center gap-3 rounded-2xl border p-3 text-left transition-all active:scale-[0.99]",
              isActive
                ? "border-primary/60 bg-secondary glow-blue"
                : "border-border bg-card hover:border-primary/40",
            )}
          >
            <div
              className={cn(
                "flex size-11 shrink-0 items-center justify-center rounded-xl",
                isActive ? "bg-primary/20 text-primary" : "bg-secondary text-primary",
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-card-foreground">{category.name}</p>
              <p className="truncate text-xs text-muted-foreground">{category.description}</p>
            </div>
            <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {counts[category.id] ?? 0}
            </span>
            <ChevronRight
              className={cn(
                "size-4 shrink-0 text-muted-foreground transition-transform",
                isActive && "rotate-90 text-primary",
              )}
              aria-hidden="true"
            />
          </button>
        )
      })}
    </div>
  )
}
