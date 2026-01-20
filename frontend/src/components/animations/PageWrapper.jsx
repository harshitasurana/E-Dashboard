import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const PageWrapper = ({ children }) => {
  const overlayRef = useRef(null)
  const pageRef = useRef(null)
  const location = useLocation()

  useGSAP(
    () => {
      const panels = overlayRef.current.children

      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

      // reset
      tl.set(overlayRef.current, { display: 'flex' })
      tl.set(panels, { y: '-100%' })

      // panels slide down
      tl.to(panels, {
        y: '0%',
        duration: 0.45,
        stagger: 0.05,
      })

      // hide old page
      tl.set(pageRef.current, { opacity: 0 })

      // panels slide out
      tl.to(panels, {
        y: '100%',
        duration: 0.45,
        stagger: 0.05,
      })

      // cleanup
      tl.set(overlayRef.current, { display: 'none' })
      tl.set(panels, { y: '-100%' })

      // reveal new page
      tl.to(pageRef.current, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
      })
    },
    { dependencies: [location.pathname] }
  )

  return (
    <div className="relative overflow-hidden">

      {/* Overlay Panels */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 hidden"
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-black/70 backdrop-blur-md"
          />
        ))}
      </div>

      {/* Page Content */}
      <div ref={pageRef}>
        {children}
      </div>

    </div>
  )
}

export default PageWrapper
