import React from 'react';
import axios from 'axios';
import './employeeDetail.css'




// import ReactDom from 'react-dom'

class employeeDetail extends React.Component {
   constructor(props){
      super(props);
      this.state= {
         items :[],
         search : '',
         
         

      }
   }

   handleEdit (id){
  
      axios.put('/employees/'+ id, { 
         "name":"Rahim",
         "salary":49349
      })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
   
   handleSubmit (id){
  
      axios.delete('/employees/'+id)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        
    }
    
    handleChange = e =>{
       this.setState({search:e.target.value});
    }
  
   
   
   componentDidMount(){
      axios.get('/employees')

      .then(res => {
         const items = res.data;
         this.setState({ items });
          
       })
       console.log(this.state.items);
      // .then (res => res.json())
      // .then(data => {
      //    let items=data.map((item,index) => {

      //       return ( 
      //          <div key={index}>
      //             <ul>
      //                < li>
      //                      Name:{item.name} | Salary: {item.salary}
      //                </li>    
      //             </ul>
      //           </div>
      //       )
      //    })
      //    this.setState({items: items});
      // })

   }


   
render(){
   const {search} = this.state;
      const filterItems = this.state.items.filter(item =>{
         return (item.name.toLowerCase().indexOf(search.toLowerCase())!== -1)
      });

   return (
      
      <div class="container1" ><br></br>
      <h3>Employees detail</h3>
      
      <div class="container2">
    <br/>
	<div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <form class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>
                                    {/* <!--end of col--></div> */}
                                    <div class="col">
                                        <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="search Employee" onChange={this.handleChange}/>
                                    </div>
                                    {/* <!--end of col--> */}
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                    {/* <!--end of col--> */}
                                </div>
                            </form>
                        </div>
                        {/* <!--end of col--> */}
                    </div>
</div>
      <br></br>
   
      <table class="table table-lg">
         <thead class="thead-dark">
            <tr>
               <th scope="col">Name</th>
               <th scope="col">Salary</th>
               <th scope="col">Action</th>

            </tr>
         </thead>
         
         { filterItems.map(item => 
         <tbody>
         <tr>
         <td>  {item.name} </td>
         <td>  {item.salary} </td>
         <td>  <button class="btn btn-outline-danger btn-md" type="submit" onClick={() => this.handleSubmit(item._id)} >Delete</button>{' '}
               <button class="btn btn-outline-success btn-md" type="submit" onClick={() => this.handleEdit(item._id)}>Edit</button></td>
         </tr>
         </tbody>
         )}

      </table>
      
      
      {/* <ul>
        { this.state.items.map(item => <li>{item.name}</li>)}
      </ul>
       */}
      </div>
   );
   
}

 }
 export default employeeDetail;
 