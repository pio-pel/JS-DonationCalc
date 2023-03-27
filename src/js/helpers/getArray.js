// Return data array (currency code, currency name, mid rate)
export async function getArray(req) {

    const arrayMain = await req.then(x => {
        const [array] = x;
        return array;

    })
    return arrayMain;

}