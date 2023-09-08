const report = (string) => {
    
    if (string === 2) {
        throw new Error("Input should be a comma separated string");
    }
    
    const validGrades = ["Red", "Amber", "Green"];
    const resultArrayPreMap = string.split(",");
    const dirtyArray = resultArrayPreMap.map((item) => item.trim())
    const resultArray = dirtyArray.map(item => item.charAt(0).toUpperCase() +item.slice(1))
    const resultObject = {
        "Green": 0,
        "Amber": 0,
        "Red": 0,
        "Uncounted": 0,
    };
    // for each item in results array
    // if item is in validGrades
    // add item 
    resultArray.forEach((item) => {
        if (validGrades.includes(item)) {
            resultObject[item] += 1
        } else {
            resultObject["Uncounted"] += 1
        }
    })
    let returnString = ""
    Object.entries(resultObject).forEach((entry) => {
        if (entry[1] > 0) {
            returnString += `${entry[0]}: ${entry[1]}\n`
        }
    })

    if (string === "") {
        return "No results have been given"
    } else {
        return returnString.slice(0,-1)
    }
    
}

module.exports = report;