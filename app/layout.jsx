import React from 'react'
import '@/assets/styles/global.css'
export const metadata = {
  title: 'Renatal application',
  description: 'find your dream rental home',
  keywords: 'rental, home, find, dream',
}
const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
       <div >
      <h1>{children}</h1>
    </div>
      </body>
    </html>
   )
}   
   
 

export default layout
