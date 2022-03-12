import './Toggle.css';
import Soleil from '../../img/soleil.png'
import Lune from '../../img/lune.png'
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme=useContext(ThemeContext);
    const handleClick=()=>{
        theme.dispatch({type:"TOGGLE"});
    }
  return (
    <div class="t">
        <img src={Soleil} alt="" class="t-icon" />
        <img src={Lune} alt="" class="t-icon" />
        <div class="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle