import { useState } from "react"

import { Icons } from "./icons"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export function Converter({ tab }: { tab: string }) {
  const [modality, setModality] = useState("")
  console.log(modality)
  return (
    <div className="p-2">
      <div className="-mr-4 flex flex-row items-center justify-center gap-2">
        {/* Pessoa Juridica ou Fisica */}
        <span className="text-sm font-semibold text-muted-foreground">
          como{" "}
        </span>
        <Select onValueChange={(value) => setModality(value)}>
          <SelectTrigger className="w-40 text-remessa">
            <SelectValue placeholder="pessoa física" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pf">pessoa física</SelectItem>
            <SelectItem value="pj">pessoa jurídica</SelectItem>
          </SelectContent>
        </Select>
        {/* Pessoa Juridica ou Fisica */}
      </div>
      {/* Converter */}
      <div className="p-2">
        <Label htmlFor="brl" className="text-sm font-semibold text-foreground">
          Você envia
        </Label>
        <div className="flex border-b-[1px] border-border focus-within:border-remessa">
          <div className="flex w-1/4 items-center justify-center gap-2 border-border focus-within:border-remessa">
            <Icons.brazil className="h-6 w-6" />
            <Label className="text-sm font-semibold">BRL</Label>
          </div>
          <Input
            className="w-3/4 border-border font-medium focus:border-remessa"
            type="number"
            maxLength={11}
            id="brl"
            defaultValue={5000}
          />
        </div>
      </div>
      <div className="p-2">
        <Label
          htmlFor="convert"
          className="text-sm font-semibold text-foreground"
        >
          Beneficiário recebe
        </Label>
        <div className="flex border-b-[1px] border-border focus-within:border-remessa">
          <div className="flex w-1/4 items-center justify-center gap-2 border-border focus-within:border-remessa">
            <Select onValueChange={(value) => null}>
              <SelectTrigger className="-mr-22 w-60">
                {/* <span className="flex items-center justify-center gap-2">
                  <Icons.eu className="h-6 w-6" />
                  <Label className="text-sm font-semibold ">EUR</Label>
                </span> */}
                <SelectValue></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eur">
                  <span className="flex items-center justify-center gap-2">
                    <Icons.eu className="h-6 w-6" />
                    <Label className="cursor-pointer text-sm font-semibold">
                      EUR
                    </Label>
                  </span>
                </SelectItem>
                <SelectItem value="usd">
                  <span className="flex items-center justify-center gap-2 pl-4">
                    <Icons.eu className="h-6 w-6" />
                    <Label className="curssor-pointer text-sm font-semibold">
                      USD
                    </Label>
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            className="w-3/4 border-border font-medium focus:border-remessa"
            type="number"
            maxLength={11}
            id="convert"
            defaultValue={100}
          />
        </div>
      </div>
    </div>
  )
}
