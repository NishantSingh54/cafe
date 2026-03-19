import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const CENTER = { lat: 37.7749, lng: -122.4194 }; // San Francisco

export default function GoogleMap() {
  if (!hasValidKey) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-stone-800 p-8 text-center font-sans">
        <div className="max-w-md">
          <h2 className="text-white text-2xl font-serif font-bold mb-4">Google Maps API Key Required</h2>
          <p className="text-stone-400 text-sm mb-6 leading-relaxed">
            To display the interactive map, please add your Google Maps Platform API key as a secret.
          </p>
          <div className="text-left space-y-4 text-xs">
            <p className="text-stone-300"><strong>Step 1:</strong> <a href="https://console.cloud.google.com/google/maps-apis/credentials" target="_blank" rel="noopener" className="text-amber-400 underline">Get an API Key</a></p>
            <p className="text-stone-300"><strong>Step 2:</strong> Add your key as a secret in AI Studio:</p>
            <ul className="list-disc list-inside text-stone-400 space-y-2 pl-2">
              <li>Open <strong>Settings</strong> (⚙️ gear icon, top-right)</li>
              <li>Select <strong>Secrets</strong></li>
              <li>Name: <code>GOOGLE_MAPS_PLATFORM_KEY</code></li>
              <li>Value: <code>Your API Key</code></li>
            </ul>
          </div>
          <p className="text-stone-500 text-[10px] mt-8 uppercase tracking-widest font-bold">The app rebuilds automatically</p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY} version="weekly">
      <Map
        defaultCenter={CENTER}
        defaultZoom={14}
        mapId="DEMO_MAP_ID"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={CENTER}>
          <Pin background="#d97706" glyphColor="#fff" borderColor="#d97706" />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
}
