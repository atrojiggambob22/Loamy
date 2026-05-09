import React from 'react';  
import './LoamyHomePage.css'
const LoamyHomePage =()=>{
    return(
        <div className='chiefHome' style={{overflowX:"hidden"}}>
            <nav className='homePnav' style={{display:"flex", justifyContent:"space-between"}}>
                <span>

                <div></div>
                <div>Loamy</div>
                
                </span>
                <span style={{

                }}>
                    <span>Features</span>
                    <span>How it Works</span>
                    <span>Insight</span>
                </span>
                <span>
                    <span>Login</span>
                    <span>Get Started</span>
                </span>
            </nav>

            <div style={{justifyContent:"center", alignItems:"center", textAlign:"center", margin:"10% 0"}}>
                <span style={{backgroundColor:"lightgreen", padding:"5px", borderRadius:'20px'}}>79% autonomous financial tracking</span>

                <div className='heroFinance'>
                    <h2 style={{fontSize:"60px"}}>Financial clarity for <span style={{color:"green"}}>African <br />businesses</span></h2>
                    <div><p>Loamy turns your bank alerts,invoices, and transaction emails into <br />clear financial insights automatically </p></div>
                    <div style={{display:"flex",position:"relative", left:"38%", gap:"30px"}}>

                            <button>Starts for free</button>
                       
                            <button>View demo</button>
                    </div>
                </div>

                <div className='thridHero'>
                    <span>
                        Smart Insights Preview
                    </span>
                     
                    <span className='thridHeroSub1'>

                    <div className='subthirdHero'>You have 14 days before you run out of cash.</div>
                    <div className='subthirdHero'>
                        Your foodstuff expense incereased by 20% comoared to last month.
                    </div>
                    <div className='subthirdHero'>
                        Mr. David's $3,000 invoice is due today
                    </div>
                    </span>
                </div>
            </div>

            <div style={{textAlign:"center", margin:"20% 0"}}>
                <span>
                    <h3>Everything you need to understand your money</h3>
                    <p>Built specifically for African SMBs who need financial clarity without the complexity.</p>

                    <div className='loamyfunc'>
                        <div className='loamyfuncSub'>
                            <span></span>
                            <h4>Cash Flow Tracking </h4>
                            <p>Automatically track money in and out. Know your cash position at any moment</p>
                        </div>

                        <div className='loamyfuncSub'>
                            <span></span>
                            <h4>Expense Categorization</h4>
                            <p>Expenses auto-sorted into categories with percentage breakdowns and monthly comparisons</p>
                        </div>

                        <div className='loamyfuncSub'>
                            <span></span>
                            <h4>Invoice Tracking</h4>
                            <p>Track who owes you, due dates, and get smart reminders when payments are due</p> 
                        </div>

                        <div className='loamyfuncSub'>
                            <span></span>
                            <h4>Smart Notifcation</h4>
                            <p>Get alerts for low cash runway,expense, spikes, and overdue invoices</p>
                        </div>

                        <div className='loamyfuncSub'>
                            <span></span>
                            <h4>Automated Extraction</h4>
                            <p>We read your bank alerts, trasnsaction notifications, and invoice emails automatically.</p>
                        </div>

                        <div className='loamyfuncSub'>
                            <span></span>
                            <h4>Ask Your Finances</h4>
                            <p>Ask question like "Can i hire a new assistant with my current cashflow?"</p>
                        </div>

                    </div>
                </span>
            </div>

            <div style={{textAlign:"center", margin:"20% 0"}}>
                <h3 style={{fontSize:"35px"}}>How Loamy Works</h3>
                <div style={{display:"flex", justifyContent:"center", gap:"50px", marginTop:"50px"}} className='LoamyWorks'>
                    <div>
                        <h4>01</h4>
                        <h5>Connect your email</h5>
                        <p>Link your buisness email and we start reading bank alerts and invoices.</p>
                    </div>
                    <div>
                        <h4>02</h4>
                        <h5>We extract & organize</h5>
                        <p>Our Ai categorizes every transaction, expense and invoice automatically</p>
                    </div>
                    <div>
                        <h4>03</h4>
                        <h5>Get financial clarity</h5>
                        <p>View dashboards, recieve smart alerts, and ask question about your finances </p>
                    </div>
                </div>
            </div>

            <div style={{textAlign:"center", margin:"20% 0"}}>
                <h2 style={{fontSize:"30px"}}>Ready to understand your finances ?</h2>
                <p style={{width:"30%", position:"relative", left:"35%"}}>Join thousand of African business owners who finally have clarity on thier cash flow.</p>
                <div><button style={{padding:"10px 80px", borderRadius:"10px", border:"none", backgroundColor:"green", color:"white", fontSize:"15px",marginTop:"30px"}}>Get started </button></div>
            </div>
            {/* There would be a ::after psuedo class to represent the hr tag */}
            <div style={{display:"flex", justifyContent:"space-between", padding:"20px 50px", backgroundColor:"rgba(0,0,0,0.1)" }}>
                <div>
                    Loamy
                </div>
                <div>
                    2026 Loamy. Built for all businesses
                </div>
            </div>
        </div>
    );
};

export default LoamyHomePage;