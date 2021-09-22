function execute(url) {
    var doc = Http.get(url).html()
    if(doc){
        var el = doc.select("#main-content > div")
        return Response.success({
            name: el.get(0).select(".wrap-detail-story .wrap-content-info h1").text(),
            cover: el.get(0).select(".wrap-detail-story .wrap-content-image img").attr("src"),
            host: "https://komeloli.net",
            author: "Athor: " + el.get(0).select(".list-info .info-row span").get(0).text(),
            description: "",
            detail: "Athor: " + el.get(0).select(".list-info .info-row > span").get(0).text() + "<br>"
            + "Tình trạng: " + el.get(0).select(".list-info .info-row  span").get(2).text() + "<br>"
            + "Lượt xem: " + el.get(0).select(".list-info .info-row  > span").get(2).text()
            
        });
    
    }

}