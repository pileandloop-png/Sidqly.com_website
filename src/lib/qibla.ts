export const KAABA_COORDS = {
  lat: 21.4225,
  lng: 39.8262
};

export interface QiblaResult {
  bearing: number;
}

/**
 * Calculates the great-circle bearing from a given location to the Kaaba.
 * Formula:
 * θ = atan2( sin(Δλ) ⋅ cos(φ₂), cos(φ₁) ⋅ sin(φ₂) − sin(φ₁) ⋅ cos(φ₂) ⋅ cos(Δλ) )
 * where φ is latitude, λ is longitude, 1 is start point, 2 is end point (Kaaba)
 */
export const calculateQiblaDirection = (userLat: number, userLng: number): QiblaResult => {
  const toRad = (deg: number) => deg * (Math.PI / 180);
  const toDeg = (rad: number) => rad * (180 / Math.PI);

  const phi1 = toRad(userLat);
  const phi2 = toRad(KAABA_COORDS.lat);
  const deltaLambda = toRad(KAABA_COORDS.lng - userLng);

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);

  const bearingRad = Math.atan2(y, x);
  let bearingDeg = toDeg(bearingRad);

  // Normalize to 0-360
  bearingDeg = (bearingDeg + 360) % 360;

  return { bearing: Math.round(bearingDeg) };
};
