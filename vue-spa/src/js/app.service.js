import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService = {
    getPosts(categoryId, success) {
        axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
            .then(response => {
                success(response.data);
            })
    }
}

export default appService