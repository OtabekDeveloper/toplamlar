import {useState , useEffect} from 'react'
import "./App.css"
function App() {
  const [first , setFirst] = useState('')
  const [second , setSecond] = useState('')
  const [amal , setAmal] = useState('0')
  const [natija , setNatija] = useState('')
  const hisobla = () => {
    let array1 = first.split(",")
    let array2 = second.split(",")  
    let d= []
    let foo = []
    let fooA = []
    let fooB = []

    if(amal == "0"){
      let c = array1.concat(array2)
       d = c.filter((item, pos) => c.indexOf(item) === pos)
      setNatija(d)
    }

    if(amal == "1"){
       foo = []
      if(array1.length>=array2.length){
        for(let i=0; i<array1.length; i++){
          let son =  array2.find(item => item == array1[i])
          if(son){
            foo.push(son)
          }
        }
      }
      if(array1.length<array2.length){
        for(let i=0; i<array2.length; i++){
          let son =  array1.find(item => item == array2[i])
          if(son){
            foo.push(son)
          }
        }
      }
      setNatija(foo)
    }

    if(amal == "2"){
       fooA = []
      for(let i=0; i<array1.length; i++){
        let son =  array2.find(item => item == array1[i])
        if(!son){
          fooA.push(array1[i])
        }
      }
      setNatija(fooA)
    }

    if(amal == "3"){
     fooB = []
      for(let i=0; i<array2.length; i++){
        let son =  array1.find(item => item == array2[i])
        if(!son){
          fooB.push(array2[i])
        }
      }
      setNatija(fooB)
    }

    if(amal == "4"){
       d= []
       foo = []
      let c = array1.concat(array2)
      d = c.filter((item, pos) => c.indexOf(item) === pos)
      if(array1.length>=array2.length){
        for(let i=0; i<array1.length; i++){
          let son =  array2.find(item => item == array1[i])
          if(son){
            foo.push(son)
          }
        }
      }
      if(array1.length<array2.length){
        for(let i=0; i<array2.length; i++){
          let son =  array1.find(item => item == array2[i])
          if(son){
            foo.push(son)
          }
        }
      }
      fooA = []
      for(let i=0; i<d.length; i++){
        let son =  foo.find(item => item == d[i])
        if(!son){
          fooA.push(d[i])
        }
      }
      setNatija(fooA)
    }
  }
  return (
    <> 
      <div className="title my-5">
        <div className="alert alert-primary text-center foo" role="alert">
          To'plamlar ustida amallar
        </div>
      </div>
      <div className="row d-flex justify-content-center">
          <div className="col-md-5 text-center">
            <h2>Birinchi to'plam</h2>
            <input
              className='form-control my-3'
              placeholder='example  1,2,3,4' 
              type="text"
              name='first'
              value={first}
              onChange={(e)=> {setFirst(e.target.value)}}
            />
            <h2>Ikkinchi to'plam</h2>
            <input 
              className='form-control my-3'
              type="text"
              placeholder='example  1,2,3,4'
              name='second'
              value={second}
              onChange={(e)=> {setSecond(e.target.value)}}
            />
            <select 
              className='form-select w-25' 
              value={amal}
              onChange={(e)=> {
                console.log(e.target.value, "ddd")
                setAmal(e.target.value)}}
            >
              <option value="0"> + </option>
              <option value="1"> - </option>
              <option value="2"> A \ B </option>
              <option value="3"> B \ A </option>
              <option value="4"> ∆ </option>
            </select>
            <button className='btn btn-primary' onClick={()=>hisobla()}>Natija</button>
            <h1>{`{${natija || "Natija"}}`}</h1>
          </div>
          
      </div>
    </>
  );
}

export default App;
