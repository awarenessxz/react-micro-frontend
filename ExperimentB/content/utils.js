module.exports = {
    /**
     * Returns a random number between min (inclusive) and max (inclusive)
     */
    between: function (min, max) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }
}
