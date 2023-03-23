/* Request to API with date from calendar */

export async function apiGet (donationDate) {
    const apiUrl = `https://api.nbp.pl/api/exchangerates/tables/a/${ donationDate }`;
    const request = await fetch (apiUrl, {
        headers: {"Accept" : "application/json"}  
    });
    
    return request;
   
}
