import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function Converter({ tab }: { tab: string }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {/* Pessoa Juridica ou Fisica */}
      <span className="text-sm font-semibold text-muted-foreground">como </span>
      <Select>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="pessoa física" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pf">pessoa física</SelectItem>
          <SelectItem value="pj">pessoa jurídica</SelectItem>
        </SelectContent>
      </Select>
      {/* Pessoa Juridica ou Fisica */}
    </div>
  )
}
