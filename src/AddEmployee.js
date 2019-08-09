import React from 'react';

import axios from 'axios';
import './CSS/AddEmployee.css';

class AddEmployee extends React.Component {
   
constructor(props){
    super(props);
    this.state = {
        name:'',
        
    }
}
changeHandler = e =>{
    this.setState({[e.target.name]:e.target.value})
}
submitHandler = e =>{
    e.preventDefault()
    axios.post('/employees',this.state)
    .then(response=>{
console.log(response)      
    })
    .catch(error => {
console.log(error)
    })
    
}

    render() {
         const {name,salary}=this.state;
       return (

        <div class="row">
        {/* <!-- Grid column --> */}
        <div class="col-md-6 mb-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="text-center default-text py-3"><i class="fa fa-lock"></i> Login:</h3>
                    {/* <!--Body--> */}
                    <div class="md-form">
                        <i class="fa fa-envelope prefix grey-text"></i>
                        <input type="text" id="defaultForm-email" class="form-control"/>
                        <label for="defaultForm-email">Your email</label>
                    </div>
                    <div class="md-form">
                        <i class="fa fa-lock prefix grey-text"></i>
                        <input type="password" id="defaultForm-pass" class="form-control"/>
                        <label for="defaultForm-pass">Your password</label>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-default waves-effect waves-light">next</button>
                    </div>
                </div>
            </div>
        </div>
        </div>




    //     <div>
    //         <form onSubmit={this.submitHandler}>
    //             <div>
    //                 <input type="text " placeholder="name"  name="name" value={name} onChange={this.changeHandler}/>
    //             </div>
    //             <div>
    //                 <input type="text "  placeholder="salary" name="salary" value={salary} onChange={this.changeHandler}/>
    //             </div>
    //             <button type="submit">Submit</button>
    //         </form>
    //     </div>







        //  <section class="mb-4">
        
        //         <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            
        //         <p class="text-center w-responsive mx-auto mb-5">
        //          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        //         a matter of hours to help you.</p>
        
        //         <div class="row">
        //             <div class="col-md-9 mb-md-0 mb-5">
        //                 <form onSubmit={this.submitHandler} id="contact-form" name="contact-form" action="mail.php" method="POST">
        
                        
        //                      <div class="row">
        
                            
        //                         <div class="col-md-6">
        //                             <div class="md-form mb-0">
        //                                 <input type="text" id="name" name="name" class="form-control" value={name} onChange={this.changeHandler}/>
        //                                 <label for="name" class="">Your name</label>
        //                             </div>
        //                         </div>

        //                         <div class="col-md-6">
        //                             <div class="md-form mb-0">
        //                             <input type="text" id="email" name="email" class="form-control"/>
        //                             <label for="email" class="">Your email</label>
        //                             </div>
        //                         </div>
                        
        //                     </div>
                        
                        
        //                     <div class="row">
        //                         <div class="col-md-12">
        //                             <div class="md-form mb-0">
        //                                 <input type="text" id="subject" name="subject" class="form-control"/>
        //                                 <label for="subject" class="">Subject</label>
        //                             </div>
        //                         </div>
        //                     </div>
                        
        //                     <div class="row">

        //                         <div class="col-md-12">
        
        //                             <div class="md-form">
        //                                 <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
        //                                 <label for="message">Your message</label>
        //                             </div>
        
        //                         </div>
        //                     </div>
                        
        //                 </form>
        
        //             <div class="text-center text-md-left">
        //                 <button className="btn-btn-sumbit" type="submit">Submit</button>
        //             </div>
        //             <div class="status"></div>
        //         </div>
                
        //         <div class="col-md-3 text-center">
        //             <ul class="list-unstyled mb-0">
        //                 <li><i class="fas fa-map-marker-alt fa-2x"></i>
        //                     <p>Islamabad, PAKISTAN</p>
        //                 </li>
        
        //                 <li><i class="fas fa-phone mt-4 fa-2x"></i>
        //                     <p>+ 01 234 567 89</p>
        //                 </li>
        
        //                 <li><i class="fas fa-envelope mt-4 fa-2x"></i>
        //                     <p>obaid@gmail.com</p>
        //                 </li>
        //             </ul>
        //         </div>
                
        
        //     </div>
        
        // </section>
          
       )
    }
 }
 export default AddEmployee;