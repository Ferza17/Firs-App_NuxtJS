<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm
                @submit="onSubmitted"
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
    asyncData(context) {
        return context.app.$axios.$get('/posts/'+ context.params.postId +'.json')
            .then(data => {
                return {
                    loadedPost: {...data, id: context.params.postId}
                }
            })
            .catch(err => context.error(error))
    },
    methods: {
        onSubmitted (editedPost) {
           return this.$store.dispatch('editPost', editedPost)
                .then(() => this.$router.push('/admin'));
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