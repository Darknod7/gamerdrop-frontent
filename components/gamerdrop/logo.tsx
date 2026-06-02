import { Gamepad2 } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex size-8 items-center justify-center rounded-lg bg-gold/15 text-gold glow-gold">
        <Gamepad2 className="size-5" aria-hidden="true" />
      </div>
      <h1 className="text-2xl font-extrabold tracking-tight text-gold text-glow-gold">
        GamerDrop
      </h1>
    </div>
  )
}
