import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`

      setTimeout(() => {
        follower.style.left = `${e.clientX}px`
        follower.style.top = `${e.clientY}px`
      }, 100)
    }

    const handleClick = () => {
      follower.classList.add('cursor-follower-clicked')
      setTimeout(() => {
        follower.classList.remove('cursor-follower-clicked')
      }, 500)
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}

export default CustomCursor

