import './About.css'
import pexels from '../../img/pexels.jpg'
import award from '../../img/diplome.png'
const About =()=>{
    return(
        <div class="a">
            <div class="a-left">
                <div class="a-card bg"></div>
                <div class="a-card">
                    <img src={pexels} alt="img informatique" class="a-img" />
                </div>
            </div>
            <div class="a-right">
                <h1 class="a-title">About Me</h1>
                <p class="a-sub">
                    I'm 22 years old and I'm in professional license in web development. I obtained a scientific baccalaureate before obtaining my computer science DUT at IUT Charlemagne in Nancy.
                </p>
                <p class="a-desc">
                    I worked as a joiner during the summer holidays in 2017, 2018, 2020 and 2021. In this 
                    company I was able to highlight my motivation and my curiosity because this job has nothing 
                    to do with my studies.
                    I also did an IT internship in 2021 to validate my DUT. Here I was able to highlight my 
                    communication skills and my team spirit to contribute in order to advance my project in the 
                    best possible way.
                </p>
                <div class="a-award">
                    <img src={award} alt="" class="a-award-img" />
                    <div class="a-award-texts">
                    <h4 class="a-award-title">DUT Informatique</h4>   
                    <p className="a-award-desc">IUT Charlemagne - Nancy | 2019-2021</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;