
export const getData = async (from) =>{
    const url = from
    try {
        const response = await fetch(url)
        if(!response.ok){
            console.log('Error on GetData', response)
            throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error on GetData', error)
        throw error
    }
}