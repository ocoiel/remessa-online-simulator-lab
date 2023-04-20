import { Simulator } from "@/components/simulator"

export default function IndexPage() {
  return (
    <section className="container grid grid-rows-2 items-center gap-6 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Remessa Online <br className="hidden sm:inline" />
          transferência internacional pelo menor preço e sem burocracia
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Recriando os principais componentes do site do Remessa Online,
          incluindo o simulador. Feito usando Next.js v13 (app dir) e
          TailwindCSS
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Simulator />
      </div>
    </section>
  )
}
