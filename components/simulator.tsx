import { Converter } from "./converter"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

export function Simulator() {
  return (
    <div className="dark:bg-dark h-96 w-80 rounded-lg border border-border bg-slate-50 dark:bg-slate-950">
      <Tabs defaultValue="enviar" className="p-1">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="enviar">Enviar</TabsTrigger>
          <TabsTrigger value="receber">Receber</TabsTrigger>
        </TabsList>

        <TabsContent value="enviar">
          <Converter tab="enviar" />
        </TabsContent>
        <TabsContent value="receber">
          <Converter tab="receber" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
