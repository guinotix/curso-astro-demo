export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 3
            }
        })
    })
    const data = await res.json()
    return data.docs
}

export const getLaunchById =async ( {id}: {id: string} ) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    return await res.json()
}