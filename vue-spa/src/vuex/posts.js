import appService from '../js/app.service'

const state = {
    posts: [],
    categoryId: 0
}

const getters = {
    posts: state => state.posts
}

const actions = {
    updateCategory(context, categoryId) {
        appService.getPosts(categoryId).then(data => {
            context.commit('updateCategory', {
                categoryId, posts: data
            });
        })
    }
}

const mutations = {
    updateCategory(state, category) {
        state.posts = category.posts
        state.categoryId = category.categoryId
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}