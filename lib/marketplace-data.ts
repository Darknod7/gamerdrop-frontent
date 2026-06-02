import type { LucideIcon } from "lucide-react"
import {
  Send,
  Skull,
  Shield,
  Sparkles,
  Crown,
  Star,
  Phone,
  AtSign,
  Repeat,
  Gem,
  UserRound,
  TrendingUp,
  Coins,
  Swords,
  Medal,
} from "lucide-react"

export type BlockId = "web3" | "brawl" | "standoff"

export type Block = {
  id: BlockId
  name: string
  tagline: string
  icon: LucideIcon
  accent: "blue" | "gold" | "red"
}

export type Category = {
  id: string
  block: BlockId
  name: string
  description: string
  icon: LucideIcon
}

export type Seller = {
  name: string
  rating: number
  deals: number
}

export type Product = {
  id: string
  categoryId: string
  block: BlockId
  title: string
  icon: LucideIcon
  priceRub: number
  /** secondary currency label, e.g. "12.4 TON" or "850 Stars" */
  altPrice: string
  altKind: "ton" | "stars"
  seller: Seller
  /** for NFT gift cards */
  isNft?: boolean
  serial?: string
  rarity?: "common" | "rare" | "epic" | "legendary"
}

export const blocks: Block[] = [
  {
    id: "web3",
    name: "Telegram Web3",
    tagline: "NFT, Premium, Stars и Fragment",
    icon: Send,
    accent: "blue",
  },
  {
    id: "brawl",
    name: "Brawl Stars",
    tagline: "Гемы, аккаунты и буст",
    icon: Skull,
    accent: "gold",
  },
  {
    id: "standoff",
    name: "Standoff 2",
    tagline: "Голда, скины и звания",
    icon: Shield,
    accent: "red",
  },
]

export const categories: Category[] = [
  // Telegram Web3
  {
    id: "nft",
    block: "web3",
    name: "Купить / Продать NFT",
    description: "Маркетплейс подарков, стикеров и аватаров на TON",
    icon: Sparkles,
  },
  {
    id: "premium",
    block: "web3",
    name: "Telegram Premium",
    description: "Подписки гифтами на 3, 6 и 12 месяцев",
    icon: Crown,
  },
  {
    id: "stars",
    block: "web3",
    name: "Telegram Stars",
    description: "Звёзды напрямую на ваш баланс",
    icon: Star,
  },
  {
    id: "numbers",
    block: "web3",
    name: "Красивые Номера (+888)",
    description: "Анонимные номера Fragment",
    icon: Phone,
  },
  {
    id: "usernames",
    block: "web3",
    name: "Юзернеймы (@NFT)",
    description: "Коллекционные NFT никнеймы",
    icon: AtSign,
  },
  {
    id: "rent",
    block: "web3",
    name: "Аренда NFT",
    description: "Возьмите или сдайте подарки и юзернеймы",
    icon: Repeat,
  },
  // Brawl Stars
  {
    id: "gems",
    block: "brawl",
    name: "Гемы / Донат",
    description: "Внутриигровая валюта и Brawl Pass",
    icon: Gem,
  },
  {
    id: "brawl-accounts",
    block: "brawl",
    name: "Аккаунты",
    description: "Готовые профили с бравлерами",
    icon: UserRound,
  },
  {
    id: "brawl-boost",
    block: "brawl",
    name: "Буст / Кубки",
    description: "Прокачка кубков и рангов",
    icon: TrendingUp,
  },
  // Standoff 2
  {
    id: "gold",
    block: "standoff",
    name: "Голда (Валюта)",
    description: "Золото через передачу скинов",
    icon: Coins,
  },
  {
    id: "standoff-accounts",
    block: "standoff",
    name: "Аккаунты",
    description: "Аккаунты со скинами и ножами",
    icon: Swords,
  },
  {
    id: "standoff-boost",
    block: "standoff",
    name: "Буст / Звания",
    description: "Прокачка рангов в соревновательном",
    icon: Medal,
  },
]

