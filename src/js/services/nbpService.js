import {
    dayInMiliseconds
} from "../consts/date.const";

class NbpService {
    constructor(url) {
        this.url = url;
        this.cache = {};
    }

    async getCurrencyRatesForDate(date) {
        if (!date) return;

        if (this.cache[date]) {
            return this.cache[date];
        }

        let response;
        await fetch(`${this.url}${date}`, {
            headers: {
                "Accept": "application/json"
            }
        }).then(async (data) => {
            if (data.ok) {
                response = await data.json();
                return;
            }

            console.warn(data.status, data?.statusText);
        });

        if (response?.length) {
            this.cache[date] = response[0];
        }
        return this.cache[date];
    }

    async getCurrencyRates(date) {
        let response;
        let dayNumber = new Date(date).getDay();

        for (let count = 0; count <= 5; count++) {

            // Saturday is day === 6 so go back one day
            // to Friday - last day when currency rates were published
            if (dayNumber === 6) {
                dayNumber = undefined;
                continue;
            }

            // Sunday is day === 0 so go back two days
            // to Friday - last day when currency rates were published
            if (dayNumber === 0) {
                dayNumber = undefined;
                count++;
                continue;
            }

            response = await this.getCurrencyRatesForDate(this.changeDate(date, count));

            if (response) break;
        }

        return response;
    }

    changeDate(date, count) {
        if (!count) return date;

        return new Date(new Date(date).getTime() - (count * dayInMiliseconds)).toISOString().slice(0, 10);
    }
}


export default NbpService;