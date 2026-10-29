// import React from 'react'
import Card from './components/Card'


const App = () => {
  const jobOpening=[
  {
    "brandlogo": "https://cdn.simpleicons.org/google/4285F4",
    "companyName": "Google",
    "date posted": "3 days ago",
    "post": "Senior Software Engineer, Distributed Systems",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$95 per hour",
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://cdn.simpleicons.org/meta/0467DF",
    "companyName": "Meta",
    "date posted": "1 day ago",
    "post": "Frontend Engineer, PyTorch & AI Tools",
    "tag1": "Full Time",
    "tag2": "Mid level",
    "pay": "$82 per hour",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "companyName": "Amazon",
    "date posted": "5 days ago",
    "post": "Software Development Engineer I (SDE 1)",
    "tag1": "Full Time",
    "tag2": "Junior level",
    "pay": "$45 per hour",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://cdn.simpleicons.org/apple/000000",
    "companyName": "Apple",
    "date posted": "2 days ago",
    "post": "iOS Systems Software Engineer",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$105 per hour",
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://cdn.simpleicons.org/netflix/E50914",
    "companyName": "Netflix",
    "date posted": "1 week ago",
    "post": "Backend Engineer - Core Infrastructure",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$120 per hour",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "companyName": "Microsoft",
    "date posted": "4 days ago",
    "post": "Azure Cloud Solutions Engineer",
    "tag1": "Full Time",
    "tag2": "Mid level",
    "pay": "$70 per hour",
    "location": "Noida, India"
  },
  {
    "brandlogo": "https://cdn.simpleicons.org/nvidia/76B900",
    "companyName": "NVIDIA",
    "date posted": "6 days ago",
    "post": "AI/ML Performance Engineer",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$110 per hour",
    "location": "Pune, India"
  },
  {
    "brandlogo": "https://cdn.simpleicons.org/uber/000000",
    "companyName": "Uber",
    "date posted": "2 weeks ago",
    "post": "Data Engineer II",
    "tag1": "Full Time",
    "tag2": "Mid level",
    "pay": "$65 per hour",
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    "companyName": "Salesforce",
    "date posted": "3 weeks ago",
    "post": "Junior Full Stack Developer",
    "tag1": "Part Time",
    "tag2": "Junior level",
    "pay": "$35 per hour",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://cdn.simpleicons.org/adobe/FF0000",
    "companyName": "Adobe",
    "date posted": "10 days ago",
    "post": "Computer Vision Researcher",
    "tag1": "Full Time",
    "tag2": "Senior level",
    "pay": "$90 per hour",
    "location": "Noida, India"
  }
]

  return (
    <div className="parent">
      {
        jobOpening.map(function(elem,idx){
          return <div key={idx}>
            <Card brand={elem.brandlogo} company={elem.companyName}  date={elem['date posted']} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
        })
      }
    
    </div>
  )
}

export default App
