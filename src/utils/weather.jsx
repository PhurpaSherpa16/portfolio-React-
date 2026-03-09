import { Sun, CloudSun } from "lucide-react"

export const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2)
}

export const descriptionIcon = (description) => {
    switch (description) {
        case 'clear sky':
            return <Sun className="size-6" />
        case 'few clouds':
            return <CloudSun className="size-6" />
        default:
            return <CloudSun className="size-6" />
    }
}