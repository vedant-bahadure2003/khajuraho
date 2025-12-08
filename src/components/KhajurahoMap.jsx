import { useEffect, useState, useMemo, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Khajuraho tourist places data with coordinates [lat, lng]
const khajurahoPlaces = [
  {
    id: 1,
    name: "Western Group of Temples",
    category: "temple",
    description:
      "UNESCO World Heritage Site - Main temple complex with Kandariya Mahadeva Temple",
    coordinates: [24.8518, 79.9193],
    icon: "🛕",
    color: "#FF6B35",
  },
  {
    id: 2,
    name: "Eastern Group of Temples",
    category: "temple",
    description:
      "Jain temples including Parsvanath, Adinath, and Shantinath temples",
    coordinates: [24.851, 79.935],
    icon: "🛕",
    color: "#FF6B35",
  },
  {
    id: 3,
    name: "Southern Group of Temples",
    category: "temple",
    description:
      "Duladeo Temple and Chaturbhuj Temple known for fine sculptures",
    coordinates: [24.842, 79.928],
    icon: "🛕",
    color: "#FF6B35",
  },
  {
    id: 4,
    name: "Raneh Falls & Ken Gharial Sanctuary",
    category: "nature",
    description:
      "Stunning canyon with crystalline rock formations and wildlife sanctuary",
    coordinates: [24.9167, 79.9833],
    icon: "🌊",
    color: "#00B4D8",
  },
  {
    id: 5,
    name: "Panna National Park",
    category: "wildlife",
    description:
      "Tiger reserve with diverse wildlife, waterfalls, and scenic beauty",
    coordinates: [24.72, 80.05],
    icon: "🐅",
    color: "#2D6A4F",
  },
  {
    id: 6,
    name: "Archaeological Museum",
    category: "museum",
    description: "Houses rare sculptures and artifacts from Khajuraho temples",
    coordinates: [24.8485, 79.922],
    icon: "🏛️",
    color: "#7B2CBF",
  },
  {
    id: 7,
    name: "Khajuraho Dance Festival Venue",
    category: "venue",
    description: "Open-air auditorium for the annual classical dance festival",
    coordinates: [24.852, 79.9195],
    icon: "💃",
    color: "#E63946",
  },
  {
    id: 8,
    name: "Beni Sagar Dam",
    category: "nature",
    description: "Scenic reservoir perfect for boating and picnics",
    coordinates: [24.87, 79.96],
    icon: "🚣",
    color: "#00B4D8",
  },
  {
    id: 9,
    name: "Ajaigarh Fort",
    category: "heritage",
    description:
      "Ancient hilltop fort with panoramic views and historical ruins",
    coordinates: [24.9, 80.2583],
    icon: "🏰",
    color: "#BC6C25",
  },
  {
    id: 10,
    name: "Khajuraho Airport",
    category: "transport",
    description: "Civil enclave airport with flights to major cities",
    coordinates: [24.8172, 79.9181],
    icon: "✈️",
    color: "#495057",
  },
  {
    id: 11,
    name: "Light & Sound Show",
    category: "entertainment",
    description: "Evening multimedia show narrating the history of Khajuraho",
    coordinates: [24.8515, 79.919],
    icon: "🎭",
    color: "#FFD60A",
  },
  {
    id: 12,
    name: "Tribal & Folk Art Museum",
    category: "museum",
    description: "Showcases traditional arts and crafts of Bundelkhand region",
    coordinates: [24.85, 79.925],
    icon: "🎨",
    color: "#7B2CBF",
  },
  {
    id: 13,
    name: "Radisson Jass Hotel",
    category: "resort",
    description: "Luxury resort with spa, pool, and temple views",
    coordinates: [24.846, 79.924],
    icon: "🏨",
    color: "#0077B6",
  },
  {
    id: 14,
    name: "Lalit Temple View",
    category: "resort",
    description: "Premium heritage resort near temple complex",
    coordinates: [24.847, 79.915],
    icon: "🏨",
    color: "#0077B6",
  },
  {
    id: 15,
    name: "Local Handicraft Market",
    category: "market",
    description: "Traditional handicrafts, souvenirs, and local artwork",
    coordinates: [24.8495, 79.921],
    icon: "🛍️",
    color: "#F72585",
  },
];

// Category filters with colors
const categories = [
  { id: "all", name: "All Places", color: "#6366F1" },
  { id: "temple", name: "Temples", color: "#FF6B35" },
  { id: "nature", name: "Nature", color: "#00B4D8" },
  { id: "wildlife", name: "Wildlife", color: "#2D6A4F" },
  { id: "museum", name: "Museums", color: "#7B2CBF" },
  { id: "resort", name: "Hotels", color: "#0077B6" },
  { id: "heritage", name: "Heritage", color: "#BC6C25" },
  { id: "entertainment", name: "Entertainment", color: "#FFD60A" },
];

// Map style options for different views (with better zoom support)
const mapStyles = {
  satellite: {
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    attribution: "Imagery © Google",
    name: "🛰️ Satellite",
    maxZoom: 21,
  },
  hybrid: {
    url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
    attribution: "Imagery © Google",
    name: "🗺️ Hybrid",
    maxZoom: 21,
  },
  terrain: {
    url: "https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    attribution: "Imagery © Google",
    name: "⛰️ Terrain",
    maxZoom: 21,
  },
  streets: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    name: "🛣️ Streets",
    maxZoom: 19,
  },
  dark: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
    name: "🌙 Dark",
    maxZoom: 20,
  },
};

