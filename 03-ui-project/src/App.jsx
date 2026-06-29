import React from 'react'
import Section1 from './components/Section1/Section1.jsx'
import  Section2 from './components/Section2/Section2.jsx'
const App = () => {

    const users = [
        {
            img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
            intro:'Prime customers,that have access to bank credit and satisfied with current product',
            tag:'Satisfied',
            color:'royalblue'
        },
        {
            img:'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
            intro:'Prime customers,that have access to bank credit and  are not satisfied with current service',
            tag:'Undeserved',
            color:'lightgreen'
        },
        {
            img:'https://images.unsplash.com/photo-1765648580890-732fa6d769c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
            intro:'Customers from near-prime and sub-prime segments with no access to bank credit',
            tag:'Underbanked',
            color:'pink'
        }
        ,
        {
            img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
            intro:'Customers from near-prime and sub-prime segments with no access to bank credit',
            tag:'Average',
            color:'orange'
        }
    ]

    return (
        <div>
        <Section1 users={users}/>
        <Section2/>
        </div>
    )
}
export default App
