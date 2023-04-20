import { Converter } from "./converter"
import { Tabs } from "./tabs"

export function Simulator() {
  return (
    <div className="h-96 w-80 rounded-lg border border-border bg-white dark:bg-slate-950">
      <Tabs />
      <Converter tab="enivar" />
    </div>
  )
}
