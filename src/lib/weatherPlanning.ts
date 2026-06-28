export interface WeatherPlanningGuidance {
  temperatureC?: number;
  temperatureF?: number;
  condition?: string;
  advice: string[];
}

/**
 * Mock service wrapper for weather-aware planning.
 * In a real app, this would call a weather API (like OpenWeatherMap).
 * For now, we provide general guidelines based on mock or assumed conditions.
 */
export const getWeatherGuidance = async (city: string): Promise<WeatherPlanningGuidance | null> => {
  // Mocking an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Very basic mock logic just to show functionality.
      const lowerCity = city.toLowerCase();

      let condition = 'Clear';
      let tempC = 25;

      if (lowerCity.includes('london') || lowerCity.includes('rain') || lowerCity.includes('seattle')) {
        condition = 'Rain';
        tempC = 12;
      } else if (lowerCity.includes('dubai') || lowerCity.includes('riyadh') || lowerCity.includes('hot')) {
        condition = 'Hot';
        tempC = 40;
      } else if (lowerCity.includes('chicago') || lowerCity.includes('moscow') || lowerCity.includes('cold')) {
        condition = 'Cold';
        tempC = 0;
      } else if (lowerCity.includes('dust') || lowerCity.includes('wind')) {
        condition = 'Windy/Dusty';
        tempC = 30;
      }

      const tempF = Math.round((tempC * 9/5) + 32);

      const advice: string[] = [];

      if (condition === 'Rain') {
        advice.push('Covered distribution required for ration packs.');
        advice.push('Ensure waterproof packaging for dry goods.');
        advice.push('Plan for potential route delays and coordinate with drivers.');
      } else if (condition === 'Hot' || tempC > 35) {
        advice.push('Crucial: Volunteer hydration and frequent breaks needed.');
        advice.push('Ensure food safety protocols for perishable items (e.g., Qurbani meat, prepared Iftars).');
        advice.push('Shift distributions to early morning or late evening if possible.');
      } else if (condition === 'Cold' || tempC < 10) {
        advice.push('Consider adding warm meals or blankets to the distribution plan.');
        advice.push('Ensure volunteers have adequate winter gear.');
      } else if (condition === 'Windy/Dusty') {
         advice.push('Secure packaging carefully to avoid tears.');
         advice.push('Plan proof capture (photos/videos) carefully as visibility or equipment may be affected.');
      } else {
        advice.push('Standard distribution protocols apply.');
        advice.push('Maintain regular proof capture and dignity-safe updates.');
      }

      resolve({
        temperatureC: tempC,
        temperatureF: tempF,
        condition,
        advice
      });
    }, 500); // 500ms delay to simulate network
  });
};
