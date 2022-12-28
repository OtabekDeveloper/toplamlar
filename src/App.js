import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [amal, setAmal] = useState("1");
  const [natija, setNatija] = useState(" ");
  let array1 = [];
  let array2 = [];
  const clear = () => {
    setFirst("");
    setSecond("");
    setNatija("");
  };
  const hisobla = () => {
    array1 = first.split(",");
    array2 = second.split(",");
    let d = [];
    let foo = [];
    let fooA = [];
    let fooB = [];
    if (amal == "1") {
      let c = array1.concat(array2);
      d = c.filter((item, pos) => c.indexOf(item) === pos);
      setNatija(d);
    }
    if (amal == "2") {
      foo = [];
      if (array1.length >= array2.length) {
        for (let i = 0; i < array1.length; i++) {
          let son = array2.find((item) => item == array1[i]);
          if (son) {
            foo.push(son);
          }
        }
      }
      if (array1.length < array2.length) {
        for (let i = 0; i < array2.length; i++) {
          let son = array1.find((item) => item == array2[i]);
          if (son) {
            foo.push(son);
          }
        }
      }
      setNatija(foo);
    }

    if (amal == "3") {
      fooA = [];
      for (let i = 0; i < array1.length; i++) {
        let son = array2.find((item) => item == array1[i]);
        if (!son) {
          fooA.push(array1[i]);
        }
      }
      setNatija(fooA);
    }

    if (amal == "4") {
      fooB = [];
      for (let i = 0; i < array2.length; i++) {
        let son = array1.find((item) => item == array2[i]);
        if (!son) {
          fooB.push(array2[i]);
        }
      }
      setNatija(fooB);
    }

    if (amal == "5") {
      d = [];
      foo = [];
      let c = array1.concat(array2);
      d = c.filter((item, pos) => c.indexOf(item) === pos);
      if (array1.length >= array2.length) {
        for (let i = 0; i < array1.length; i++) {
          let son = array2.find((item) => item == array1[i]);
          if (son) {
            foo.push(son);
          }
        }
      }
      if (array1.length < array2.length) {
        for (let i = 0; i < array2.length; i++) {
          let son = array1.find((item) => item == array2[i]);
          if (son) {
            foo.push(son);
          }
        }
      }
      fooA = [];
      for (let i = 0; i < d.length; i++) {
        let son = foo.find((item) => item == d[i]);
        if (!son) {
          fooA.push(d[i]);
        }
      }
      setNatija(fooA);
    }
  };
  return (
    <div className="wrap">
      <div className="back">
        
      </div>
      <div className="content">
        <div className="title my-5">
          <div className="alert bg-white text-center fw-bold foo" role="alert">
            Ikki to'plam ustida amallar
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 text-center">
            <div className="one">
              <h4>A = </h4>
              <input
                className="form-control my-3"
                placeholder="misol  1,2,3,4"
                type="text"
                name="first"
                value={first}
                onChange={(e) => {
                  setFirst(e.target.value);
                }}
              />
            </div>
            <div className="one">
              <h4>B = </h4>
            <input
              className="form-control my-3"
              type="text"
              placeholder="misol  1,2,3,4"
              name="second"
              value={second}
              onChange={(e) => {
                setSecond(e.target.value);
              }}
            />
            </div>
            <div className="selectDrap">
              <select
                className="form-select my-3"
                value={amal}
                onChange={(e) => {
                  setAmal(e.target.value);
                }}
              >
                <option value="1">BIRLASHMA ( ∪ ) </option>
                <option value="2">KESISHMA ∩ </option>
                <option value="3">AYIRMA A \ B</option>
                <option value="4">AYIRMA B \ A</option>
                <option value="5">SIMMETRIK AYIRMA ∆ </option>
              </select>
            </div>
            <button className="btn btn-primary mx-3" onClick={() => hisobla()}>
              NATIJA
            </button>
            <button className="btn btn-primary mx-3" onClick={() => clear()}>
              TOZALASH
            </button>
            <h1>{
            amal=="1"?"A ∪ B =":amal=="2"?"A ∩ B =":amal=="3"?"A \ B =":amal=="4"?"B \ A =":amal=="5"?"A ∆ B =":""}  {`{${natija.length>0?natija:"Ø" || ""}}`}</h1>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
