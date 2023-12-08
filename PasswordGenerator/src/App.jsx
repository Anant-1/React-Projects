/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [isNumAllowed, setNumAllowed] = useState(false)
  const [isCharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(isNumAllowed) str += '0123456789'
    if(isCharAllowed) str += '!@#$%^&*'
    for(let i = 0; i < length; i++){
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)

  },[length, isNumAllowed, isCharAllowed, setPassword])
  
  useEffect(()=>{
    passwordGenerator()
  },[length, isNumAllowed, isCharAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 p-3">
      <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              id="lengthInput"
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={e => setLength(Number(e.target.value))}
            />
            <label htmlFor="lengthInput">Length: {length}</label>
            <input
              type="checkbox"
              defaultChecked={isNumAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={()=> { 
                setNumAllowed((prev)=> !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="characterInput"
              className="cursor-pointer"
              onChange={()=> { 
                setCharAllowed((prev)=> !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
