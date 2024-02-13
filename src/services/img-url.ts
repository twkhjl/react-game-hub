
import noImage from "../assets/no-image-placeholder.webp";


const getCroppedImageUrl = function(url:string){

    if(!url) return noImage;

    return url.replace(/(\/media\/)/,"$1"+"crop/600/400/");
}


export default getCroppedImageUrl;