import https from 'https'

const endpoint = "https://hookb.in/Xkl6kG6GKMHDkmwD30pD"

const request = https.request(endpoint, {   
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName: "Robi",
    lastName : "Dream"
})

request.write(body)
request.end()