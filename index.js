
/**
* Open any instagram link in browser -ex- https://www.instagram.com/reel/CPuT7-UjVSu/
*
* Scroll down comments as much as you can because only visible comments will get scrapped
*
**/
function scrapeInstagramVisibleComments() {
  let commentsWrapper = document.querySelectorAll(".Mr508")
  let commentsData = []
  for (var i = 0; i < commentsWrapper.length; i++) {
    let userUrl = commentsWrapper[i].querySelectorAll("div.C4VMK>h3>div>span>a")[0].textContent.trim()
    let userName = commentsWrapper[i].querySelectorAll("div.C4VMK>h3>div>span>a")[0].getAttribute("href")
    let comment = commentsWrapper[i].querySelectorAll("div.C4VMK>span")[0].textContent.trim()
    let buttons = commentsWrapper[i].querySelectorAll("div.C4VMK>div>div>button")
    let likes = 0
    for (var j = 0; j < buttons.length; j++) {
      let buttonText = buttons[j].textContent.trim()
      if ( buttonText.indexOf("likes") !== -1 ) {
        likes = buttonText.split(" ")[0]      
      }    
    }

    commentsData.push({
      author: `https://www.instagram.com/${userUrl}`,
      userName,
      comment,
      likes
    })
  }
  return commentsData
}
