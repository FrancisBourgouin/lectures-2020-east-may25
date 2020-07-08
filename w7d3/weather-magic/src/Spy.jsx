import React, { useEffect } from 'react'

export const Spy = () => {
  // useEffect(() => {
  //   document.addEventListener('click', e => console.log(e))
  //   console.log("Click event added")
  // }, [])

  // Scenario 1 : Dependency arr, no cleanup
  // Click on city, spy component loaded
  // attach a click event listener
  // Click on other city
  // Nothing happens, since dep array is empty
  // click on reset
  // Spy component disappears
  // click event listener still there
  // Click on city again
  // Spy component is loaded
  // add a new click event listener
  // Now we have two event listeners on click


  useEffect(() => {
    const consoleThatClick = e => console.log(e)
    document.addEventListener('click', consoleThatClick)
    console.log("Click event added")

    return () => {
      document.removeEventListener('click', consoleThatClick)
      console.log("Click event removed")
    }

  }, [])

  // Scenario 2 : Dependency arr, cleanup
  // Click on city, spy component loaded
  // attach a click event listener
  // Click on other city
  // remove click event listener (cleanup)
  // attach a click event listener
  // click on reset
  // Spy component disappears
  // remove click event listener (cleanup)
  // click event listener is gone
  // Click on city again
  // Spy component is loaded
  // remove click event listener (cleanup)
  // attach a click event listener
  return (
    <section>
      <h1>I AM TOTALLY NOT SPYING.... *WINK* *WINK*</h1>
    </section>
  )
}