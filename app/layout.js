import './globals.css'
import Navigation from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>App Next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
