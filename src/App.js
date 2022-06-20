import "./App.css";
import React from "react";
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import pic from './img.json'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info:[]};
  }

  callAPI() {
    fetch("http://localhost:8080/testAPI")
    .then(res => res.json())
    .then(res => this.setState({info:res}));    
  }

  componentDidMount(){
    this.callAPI();
  }
 
  render() {    
    const {info} = this.state;
    return (      
      <div class="row">
        <nav>
          <div class="App">            
            <span>Arturo Ochoa Mendoza Task 2:  CV with Node and React Js</span>                        
          </div>          
        </nav> 
        {
          info.map(record =>{
            return(
              <div key={record.basics.name} className="cv">                
                  <div class="col s12 ">
                    <div class="card">
                      <div class="card-content">                      
                        <ul class="collection with-header">
                          {pic.map(pp =>{
                            return(           
                              <div key={pp.id}>
                                <img class="circle center" src={pp.img} alt={pp.id}/>
                              </div>                                                 
                            )
                          } )}                          
                          <span class="card-title">Personal Info:</span>
                          <li class="collection-item"><strong>Name: </strong>{record.basics.name}</li>
                          <li class="collection-item"><strong>Role: </strong>{record.basics.label}</li>
                          <li class="collection-item"><strong>Email: </strong>{record.basics.email}</li>
                          <li class="collection-item"><strong>Phone: </strong>{record.basics.phone}</li>
                          <li class="collection-item"><strong>About me: </strong>{record.basics.summary}</li>                          
                        </ul>
                      </div>
                    </div>
                  </div>                  
                  <div class="col s6">
                    <div class="card">
                      <div class="card-content">
                        <ul class="collection with-header">
                          <span class="card-title">Where to find me:</span>                          
                          <li class="collection-item"><strong>City: </strong>{record.basics.location.city}</li>
                          <li class="collection-item"><strong>State: </strong>{record.basics.location.state}</li>
                          <li class="collection-item"><strong>CP: </strong>{record.basics.location.cp}</li>
                          <li class="collection-item"><strong>Country: </strong>{record.basics.location.countryCode}</li>
                          <li class="collection-item"><a href={record.basics.social.url}>{record.basics.social.network} / {record.basics.social.username}</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>  
                  <div class="col s6">
                    <div class="card">
                      <div class="card-content">
                        <ul class="collection with-header">
                          <span class="card-title">Experience:</span>
	  		                  <li class="collection-item"><strong>Company: </strong>{record.work.name}</li>
	                        <li class="collection-item"><strong>Position: </strong>{record.work.position}</li>
	                        <li class="collection-item"><strong>Start Date: </strong>{record.work.startDate} <strong> End Date: </strong>{record.work.endDate}</li>
	                        <li class="collection-item"><strong>Summary: </strong>{record.work.summary}</li>
	                        <li class="collection-item"><strong>Highlights: </strong>{record.work.highlights[0]}, {record.work.highlights[1]}</li>
                        </ul>
                      </div>
                    </div>
                  </div> 
                  <div class="col s6">
                    <div class="card">
                      <div class="card-content">
                        <ul class="collection with-header">
                          <span class="card-title">Education:</span>
			                    <li class="collection-item"><strong>University: </strong>{record.education.institution}</li>	                        
	                        <li class="collection-item"><strong>Career: </strong>{record.education.area}</li>
	                        <li class="collection-item"><strong>Start Date: </strong>{record.education.startDate} <strong> End Date: </strong>{record.education.endDate}</li>
	                        <li class="collection-item"><strong>Score: </strong>{record.education.score}</li>
                        </ul>
                      </div>
                    </div>
                  </div>  
                  <div class="col s6">
                    <div class="card">
                      <div class="card-content">
                        <ul class="collection with-header">
                          <span class="card-title">Certificates:</span>
                          <li class="collection-item"><strong>Name: </strong>{record.certificates[0].name}</li>
                          <li class="collection-item"><strong>Issuer: </strong>{record.certificates[0].issuer}</li>
                          <li class="collection-item"><strong>Name: </strong>{record.certificates[1].name}</li>
                          <li class="collection-item"><strong>Issuer: </strong>{record.certificates[1].issuer}</li>                  
                        </ul>
                      </div>
                    </div>
                  </div> 
                  <div class="col s6">
                    <div class="card">
                      <div class="card-content">
                        <ul class="collection with-header">
                          <span class="card-title">Skills:</span>
                          <li class="collection-item"><strong>Name: </strong>{record.skills[0].name}</li>
                          <li class="collection-item"><strong>Level: </strong>{record.skills[0].level}</li>
                          <li class="collection-item"><strong>Tools: </strong>{record.skills[0].keywords[0]}, {record.skills[0].keywords[1]}, {record.skills[0].keywords[2]}, {record.skills[0].keywords[3]}</li>
                          <li class="collection-item"><strong>Name: </strong>{record.skills[1].name}</li>
                          <li class="collection-item"><strong>Level: </strong>{record.skills[1].level}</li>
                          <li class="collection-item"><strong>Tools: </strong>{record.skills[1].keywords[0]}, {record.skills[1].keywords[1]}, {record.skills[1].keywords[2]}, {record.skills[1].keywords[3]}</li>
                        </ul>
                      </div>
                    </div>
                  </div>  
                  <div class="col s6">
                    <div class="card">
                      <div class="card-content">
                        <ul class="collection with-header">
                          <span class="card-title">Languages:</span>
                          <li class="collection-item"><strong>Language: </strong>{record.languages[0].language}</li>
                          <li class="collection-item"><strong>Fluency: </strong>{record.languages[0].fluency}</li>
                          <li class="collection-item"><strong>Language: </strong>{record.languages[1].language}</li>
                          <li class="collection-item"><strong>Fluency: </strong>{record.languages[1].fluency}</li>                  
                        </ul>
                      </div>
                    </div>
                  </div>  
                  <div class="col s12">
                    <div class="card">
                      <div class="card-content">
                        <ul class="collection with-header">
                          <span class="card-title">Hobbies:</span>
                          <li class="collection-item"><strong>Name: </strong>{record.interests[0].name}</li>                  
                          <li class="collection-item"><strong>Sports: </strong>{record.interests[0].keywords[0]}, {record.interests[0].keywords[1]}, {record.interests[0].keywords[2]}</li>                 
                        </ul>
                      </div>
                    </div>
                  </div>                  
              </div>              
            )
          })
        }
      </div>
    );
  }
}

  
export default App;