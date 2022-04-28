function execute(url) {
    url = url.replace("m.feiszw","feiszw")
    var doc = fetch(url).html()
    
    return Response.success({
        name: doc.select(".info p").get(0).select("a").text(),
        cover: doc.select(".bookimg a img").attr("src"),
        author: doc.select(".info p").get(0).select("span").text(),
        description: doc.select(".intro").text(),
        detail: "",
        host: "https://www.feiszw.com/",
    });
}