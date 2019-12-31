<template>
    <section class="post-list">
            <PostPreview
            :id="1"
            :title="'Post Title'"
            :previewText="'Preview text'"
            :previewImage="'https://naturetechweb.files.wordpress.com/2016/11/nature-tech-0111.jpg?w=640&h=300&crop=1'" />

            <PostPreview
            :id="2"
            :title="'Post Title 2'"
            :previewText="'Preview text 2'"
            :previewImage="'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'" />
            
            <PostPreview
            :id="3"
            :title="'Post Title 3'"
            :previewText="'Preview text 3'"
            :previewImage="'https://naturetechweb.files.wordpress.com/2016/11/nature-tech-0111.jpg?w=640&h=300&crop=1'" />
            
        </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue';

export default {
    components : {
        PostPreview
    }
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