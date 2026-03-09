import { useState, useEffect, useRef } from "react"
import { useGetData } from "../../../hooks/useGetData"
import { descriptionIcon, kelvinToCelsius } from "../../../utils/weather"
import Map from "./Map"
import '../../../leaflet.css'
import { Search, MapPin, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import Loading from "./Loading"
import Error from "./Error"

export default function WeatherDiv() {
    const apiGeoKey = import.meta.env.VITE_OPENCAGE_API_KEY
    const apiWeatherKey = import.meta.env.VITE_WEATHER_API_KEY

    const [inputValue, setInputValue] = useState('Nepal')
    const [countryName, setCountryName] = useState('Nepal')
    const debounceRef = useRef(null)

    const handleSearch = (e) => {
        const val = e.target.value
        if(val.length === 0){
            setInputValue('Nepal')
            setCountryName('Nepal')
        }
        setInputValue(val)
        clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            if (val.trim()) setCountryName(val.trim())
        }, 1000)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        clearTimeout(debounceRef.current)
        if (inputValue.trim()) setCountryName(inputValue.trim())
    }

    const geoUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(countryName)}&key=${apiGeoKey}`
    const { data: geoData, loading: geoLoading, error: geoError, isFetching: geoFetching } = useGetData(geoUrl)

    const lat = geoData?.results?.[0]?.geometry?.lat || 0
    const lng = geoData?.results?.[0]?.geometry?.lng || 0
    const placeType = geoData?.results?.[0]?.components?._type
    const flag = geoData?.results?.[0]?.annotations?.flag
    const country = geoData?.results?.[0]?.components?.country
    const formattedName = geoData?.results?.[0]?.formatted

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiWeatherKey}`
    const { data: weatherData, loading: weatherLoading, error: weatherError, isFetching: weatherFetching } = useGetData(weatherUrl)

    const temperature = weatherData?.main?.temp ? kelvinToCelsius(weatherData.main.temp) : null
    const rawDescription = weatherData?.weather?.[0]?.description
    const descIcon = rawDescription ? descriptionIcon(rawDescription) : null

    const mapProps = { lat, lng, placeType, flag, country }
    const isLoading = geoLoading || weatherLoading
    const isFetching = geoFetching || weatherFetching
    const hasError = geoError && weatherError


    return (
        <div className="w-full h-full">
            {/* Search Bar */}
            <div>
                <h1 className="bentoH1">Where I’m Based?</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-4 pb-2 relative">
                    <Search size={16} className="absolute left-2 z-10" />
                    <input type="text" value={inputValue} onChange={handleSearch}
                        placeholder="Search city or country..."
                        className="border borderColor text-sm w-full py-1 pl-8 relative rounded-lg bg-(--secondaryBackgroundColor)" />
                    <Button type="submit" variant="outline" className="bg-indigo-200/30 borderColor
                    rounded-lg
                    text-sm">
                        Search
                    </Button>
                </div>
            </form>
            <div className="h-fit flex flex-col gap-6">
                <div className="h-[170px] w-full rounded-lg border borderColor shadow-lg overflow-hidden grid place-items-center">
                    {isFetching && <div>
                        <Loading text="Locating..." />
                    </div>
                    }
                    {!isFetching && lat === 0 && lng === 0 &&
                        <Error text={'Location not found!, Try another.'} />
                    }
                    {!isLoading && !isFetching && !hasError && lat !== 0 && lng !== 0 && <Map {...mapProps} />}
                </div>

                <div className="flex bg-[var(--secondaryBackgroundColor)] p-8 rounded-lg
                flex-row justify-between sapce-y-0 border border-[var(--NavHeroSplit)]
                hover:shadow-lg transition-all">
                    {/* Left: icon + temp */}
                    <div className="flex items-center gap-2">
                        <span className="text-3xl leading-none">
                            {descIcon}
                        </span>
                        <span className="text-2xl font-bold numbers text-(--primaryText) space">
                            {temperature !== null ? `${temperature}°C` : '--'}
                        </span>
                    </div>

                    {/* Right: location + date */}
                    <div className="flex flex-col items-end gap-0.5 min-w-0">
                        <div className="flex items-center gap-1 max-w-[140px]">
                            <MapPin size={11} className="text-(--secondaryText) shrink-0" />
                            <span className="text-xs text-(--primaryText) truncate">
                                {country ?? countryName} {flag}
                            </span>
                        </div>
                        <span className="text-[10px] text-(--secondaryText) uppercase tracking-wide">
                            {format(new Date(), 'EEE, MMM d')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}