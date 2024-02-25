import React from 'react'

const Container1 = ({name,name1,name2,builder,builder1,builder2}) => {
  return (
    <div className='container1'>
        <div className='container-content'>
        
            <div className='con1-image'>
            <span>Best Choice</span>
                <img src="/Image/Builder 1.png" alt="pic1" height="50px" width="100px" />
                <p>{builder} {builder1} {builder2}</p>
            </div>
            <div className='con1-content'>
               <p> <strong>WixPro 72-Inch Responsive Website Builder-</strong>
                 Comprehensive Digital Platform Creation Tool, 
                 Streamlined Design Interface for Professional 
                 Websites and Online Stores (Black/Blue)
                 <strong>Main highlights</strong>
                </p>
                 <p>[What You Get]: Receive the WixPro website builder suite, 
                    access to premium design templates,
                     an extensive library of widgets and apps, and
                      detailed step-by-step guides.</p>
            </div>
            <div className='tags'>
                <div className='tags1'>
                   <h3>9.8</h3>
                   <h4>{name} {name1} {name2}</h4>
                   <img src="/Image/stars.png" alt="" height="10px" width="30px" />
                </div>
                <button className='tag-btn'>View</button>
            </div>
        </div>



       



    

    </div>
  )
}
export default Container1;
