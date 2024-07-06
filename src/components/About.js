import React,{useState} from 'react'

export default function About() {
  const [myStyle,setmyStyle]=useState({
    color:'black',
    backgroundColor:'white',
    border:'1px solid white'
  })

  const [btntext,setBtntext]=useState("Enable Dark Mode")

  
  const toggleStyle=()=>{
    if(myStyle.color==='white'){
      setmyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtntext("Enable Dark mode")
    }
    else{
      setmyStyle({
          color:'white',
          backgroundColor:'black',
          border:'1px solid white'
      })
      setBtntext("Enable Light Mode")
    }
  }
  
  return (
     <div className='container' style={myStyle}>
            <h2 className='my-2'>About Us</h2>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About Website
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    <strong>This is the text formatting website that can be used to change your text formatting </strong> It can also be 
                    used for transforming speech to text and vice versa.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Contact Details
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    <strong>If you are facing any issues ,Kindly report to given details</strong> <code>+91 8283627546</code> or  <a href="komal.raj101201@gmailc.om">Email us</a> for support.
                  </div>
              </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              About Developer and Designer
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>Made with Love.</strong> by <a href="https://www.linkedin.com/in/komal-raj-050a70203/">Komal Raj</a>.
            </div>
          </div>
        </div>
        </div>
        <div className="container my-3">
           <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button> 
        </div>
       
     </div>
        )
        }
