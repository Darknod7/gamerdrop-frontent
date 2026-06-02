"use client"

import { Star, BadgeCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/marketplace-data"

const rarityStyles: Record<
  NonNullable<Product["rarity"]>,
  { ring: string; label: string; text: string }
> = {
  common: { ring: "ring-border", label: "Common", text: "text-muted-foreground" },
  rare: { ring: "ring-neon-blue/60", label: "Rare", text: "text-neon-blue" },
  epic: { ring: "ring-chart-3/70", label: "Epic", text: "text-chart-3" },
  legendary: { ring: "ring-gold/70", label: "Legendary", text: "text-gold" },
}

function formatRub(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value)
}

export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon
  const rarity = product.rarity ? rarityStyles[product.rarity] : null

  return (
    <button
      type="button"
      className={cn(
        "group relative flex w-full flex-col rounded-2xl bg-card p-4 text-left ring-1 transition-all",
        "hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]",
        product.isNft && rarity ? rarity.ring : "ring-border hover:ring-primary/50",
        product.isNft && product.rarity === "legendary" && "glow-gold",
      )}
    >
      {/* top row: icon + nft badge */}
      <div className="mb-3 flex items-start justify-between">
        <div
          className={cn(
            "flex size-11 items-center justify-center rounded-xl",
            product.isNft ? "bg-gold/15 text-gold" : "bg-primary/15 text-primary",
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </div>

        {product.isNft && (
          <div className="flex flex-col items-end gap-1">
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                "bg-secondary",
                rarity?.text,
              )}
            >
              {rarity?.label}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{product.serial}</span>
          </div>
        )}
      </div>

      {/* title */}
      <h3 className="text-pretty text-sm font-semibold leading-snug text-card-foreground">
        {product.title}
      </h3>

      {/* price */}
      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="text-lg font-bold leading-none text-gold text-glow-gold">
            {formatRub(product.priceRub)} ₽
          </p>
          <p
            className={cn(
              "mt-1 text-xs font-medium",
              product.altKind === "ton" ? "text-neon-blue" : "text-gold",
            )}
          >
            ≈ {product.altPrice}
          </p>
        </div>
      </div>

      {/* seller */}
      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <BadgeCheck className="size-3.5 text-neon-blue" aria-hidden="true" />
          <span className="truncate">{product.seller.name}</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium text-foreground">
          <Star className="size-3.5 fill-gold text-gold" aria-hidden="true" />
          {product.seller.rating.toFixed(1)}
        </div>
      </div>
    </button>
  )
}
