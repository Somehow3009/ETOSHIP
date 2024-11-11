import './estimate-button.css';

function Button({ text, onClick }){
    return (
        <div className='container'>
            <button className="custom-button" onClick={onClick}>
          {text} Estimate Fee
        </button>
        </div>
      );
}

export default Button;