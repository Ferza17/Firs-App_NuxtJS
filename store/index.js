import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations:{
            setPosts(state, payload) {
                state.loadedPosts = payload;
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout( () => {
                        vuexContext.commit('setPosts',  [
                            { id: 1, title: 'First Post', previewText: 'First Post Preview Text', thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
                            { id: 2, title: 'Second Post', previewText: 'Second Post Preview Text', thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
                        ])
                        resolve(); 
                    }, 1500);
                })
            },
            setPosts(vuexContext, payload) {
                vuexContext.commit('setPosts', payload);
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