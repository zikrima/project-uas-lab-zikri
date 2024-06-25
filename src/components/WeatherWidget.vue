<template>
    <div class="weather-container">
      <div class="background-image">
        <q-card class="weather-card">
          <q-card-section>
            <div class="text-h6">Cuaca</div>
          </q-card-section>
  
          <q-card-section>
            <q-input
              filled
              v-model="city"
              label="Masukkan Lokasi"
              @keyup.enter="fetchWeather"
            >
              <template v-slot:append>
                <q-btn flat round @click="fetchWeather">
                  Cari
                </q-btn>
              </template>
            </q-input>
          </q-card-section>
  
          <q-card-section v-if="weather">
            <div>Temperatur: <span class="temperature">{{ weather.main.temp }} °C</span></div>
            <div>Kondisi: {{ translateCondition(weather.weather[0].description) }}</div>
          </q-card-section>
          <q-card-section v-else>
            <div>Memuat data...</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        city: '',
        weather: null,
        conditionTranslations: {
          'clear sky': 'langit cerah',
          'few clouds': 'sedikit berawan',
          'scattered clouds': 'awan tersebar',
          'broken clouds': 'awan pecah',
          'shower rain': 'hujan rintik-rintik',
          'rain': 'hujan',
          'thunderstorm': 'badai petir',
          'snow': 'salju',
          'mist': 'kabut'
          // Tambahkan terjemahan lainnya jika diperlukan
        }
      }
    },
    methods: {
      async fetchWeather() {
        const apiKey = '7f70f2a4b32649f25fe63752e7d8c050' // Ganti dengan API key Anda
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`
        try {
          const response = await axios.get(url)
          this.weather = response.data
        } catch (error) {
          console.error(error)
        }
      },
      translateCondition(condition) {
        return this.conditionTranslations[condition.toLowerCase()] || condition
      }
    }
  }
  </script>
  
  <style scoped>
  .weather-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden; /* Prevent scrolling */
  }
  .background-image {
    background-image: url('/images/cloud-image.jpg'); /* Ganti dengan path gambar Anda */
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .weather-card {
    width: 300px;
    text-align: center;
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent background for better readability */
  }
  .temperature {
    color: #FF5722; /* Warna oranye */
  }
  </style>
  