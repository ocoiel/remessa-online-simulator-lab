import { Converter } from "./converter"

export function Simulator() {
  return (
    <div className="dark:bg-dark h-96 w-80 rounded-lg border border-border bg-slate-50 dark:bg-slate-950">
      <Converter tab="enivar" />
    </div>
  )
}
