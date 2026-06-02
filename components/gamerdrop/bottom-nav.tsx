"use client"

import { Home, Handshake, Plus, User } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { id: "home", label: "Главная", icon: Home },
  { id: "deals", label: "Мои сделки", icon: Handshake },
  { id: "sell", label: "Продать", icon: Plus, primary: true },
  { id: "profile", label: "Профиль", icon: User },
] as const

export function BottomNav({
  active,
  onChange,
}: {
  active: string
  onChange: (id: string) => void
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-sidebar/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id

          if (item.primary) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange(item.id)}
                className="flex flex-col items-center gap-1"
              >
                <span className="flex size-12 -translate-y-3 items-center justify-center rounded-full bg-gold text-accent-foreground glow-gold transition-transform active:scale-95">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="-mt-2 text-[10px] font-medium text-gold">{item.label}</span>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 transition-colors",
                isActive ? "text-neon-blue" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="size-5" aria-hidden="true" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
