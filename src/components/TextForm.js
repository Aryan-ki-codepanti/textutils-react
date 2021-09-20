import React , {useState} from 'react'


export default function TextForm(props) {

    // array destruc to set text = usestate[0] and setText to useState[1]
    // text is variable whose value is Enter your text here it can be updated with Settext;
    const [text, setText] = useState('');

    // text = "New value" wrong way to change state 
    // setText("New value")  correct way to change state

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted To UpperCase" , "success");
    };

    const handleLowClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted To LowerCase" , "success");

    };

    const handleClearClick = ()=>{
        setText('');
        props.showAlert("Removed Everything LOL!" , "success");

    };

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces" , "success");

    };

    const handleRemovePunc = ()=>{
        let newText = '';
        let puncs = `’'()[]{}<>:,‒–—―…!.«»-‐?‘’“”;/⁄␠·&@*\•^¤¢$€£¥₩₪†‡°¡¿¬#№%‰‱¶′§~¨_|¦⁂☞∴‽※`;

        text.split('').forEach((char)=>{
            if (!puncs.includes(char)){
                newText += char;
            }
        })

        setText(newText);
        props.showAlert("Removed punctuations" , "success");

    };


    // imp
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied" , "success");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    };


    const getWordCount = (string)=>{
        let words = string.split(/\s+/);
        words = words.filter((word)=>{
            return Boolean(word);
        });
        return words.length;
    }

    let textFormElement;
    if (props.mode === 'red'){
        textFormElement = (<>
                <div>
                    <h1 className="mb-4" style={{color: '#b53a3a'}}>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="6" placeholder="Enter some text" style={{backgroundColor:'gray' , color: '#b53a3a'}}></textarea>
                    </div>

                    <div className="d-flex gap-2 flex-wrap">
                        <button disabled={text.length === 0} className="btn btn-danger" onClick={handleUpClick}>Convert to Uppercase</button>

                        <button disabled={text.length === 0} className="btn btn-danger" onClick={handleLowClick}>Convert to Lowercase</button>

                        <button disabled={text.length === 0} className="btn btn-danger" onClick=
                        {handleClearClick}>Clear Text</button>

                        <button disabled={text.length === 0} className="btn btn-danger" onClick={handleRemovePunc}>Remove Punctuations</button>

                        <button disabled={text.length === 0} className="btn btn-danger" onClick={handleCopy}>Copy Text</button>

                        <button disabled={text.length === 0} className="btn btn-danger" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                    </div>
                </div>
                
                <div className="my-5" style={{color: '#b53a3a'}}>
                        <h2 className="p-0">Your Text Summary </h2>
                        <p>{getWordCount(text)} words , {text.length} characters</p>
                        <p>{getWordCount(text)*0.08} Minutes Read</p>

                        <h3>Preview</h3>
                        <p>{text===""?"Nothing to Preview":text}</p>
                    </div>
            </>);
    }

    else{
        textFormElement = (<>

        <div>
            <h1 className="mb-4" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="6" placeholder="Enter some text" style={{backgroundColor: props.mode==='light'?'white':'gray' , color: props.mode==="light"?"black":"white"}}></textarea>
            </div>

            <div className="d-flex gap-2 flex-wrap">
                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>

                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>

                <button disabled={text.length === 0} className="btn btn-primary" onClick=
                {handleClearClick}>Clear Text</button>

                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleRemovePunc}>Remove Punctuations</button>

                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleCopy}>Copy Text</button>

                <button disabled={text.length === 0} className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
        </div>
        
        <div className="my-5" style={{color: props.mode==='light'?'black':'white'}}>
                <h2 className="p-0">Your Text Summary </h2>
                <p>{getWordCount(text)} words , {text.length} characters</p>
                <p>{getWordCount(text)*0.08} Minutes Read</p>

                <h3>Preview</h3>
                <p>{text===""?"Enter some text to preview":text}</p>
            </div>

        </>);
    }
    return (
        textFormElement
    )
}
