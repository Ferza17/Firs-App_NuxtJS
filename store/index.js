import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations:{
            setPosts(state, payload) {
                state.loadedPosts = payload;
            },
            addPost(state, payload) {
                state.loadedPosts.push(payload)
            },
            editPost(state, payload) {
                let postIndex = state.loadedPosts.findIndex( 
                    post => post.id === payload.id
                );
                state.loadedPosts[postIndex] = payload;
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios
                    .$get('/posts.json')
                    .then(data => {
                        let postArray = [];
                        for (let key in data) {
                            postArray.push({...data[key], id: key} )
                        }
                        vuexContext.commit('setPosts', postArray)
                    })
                    .catch(err => context.error(err))
            },
            setPosts(vuexContext, payload) {
                vuexContext.commit('setPosts', payload);
            },
            addPost (vuexContext, payload) {
                let createdPost = {...payload, updatedDate: new Date() }
                return this.$axios.$post( '/posts.json', createdPost )
                    .then(data => {
                        vuexContext.commit('addPost', {...createdPost, id: data.name})
                    })
                    .catch(err => console.log(err))
            },
            editPost (vuexContext, payload) {
                return this.$axios.$put( '/posts/' + 
                payload.id + 
                '.json', payload)
                    .then(data => {
                        vuexContext.commit('editPost', payload)
                    })
                    .catch( err => console.log('[err]', err))
            }
        },
        getters:{
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore;