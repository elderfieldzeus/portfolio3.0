export default {
    "src/**/*.{ts,tsx,css}": files => {
        return "eslint --fix " + files.join(" ");
    },
    "src/**/*.{ts,tsx,json,css}": files => {
        return "prettier --write " + files.join(" ");
    }
}