export const products: Product[] = [
  // NFT gifts
  {
    id: "p1",
    categoryId: "nft",
    block: "web3",
    title: "Plush Pepe — NFT Gift",
    icon: Sparkles,
    priceRub: 89900,
    altPrice: "412 TON",
    altKind: "ton",
    seller: { name: "@toncollector", rating: 4.9, deals: 312 },
    isNft: true,
    serial: "#1245",
    rarity: "legendary",
  },
  {
    id: "p2",
    categoryId: "nft",
    block: "web3",
    title: "Durov's Cap — NFT Gift",
    icon: Sparkles,
    priceRub: 41500,
    altPrice: "190 TON",
    altKind: "ton",
    seller: { name: "@giftvault", rating: 4.8, deals: 154 },
    isNft: true,
    serial: "#0087",
    rarity: "epic",
  },
  {
    id: "p3",
    categoryId: "nft",
    block: "web3",
    title: "Diamond Ring — NFT Gift",
    icon: Sparkles,
    priceRub: 12300,
    altPrice: "56 TON",
    altKind: "ton",
    seller: { name: "@nft_andrey", rating: 4.7, deals: 89 },
    isNft: true,
    serial: "#3920",
    rarity: "rare",
  },
  // Premium
  {
    id: "p4",
    categoryId: "premium",
    block: "web3",
    title: "Telegram Premium — 12 мес.",
    icon: Crown,
    priceRub: 2490,
    altPrice: "11.4 TON",
    altKind: "ton",
    seller: { name: "@premshop", rating: 5.0, deals: 1204 },
  },
  {
    id: "p5",
    categoryId: "premium",
    block: "web3",
    title: "Telegram Premium — 3 мес.",
    icon: Crown,
    priceRub: 890,
    altPrice: "4.1 TON",
    altKind: "ton",
    seller: { name: "@premshop", rating: 5.0, deals: 1204 },
  },
  // Stars
  {
    id: "p6",
    categoryId: "stars",
    block: "web3",
    title: "5 000 Telegram Stars",
    icon: Star,
    priceRub: 4990,
    altPrice: "5 000 Stars",
    altKind: "stars",
    seller: { name: "@stars_market", rating: 4.9, deals: 642 },
  },
  {
    id: "p7",
    categoryId: "stars",
    block: "web3",
    title: "1 000 Telegram Stars",
    icon: Star,
    priceRub: 1090,
    altPrice: "1 000 Stars",
    altKind: "stars",
    seller: { name: "@stars_market", rating: 4.9, deals: 642 },
  },
  // Numbers
  {
    id: "p8",
    categoryId: "numbers",
    block: "web3",
    title: "+888 0001 2345",
    icon: Phone,
    priceRub: 7800,
    altPrice: "36 TON",
    altKind: "ton",
    seller: { name: "@fragment_pro", rating: 4.8, deals: 73 },
  },
  // Usernames
  {
    id: "p9",
    categoryId: "usernames",
    block: "web3",
    title: "@crypto — NFT Username",
    icon: AtSign,
    priceRub: 154000,
    altPrice: "705 TON",
    altKind: "ton",
    seller: { name: "@name_king", rating: 5.0, deals: 41 },
    isNft: true,
    serial: "#0001",
    rarity: "legendary",
  },
  // Rent
  {
    id: "p10",
    categoryId: "rent",
    block: "web3",
    title: "Аренда Plush Pepe — 7 дней",
    icon: Repeat,
    priceRub: 3500,
    altPrice: "16 TON",
    altKind: "ton",
    seller: { name: "@rentgift", rating: 4.6, deals: 28 },
  },
  // Gems
  {
    id: "p11",
    categoryId: "gems",
    block: "brawl",
    title: "2 000 Гемов + Brawl Pass",
    icon: Gem,
    priceRub: 1990,
    altPrice: "9.1 TON",
    altKind: "ton",
    seller: { name: "@brawl_donate", rating: 4.9, deals: 880 },
  },
  {
    id: "p12",
    categoryId: "gems",
    block: "brawl",
    title: "950 Гемов",
    icon: Gem,
    priceRub: 990,
    altPrice: "4.5 TON",
    altKind: "ton",
    seller: { name: "@brawl_donate", rating: 4.9, deals: 880 },
  },
  // Brawl accounts
  {
    id: "p13",
    categoryId: "brawl-accounts",
    block: "brawl",
    title: "Аккаунт 45k кубков, все бравлеры",
    icon: UserRound,
    priceRub: 8500,
    altPrice: "39 TON",
    altKind: "ton",
    seller: { name: "@acc_seller", rating: 4.7, deals: 132 },
  },
  // Brawl boost
  {
    id: "p14",
    categoryId: "brawl-boost",
    block: "brawl",
    title: "Буст кубков +5 000",
    icon: TrendingUp,
    priceRub: 1200,
    altPrice: "5.5 TON",
    altKind: "ton",
    seller: { name: "@boost_master", rating: 4.8, deals: 210 },
  },
  // Standoff gold
  {
    id: "p15",
    categoryId: "gold",
    block: "standoff",
    title: "10 000 Голды",
    icon: Coins,
    priceRub: 1490,
    altPrice: "6.8 TON",
    altKind: "ton",
    seller: { name: "@gold_so2", rating: 4.9, deals: 540 },
  },
  // Standoff accounts
  {
    id: "p16",
    categoryId: "standoff-accounts",
    block: "standoff",
    title: "Аккаунт с ножом Karambit Fade",
    icon: Swords,
    priceRub: 22000,
    altPrice: "101 TON",
    altKind: "ton",
    seller: { name: "@skins_shop", rating: 4.8, deals: 96 },
  },
  // Standoff boost
  {
    id: "p17",
    categoryId: "standoff-boost",
    block: "standoff",
    title: "Буст до ранга Легенда",
    icon: Medal,
    priceRub: 3200,
    altPrice: "14.7 TON",
    altKind: "ton",
    seller: { name: "@rank_boost", rating: 4.7, deals: 188 },
  },
]
