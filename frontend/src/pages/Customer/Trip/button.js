
function ContactButton({ text, onClick }){
    return (
        <div >
            <button className="contact-button" onClick={onClick}>
          {text} Contact Driver
        </button>
        </div>
      );
}

function CancelButton({ text, onClick }){
    return (
        <div >
            <button className="cancel-button" onClick={onClick}>
          {text} Cancel Trip
        </button>
        </div>
      );
}




export default ContactButton;
export { CancelButton };