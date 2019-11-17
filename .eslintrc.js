module.exports = {
    extends: "airbnb-base",

    env: {
        browser: true,
        es6: true,
        node: true
    },

    rules: {
        'jsx-quotes': ['off', 'prefer-single'],
        'semi-style': 'off',
        'no-delete-var': 'off'
    }
};
