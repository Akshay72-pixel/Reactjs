
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

const ReactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "CLick me to visit google"
}

function MyApp(){
    return (<>
    <div>
        <h1>Custom React App</h1>
    </div>
    </>)
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const AreactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'click to visit google'
)

createRoot(document.getElementById('root')).render(
    
    <App/>
   
)
