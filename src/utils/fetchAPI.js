

// dataCallback should be a function which takes 1 parameter for the data returned
export default async function fetchData(url,dataCallback,abortSignal)
{
    const timeStamp = Date.now();
    try{
        const response = await fetch(url,{abortSignal});
        //console.log("Response", response);
        const data = await response.json();
        //console.log("Data", data);
        dataCallback(data,timeStamp);
    }
    catch(error)
    {
        console.log("Error", error.message);
    }
}



//Takes array of urls and returns array of results when all fetch operation are successful
// dataCallback should be a function which takes 1 parameter for array of data returned, 
export async function fetchDataMulti(urls,dataCallback,abortSignal)
{
    const timeStamp = Date.now();

    //console.log("URLS:",urls);
    //build fetch with .json for each url
    let requests = [];
    urls.forEach(url => {
        const request = fetch(url,abortSignal).then(response => {
            //console.log("Response from MultiFetch:",response)
            return response.json()});
        requests.push(request);
    });

    try{
        const data = await Promise.all(requests)
        dataCallback(data,timeStamp);
    }
    catch(error)
    {
        console.log("Error", error.message);
    }
}

    /*export async function fetchDataTimeStamped(url,dataCallback,timeStamp,abortSignal)
{
    try{
        const response = await fetch(url,{abortSignal});
        //console.log("Response", response);
        const data = await response.json();
        //console.log("Data", data);
        dataCallback(data,timeStamp);
    }
    catch(error)
    {
        console.log("Error", error.message);
    }
}*/




