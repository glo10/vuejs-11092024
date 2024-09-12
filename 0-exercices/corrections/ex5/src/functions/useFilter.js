export const filterItems = (items, criteria) => {
    return items.filter(item => {
        return Object.keys(criteria).every((key) => {
            const k = key
            return criteria[k] === undefined || item[k] === criteria[k]
        })
    })
}