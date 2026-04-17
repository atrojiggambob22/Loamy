import React from "react";
import "./Dashboard.css";
import ExpenseChart from "./ExpenseChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCheck, faClock, faGear, faJetFighter, faMessage, faReceipt, faRightFromBracket, faWallet  } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft , fa} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faGoogleWallet } from "@fortawesome/free-brands-svg-icons";

import dashboardData from "./DahboardData";
// import { faArrowDownLeft } from "@fortawesome/free-solid-svg-icons";
// If chart.html becomes a React component, import it like this:
// import Chart from "./Chart";



// const { invoices, notifications, summary } = dashboardData;

const Dashboard = () => {
 
  const { invoices, notifications, summary } = dashboardData;

  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-NG", {
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div style={{ padding: "0 20px" }} className="Dash1">
      
     
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>Loamy</h3>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "5px", }}>
              <i className="fa-regular fa-file-arrow-up" style={{position:'relative', top:'20px'}}></i>
              <p>Upload</p>
          </div>

          <div>
            <i className="fa-regular fa-bell"></i>
          </div>

          <div>
            <FontAwesomeIcon icon={faGear} />
          </div>

          <div>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>

         
        </div>
      </nav>

     
      <div style={{ marginBottom: "5%" }}>
        <h1>Good Morning 👋</h1>
        <p>Here's your financial overview for today</p>
      </div>

     
      <div
        style={{
          display: "flex",
          marginBottom: "5%",
          justifyContent: "space-between",
        }}
      >
        
        <div className="cashflow" >
          <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
           <FontAwesomeIcon icon={faWallet} style={{color:'green',}} />
          <p style={{ fontSize:"20px"}}>Cash Flow Overview</p>
          </div>

          <div style={{ display: "flex",gap:"30px"}}>



            <div style={{borderRadius: "20px",}} className="cashin1 cashino">
              <div>

              <p>Cash In</p>
              </div>
              {/* <FontAwesomeIcon icon={faArrowDownLeft} /> */}
              <p className="cashin1p2" >200,000</p>
            </div>




            <div style={{borderRadius: "20px",}} className="cashin2 cashino">
              <div >
              <p>Cash Out</p>
              </div>
                
              <p className="cashin2p2" >200,000</p>
            </div>




            <div style={{ borderRadius: "20px",}} className="cashin3  cashino">
              <div style={{display: "flex", gap: "5px", alignItems: "center",fontSize:"15px"}}>
              <FontAwesomeIcon icon={faWallet} style={{color:'green'}}/>
              <p>Current Cash</p>
              </div>
              <p className="cashin1p2" >200,000</p>
            </div>

           {/* <div style={{background:"red",}} >
              <div style={{display:"flex"}}>
              <FontAwesomeIcon icon={faWallet} style={{color:'green', fontSize:'10px'}}/>
              <p>Current Cash</p>
              </div>
              <p className="cashin1p2" >200,000</p>
            </div> */}


          </div>
        </div>

      
        <div className="businessrunway" > 
          <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
          <FontAwesomeIcon icon={faClock}/>
          <h3>Business Runway</h3>
          </div>

          <p>Days</p>
          <p>
            At your current spending rate, you may run out of cash by
          </p>
        </div>


      </div>

        <div>


         


        <div style={{
          display:"flex",justifyContent:"space-between",gap:"20px", flexWrap:"wrap"
        }}>
          
            <div className="Expenses" style={{width: "500px"}}> 

              <h2>Expense Breakdown</h2>
              <ExpenseChart style={{ margin: "0 auto" }} />

            </div>



            <div className="Expenses" >

                <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
                <span><FontAwesomeIcon icon={faReceipt}/></span>
                <h3>Invoice Tracker</h3>
                </div>


                {/* 🧾 Invoices */}
              {invoices.map((inv) => (
                <div key={inv.id} style={{display:"flex", gap:'120px', padding:'0 30px'}} className="invoiic" >

                <div>

                <h4>{inv.client.name}</h4>
                <p style={{opacity:"0.7", fontSize:"10px"}}>Due: {formatDate(inv.dueDate)}</p>

                </div>

                <div style={{position:"relative", top:"30px"}}> 

                <span style={{marginRight:"20px"}}>₦{inv.amount.toLocaleString()}</span>
              
                <span style={{textTransform:"lowercase"}}>{inv.status}</span>
                </div>

                </div>
                ))}



            </div>  

              <div className="Expenses">
                {/* 🔔 Notifications */}
                {notifications.map((note) => (
                <div key={note.id}>
                  <p>{note.message}</p>
                  <p>{note.createdAt}</p>
              </div>
              ))}

          </div>


        </div>
     
        </div>

     

     
      <div className="lastsection" style={{ marginTop: "5%" }}>
        <div className="firstsection">
          <p>Ask Loamy </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Ask me anything about your finances"
            style={{ width: "93%", padding: "10px", borderRadius: "13px", border: "1px solid #ccc", }}
          />
          <button style={{ marginLeft: "10px", padding: "10px 15px", borderRadius: "5px", border: "1px solid #ccc" }}>
            <FontAwesomeIcon icon={faJetFighter} />
          </button>
        </div>

        
        <div className="thirdsection" >
          <p>Can I hire more sales assistants?</p>
          <p>What's my biggest expense this month?</p>
          <p>How much do customers owe me?</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;