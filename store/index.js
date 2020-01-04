import Vuex from 'vuex';
import axios from 'axios';

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
                return axios.get('https://nuxt-blog-291a4.firebaseio.com/posts.json')
                    .then(res => {
                        let postArray = [];
                        for (let key in res.data) {
                            postArray.push({...res.data[key], id: key} )
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
                return axios.post('https://nuxt-blog-291a4.firebaseio.com/posts.json', createdPost )
                    .then(res => {
                        vuexContext.commit('addPost', {...createdPost, id: res.data.name})
                    })
                    .catch(err => console.log(err))
            },
            editPost (vuexContext, payload) {
                axios.put('https://nuxt-blog-291a4.firebaseio.com/posts/' + 
                payload.id + 
                '.json', payload)
                    .then(res => {
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