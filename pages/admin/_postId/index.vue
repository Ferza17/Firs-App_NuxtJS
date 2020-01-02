<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm
                :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue';
export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Fery',
                title: 'My Awesome Post',
                content: 'Super Amazing',
                thumbnailLink: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 2px auto;
}

@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>