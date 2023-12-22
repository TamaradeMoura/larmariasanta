import { GoogleMap, useJsApiLoader,  MarkerF } from '@react-google-maps/api';
import { Mapa } from './styles';


function Maps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBTPkTheruN4-cL-kw4nHybSPSPWk0A2-g"
      });
    
      const position = {
        lat: -30.012333948831245, 
        lng: -51.08519783236835
      }
    
      return (
        <section id='maps'>
        <Mapa>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={position}
              zoom={15}
            >
              <MarkerF position={position} options={{
                label: {
                  text: "Lar Maria Santa",
                  className: "map-marker"
                }
              }} />
            </GoogleMap>
          ) : (<></>
          )}
        </Mapa>
      </section>
    )
}

export default Maps