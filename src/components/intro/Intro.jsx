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
                    <br />
                    <p class="i-description">
                    I’m a french student in web development at IUT Charlemagne in Nancy.
                    I'm a huge sports fan, especially football and motorsport. Sport taught me to be motivated 
                    and respectful to the people I meet. It also allows me to clear my mind in order to better 
                    understand my studies and my work.
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