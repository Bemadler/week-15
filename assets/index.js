const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
    const temperatures = [];

    let maxTemperature = -Infinity;
    let minTemperature = Infinity;
//тут код проверяет на введеные значения в рамках Цельсия, превращает стринг и нумбер
    function isValidTemperature(input) {
        const temperatureValue = Number(input);
        return !isNaN(temperatureValue) && temperatureValue >= -273.15 && temperatureValue <= 100;
    }

    for (let i = 0; i < cities.length; i++) {
        let temperature = '0'; 

        do {
            temperature = prompt(`Введите температуру для города ${cities[i]}`, temperature);
        } while (!isValidTemperature(temperature) && temperature !== null); //тут код удостоверяется, что введенные данные не пустые, и прошли валидность значений по Цельсию

        if (temperature !== null) {
            const element = document.getElementById(cities[i]);
            const temperatureValue = Number(temperature);
            temperatures.push(temperatureValue);

            element.textContent = `Температура в ${cities[i]}: ${temperatureValue}°C`;

            maxTemperature = Math.max(maxTemperature, temperatureValue);
            minTemperature = Math.min(minTemperature, temperatureValue);
        }
    }

    document.getElementById('maxTemperature').textContent += `${maxTemperature}°C`;
    document.getElementById('minTemperature').textContent += `${minTemperature}°C`;