// Custom 3D-style marker icon creator
const createCustomIcon = (icon, color, isSelected = false) => {
  return L.divIcon({
    className: "custom-leaflet-marker",
    html: `
      <div class="marker-3d-wrapper ${isSelected ? "selected" : ""}">
        <div class="marker-shadow"></div>
        <div class="marker-3d-base" style="background: linear-gradient(135deg, ${color} 0%, ${color}dd 100%);">
          <div class="marker-3d-top" style="background: ${color};">
            <span class="marker-3d-icon">${icon}</span>
          </div>
          <div class="marker-3d-front" style="background: linear-gradient(180deg, ${color}ee 0%, ${color}99 100%);"></div>
          <div class="marker-3d-side" style="background: ${color}88;"></div>
        </div>
        <div class="marker-3d-pulse" style="background: ${color};"></div>
        <div class="marker-3d-ring" style="border-color: ${color};"></div>
      </div>
    `,
    iconSize: [60, 75],
    iconAnchor: [30, 70],
    popupAnchor: [0, -65],
  });
};

// Map controller component for flying to locations
const MapController = ({ center, zoom, shouldFly }) => {
  const map = useMap();

  useEffect(() => {
    if (shouldFly && center) {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [center, zoom, shouldFly, map]);

  return null;
};

// Reset view button component
const ResetViewButton = ({ isDark, onReset }) => {
  return (
    <button
      onClick={onReset}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-md ${
        isDark
          ? "bg-black/50 text-white hover:bg-black/70"
          : "bg-white/80 text-gray-700 hover:bg-white shadow-md"
      }`}
    >
      Reset View
    </button>
  );
};

// Street View Modal Component - Opens Google Maps directly for Street View
const StreetViewModal = ({ place, onClose, isDark }) => {
  if (!place) return null;

  const [lat, lng] = place.coordinates;
  
  // Google Maps location link
  const googleMapsLocationUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Header */}
        <div
          className={`absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between ${
            isDark
              ? "bg-gradient-to-b from-black/80 to-transparent"
              : "bg-gradient-to-b from-white/90 to-transparent"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{place.icon}</span>
            <div>
              <h3
                className={`font-bold ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                {place.name}
              </h3>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Location View
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-all ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-black/10 hover:bg-black/20 text-gray-800"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Google Maps Embed showing location */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zJHtsYXR9LCR7bG5nfQ!5e1!3m2!1sen!2sin!4v1733644800000`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Location - ${place.name}`}
        />

        {/* Info overlay */}
        <div className={`absolute top-20 left-4 right-4 p-4 rounded-xl backdrop-blur-md ${
          isDark ? "bg-black/60 text-white" : "bg-white/80 text-gray-800"
        }`}>
          <p className="text-sm">
            <strong>📍 {place.name}</strong>
          </p>
          <p className={`text-xs mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {place.description}
          </p>
          <p className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Coordinates: {lat.toFixed(4)}, {lng.toFixed(4)}
          </p>
        </div>

        {/* Action buttons */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
          <a
            href={googleMapsLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-center font-medium transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Open in Google Maps
          </a>
          <div className="flex gap-2">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-xl text-center font-medium transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
              </svg>
              Get Directions
            </a>
            <a
              href={`https://www.google.com/maps/@${lat},${lng},3a,75y,0h,90t/data=!3m7!1e1!3m5!1s!2e0!6s!7i16384!8i8192?entry=ttu`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-center font-medium transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              Street View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const KhajurahoMap = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [flyToLocation, setFlyToLocation] = useState(null);
  const [flyZoom, setFlyZoom] = useState(15);
  const [shouldFly, setShouldFly] = useState(false);
  const [mapStyle, setMapStyle] = useState("satellite");
  const [streetViewPlace, setStreetViewPlace] = useState(null);
  const mapRef = useRef(null);

  // Default center - Khajuraho
  const defaultCenter = [24.8518, 79.9193];
  const defaultZoom = 15;

  // Filter places based on category
  const filteredPlaces = useMemo(() => {
    return selectedCategory === "all"
      ? khajurahoPlaces
      : khajurahoPlaces.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Handle marker click
  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
    setFlyToLocation(place.coordinates);
    setFlyZoom(16);
    setShouldFly(true);
    setTimeout(() => setShouldFly(false), 100);
  };

  // Reset view
  const handleResetView = () => {
    setSelectedPlace(null);
    setFlyToLocation(defaultCenter);
    setFlyZoom(defaultZoom);
    setShouldFly(true);
    setTimeout(() => setShouldFly(false), 100);
  };

  // Get current tile layer based on style or theme
  const currentStyle =
    isDark && mapStyle !== "satellite" && mapStyle !== "terrain"
      ? mapStyles.dark
      : mapStyles[mapStyle];

  // Cycle through map styles
  const cycleMapStyle = () => {
    const styles = Object.keys(mapStyles);
    const currentIndex = styles.indexOf(mapStyle);
    const nextIndex = (currentIndex + 1) % styles.length;
    setMapStyle(styles[nextIndex]);
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {/* Leaflet Map */}
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        ref={mapRef}
        className="w-full h-full z-0"
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          key={mapStyle + isDark}
          url={currentStyle.url}
          attribution={currentStyle.attribution}
          maxZoom={currentStyle.maxZoom || 21}
          maxNativeZoom={currentStyle.maxZoom || 21}
        />

        <ZoomControl position="topright" />

        <MapController
          center={flyToLocation || defaultCenter}
          zoom={flyZoom}
          shouldFly={shouldFly}
        />

        {/* Markers */}
        {filteredPlaces.map((place) => (
          <Marker
            key={place.id}
            position={place.coordinates}
            icon={createCustomIcon(
              place.icon,
              place.color,
              selectedPlace?.id === place.id
            )}
            eventHandlers={{
              click: () => handleMarkerClick(place),
            }}
          >
            <Popup className={isDark ? "dark-popup" : "light-popup"}>
              <div
                className={`p-3 min-w-[220px] ${
                  isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
                }`}
              >
                <h3 className="font-bold text-base flex items-center gap-2 mb-2">
                  <span className="text-xl">{place.icon}</span>
                  {place.name}
                </h3>
                <p
                  className={`text-sm mb-3 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {place.description}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase"
                    style={{
                      backgroundColor: `${place.color}22`,
                      color: place.color,
                    }}
                  >
                    {place.category}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setStreetViewPlace(place);
                  }}
                  className="w-full mt-2 py-2 px-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  View Street View
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Category Filter */}
      <div
        className={`absolute top-4 left-4 z-[1000] p-2 rounded-xl backdrop-blur-md ${
          isDark ? "bg-black/50" : "bg-white/90 shadow-lg"
        }`}
      >
        <div className="flex flex-wrap gap-1 max-w-[300px]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? "text-white shadow-lg"
                  : isDark
                  ? "text-gray-300 hover:bg-white/10"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              style={{
                backgroundColor:
                  selectedCategory === cat.id ? cat.color : "transparent",
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 left-4 z-[1000] flex gap-2">
        <ResetViewButton isDark={isDark} onReset={handleResetView} />
        <button
          onClick={cycleMapStyle}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-md ${
            isDark
              ? "bg-black/50 text-white hover:bg-black/70"
              : "bg-white/80 text-gray-700 hover:bg-white shadow-md"
          }`}
        >
          {mapStyles[mapStyle].name}
        </button>
      </div>

      {/* Selected Place Info Card */}
      {selectedPlace && (
        <div
          className={`absolute bottom-4 right-4 z-[1000] p-4 rounded-xl backdrop-blur-md max-w-[280px] ${
            isDark
              ? "bg-black/70 text-white"
              : "bg-white/95 text-gray-800 shadow-xl"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className="text-3xl p-2 rounded-lg flex-shrink-0"
              style={{ backgroundColor: `${selectedPlace.color}22` }}
            >
              {selectedPlace.icon}
            </span>
            <div className="min-w-0">
              <h4 className="font-bold text-sm leading-tight">
                {selectedPlace.name}
              </h4>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {selectedPlace.description}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => setStreetViewPlace(selectedPlace)}
              className="flex-1 py-2 px-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              Street View
            </button>
            <button
              onClick={() => setSelectedPlace(null)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                isDark
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Street View Modal */}
      {streetViewPlace && (
        <StreetViewModal
          place={streetViewPlace}
          onClose={() => setStreetViewPlace(null)}
          isDark={isDark}
        />
      )}

      {/* Legend */}
      <div
        className={`absolute top-4 right-14 z-[1000] p-3 rounded-xl backdrop-blur-md hidden md:block ${
          isDark ? "bg-black/50" : "bg-white/90 shadow-lg"
        }`}
      >
        <p
          className={`text-xs font-semibold mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          📍 {filteredPlaces.length} Places
        </p>
        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Click markers for details
        </p>
      </div>

      {/* CSS for custom 3D markers and popups */}
      <style>{`
        .custom-leaflet-marker {
          background: transparent !important;
          border: none !important;
        }

        .marker-3d-wrapper {
          position: relative;
          width: 60px;
          height: 75px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .marker-3d-wrapper:hover {
          transform: translateY(-5px) scale(1.1);
        }

        .marker-3d-wrapper.selected {
          transform: translateY(-8px) scale(1.15);
        }

        .marker-shadow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 12px;
          background: radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%);
          border-radius: 50%;
        }

        .marker-3d-base {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50% 50% 50% 0;
          transform: translateX(-50%) rotate(-45deg);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.4),
            0 4px 10px rgba(0, 0, 0, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
          border: 3px solid rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .marker-3d-wrapper:hover .marker-3d-base {
          box-shadow: 
            0 12px 35px rgba(0, 0, 0, 0.5),
            0 6px 15px rgba(0, 0, 0, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.4);
        }

        .marker-3d-top {
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          bottom: 3px;
          border-radius: 50% 50% 50% 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(255,255,255,0.2) 0%, transparent 50%);
        }

        .marker-3d-icon {
          transform: rotate(45deg);
          font-size: 22px;
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
        }

        .marker-3d-pulse {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%) rotate(-45deg);
          width: 48px;
          height: 48px;
          border-radius: 50% 50% 50% 0;
          opacity: 0.4;
          animation: pulse-3d 2s infinite;
          z-index: -1;
        }

        .marker-3d-ring {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 16px;
          border: 2px solid;
          border-radius: 50%;
          opacity: 0.5;
          animation: ring-expand 2s infinite;
        }

        @keyframes pulse-3d {
          0% {
            transform: translateX(-50%) rotate(-45deg) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateX(-50%) rotate(-45deg) scale(1.3);
            opacity: 0;
          }
          100% {
            transform: translateX(-50%) rotate(-45deg) scale(1);
            opacity: 0;
          }
        }

        @keyframes ring-expand {
          0% {
            transform: translateX(-50%) scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: translateX(-50%) scale(1.5);
            opacity: 0;
          }
        }

        /* Popup Styles */
        .leaflet-popup-content-wrapper {
          padding: 0 !important;
          border-radius: 12px !important;
          overflow: hidden;
        }

        .leaflet-popup-content {
          margin: 0 !important;
          width: auto !important;
        }

        .dark-popup .leaflet-popup-content-wrapper {
          background: #1a1a2e !important;
        }

        .light-popup .leaflet-popup-content-wrapper {
          background: #ffffff !important;
        }

        .leaflet-popup-close-button {
          color: inherit !important;
          font-size: 20px !important;
          padding: 8px !important;
          top: 4px !important;
          right: 4px !important;
        }

        .dark-popup .leaflet-popup-close-button {
          color: #fff !important;
        }

        .leaflet-popup-tip-container {
          display: none !important;
        }

        /* Zoom Controls */
        .leaflet-control-zoom {
          border: none !important;
          border-radius: 12px !important;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15) !important;
        }

        .leaflet-control-zoom a {
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
          font-size: 18px !important;
          color: #333 !important;
          background: white !important;
        }

        .leaflet-control-zoom a:hover {
          background: #f0f0f0 !important;
        }

        /* Attribution */
        .leaflet-control-attribution {
          background: rgba(255, 255, 255, 0.8) !important;
          padding: 2px 8px !important;
          border-radius: 8px !important;
          font-size: 10px !important;
          margin: 8px !important;
        }

        /* Scale Control */
        .leaflet-control-scale-line {
          border-radius: 4px !important;
          padding: 2px 8px !important;
          font-size: 10px !important;
        }
      `}</style>
    </div>
  );
};

export default KhajurahoMap;
