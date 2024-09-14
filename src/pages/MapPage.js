// import mapimg from "../mockup/map.png"
import {
    APIProvider,
    Map,
    AdvancedMarker,
    MapCameraChangedEvent,
    Pin    
} from '@vis.gl/react-google-maps';


const locations = [
  {key: 'La Civetta Sul Comò', location: { lat: 41.8806809, lng: 12.5059198  }},
  {key: 'Muretto Talenti', location: { lat: 41.9452004, lng: 12.5424442 }},
  {key: 'Villetta Social Lab', location: { lat: 41.8619668, lng: 12.4850507 }},
  {key: 'Blanco Beach Club', location: { lat: 41.8373616, lng: 12.1991434 }},
  {key: 'Amare Holy Beach Club', location: { lat: 41.8975396, lng: 12.1574501 }},
  {key: 'UltraBlu', location: { lat: 41.9048189, lng: 12.4582044 }},
  {key: 'Covo del Nerd', location: { lat:41.8523014, lng: 11.2608147 }},
];

const PoiMarkers = (props) => {
    return (
      <>
        {props.pois.map( (poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
          <Pin />
          </AdvancedMarker>
        ))}
      </>
    );
  };

const MapPage = () => {
   
    
    return (
        <div className="map">
            <APIProvider apiKey={'AIzaSyATFAK6083jP-NGE-UwTiPktonIwJcrQzs'} onLoad={() => console.log('Maps API has loaded.')}>
                {/* <img src={mapimg} /> */}
                <Map
                    defaultZoom={12}
                    defaultCenter={ { lat: 41.896754, lng: 12.482206 } }
                    mapId='1lrMyeVCBWjbf-9tZKOBJnPhQNSt74YU'
                    onCameraChanged={ (ev) =>
                        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                    }>
                          <PoiMarkers pois={locations} />
                </Map>
            </APIProvider>
        </div>
    )  };
  
  export default MapPage;
  