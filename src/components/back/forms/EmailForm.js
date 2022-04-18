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
     <div className="container"
        style={{marginTop : "50px", width: '500px', height:'100%',
         backgroundPosition: 'center',
         backgroundSize: 'cover',
     }}>
         <h2 style={{marginTop:'15px'}}> Contacter-moi</h2>
         {<form className='formContact'>
             <div className='itemform'>
                 <label className='labelform'>Nom</label>
                 <input type='text' name='Nom' placeholder='Votre nom ?' />
             </div>

             <div className='itemform'>
                 <label className='labelform'>Email</label>
                 <input type='email' name='Email' placeholder='Votre Email ?' />
             </div>

             <div className='itemform'>
                 <label className='labelform'>Sujet</label>
                 <input type='text' name='Sujet' placeholder='Sujet' />
             </div>

             <div className='itemform'>
                 <label className='labelform'>Message</label>
                 <textarea name='message' rows='4' />
                 <input type='submit' value='Envoyer' />
             </div>

         </form> }
     </div>
 );
}
export default EmailForm;