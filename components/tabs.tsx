"use client"

import { useEffect, useRef, useState } from "react"

const tabsData = [
  {
    label: "Enviar",
  },
  {
    label: "Receber",
  },
]

function Tabs() {
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

  return (
    <>
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
    </>
  )
}

export { Tabs }
