

const getCroppedImageUrl = function(url:string){

    return url.replace(/(\/media\/)/,"$1"+"crop/600/400/");
}


export default getCroppedImageUrl;