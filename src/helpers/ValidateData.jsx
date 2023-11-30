export const ValidateData = ( {data} ) => {
    const invalidReference = []
    const invalidEndBalance = []

    const checkEndBalance = (a, b, c) => {
        const startBalance = Number(a)
        const mutation = Number(b)
        const endBalance = Number(c)
        const sum = Number((startBalance + mutation).toFixed(2))
        return sum === endBalance
    }

    let lastFound = undefined
    data.map((item, i) => {
        for ( let j = i + 1; j <= data.length - (1 + i); j++) {
            if (j === lastFound) continue
            if (item['Reference'] === data[j]['Reference']) {
                invalidReference.push(data[j])
                lastFound = j
            }
        }
       if (!checkEndBalance(item['Start Balance'], item['Mutation'], item['End Balance'])) invalidEndBalance.push(item)
    })

    return (
        <div className={'result'}>
            {invalidReference.length !== 0 ?
            <div className={'result-wrapper'}>
                <h2>Invalid References:</h2>
                {
                    invalidReference.map((item, index) => (
                        <div key={index} className={'result-item'}>
                            <div><strong>Reference:</strong> {item['Reference']}</div>
                            <div><strong>Description:</strong> {item['Description']}</div>
                        </div>
                        )
                    )
                }
            </div>
            :
            ''}
            {invalidEndBalance.length !== 0 ?
            <div className={'result-wrapper'}>
                <h2>Invalid End Balance:</h2>
                {
                    invalidEndBalance.map((item, index) => (
                            <div key={index} className={'result-item'}>
                                <div>Reference: {item['Reference']}</div>
                                <div>Description: {item['Description']}</div>
                            </div>
                        )
                    )
                }
            </div>
            :
            ''}
        </div>

    )
}