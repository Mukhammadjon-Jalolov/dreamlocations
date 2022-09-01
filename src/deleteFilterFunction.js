for (var i = 0; i < texts.length; i++){
	var til = localStorage.getItem("deflang")
	var temptextarr = texts[i].description.split("+")
	var tempcountrr = texts[i].country.split("+")
	var translatecountry = {gb: tempcountrr[0], de: tempcountrr[1], fr: tempcountrr[2], uz: tempcountrr[3]}
	var translatedescription = {gb: temptextarr[0], de: temptextarr[1], fr: temptextarr[2], uz: temptextarr[3]}
	texts[i].description = translatedescription
	texts[i].country = translatecountry
}

for (var i = 0; i < resultsimg.length; i++){
    var temptemparr = []
    var temptemp = {}
    for (var j = 0; j < resultsimg[i].pictures.length; j++){
        //temptemp = {src: this.state.source + resultsimg[i].pictures[j].img, thumbnail: this.state.source + resultsimg[i].pictures[j].img, thumbnailWidth: 320, thumbnailHeight: 174}
        temptemp = {src: this.state.source + resultsimg[i].pictures[j].img, thumbnail: this.state.source + resultsimg[i].pictures[j].img, thumbnailWidth: 320, thumbnailHeight: 174}
		temptemparr.push(temptemp)
    }
    texts[i].images = temptemparr;
	//texts[i].images = temptemparr
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //texts[i].images = resultsimg[i].pictures    // pictures here is an array of images of one places
}