 export function shorten(text, cap) {
    let text_return = text
    text.length > cap ? text_return = text.slice(0, cap) + "..." : ""

    return text_return

}

 export function count(views) {


    if (views < 1000) return views
    if (views < 1000000) return (Math.round(views / 1000) / 10) * 10 + "k "


    if (views >= 1000000) return (Math.round(views / 1000000) / 10) * 10 + "m "

}


export function showDate(video_date) {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    let video_time = video_date.split("-")
    let video_day = video_time[2].split("T")[0]//video_date "2024-04-18T16:00:33"
    let video_month = video_time[1]
    let video_year = video_time[0]


    // console.log(video_time)
    let new_Date = new Date(`${video_month}/${video_day}/${video_year}`)
    let new_Date2 = new Date(`${month}/${day}/${year}`)

    const diffTime = Math.abs(new_Date - new_Date2);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); //difference in days


    if (diffDays > 365) return (Math.floor(diffDays / 365) + ` Year${diffDays / 365 == 1 ? "" : "s"} ago`)
    if (diffDays > 30) return (Math.floor(diffDays / 30) + ` month${diffDays / 30 == 1 ? "" : "s"} ago`)
    if (diffDays > 1) return (Math.floor(diffDays) + ` day${diffDays == 1 ? "" : "s"} ago`)

    }

