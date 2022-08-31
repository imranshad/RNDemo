import { Dimensions } from "react-native"
import { Images } from "../assets"

const WidthPercent = (percent:number) => {
    const width= Dimensions.get("window").width
    return width*percent/width
}
const HeightPercent = (percent:number) => {
    const height= Dimensions.get("window").height
    return height*percent/height
}

const demoData = [
    {
        id:1,
        name:"Selima Khan",
        created:"Nov 22, 2021",
        image:Images.bike,
        title: "I want a new BMW iX",
        description: "A dream is a succession of images, emotions, and sentaions that usually some lorum epsum more text"
    }
]
export {
    WidthPercent,HeightPercent
}
