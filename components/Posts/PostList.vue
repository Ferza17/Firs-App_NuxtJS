<template>
    <section class="post-list">
            <!-- <PostPreview
            :is-admin="isAdmin"
            :id="1"
            :title="'Post Title'"
            :previewText="'Preview text'"
            :previewImage="'https://naturetechweb.files.wordpress.com/2016/11/nature-tech-0111.jpg?w=640&h=300&crop=1'" /> -->

            <PostPreview
            v-for="post in posts" 
            :key="post.id"
            :is-admin="isAdmin"
            :id="post.id"
            :title="post.title"
            :previewText="post.previewText"
            :previewImage="post.thumbnail" />
            
            <!-- <PostPreview
            :is-admin="isAdmin"
            :id="3"
            :title="'Post Title 3'"
            :previewText="'Preview text 3'"
            :previewImage="'https://naturetechweb.files.wordpress.com/2016/11/nature-tech-0111.jpg?w=640&h=300&crop=1'" /> -->
            
        </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue';

export default {
    components : {
        PostPreview
    },
    props: {
        isAdmin: {
            type: Boolean,
            default: false
        },
        posts: {
            type: Array,
            required: true
        }
    },
}
</script>
<style scoped>
    
    .post-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>