import { useEffect, useState } from "react"

const ImgExpo = ({ categories = [] }) => {
    const [urlList, setUrlList] = useState([])

    const getGifs = async (categories) => {
        if (categories.length === 0) {
            setUrlList([])
            return
        }

        const responsesList = await Promise.all(categories.map(async (category) => {
            const response = await fetch(
                `https://pixabay.com/api/?key=7607351-9a8112dabbcde872d30111f93&q=${category}&limit=10`
            )
            const apiResponse = await response.json()
            return apiResponse.hits
        }))

        let gifsList = []

        responsesList.forEach((hits) => {
            hits.forEach((item) => {
                gifsList = [...gifsList, item.webformatURL.split('?')[0]]
            })
        })

        setUrlList([...gifsList])
    }

    useEffect(() => {
        //Efecto
        getGifs(categories)  
        },
        [categories]
    )
   

    return (
        <>
            <div>
                {
                    urlList.map((url) => {
                        return (
                            <img key={url} src={url} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default ImgExpo