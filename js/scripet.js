var sliderimage = document.getElementById('sliderimage');

        var image = new Array(
            "image/image1.jpg",
            "image/image2.jpg",
            "image/image3.jpg"
        );

        var len = image.length;

        var i = 0;

        function slider(){
            if(i > len-1){
                i=0;
            }
            sliderimage.src = image[i];
            i++

            setTimeout("slider()" ,3000);
        }