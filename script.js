async function populate() {
    const response = await fetch("data.json")
    const resultSummary = await response.json()

populateResults(resultSummary)
}




function populateResults(obj) {
    const resultSection = document.getElementById("summary")
    const myH2 = document.createElement("h2")
    const section = document.createElement("section")
    

    const results = obj;
    
   
    for (let i = 0; i < results.length; i++) {
       const myResult = document.createElement("div")
       const image = document.createElement("img")
       const myH3 = document.createElement("h3")
       const title = document.createElement("p")
       const score = document.createElement("span")
       

      image.src= results[i].icon
      myH3.textContent = results[i].category
      score.textContent = results[i].score
      console.log(title)

      myResult.appendChild(image)
      myResult.appendChild(myH3)
      title.appendChild(score)

      section.appendChild(myResult)
      section.appendChild(title)
      
     resultSection.appendChild(myH2)
     resultSection.appendChild(section)
    

    }

}
populate();


/* 
 div p span for each element img and h3

access : category 
icon 
score 
*/


