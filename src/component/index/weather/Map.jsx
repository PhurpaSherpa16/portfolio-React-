import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import { useMap } from 'react-leaflet'
import { Icon } from "leaflet";

export default function Map({ ...props }) {
    const { lat, lng, placeType, flag, country } = props
    const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    const [position, setPosition] = useState({
        lat: lat,
        lng: lng
    })

    const ClickHandler = () => {
        useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng
                setPosition({ lat, lng })
            }
        })
    }

    const customIcon = new Icon({
        iconUrl : '/location.png',
        iconSize : [20, 20]
    })

    useEffect(() => {
        setPosition({
            lat: lat,
            lng: lng
        })
    }, [lat, lng])

    if (!lat || !lng) return null

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <MapContainer center={[position.lat, position.lng]} zoom={6} style={{ height: '100%', width: '100%' }}>
                <RecentMap lat={position.lat} lng={position.lng} placeType={placeType} />
                <TileLayer url={url} attribution={attribution} />

                <Marker position={[position.lat, position.lng]} icon={customIcon}>
                    <Popup>
                        {country} {flag}
                    </Popup>
                </Marker>

                <ClickHandler />
            </MapContainer>
        </div>
    )
}

const RecentMap = ({ lat, lng, placeType }) => {
    const map = useMap()
    map.flyTo([lat, lng], placeType === 'country' ? 6 : 13, { duration: 1.5 })
    return null
}