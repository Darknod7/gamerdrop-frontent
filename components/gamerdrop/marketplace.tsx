"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import {
  blocks,
  categories,
  products,
  type BlockId,
} from "@/lib/marketplace-data"
import { Logo } from "./logo"
import { BlockSwitcher } from "./block-switcher"
import { CategoryList } from "./category-list"
import { ProductCard } from "./product-card"
import { BottomNav } from "./bottom-nav"

export function Marketplace() {
  const [activeBlock, setActiveBlock] = useState<BlockId>("web3")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("home")

  const counts = useMemo(() => {
    const map: Record<string, number> = {}
    for (const p of products) {
      map[p.categoryId] = (map[p.categoryId] ?? 0) + 1
    }
    return map
  }, [])

  const blockCategories = categories.filter((c) => c.block === activeBlock)
  const block = blocks.find((b) => b.id === activeBlock)!

  const visibleProducts = activeCategory
    ? products.filter((p) => p.categoryId === activeCategory)
    : products.filter((p) => p.block === activeBlock)

  function handleBlockChange(id: BlockId) {
    setActiveBlock(id)
    setActiveCategory(null)
  }

  function handleCategorySelect(id: string) {
    setActiveCategory((prev) => (prev === id ? null : id))
  }

  return (
    <div className="mx-auto min-h-screen w-full max-w-md bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 px-4 pb-3 pt-5 backdrop-blur">
        <Logo />
        <p className="mt-1 text-center text-xs text-muted-foreground">
          Web3 маркетплейс игровых ценностей
        </p>

        {/* Search */}
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5">
          <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            placeholder="Поиск товаров и продавцов..."
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>
      </header>

      <main className="px-4 pt-4">
        {/* Block switcher */}
        <section aria-label="Категории игр">
          <BlockSwitcher active={activeBlock} onChange={handleBlockChange} />
        </section>

        {/* Active block heading */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">{block.name}</h2>
            <p className="text-xs text-muted-foreground">{block.tagline}</p>
          </div>
          {activeCategory && (
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className="text-xs font-semibold text-neon-blue"
            >
              Все категории
            </button>
          )}
        </div>

        {/* Categories */}
        <section aria-label="Категории товаров" className="mt-3">
          <CategoryList
            categories={blockCategories}
            activeId={activeCategory}
            onSelect={handleCategorySelect}
            counts={counts}
          />
        </section>

        {/* Products */}
        <section aria-label="Товары" className="mt-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              {activeCategory
                ? blockCategories.find((c) => c.id === activeCategory)?.name
                : "Популярное"}
            </h3>
            <span className="text-xs text-muted-foreground">
              {visibleProducts.length} шт.
            </span>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-dashed border-border bg-card/50 p-6 text-center text-sm text-muted-foreground">
              В этой категории пока нет товаров.
            </p>
          )}
        </section>
      </main>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
