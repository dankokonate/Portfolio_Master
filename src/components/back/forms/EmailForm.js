import emailjs from 'emailjs-com' 

function EmailForm(props) {
const {classes} = props; 
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm( 'service_fxbwxzd', 'template_6arow6x', e.target,
        '_GCUvXpuuNUiTAO5M'
        ).then(res =>{
            console.log(res);
        }).catch(err =>{console.log(err)});
    }
 return(
     <div className="container border"
     style={{marginTop : "50px", width: '50%', backgroundImage: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_Vp9ydYhM7WP9OvvWuTqsftWizf023KLzw&usqp=CAU'),
     backgroundPosition: 'center',
     backgroundSize: 'cover'
     }}>
         <h2 style={{marginTop:'25px'}}> Contacter-moi</h2>
         <Form onSubmit= {sendEmail}>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Nom</Form.Label>
                 <Form.Control type="text" placeholder="votre nom ?" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Email_address</Form.Label>
                 <Form.Control type="email" placeholder="name@example.com" />
             </Form.Group>
             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Message</Form.Label>
                 <Form.Control as="textarea" rows={3} />
             </Form.Group>
             <input type="submit" value= "Envoyer" className="form-control btn btn-primary"
             style={{marginTop:'25px'}}/>
         </Form>
     </div>
 );
}
export default EmailForm;