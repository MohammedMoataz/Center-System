/**
 * 
 * @param {Object} email The email to be uniqe
 * 
 * @returns {String} a unique and new string from the passed email
 */
export const generateUniqueUsername = (email) => {
    const key = new Date(Date.now())
        .toJSON()
        .replace('T', ' ')
        .replace('Z', '')
        .split(' ')

    let count = 0
    key[0].split('-').forEach(d => count += parseInt(d))
    key[1].split(':').forEach(d => count += parseFloat(d))

    count %= 100
    let remind = count.toLocaleString().split('.')[1]
    return `${email.split('@')[0]}${count.toFixed() + remind}`
}

/**
* 
* @param {Date} data The date to generate the datetime from
* 
* @returns {String} a timestamp representing the datetime
*/
export const getCurrentTimestamp = () =>
    new Date(Date.now())
        .toJSON()
        .replace('T', ' ')
        .replace('Z', '')

/**
 * 
 * @param {String} phone_number The phone number need to be formatted
 * @returns a new formatted string suitable for database
 */
export const getPhoneNumber = (phone_number) =>
    phone_number.replaceAll('-', '')
