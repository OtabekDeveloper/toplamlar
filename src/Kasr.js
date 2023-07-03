import { useState } from 'react';
import "./style.css"
import { fraction , multiply} from "mathjs"
function Kasr(){
    const [s1 , setS1] = useState("")   
    const [s2 , setS2] = useState("")   
    const [m1 , setM1] = useState("")   
    const [m2 , setM2] = useState("")   

    const [bol, setBol] = useState("")

    const [amal , setAmal] = useState('0')

    const [n1 , setN1] = useState(0)
    const [n2 , setN2] = useState(0)
    const [taq , setTaq] = useState(0)
    const [nats , setNats] = useState("")
    const [natm , setNatm] = useState("")
    const [bS , setBs] = useState("")
    const [bM , setBm] = useState("")

    const [kops , setKops] = useState("")
    const [kopm , setKopm] = useState("")

    const Demo = () => {
        if(amal == 0){
            if(s1*1>m1*1){  
                setN1(1)
            }else {
                setN1(2)
            }
            if(s2*1>m2*1){
                setN2(1)
            }else{
                setN2(2)
            }
        }
        if(amal == 1){
            if(s1/m1 > s2/m2){
                let ma;
                function Ekuk(x, y) {
                    if ((typeof x !== 'number') || (typeof y !== 'number')) 
                     return false;
                   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
                 }
                 
                 function gcd_two_numbers(x, y) {
                   x = Math.abs(x);
                   y = Math.abs(y);
                   while(y) {
                     var t = y;
                     y = x % y;
                     x = t;
                   }
                   return x;
                 }
                 ma = Ekuk(m1*1,m2*1)
                 setNatm(ma)
                 setTaq(1)
            }
            if(s1/m1 == s2/m2){
                let ma;
                function Ekuk(x, y) {
                    if ((typeof x !== 'number') || (typeof y !== 'number')) 
                     return false;
                   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
                 }
                 
                 function gcd_two_numbers(x, y) {
                   x = Math.abs(x);
                   y = Math.abs(y);
                   while(y) {
                     var t = y;
                     y = x % y;
                     x = t;
                   }
                   return x;
                 }
                 ma = Ekuk(m1*1,m2*1)
                 setNatm(ma)
                 setTaq(1)
                setTaq(2)
            }
            if(s1/m1 < s2/m2){
                let ma;
                function Ekuk(x, y) {
                    if ((typeof x !== 'number') || (typeof y !== 'number')) 
                     return false;
                   return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
                 }
                 
                 function gcd_two_numbers(x, y) {
                   x = Math.abs(x);
                   y = Math.abs(y);
                   while(y) {
                     var t = y;
                     y = x % y;
                     x = t;
                   }
                   return x;
                 }
                 ma = Ekuk(m1*1,m2*1)
                 setNatm(ma)
                 setTaq(1)
                setTaq(3)
            }
        }
        if(amal == 2){
            let su;
            let ma;
            function Ekuk(x, y) {
                if ((typeof x !== 'number') || (typeof y !== 'number')) 
                 return false;
               return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
             }
             
             function gcd_two_numbers(x, y) {
               x = Math.abs(x);
               y = Math.abs(y);
               while(y) {
                 var t = y;
                 y = x % y;
                 x = t;
               }
               return x;
             }
            ma = Ekuk(m1*1,m2*1)
            su = (ma/(m1*1))*(s1*1) + (ma/(m2*1))*(s2*1)
            setNats(su)
            setNatm(ma)
        }
        if(amal == 3){
            let su;
            let ma;
            function Ekuk(x, y) {
                if ((typeof x !== 'number') || (typeof y !== 'number')) 
                 return false;
               return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
             }
             
             function gcd_two_numbers(x, y) {
               x = Math.abs(x);
               y = Math.abs(y);
               while(y) {
                 var t = y;
                 y = x % y;
                 x = t;
               }
               return x;
             }
            ma = Ekuk(m1*1,m2*1)
            su = (ma/(m1*1))*(s1*1) - (ma/(m2*1))*(s2*1)
            setNats(su)
            setNatm(ma)
        }
        if(amal == 4){
            setKops(s1*s2);
            setKopm(m1*m2)
            function EKUB(a, b) {
                while(a != b){
                    if(a > b) {
                        a -= b;
                    }
                    else {
                        b -= a;
                    }
                }
                return a;
          }
        let foo = EKUB(s1*s2 , m1*m2)
          if(foo !== 1){
            setBs(s1*s2/foo)
            setBm(m1*m2/foo)
          }
        }
        if(amal == 5){
            // let result = multiply(fraction(s1*m2),fraction(m1*s2))
            // console.log(result)
            // setBol(result)
            setKops(1)
            function EKUB(a, b) {
                while(a != b){
                    if(a > b) {
                        a -= b;
                    }
                    else {
                        b -= a;
                    }
                }
                return a;
          }
          let foo = EKUB(s1*m2 , s2*m1)
          setBol(foo)
          console.log(foo)
        }
    }

    return(
        <div className='full' style={{ 
            backgroundImage: `url("./2.jfif")` 
          }}>
            <div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <h3>Kasrlar ustida amallar</h3>
                    <div className="row">
                        <div className="col-2 d-flex justify-content-center">
                            <div className="kasr1">
                                <input 
                                    type="text" 
                                    className='sonlar'
                                    placeholder='a'
                                    name="first"
                                    value={s1}
                                    onChange={(e) => {
                                    setS1(e.target.value);
                                    }}
                                />
                                <hr />
                                <input 
                                    type="text" 
                                    className='sonlar'
                                    placeholder='b'
                                    value={m1}
                                    onChange={(e) => {
                                    setM1(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-3 na">
                            {n1==""?"":n1==1?"Noto'g'ri kasr":"To'g'ri kasr"}
                        </div>
                        <div className="col-2 d-flex justify-content-center">
                            <div className="kasr1">
                                <input 
                                    type="text" 
                                    className='sonlar'
                                    placeholder='c'
                                    value={s2}
                                    onChange={(e) => {
                                    setS2(e.target.value);
                                    }}
                                />
                                <hr />
                                <input 
                                    type="text" 
                                    className='sonlar'
                                    placeholder='d'
                                    value={m2}
                                    onChange={(e) => {
                                    setM2(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-3 na">
                            {n2==""?"":n2==1?"Noto'g'ri kasr":"To'g'ri kasr"}
                        </div>
                    </div>
                    <div className="sele">
                        <select 
                            className='form-select'
                            name="" 
                            id=""
                            value={amal}
                            onChange={(e) => {
                                    setAmal(e.target.value);
                                }
                            }
                        >
                            <option value="0">Kasr turi</option>
                            <option value="1">Taqqoslash</option>
                            <option value="2">a + b</option>
                            <option value="3">a - b </option>
                            <option value="4">a * b </option>
                            <option value="5">a / b </option>
                        </select>
                    </div>
                    <button className='btn btn-primary' onClick={() => Demo()}>Natija</button>
                        {
                            amal==0?"":
                            amal==1?
                                taq==0?"":
                                taq==1?
                                <div className='natija mt-5 col-md-8'>
                                    <div className="kasss natija d-flex align-items-center">
                                        <div className="kas1">
                                            <h3> {s1} <hr /> {m1}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas2">
                                            <h3>{s1}*{natm/m1}</h3>
                                            <hr />  
                                            <h3>{m1}*{natm/m1}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas1">
                                            <h3> {s1*natm/m1} <hr /> {natm}</h3>
                                        </div>
                                        <h1 className='m-3'>{""}</h1>
                                        <div className="kas1">
                                            <h3> {s2} <hr /> {m2}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas2">
                                            <h3>{s2}*{natm/m2}</h3>
                                            <hr />  
                                            <h3>{m2}*{natm/m2}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas1">
                                            <h3> {s2*natm/m2} <hr /> {natm}</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="nasss d-flex align-items-center justify-content-center">
                                        <div className="kas1 d-inline-block">
                                            <h3> {s1*natm/m1} <hr /> {natm}</h3>
                                        </div>
                                        <h3 className='amall d-inline-block'>{">"}</h3>
                                        <div className="kas1 d-inline-block">
                                            <h3> {s2*natm/m2} <hr /> {natm}</h3>
                                        </div>
                                    </div>
                                </div>
                                :
                                taq==2?
                                <div className='natija mt-5 col-md-8'>
                                    <div className="kasss natija d-flex align-items-center">
                                        <div className="kas1">
                                            <h3> {s1} <hr /> {m1}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas2">
                                            <h3>{s1}*{natm/m1}</h3>
                                            <hr />  
                                            <h3>{m1}*{natm/m1}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas1">
                                            <h3> {s1*natm/m1} <hr /> {natm}</h3>
                                        </div>
                                        <h1 className='m-3'>{""}</h1>
                                        <div className="kas1">
                                            <h3> {s2} <hr /> {m2}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas2">
                                            <h3>{s2}*{natm/m2}</h3>
                                            <hr />  
                                            <h3>{m2}*{natm/m2}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas1">
                                            <h3> {s2*natm/m2} <hr /> {natm}</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="nasss d-flex align-items-center justify-content-center">
                                        <div className="kas1 d-inline-block">
                                            <h3> {s1*natm/m1} <hr /> {natm}</h3>
                                        </div>
                                        <h3 className='amall d-inline-block'>{"="}</h3>
                                        <div className="kas1 d-inline-block">
                                            <h3> {s2*natm/m2} <hr /> {natm}</h3>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='natija mt-5 col-md-8'>
                                    <div className="kasss natija d-flex align-items-center">
                                        <div className="kas1">
                                            <h3> {s1} <hr /> {m1}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas2">
                                            <h3>{s1}*{natm/m1}</h3>
                                            <hr />  
                                            <h3>{m1}*{natm/m1}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas1">
                                            <h3> {s1*natm/m1} <hr /> {natm}</h3>
                                        </div>
                                        <h1 className='m-3'>{""}</h1>
                                        <div className="kas1">
                                            <h3> {s2} <hr /> {m2}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas2">
                                            <h3>{s2}*{natm/m2}</h3>
                                            <hr />  
                                            <h3>{m2}*{natm/m2}</h3>
                                        </div>
                                        <h3 className='amall'>=</h3>
                                        <div className="kas1">
                                            <h3> {s2*natm/m2} <hr /> {natm}</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="nasss d-flex align-items-center justify-content-center">
                                        <div className="kas1 d-inline-block">
                                            <h3> {s1*natm/m1} <hr /> {natm}</h3>
                                        </div>
                                        <h3 className='amall d-inline-block'>{"<"}</h3>
                                        <div className="kas1 d-inline-block">
                                            <h3> {s2*natm/m2} <hr /> {natm}</h3>
                                        </div>
                                    </div>
                                </div>
                                :   
                                
                                
                                 
                           
                            amal==2 && nats != ""?
                            <div className="natija d-flex align-items-center mt-5">
                                <div className="kas1 position-relative">
                                    <div className="korsat">
                                        {natm/m1}
                                    </div>
                                    <h3>{s1} <hr /> {m1}</h3>
                                </div>
                                <h3 className='amall'>+</h3>
                                <div className="kas1 position-relative">
                                    <div className="korsat">
                                        {natm/m2}
                                    </div>
                                    <h3>{s2} <hr /> {m2}</h3>
                                </div>
                                <h3 className='amall'>=</h3>
                                <div className="kas2">
                                    <h3> {natm/m1} * {s1} + {natm/m2} * {s2}</h3>
                                    <hr />
                                    <h3>{natm}</h3>
                                </div>
                                <h3 className='amall'>=</h3>
                                <div className="kas1">
                                    <h3> {nats} <hr /> {natm}</h3>
                                </div>
                            </div>
                         : 
                            amal==3 && nats!= ""?
                            <div className="natija d-flex align-items-center mt-5">
                                <div className="kas1 position-relative">
                                    <div className="korsat">
                                        {natm/m1}
                                    </div>
                                    <h3>{s1} <hr /> {m1}</h3>
                                </div>
                                <h3 className='amall'>-</h3>
                                <div className="kas1 position-relative">
                                    <div className="korsat">
                                    {natm/m2}
                                    </div>
                                <h3>{s2} <hr /> {m2}</h3>
                                </div>
                                <h3 className='amall'>=</h3>
                                <div className="kas2">
                                    <h3> {natm/m1} * {s1} - {natm/m2} * {s2}</h3>
                                    <hr />
                                    <h3>{natm}</h3>
                                </div>
                                <h3 className='amall'>=</h3>
                                <div className="kas1">
                                    <h3> {nats} <hr /> {natm}</h3>
                                </div>
                            </div>:""
                        }
                        {kops&&amal==4?
                        <div className="natija d-flex align-items-center mt-5">
                            <div className="kas1 text-center">
                                <h3> {s1} <hr /> {m1}</h3>
                            </div>
                            <h3 className='amall'> * </h3>
                            <div className="kas1 text-center">
                                <h3> {s2} <hr /> {m2}</h3>
                            </div>
                            <h3 className='amall'>=</h3>
                            {bM==""?
                            <div className="kas1 text-center">
                                <h3> {kops} <hr /> {kopm}</h3>
                            </div>
                            :
                            <>
                                <div className="kas1 text-center bs">
                                    <h3 className='chiziq'><p className='bol1'>{bS}</p> {kops} </h3><hr /> <h3 className='chiziq'>{kopm}<p className='bol2'>{bM}</p></h3>
                                </div>
                                <h3 className='amall'>=</h3>
                                <div className="kas1 text-center bs">
                                    <h3> {bS} {bM==1?"":<><hr />{bM}</>}</h3>
                                </div>
                            </>
                            
                            }

                        </div>

                        :kops&&amal==5?
                        <div className="natija d-flex align-items-center mt-5">
                            <div className="kas1 text-center">
                                <h3> {s1} <hr /> {m1}</h3>
                            </div>
                            <h3 className='amall'> {":"} </h3>
                            <div className="kas1 text-center">
                                <h3> {s2} <hr /> {m2}</h3>
                            </div>
                            <h3 className='amall'>=</h3>
                            <div className="kas1 text-center">
                                <h3> {s1} <hr /> {m1}</h3>
                            </div>
                            <h3 className='amall'> {"*"} </h3>
                            <div className="kas1 text-center">
                                <h3> {m2} <hr /> {s2}</h3>
                            </div>
                            <h3 className='amall'>=</h3>
                            {(s1*m2)/(m1*s2)==1?
                            <>
                                <div className="kas1 text-center bs">
                                <h3 className='chiziq'> {s1*m2} </h3><hr /> <h3 className='chiziq'>{s2*m1}</h3>
                                </div>
                                <h3 className='amall'>=</h3>
                                <div className="kas1 text-center">
                                    <h3>1</h3>
                                </div>
                            </>                            
                            :
                            (s1*m2)!==1&&bol!==1?
                            <>
                                <div className="kas1 text-center bs">
                                    <h3 className='chiziq'> {s1*m2} <p className='bol1'>{(s1*m2)/bol}</p> </h3><hr /> <h3 className='chiziq'>{s2*m1}<p className='bol2'>{(s2*m1)/bol}</p></h3>
                                </div>
                                <h3 className='amall'>=</h3>
                                <div className="kas1 text-center bs">
                                    <h3> {(s1*m2)/bol} <hr /> {(s2*m1)/bol} </h3>
                                </div>
                            </> 
                            :  
                            <div className='kas1'>
                             <h3> {s1*m2} </h3><hr /> <h3>{s2*m1}</h3>
                            </div>                        
                            }
                        </div>:""
                        }
                </div>  
            </div>

            </div>
        </div>
    )
}
export default Kasr