import React from 'react';
import emailjs from 'emailjs-com' 


function EmailForm(props) {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(  
        'service_fxbwxzd',
         'template_6arow6x',
          e.target,
        '_GCUvXpuuNUiTAO5M'
        ).then(res =>{
            console.log(res);
        }).catch(err =>{console.log(err)});
    }
 return(
     <div className="container border"
        style={{marginTop : "50px", width: '50%',
         backgroundPosition: 'center',
         backgroundSize: 'cover'
     }}>
         <h2 style={{marginTop:'15px'}}> Contacter-moi</h2>
         { <form>
             <label>Nom</label>
             <input type= 'text' name='Nom' placeholder='Votre nom ?'/>

             <label>Email</label>
             <input type= 'email' name='email' placeholder='Votre Email ?'/>

             <label>Message</label>
             <textarea name='message' rows= '4'/>
             <input type='submit' value= 'Envoyer'/>

         </form> }
     </div>
 );
}
export default EmailForm;