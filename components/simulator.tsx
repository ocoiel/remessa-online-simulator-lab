"use client"

import { useEffect, useRef, useState } from "react"

import { Converter } from "./converter"

// import { Tabs } from "./tabs"

const tabsData = [
  {
    label: "Enviar",
  },
  {
    label: "Receber",
  },
]

export function Simulator() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)

  const tabsRef = useRef<HTMLButtonElement[]>([])

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current![activeTabIndex]

      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
    }

    setTabPosition()
    window.addEventListener("resize", setTabPosition)

    return () => window.removeEventListener("resize", setTabPosition)
  }, [activeTabIndex])

  console.log(activeTabIndex)

  return (
    <div className="h-96 w-80 rounded-lg border border-border bg-white dark:bg-slate-950">
      {/* <Tabs /> */}
      <div className="relative">
        <div className="flex w-full space-x-3">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el: HTMLButtonElement) => (tabsRef.current[idx] = el)}
                className="w-1/2 p-5 font-semibold text-gray-500 transition-colors duration-200 focus:text-remessa"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-remessa transition-all duration-200"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <Converter tab="enivar" />
    </div>
  )
}
