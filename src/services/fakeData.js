// fakeData.js

// Function to generate random brands
export const generateRandomBrands = (count) => {
    const brands = [];
    for (let i = 1; i <= count; i++) {
      const brand = {
        id: i,
        brandName: `Marka ${i}`,
        placeName: `yerAdi ${i}`,
        latitude: '40.712776', // Replace with your latitude value
        longitude: '-74.005974', // Replace with your longitude value
        address: `Adres ${i}`,
        image: `https://via.placeholder.com/150?text=Brand${i}`, // Example image URL
        telephone: '1234567890', // Replace with the brand's telephone number
        workingHours: '10:00 - 22:00', // Replace with working hours
      };
      brands.push(brand);
    }
    return brands;
  };
  