import kratos from '../images/kratos.png'
import kratos2 from '../images/kratos2.png'

function About() {
    return (
            <div className="body-container" id="about">
                
                <div className="card">
                    <img className="avatar" alt="kratos" src={kratos}/>
                    <img className="avatar img-top" alt="kratos2" src={kratos2}/>

                </div>

                <h2 className="intro">Hey, what's up? I'm <span className="name">Steven.</span></h2>
                <p className="description">I suppose this is where I tell you that I'm super passionate, love coding, and enjoy expanding my knowledge about web developing like everyone else does, right? Nah, I'm unlike any other developer you've ever met before. I'm a junior front end developer who absolutely loves to code and is super passionate about what I do and enjoy learning new things while making it all look good. That's all I got for you... later. </p>
                
            </div>
    )    
}

export default About;