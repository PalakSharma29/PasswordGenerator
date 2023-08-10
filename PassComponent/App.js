import React,{useState} from 'react'
import './App.css'
import {numbers,upperCaseLetters,lowerCaseLetters,specialCharacters} from '.PassComponent/Character';

export default function App() {
    const[password,setPassword] = useState("")
    const[passwordLength,setPasswordLength] = useState(20)
    const[includeUppercase,setincludeUppercase] = useState(false)
    const[includeLowercase,setincludeLowercase] = useState(false)
    const[includeNumbers,setincludeNumbers] = useState(false)
    const[includeSymbols,setincludeSymbols] = useState(false)

    const handleGeneratePassword = (e)=>{
      let characterList = ''

      if(includeUppercase){
        characterList += upperCaseLetters
      }

      if(includeLowercase){
        characterList += lowerCaseLetters
      }

      if(includeNumbers){
        characterList += numbers
      }

      if(includeSymbols){
        characterList += specialCharacters
      }
     setPassword(createPassword(characterList))
    }

    const createPassword = (characterList) =>{
        let password = ''
        const characterListLength = characterList.length;

        for(let i=0; i<passwordLength; i++){
            const characterIndex = Math.round(Math.random() * characterListLength)
            password = password + characterList.charAt(characterIndex)
        }
        return password
    }

    const copyToClipboard = () =>{
        const newTextArea = document.createElement('textarea')
        newTextArea.innerText = password
        document.body.appendChild(newTextArea)
        newTextArea.select()
        document.execCommand('copy')
        newTextArea.remove()
    }

    const handleCopyPassword = (e) => {
       copyToClipboard()
    }

  return (
    <div className='App'>
        <div className="container">
            <div className="generator">
                <h2 className="generator__header">
                    Password generator
                </h2>
                <div className="generator__password">
                    <h3>{password}</h3>
                    <button  onClick={handleCopyPassword} className='copy__btn'>
                        <i className='far fa-clipboard'></i>
                    </button>
                </div>

            <div className="form-group">
                <label htmlFor="password-strength">Password length</label>
                <input defaultValue={passwordLength} 
                onChange={(e) => {setPasswordLength(e.target.value)}}
                type="number" 
                id="password-strength" 
                name="password-strength" 
                max="16" 
                min="8"/>
            </div>

            <div className="form-group">
                <label htmlFor="uppercase-letters">Include uppercase-letters</label>
                <input 
                checked={includeUppercase}
                onChange={(e) =>{setincludeUppercase(e.target.value)}}
                type="checkbox" 
                id="uppercase-letters"
                 name="uppercase-letters"/>
            </div>

            <div className="form-group">
                <label htmlFor="lowercase-letters">Include lowercase-letters</label>
                <input 
                checked={includeLowercase} 
                onChange={(e) =>{setincludeLowercase(e.target.value)}}
                type="checkbox" 
                id="lowercase-letters"
                 name="lowercase-letters"/>
            </div>

            <div className="form-group">
                <label htmlFor="include-numbers">Include numbers</label>
                <input 
                 checked={includeNumbers} 
                 onChange={(e) =>{setincludeNumbers(e.target.value)}}
                 type="checkbox" 
                 id="include-numbers"
                name="include-numbers"/>
            </div>

            <div className="form-group">
                <label htmlFor="include-symbols">Include symbols</label>
                <input 
                checked={includeSymbols} 
                onChange={(e) =>{setincludeSymbols(e.target.value)}}
                type="checkbox" 
                id="include-symbols" 
                name="include-symbols"/>
            </div>
            
            <button  onClick ={handleGeneratePassword} className="generator__btn">
                Generate Button
            </button>
            </div>
        </div>
    </div>
  )
}
