import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const[length, setLength] = useState(8)
  const[num, setNum] = useState(false)
  const[char, setChar] = useState(false)
  const[password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(num) str += "0123456789"
    if(char) str += "!#$%&'()*+,-./:;<=>?@[$$^_\{|}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length, num, char, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  }, 
[password])

  useEffect(()=> {
    passwordGenerator()
  }, [length, num, char, passwordGenerator])
  return (
    <>
     
     <div className='w-full max-w-md mx-auto rounded-xl shadow-md px-4 py-2 my-8 text-orange-500 bg-slate-600 mb-6'>
      <h1
      className='text-white text-center my-3'
      ><b>Password Generato</b>r</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className=' outline-none w-full py-2 px-3 '
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range"  
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={num}
          id='numberInput'
          onChange={() => setNum(prev => !prev)}

          /> 
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={char}
          id='charInput'
          onChange={() => setChar(prev => !prev)}

          /> 
          <label htmlFor='charInput'>Characters</label>
        </div>          

      </div>
     </div>

     
    </>
  )
}

export default App
