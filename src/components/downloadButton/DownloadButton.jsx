import './DownloadButton.css'; 
import cv from '../../cv/EnglishCV-Wilt.pdf';
const DownloadButton = () => {
  return (
    <div class="b">
        <h1 class="b-title">Some extras here :</h1>
        <a href="https://www.youtube.com/watch?v=_etIr_OkoKE"><button>Video Blog</button></a>
        <a href={cv} download><button>CV</button></a>

    </div>
  )
}

export default DownloadButton