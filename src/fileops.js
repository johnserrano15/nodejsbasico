module.exports = {
    /**
     * @param {number[]} list
     */
    incrementValues: function(list) {
        const mapIncrement = val => Number(val) + 1;
        return list.map(mapIncrement);
    },
    /**
     * @param {string[]} list
     */
    callNames: function(list) {
        const mapCall = name => `Hola ${name}! Aqui esta tu nombre.`.replace('\r', '');
        return list.map(mapCall);
    }
}