import "./Intro.css"
import img from "../../img/profil-sansfond.png"
const Intro = () => {
    return(
        <div class="i">
            <div class="i-left">
                <div class="i-left-wrapper">
                    <h2 class="intro">Hello, my name is</h2>
                    <h1 class="i-name">Lilian Wilt</h1>
                    <div class="i-title">
                        <div class="i-title-wrapper">
                            <div class="i-title-item">IT Student</div>
                            <div class="i-title-item">Web Developer</div>
                            <div class="i-title-item">Football Lover</div>
                            <div class="i-title-item">Motorsport Lover</div>
                            <div class="i-title-item">Nature Lover</div>
                        </div>
                    </div>
                    <p class="i-description">
                    I'm 22 years old and I'm in professional license in web development. I obtained a scientific 
                    baccalaureate before obtaining my computer science DUT at IUT Charlemagne in
                    Nancy.
                    </p>
                </div>

            </div>
            <div class="i-right">
                <div class="i-bg"></div>
                <img src={img} alt="me" class="i-img"></img>
            </div>
        </div>
    )
}

export default Intro;