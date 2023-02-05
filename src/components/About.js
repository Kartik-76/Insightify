import React from 'react'

export default function About(props) {

    //  const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: 'white',

    // })

    const myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'

    }

    



  return (
    <div className="container">
        <h1 className="my-3" style={{color: props.mode === 'dark'?'white':'#042743'}} >About Us</h1>
        <div className="accordion" id="accordionExample" >
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong> 
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle} >
             <strong>Insightify</strong> is a user-friendly text conversion website that allows you to quickly and easily manipulate your text. With a variety of tools at your disposal, you can easily convert your text to upper or lowercase, copy it, clear it, and remove unnecessary spaces. Whether you're working on a project, preparing a document, or just need to format some text, Insightify makes it easy to get the results you need. Its user-friendly interface, and easy to use functionalities makes it perfect for students, professionals, and anyone who frequently works with text. With Insightify, you can easily convert and format your text in a matter of seconds, saving you time and effort.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to Use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Insightify</strong> is a user-friendly and powerful text conversion tool that is completely free to use. With its wide range of functionalities, you can easily convert, manipulate, and format your text in a variety of ways. Whether you need to convert your text to upper or lowercase, copy it, clear it, or remove unnecessary spaces, Insightify makes it easy to get the results you need. The user-friendly interface and easy to use functionalities makes it perfect for students, professionals, and anyone who frequently works with text. With Insightify, you can save time and effort, without any cost. It's a great tool for anyone looking for a cost-effective solution for their text conversion needs.
        </div>
    </div>
    </div>
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={myStyle} type="button" s data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong> 
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>Insightify</strong> is a browser-compatible text conversion tool that allows you to easily manipulate and format your text from any device with a web browser. Whether you're using a desktop computer, laptop, tablet, or smartphone, you can access Insightify from any device with an internet connection. The browser compatibility of Insightify makes it easy to use on the go, whether you're working on a project at home, in the office, or on the move. With Insightify, you can convert, manipulate and format your text at any time and any place, without the need to install any software or application. This makes it a great choice for people who frequently travel or work remotely.
        </div>
        </div>
    </div>
    </div>
    
    
    </div>
  )
}
