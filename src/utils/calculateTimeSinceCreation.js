const todayDate = new Date().getTime()

export const calculateTimeSinceCreation = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString).getTime()
    const hoursDifference = ((todayDate - date) / 1000) / 3600

    if (hoursDifference < 24) {
        if (hoursDifference <= 1) return '1h ago'
        return `${hoursDifference.toFixed(0)}h ago`
    }
    if (hoursDifference < 168)
        return `${(hoursDifference / 24).toFixed(0)}d ago`
    if (hoursDifference < 744)
        return `${(hoursDifference / 168).toFixed(0)}w ago`
    return `${(hoursDifference / 744).toFixed(0)}mo ago`
}