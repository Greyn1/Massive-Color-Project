export default {
    up(){

    },
    down(size){
        const sizes = {
            xs: "410px",
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px"
        }
        return `@media (max-width: ${sizes[size]})`;
    }
}