/**
 * 
 * @param {Object} data The data to be uniqe
 * 
 * @returns {String} a unique and new string from the passed data
 */
export const generateUniqueData = (data) =>
    `${data}+${Date.now()}`

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
